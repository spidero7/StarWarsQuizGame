const description = document.querySelector('.description');
const title = document.querySelector('.title');

document.querySelector('.quiz-menu').addEventListener('click', selectMode); 

export function selectMode(event) {
    if (event.target.innerText === 'People') {
        title.innerText = gameMode.people.title;
        description.innerText = gameMode.people.description;
    } else if (event.target.innerText === 'Vehicles') {
        title.innerText = gameMode.vehicles.title;
        description.innerText = gameMode.vehicles.description;
    } else if (event.target.innerText === 'Starships') {
        title.innerText = gameMode.starships.title;
        description.innerText = gameMode.starships.description;
    }
}

const gameMode = {
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