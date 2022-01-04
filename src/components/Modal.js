const Modal = (points) => {
    const modal = document.querySelector('.quiz-modal-text')
    const modalText = `The force is strong in you young Padawan! During 1 minute you have answered ${points.points} / ${points.askedQuestions} questions.`
    const submitRecord = () => {
        document.querySelector(".quiz-modal > button").removeEventListener('click',submitRecord)
        const name = document.querySelector('.quiz-modal-user-data > input').value
        document.querySelector('.quiz-modal').style.display = "none"

        const record = {
            name: name,
            points: points.points,
            askedQuestions: points.askedQuestions
        }
        // Do Bartka: w stałej recor umieściłem dane do hall of fame
    }

    modal.innerHTML = modalText
    document.querySelector('.quiz-modal-user-data > input').value = ""
    document.querySelector('.quiz-modal').style.display = "block"
    document.querySelector(".quiz-modal > button").addEventListener('click', submitRecord)
}

export default Modal