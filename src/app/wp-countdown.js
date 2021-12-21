let counterSecond = 120;
const time = document.querySelector('.progress-bar__countdown')

export const countDown = e => {
  e.preventDefault();
  setInterval(() => {
    counterSecond--;
    displayTime(counterSecond);
    if (counterSecond <= 0) {
      endCount();
      clearInterval(countDown);
    }
  }, 1000);
}

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  time.innerHTML = `Time left
  ${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec} minutes!
  `;
}

function endCount() {
  time.innerText = "Say hello to Sarlacc ☠️";
}
