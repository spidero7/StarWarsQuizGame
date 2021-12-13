/*import 'regenerator-runtime/runtime' //async/await with Parcel
import {App} from "./app/App";

const ONE_SECOND_MILLIS = 1000;
const SW_API_BASE_URL = process.env.SW_API_BASE_URL || "https://swapi.dev/api";
const QUIZ_MAX_TIME = process.env.QUIZ_MAX_TIME_SECONDS ? process.env.QUIZ_MAX_TIME_SECONDS * ONE_SECOND_MILLIS : 120 * ONE_SECOND_MILLIS;

window.onload = () => App({options: {swApiBaseUrl: SW_API_BASE_URL, quizMaxTime: QUIZ_MAX_TIME}}) */

const description = document.querySelector('.description');
const title = document.querySelector('.title');

document.querySelector('.menu').addEventListener('click', selectMode); 

function selectMode(event) {
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