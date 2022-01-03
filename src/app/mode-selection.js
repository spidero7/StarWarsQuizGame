let gameMode = 'people';

const description = document.querySelector('.description');
const title = document.querySelector('.title');

document.querySelector('.quiz-menu').addEventListener('click', selectMode); 

export function selectMode(event) {
    if (event.target.innerText === 'People') {
        gameMode = 'people'
        title.innerText = gameModeDescription.people.title;
        description.innerText = gameModeDescription.people.description;
    } else if (event.target.innerText === 'Vehicles') {
        gameMode = 'vehicles'
        title.innerText = gameModeDescription.vehicles.title;
        description.innerText = gameModeDescription.vehicles.description;
    } else if (event.target.innerText === 'Starships') {
        gameMode = 'starships'
        title.innerText = gameModeDescription.starships.title;
        description.innerText = gameModeDescription.starships.description;
    }
}

const gameModeDescription = {
    people: {
        title: 'MODE: Who is this character?',
        description: 'You have one minute (1m) to answer as many questions as possible. During the game you need to choose from available options which character from Star Wars is shown on the left.'
    },
    vehicles: {
        title: 'MODE: Which vehicle is this?',
        description: 'You have one minute (1m) to answer as many questions as possible. During the game you need to choose from available options which vehicle from Star Wars is shown on the left.'},
    starships: {
        title: 'MODE: Which starship is this?',
        description: 'You have one minute (1m) to answer as many questions as possible. During the game you need to choose from available options which starship from Star Wars is shown on the left.'}
    }
