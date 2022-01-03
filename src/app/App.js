import { doc } from 'prettier';
import { selectMode } from "./mode-selection.js"
import { leftPicture } from '../components/images'
import GameButtonsView from "../components/GameButtonsView"
import ModeSelectionView from '../components/ModeSelectionView.js';
export const App = ({ options }) => {
    // window.askedIds = [] // for debuging
    window.currentPoints = { points: 0, askedQuestions: 0 }
    window.currentQuestion = { mode: "people", id: 36 }
    window.usedQuestionIds = [] // after finished game, this global should be set to empty array + it is used for storing used questions info
    window.precachedQuestions = [] // after finished game, this global should be set to empty array + it is used for precaching questions
    window.cachedQuestionsPromises = [] // after finished game, this global should be set to empty array + it is used for limiting the amount of fetches
    window.chosenGameMode = "people" // TODO: should update after chosing different gamemodes
    GameButtonsView("rules")
    leftPicture(window.currentQuestion.mode, window.currentQuestion.id)
    ModeSelectionView(window.chosenGameMode);
}
