import QuestionsView from "../components/QuestionsView.js"

const GameButtonsView = (quizGameView) => {
    let buttonsTemplate = ``
    const quizGame = document.querySelector('.quiz-game')
    const quizProgress = document.querySelector('.quiz-progress')

    const goToRules = () => {
        console.log("Went to rules.")
        // rules function here
    }

    const goToHallOfFame = () => {
        console.log("Went to hall of fame.")
        // hall of fame function here
    }

    const startGame = () => {
        console.log("Game started.")
        QuestionsView(window.chosenGameMode)
    }

    if (quizGameView == "rules") {
        quizProgress.style.display = "none"
        buttonsTemplate = `
            <div class="quiz-game-buttons">
                <button>Hall of fame</button>
                <button>PLAY THE GAME</button>
            </div>
        `
    } else if ( quizGameView == "hallOfFame") {
        quizProgress.style.display = "none"
        buttonsTemplate = `
            <div class="quiz-game-buttons">
                <button>Rules</button>
                <button>PLAY THE GAME</button>
            </div>
        `
    } else if ( quizGameView == "game") {
        quizProgress.style.display = "block"
        buttonsTemplate = ``
    }

    quizGame.innerHTML += buttonsTemplate

    if(quizGameView != "game") {
        const buttonLeft = document.querySelector('.quiz-game-buttons > button:nth-child(1)')
        const buttonRight = document.querySelector('.quiz-game-buttons > button:nth-child(2)')
    
        buttonRight.addEventListener('click', startGame)
        
        if (quizGameView == "rules") {
            buttonLeft.removeEventListener('click', goToRules)
            buttonLeft.addEventListener('click', goToHallOfFame)
        } else if ( quizGameView == "hallOfFame") {
            buttonLeft.removeEventListener('click', goToHallOfFame)
            buttonLeft.addEventListener('click', goToRules)
        }
    }

}

export default GameButtonsView
