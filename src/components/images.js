// Wyświetlanie obrazka po lewej stronie
export function leftPicture(gameMode = window.currentQuestion.mode, id = window.currentQuestion.id) {
    document.getElementById("left-pic").src = `../../static/assets/img/modes/${gameMode}/${id}.jpg`
}