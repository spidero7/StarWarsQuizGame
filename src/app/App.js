import questionsView from "../components/questionsView.js"

export const App = ({options}) => {
    // window.askedIds = [] // for debuging
    window.usedQuestionIds = [] // after finished game, this global should be set to empty array + it is used for storing used questions info
    window.precachedQuestions = [] // after finished game, this global should be set to empty array + it is used for precaching questions
    window.cachedQuestionsPromises = [] // after finished game, this global should be set to empty array + it is used for limiting the amount of fetches
    questionsView(document.querySelector('.questions-container'), "people")
}