// Getting elements
const hallOfFameContainer = document.querySelector('.quiz-game-ranking');

// Draft data
const usersScores = [
  { playerName: 'Luke', score: 30, answers: 50, mode: 'people' },
  { playerName: 'Han', score: 18, answers: 80, mode: 'vehicles' },
  { playerName: 'R2D2', score: 18, answers: 80, mode: 'vehicles' },
  { playerName: 'Leia', score: 18, answers: 100, mode: 'people' },
  { playerName: 'Yoda', score: 4, answers: 4, mode: 'starship' },
  { playerName: 'Chewy', score: 15, answers: 16, mode: 'people' },
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

  // Mode variables
  const people = userDataFromLocalStorage.filter((items) => {
    return items.mode == 'people';
  });

  const vehicles = userDataFromLocalStorage.filter((items) => {
    return items.mode == 'vehicles';
  });

  const starship = userDataFromLocalStorage.filter((items) => {
    return items.mode == 'starship';
  });

  // Switch mode
  const mode = people;

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

  for (let i = 0; i < userDataFromLocalStorage.length; i++) {
    if (true) {
      // Sort by percentage
      mode.sort((a, b) =>
        a.percentage < b.percentage ? 1 : a.percentage > b.percentage ? -1 : 0,
      );

      // Score variable
      const threeHighestScore = mode.slice(0, 3);

      const hallOfFamePlayerDiv = document.createElement('div');
      hallOfFamePlayerDiv.classList.add('swquiz-app-hall-of-fame-player');

      mode[i].place = i + 1;

      if (threeHighestScore) {
        hallOfFamePlayerDiv.innerHTML = `<p>${threeHighestScore[i].place}</p>
          <p>${threeHighestScore[i].playerName}</p>
          <p>${threeHighestScore[i].score} / ${threeHighestScore[i].answers}</p>`;
        hallOfFameContainer.appendChild(hallOfFamePlayerDiv);
      }
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
