import ModeSelectionView from "../components/ModeSelectionView";

const buttons = document.querySelectorAll('#mode')

buttons.forEach(el => {
    el.addEventListener('click', () => {
        buttons.forEach(ele => {
            ele.classList.remove('active')
            el.classList.add('active')
        })
        ModeSelectionView(el.innerText)
    }); 
})
