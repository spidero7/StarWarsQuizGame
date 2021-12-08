import { doc } from 'prettier';

export const App = ({ options }) => {};

// target html div
const hallOfFameContainer = document.querySelector(
  '.swquiz-app-hall-of-fame-container',
);

// Draft data
const usersScores = [
  { playerName: 'Luke', score: 18 },
  { playerName: 'Han', score: 15 },
  { playerName: 'Vader', score: 10 },
];

// Adding player name and score to Local Storage
window.localStorage.setItem('user', JSON.stringify(usersScores));

// Data from Local Storage
const userData = JSON.parse(window.localStorage.getItem('user'));

console.log(userData);

// Showing Hall of Fame ranking if user've played
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

  for (let i = 0; i < usersScores.length; i++) {
    const hallOfFamePlayerDiv = document.createElement('div');
    hallOfFamePlayerDiv.classList.add('swquiz-app-hall-of-fame-player');
    hallOfFamePlayerDiv.innerHTML = `<p>1st</p>
        <p>${userData[i].playerName}</p>
        <p>${userData[i].score}</p>`;
    hallOfFameContainer.appendChild(hallOfFamePlayerDiv);
  }
}

showHallOfFame();
// showTextIfNoUserScore();

// Showing text if user haven't played
function showTextIfNoUserScore() {
  const emptyHallOfFame = document.createElement('h1');
  emptyHallOfFame.innerHTML = 'Hall of Fame is empty';
  emptyHallOfFame.classList.add('swquiz-app-hall-of-fame-empty');
  hallOfFameContainer.appendChild(emptyHallOfFame);
}
