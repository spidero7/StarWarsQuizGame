const time = document.querySelector('.quiz-progress-countdown')

export const countDown = e => {
  let counterSecond = 60;
  e.preventDefault();
  const countDownInterval = setInterval(() => {
    counterSecond--;
    displayTime(counterSecond);
    if (counterSecond <= 0) {
      // endCount();
      clearInterval(countDownInterval);
    }
  }, 1000);
}

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  time.innerHTML = `Time left: 
  ${min < 10 ? "" + min : min}:${sec < 10 ? "0" + sec : sec}!
  `;
}

// function endCount() {
//   time.innerText = "Say hello to Sarlacc ☠️";
// }
