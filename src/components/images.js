// Wyświetlanie obrazka po lewej stronie
export function leftPicture (gameMode, id) {
    document.getElementById("left-pic").src=`../../static/assets/img/modes/${gameMode}/${id}.jpg`
}