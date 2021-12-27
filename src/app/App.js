import QuestionsView from "../components/QuestionsView.js"

export const App = ({options}) => {
    // window.askedIds = [] // for debuging
    window.currentPoints = { points: 0, askedQuestions: 0 }
    window.currentQuestion = { mode: "people", id: 2 }
    window.usedQuestionIds = [] // after finished game, this global should be set to empty array + it is used for storing used questions info
    window.precachedQuestions = [] // after finished game, this global should be set to empty array + it is used for precaching questions
    window.cachedQuestionsPromises = [] // after finished game, this global should be set to empty array + it is used for limiting the amount of fetches
    QuestionsView(document.querySelector('.quiz-game-questions'), "starships", true)
}
