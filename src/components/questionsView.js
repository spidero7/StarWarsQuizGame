import questions from "./questions"

const questionsTemplate = `
    <div class="questions-question">Question: loading...</div>
    <div class="questions-answers">
        <div class="questions-answer question-answer-block">Loading...</div>
        <div class="questions-answer question-answer-block">Loading...</div>
        <div class="questions-answer question-answer-block">Loading...</div>
        <div class="questions-answer question-answer-block">Loading...</div>
    </div>    
`

const questionsView = async (parentElement, gameMode) => {

    // Handling question data section

    const updateAnswers = (answers, gameMode) => {

        let gameQuestion = ""
        switch(gameMode) {
            case "people":
                gameQuestion = "Who is this character?"
            break
            case "vehicles":
                gameQuestion = "What is this vehicle?"
            break
            case "starships":
                gameQuestion = "What is this starship?"
            break
            default:
                gameQuestion = "N/A"
        }

        template.firstElementChild.innerHTML = `Question: ${gameQuestion}`

        templateAnswers.forEach((e, key) => {
            e.className = "questions-answer"
            e.removeAttribute("correct")
            e.innerHTML = answers[key].name
            
            if(key === 0) {
                e.setAttribute("correct", true)
                e.innerHTML += " ✔️"
            }

            e.classList.remove("question-answer-block")
            e.addEventListener('click', handleAnswerClick)
        })
    }

    // Template

    let template = document.createElement('div')
    
    template.classList.add("questions-container")
    
    try {
        if(document.querySelector('.questions-container').getAttribute("not-rendered") == "true") {
            template.innerHTML = questionsTemplate.trim()
        } else {
            template = document.querySelector('.questions-container')
        }
    } catch (e) {
        console.error("error")
    }

    // Handling answer click section

    const handleAnswerClick = (e) => {
        if(e.target.getAttribute("correct")) {
            e.target.classList.add("question-correct")
        } else {
            e.target.classList.add("question-incorrect")
        }
        templateAnswers.forEach(a => {
            a.classList.add("question-answer-block")
            a.removeEventListener('click', handleAnswerClick)
        })
        const switchQuestions = setTimeout((e) => {
            questionsView(document.querySelector('.questions-container'), gameMode)
        }, 1000)   
    }

    // Logic
    
    let templateAnswers = Array.from(template.lastElementChild.children)
    
        // Caching
        
        let answers

        if(window.precachedQuestions.length == 0) {
            answers = questions(gameMode)
        } else {
            answers = window.precachedQuestions
        }

        window.precachedQuestions = questions(gameMode)

        // Cahing-end

    window.allAnswers = [...answers.incorrect, answers.correct]
    
    Promise.all(allAnswers).then(res => {
        updateAnswers(res, gameMode)
        let answers = document.querySelector('.questions-answers');
        for (var i = answers.children.length; i >= 0; i--) {
            answers.appendChild(answers.children[Math.random() * i | 0]);
        }
        templateAnswers.forEach(e => {
            e.classList.remove("question-answer-block")
        })
    })
    
    parentElement.parentNode.replaceChild(template, parentElement)
    
}

export default questionsView