import Questions from "./Questions.js"
import { leftPicture } from "./images.js"
const questionsTemplate = `
    <div class="questions-question">Question: loading...</div>
    <div class="questions-answers">
        <div class="questions-answer question-answer-block">loading...</div>
        <div class="questions-answer question-answer-block">loading...</div>
        <div class="questions-answer question-answer-block">loading...</div>
        <div class="questions-answer question-answer-block">loading...</div>
    </div>    
`

const QuestionsView = async (parentElement, gameMode, shouldRender) => {

    const updateAnswers = (answers, gameMode) => {

        let gameQuestion = ""
        switch (gameMode) {
            case "people":
                gameQuestion = "Who is this character?"
                break
            case "vehicles":
                gameQuestion = "What is this vehicle?"
                break
            case "starships":
                gameQuestion = "What is this starship?"
                break
            default:
                gameQuestion = "N/A"
        }

        template.firstElementChild.innerHTML = `Question: ${gameQuestion}`

        templateAnswers.forEach((e, key) => {
            e.className = "questions-answer"
            e.removeAttribute("correct")
            e.innerHTML = answers[key].name

            if (key === 0) {
                e.setAttribute("correct", true)
                e.innerHTML += " ✔️"
            }

            e.classList.remove("question-answer-block")
            e.addEventListener('click', handleAnswerClick)
        })
    }

    const handleAnswerClick = (e) => {
        window.currentPoints.askedQuestions += 1
        if (e.target.getAttribute("correct")) {
            e.target.classList.add("question-correct")
            window.currentPoints.points += 1
        } else {
            e.target.classList.add("question-incorrect")
        }
        templateAnswers.forEach(a => {
            a.classList.add("question-answer-block")
            a.removeEventListener('click', handleAnswerClick)
        })
        const switchQuestions = setTimeout((e) => {
            QuestionsView(document.querySelector('.quiz-game-questions'), gameMode)
        }, 1000)
    }

    let template = document.createElement('div')

    template.classList.add("quiz-game-questions")

    if (shouldRender == true) {
        template.setAttribute("data-active-view", "")
    }

    try {
        if (parentElement.hasAttribute("data-not-rendered")) {
            template.innerHTML = questionsTemplate.trim()
        } else {
            template = parentElement
        }
    } catch (e) {
        console.error("Error: Couldn't get the template.")
    }
    console.log(template.lastElementChild)
    let templateAnswers = Array.from(template.lastElementChild.children)

    // Caching

    let answers

    if (window.precachedQuestions.length == 0) {
        answers = Questions(gameMode)
    } else {
        answers = window.precachedQuestions
    }

    window.precachedQuestions = Questions(gameMode)

    // Cahing-end

    window.allAnswers = [...answers.incorrect, answers.correct]

    Promise.all(allAnswers).then(res => {
        updateAnswers(res, gameMode)
        let answers = document.querySelector('.questions-answers');

        window.currentQuestion.id = res[0].url.split("/")[5] * 1
        window.currentQuestion.mode = gameMode

        leftPicture(window.currentQuestion.mode, window.currentQuestion.id)

        for (var i = answers.children.length; i >= 0; i--) {
            answers.appendChild(answers.children[Math.random() * i | 0]);
        }
        templateAnswers.forEach(e => {
            e.classList.remove("question-answer-block")
        })
    })

    parentElement.removeAttribute("data-not-rendered")
    parentElement.parentNode.replaceChild(template, parentElement)

}

export default QuestionsView
