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
    switch(_gameMode){
        case "people":
            _max = 83
        break
        default:
            _max = 30
    }
    return Math.ceil(Math.random()*_max)
}

const incorrectAnswerConditions = (_incorrectId, _correctId, _before) => {
    let _beforeMatch = false
    for(e of _before) {
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

export default questions = (mode) => {

    let correctId
    let correctConditions

    do  {
        correctId = generateId(mode)
        correctConditions = correctAnswerConditions(correctId)

    } while(correctConditions.includes(true))
    cacheAskedQuestion(correctId)
    
    let incorrectIds = [0,0,0]
    for(let i = 0; i<3; i++) {
        let incorrectId
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