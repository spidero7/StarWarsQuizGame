// Getting elements
const hallOfFameContainer = document.querySelector(
  '.swquiz-app-hall-of-fame-container',
);

// Draft data
const usersScores = [
  { playerName: 'Luke', score: 18 },
  { playerName: 'Han', score: 20 },
  { playerName: 'Vader', score: 10 },
  { playerName: 'Obi', score: 16 },
];

// Scores in order from largest to smallest
const arrayOfScores = usersScores.map((x) => x.score);
arrayOfScores.sort(function (a, b) {
  return b - a;
});

console.log(arrayOfScores);

// let threeHighestScores = 2;

// for (let i = 0; i <= threeHighestScores; i++) {
//   if (arrayOfScores[i] > threeHighestScores) {
//     let threeHighestScores = arrayOfScores[i];
//     threeHighestScores.map((x) => x);
//   }
//   console.log(threeHighestScores);
// }

// for (let i = 0; i < 3; i++) {
//   const threeHighestScores = arrayOfScores[i];
//   console.log(threeHighestScores);
// }

// Adding player name and score to Local Storage
window.localStorage.setItem('user', JSON.stringify(usersScores));

// Getting the data from Local Storage
const userDataFromLocalStorage = JSON.parse(
  window.localStorage.getItem('user'),
);

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

    const scores = userDataFromLocalStorage.map((x) => x.score);

    const highestScore = Math.max(...scores);
    const lowestScore = Math.min(...scores);

    if (scores[i] === highestScore) {
      userDataFromLocalStorage[i]['place'] = 1;
    } else if (scores[i] === lowestScore) {
      userDataFromLocalStorage[i]['place'] = 3;
    } else {
      userDataFromLocalStorage[i]['place'] = 2;
    }

    hallOfFamePlayerDiv.innerHTML = `<p>${userDataFromLocalStorage[i].place}</p>
          <p>${userDataFromLocalStorage[i].playerName}</p>
          <p>${userDataFromLocalStorage[i].score}</p>`;
    hallOfFameContainer.appendChild(hallOfFamePlayerDiv);
  }
}

// Showing text if user haven't played
function showTextIfNoUserScore() {
  const emptyHallOfFame = document.createElement('h1');
  emptyHallOfFame.innerHTML = 'Hall of Fame is empty';
  emptyHallOfFame.classList.add('swquiz-app-hall-of-fame-empty');
  hallOfFameContainer.appendChild(emptyHallOfFame);
}

showHallOfFame();
// showTextIfNoUserScore();
