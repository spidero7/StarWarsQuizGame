// Getting elements
const hallOfFameContainer = document.querySelector(
  '.swquiz-app-hall-of-fame-container',
);

// Draft data
const usersScores = [
  { playerName: 'Luke', score: 30, answers: 50 },
  { playerName: 'Han', score: 18, answers: 80 },
  { playerName: 'Leia', score: 18, answers: 100 },
  { playerName: 'Yoda', score: 4, answers: 4 },
  { playerName: 'Chewy', score: 15, answers: 16 },
];

usersScores.map((player) => {
  const percentage = (player.score / player.answers) * 100;
  player.percentage = percentage;
});

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

  // Sort by percentage
  userDataFromLocalStorage.sort((a, b) =>
    a.percentage < b.percentage ? 1 : a.percentage > b.percentage ? -1 : 0,
  );

  // Score variable
  const threeHighestScore = userDataFromLocalStorage.slice(0, 3);

  for (let i = 0; i < userDataFromLocalStorage.length; i++) {
    const hallOfFamePlayerDiv = document.createElement('div');
    hallOfFamePlayerDiv.classList.add('swquiz-app-hall-of-fame-player');

    userDataFromLocalStorage[i].place = i + 1;

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
