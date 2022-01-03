export function progressSword() {
  // document.querySelector('.quiz-progress-lightsaber__animation').setAttribute("id", "start-animation");
  // const startAnimation = document.querySelector('.quiz-progress-lightsaber__firebrand');
  // startAnimation.style.backgroundColor = 'rgba(255, 255, 255, 0.5 )';
  // startAnimation.style.boxShadow = 'inset 0 0 0 #000000';

  const lightRod = document.querySelector('.quiz-progress-lightsaber__animation')
  lightRod.classList.remove("start-animation")
  lightRod.offsetWidth
  lightRod.classList.add("start-animation")
}
