let gameMode = 'people';

const description = document.querySelector('.description');
const title = document.querySelector('.title');

document.querySelector('.quiz-menu').addEventListener('click', selectMode); 

export function selectMode(event) {
    if (event.target.innerText === 'People') {
        gameMode = 'people'
        console.log(gameMode)
    } else if (event.target.innerText === 'Vehicles') {
        gameMode = 'vehicles'
        console.log(gameMode)
    } else if (event.target.innerText === 'Starships') {
        gameMode = 'starships'
        console.log(gameMode)
    }
}