import 'regenerator-runtime/runtime'; //async/await with Parcel
import { App } from './app/App';

const ONE_SECOND_MILLIS = 1000;
const SW_API_BASE_URL = process.env.SW_API_BASE_URL || 'https://swapi.dev/api';
const QUIZ_MAX_TIME = process.env.QUIZ_MAX_TIME_SECONDS
  ? process.env.QUIZ_MAX_TIME_SECONDS * ONE_SECOND_MILLIS
  : 120 * ONE_SECOND_MILLIS;

window.onload = () =>
  App({
    options: { swApiBaseUrl: SW_API_BASE_URL, quizMaxTime: QUIZ_MAX_TIME },
  });

// const getData = async () => {
//   const response = await fetch('/public/data.json');

//   const data = await response.json();
//   return data;
// };

// getData().then((data) => console.log('resolved', data));
// //   .catch((error) => console.log('rejected', error.message));
