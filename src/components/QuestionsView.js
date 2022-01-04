import Questions from "./Questions.js"
import GameButtonsView from "./GameButtonsView"
import Modal from "./Modal"
import { leftPicture } from "./images.js"
import { progressSword } from "../app/wp-lightsaber";
import { countDown } from "../app/wp-countdown";

const questionsTemplate = `
    <div class="questions-question">Question: loading...</div>
    <div class="questions-answers">
        <div class="questions-answer question-answer-block">loading...</div>
        <div class="questions-answer question-answer-block">loading...</div>
        <div class="questions-answer question-answer-block">loading...</div>
        <div class="questions-answer question-answer-block">loading...</div>
    </div>    
`

const QuestionsView = async (gameMode) => {

    GameButtonsView("game")

    const parentElement = document.querySelector('.quiz-game')
    parentElement.innerHTML = ""

    const template = document.createElement('div')
    template.classList.add("quiz-game")
    template.innerHTML = questionsTemplate.trim()
    template.setAttribute("data-quiz-game-started", "")

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
                e.innerHTML += " ✔️" // comment this in prod env; 
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
            QuestionsView(gameMode)
        }, 1000)
    }

    const finishGame = () => {
        Modal(window.currentPoints)
        // window.prompt(`Game finished. Your points: ${window.currentPoints.points} / ${window.currentPoints.askedQuestions}. Enter your name:`)
        // TODO: Zrobić modal króry będzie przekazywał dane dla hall of fame zamiast promptu.
        document.querySelector(".quiz-game").removeAttribute("data-quiz-game-started")
        document.querySelector(".quiz-game").innerHTML = ""
        document.querySelector('.quiz-progress-countdown').innerHTML = "Time left: 2:00"
        // TODO: Umieścić w tym miejscu funkcje renderującą rules lub hall of fame.
        GameButtonsView("rules") 
        window.currentPoints = { points: 0, askedQuestions: 0 }
        window.currentQuestion = { mode: "people", id: 36 }
        window.usedQuestionIds = []
        window.precachedQuestions = []
        window.cachedQuestionsPromises = []
        leftPicture(window.currentQuestion.mode, window.currentQuestion.id)
    }

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

        for (var i = answers.children.length; i >= 0; i--) {
            answers.appendChild(answers.children[Math.random() * i | 0]);
        }
        templateAnswers.forEach(e => {
            e.classList.remove("question-answer-block")
        })

        leftPicture(window.currentQuestion.mode, window.currentQuestion.id)
        if(parentElement.getAttribute("data-quiz-game-started") != "") {
            console.log("Started timeout.")
            window.setTimeout(finishGame, 60*1000 + 2000)
            progressSword()
            countDown(new Event('submit'))
        }
    })

    parentElement.removeAttribute("data-not-rendered")
    parentElement.parentNode.replaceChild(template, parentElement)

}

export default QuestionsView
