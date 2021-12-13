const requestEntity = async (id, gameMode) => {
    if(window.cachedQuestionsPromises[id] != undefined) {
        return window.cachedQuestionsPromises[id]
    }

    const res = await fetch(
        `https://swapi.dev/api/${gameMode}/${id}/`
    )
    const json = await res.json()

    if(window.cachedQuestionsPromises[id] == undefined) {
        window.cachedQuestionsPromises[id] = json
    }

    return json
}

const generateId = (_gameMode) => {
    let _max = 50
    let _avoid = []
    let _number = 0
    switch(_gameMode){
        case "people":
            _max = 83
        break
        case "vehicles":
            _max = 73
            _avoid = [1, 2, 3, 5, 9, 10, 11, 12, 13, 15, 17, 21, 22, 23, 27, 28, 29, 31, 32, 39, 40, 41, 43, 47, 48, 49, 52, 58, 59, 61, 63, 64, 65, 66, 68, 74, 75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
        break
        case "starships":
            _max = 73
            _avoid = [1, 4, 6, 7, 8, 14, 16, 18, 19, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 42, 44, 45, 46, 50, 51, 53, 54, 55, 56, 57, 60, 62, 67, 69, 70, 71, 72, 73, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
        default:
            _max = 30
    }
    do {
        _number = Math.ceil(Math.random()*_max)
    } while (_avoid.includes(_number))
    return _number
}

const incorrectAnswerConditions = (_incorrectId, _correctId, _before) => {
    let _beforeMatch = false
    var _before = _before
    for(let e of _before) {
        if(_before.includes(_incorrectId)) _beforeMatch = true
    }
    return [
        _incorrectId == _correctId,
        _incorrectId == 17,
        _beforeMatch
    ]
}

const correctAnswerConditions = (_correctId) => {
    // console.log(window.usedQuestionIds.includes(_correctId), window.usedQuestionIds.length, window.usedQuestionIds.sort((x,y) => (x>y)), _correctId)
    return [
        _correctId == 17,
        window.usedQuestionIds.includes(_correctId)
    ]
}

const cacheAskedQuestion = (_id) => {
    if(!window.usedQuestionIds.includes(_id)) {
        window.usedQuestionIds.push(_id);
    } // cache correctId if not in global array
}

const questions = (mode) => {

    let correctId
    let correctConditions

    do  {
        correctId = generateId(mode)
        correctConditions = correctAnswerConditions(correctId)

    } while(correctConditions.includes(true))
    cacheAskedQuestion(correctId)
    
    let incorrectIds = [0,0,0]
    for(let i = 0; i<3; i++) {
        let incorrectConditions    
        do {
            incorrectIds[i] = generateId(mode)
            incorrectConditions = incorrectAnswerConditions(incorrectIds[i], correctId, incorrectIds.slice(0,i))
        } while (incorrectConditions.includes(true))
    }

    const correctAnswer = requestEntity(correctId, mode)
    const incorrectAnswers = incorrectIds.map((e) => (requestEntity(e, mode)))

    return {
        correct: correctAnswer,
        incorrect: incorrectAnswers
    }
}

export default questions