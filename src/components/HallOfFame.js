// Getting elements
const hallOfFameContainer = document.querySelector(
  '.swquiz-app-hall-of-fame-container',
);

// Draft data
const usersScores = [
  { playerName: 'Luke', score: 30, answers: 50 },
  { playerName: 'Luke', score: 18, answers: 80 },
  { playerName: 'Han', score: 25, answers: 40 },
  { playerName: 'Han', score: 105, answers: 40 },
  { playerName: 'Han', score: 145, answers: 40 },
];

// console.log(arrayOfScores);

// Showing Hall of Fame ranking if user've played
function showHallOfFame() {
  // Adding player name and score to Local Storage
  window.localStorage.setItem('user', JSON.stringify(usersScores));

  // Getting the data from Local Storage
  let userDataFromLocalStorage = JSON.parse(localStorage.getItem('user'));

  const headerRanking = document.createElement('h2');
  headerRanking.innerHTML = 'Mode Ranking';
  headerRanking.classList.add('swquiz-app-hall-of-fame-ranking-header');
  hallOfFameContainer.appendChild(headerRanking);

  const hallOfFameHeaderDiv = document.createElement('div');
  hallOfFameHeaderDiv.classList.add('swquiz-app-hall-of-fame-header');

  hallOfFameHeaderDiv.innerHTML = `<p>Place</p>
              <p>Player</p>
              <p>Scores</p>`;

  hallOfFameContainer.appendChild(hallOfFameHeaderDiv);

  // Sort by score
  userDataFromLocalStorage.sort((a, b) =>
    a.score < b.score ? 1 : a.score > b.score ? -1 : 0,
  );
  console.log(userDataFromLocalStorage);

  // Score variable
  const threeHighestScore = userDataFromLocalStorage.slice(0, 3);
  const scores = threeHighestScore.map((x) => x.score);
  const highestScore = Math.max(...scores);
  const thirdScore = Math.min(...scores);

  for (let i = 0; i < userDataFromLocalStorage.length; i++) {
    const hallOfFamePlayerDiv = document.createElement('div');
    hallOfFamePlayerDiv.classList.add('swquiz-app-hall-of-fame-player');

    if (scores[i] == highestScore) {
      userDataFromLocalStorage[i]['place'] = 1;
    } else if (scores[i] == thirdScore) {
      userDataFromLocalStorage[i]['place'] = 3;
    } else {
      userDataFromLocalStorage[i]['place'] = 2;
    }

    if (threeHighestScore) {
      hallOfFamePlayerDiv.innerHTML = `<p>${threeHighestScore[i].place}</p>
          <p>${threeHighestScore[i].playerName}</p>
          <p>${threeHighestScore[i].score} / ${threeHighestScore[i].answers}</p>`;
      hallOfFameContainer.appendChild(hallOfFamePlayerDiv);
    }
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
