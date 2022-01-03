import GameButtonsView from "./GameButtonsView"

const questionsTemplate = `
    <div class="box" id="mode-title">Mode: loading...</div>
    <div class="box" id="mode-description">loading...</div>
    `

const ModeSelectionView = (gameMode) => {
    const parentElement = document.querySelector('.quiz-game')
    parentElement.innerHTML = ""

    const template = document.createElement('div')
    template.classList.add("quiz-game")
    template.innerHTML = questionsTemplate.trim()
    
    const displayModeRules = (gameMode) => {
        let modeTitle = ""
        let modeRules = ""
        switch (gameMode) {
            case "people":
                modeTitle = gameModeDescription.people.title
                modeRules = gameModeDescription.people.description
                break
            case "vehicles":
                modeTitle = gameModeDescription.vehicles.title
                modeRules = gameModeDescription.vehicles.description
                break
            case "starships":
                modeTitle = gameModeDescription.starships.title
                modeRules = gameModeDescription.starships.description
                break
            default:
                modeTitle = "undefined"
                modeRules = "undefined"
        }
        template.firstElementChild.innerHTML = `MODE: ${modeTitle}`
        template.lastElementChild.innerHTML = `<p class="mode-rules-header">Mode Rules</p> ${modeRules}`
    }

    parentElement.parentNode.replaceChild(template, parentElement)

    displayModeRules(gameMode);
    GameButtonsView('rules');
}

const gameModeDescription = {
    people: {
        title: 'Who is this character?',
        description: 'You have one minute (1m) to answer as many questions as possible. During the game you need to choose from available options which character from Star Wars is shown in the picture on the left.'
    },
    vehicles: {
        title: 'Which vehicle is this?',
        description: 'You have one minute (1m) to answer as many questions as possible. During the game you need to choose from available options which vehicle from Star Wars is shown in the picture on the left.'
    },
    starships: {
        title: 'Which starship is this?',
        description: 'You have one minute (1m) to answer as many questions as possible. During the game you need to choose from available options which starship from Star Wars is shown in the picture on the left.'
    }
}

export default ModeSelectionView
