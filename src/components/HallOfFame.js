// Getting elements
const hallOfFameContainer = document.querySelector(
  '.swquiz-app-hall-of-fame-container',
);

// Draft data
const usersScores = [
  { playerName: 'Luke', score: 18 },
  { playerName: 'Han', score: 25 },
  { playerName: 'Yoda', score: 10 },
  { playerName: 'Lando', score: 16 },
];

// console.log(arrayOfScores);

// Showing Hall of Fame ranking if user've played
function showHallOfFame() {
  // Adding player name and score to Local Storage
  window.localStorage.setItem('user', JSON.stringify(usersScores));

  // Getting the data from Local Storage
  let userDataFromLocalStorage = JSON.parse(localStorage.getItem('user'));

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

  function sortFromLargestToSmallest(a, b) {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  }

  userDataFromLocalStorage.sort(sortFromLargestToSmallest);

  // console.log(userDataFromLocalStorage);

  const scores = userDataFromLocalStorage.map((x) => x.score);

  const secondHighestScore = function () {
    let max = Math.max.apply(null, scores);
    scores.splice(scores.indexOf(max), 1);
    return Math.max.apply(null, scores);
  };

  const thirdHighestScore = function () {
    let max = Math.max.apply(null, scores);
    scores.splice(scores.indexOf(max), 1);
    let second = Math.max.apply(null, scores);
    scores.splice(scores.indexOf(second), 1);
    return Math.max.apply(null, scores);
  };

  console.log(thirdHighestScore());

  for (let i = 0; i < userDataFromLocalStorage.length; i++) {
    const hallOfFamePlayerDiv = document.createElement('div');
    hallOfFamePlayerDiv.classList.add('swquiz-app-hall-of-fame-player');

    const highestScore = Math.max(...scores);

    if (scores[i] === highestScore) {
      userDataFromLocalStorage[i]['place'] = 1;
    } else if (scores[i] === secondHighestScore()) {
      userDataFromLocalStorage[i]['place'] = 2;
    } else if (scores[i] === thirdHighestScore()) {
      userDataFromLocalStorage[i]['place'] = 3;
    } else {
      userDataFromLocalStorage[i]['place'] = 0;
    }

    hallOfFamePlayerDiv.innerHTML = `<p>${userDataFromLocalStorage[i].place}</p>
          <p>${userDataFromLocalStorage[i].playerName}</p>
          <p>${userDataFromLocalStorage[i].score}</p>`;
    hallOfFameContainer.appendChild(hallOfFamePlayerDiv);
  }

  // // Scores in order from largest to smallest
  // const arrayOfScores = userDataFromLocalStorage.map((x) => x.score);
  // arrayOfScores.sort(function (a, b) {
  //   return b - a;
  // });

  // console.log(arrayOfScores);
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
