let gameMode = 'people';

const people = document.getElementById('people');
const vehicles = document.getElementById('vehicles');
const starships = document.getElementById('starships');

document.querySelector('.quiz-menu').addEventListener('click', selectMode); 

export function selectMode(event) {
    if (event.target.innerText === 'People') {
        gameMode = 'people'
        people.style.borderBottom = '5px solid rgba(255, 0, 0, 0.750)'
        vehicles.style.borderBottom = 'none'
        starships.style.borderBottom = 'none'
        console.log(gameMode)
    } else if (event.target.innerText === 'Vehicles') {
        gameMode = 'vehicles'
        console.log(gameMode)
        people.style.borderBottom = 'none'
        vehicles.style.borderBottom = '5px solid rgba(255, 0, 0, 0.750)'
        starships.style.borderBottom = 'none'
    } else if (event.target.innerText === 'Starships') {
        gameMode = 'starships'
        console.log(gameMode)
        people.style.borderBottom = 'none'
        vehicles.style.borderBottom = 'none'
        starships.style.borderBottom = '5px solid rgba(255, 0, 0, 0.750)'
    }
}