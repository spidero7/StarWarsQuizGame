import { doc } from 'prettier';

export const App = ({ options }) => {};

const hallOfFameContainer = document.querySelector(
  '.swquiz-app-hall-of-fame-container',
);

function showHallOfFame() {
  const headerRanking = document.createElement('h2');
  headerRanking.innerHTML = 'Ranking';
  headerRanking.classList.add('swquiz-app-hall-of-fame-ranking-header');
  hallOfFameContainer.appendChild(headerRanking);

  const hallOfFameHeaderDiv = document.createElement('div');
  hallOfFameHeaderDiv.classList.add('swquiz-app-hall-of-fame-header');

  hallOfFameHeaderDiv.innerHTML = `<p>Place</p>
            <p>Player</p>
            <p>Scores</p>`;

  hallOfFameContainer.appendChild(hallOfFameHeaderDiv);

  const hallOfFamePlayerDiv = document.createElement('div');
  hallOfFamePlayerDiv.classList.add('swquiz-app-hall-of-fame-player');

  hallOfFamePlayerDiv.innerHTML = `<p>1st</p>
        <p>Bartek</p>
        <p>15/20</p>`;

  hallOfFameContainer.appendChild(hallOfFamePlayerDiv);
}

showHallOfFame();
// showTextIfNoUserScore();

function showTextIfNoUserScore() {
  const emptyHallOfFame = document.createElement('h1');
  emptyHallOfFame.innerHTML = 'Hall of Fame is empty';
  emptyHallOfFame.classList.add('swquiz-app-hall-of-fame-empty');
  hallOfFameContainer.appendChild(emptyHallOfFame);
}

const getData = async () => {
  const response = await fetch('/bp-data/data.json');

  const data = await response.json();
  return data;
};

getData()
  .then((data) => console.log(data))
  .catch((error) => console.log('rejected', error.message));
