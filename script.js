const questions = [

    {
        question: "which is the largest animal in the world?",
        answer: [
            { text: "shark", correct: false },
            { text: "blue-whale", correct: true },
            { text: "elephant", correct: false },
            { text: "giraffe", correct: false },
        ]
    },
    {
        question: "which is the smallest country in the world ?",
        answer: [
            { text: "vetican city", correct: true },
            { text: "nepal", correct: false },
            { text: "bhutan", correct: false },
            { text: "Bangladesh", correct: false },
        ]
    },
    {
        question: "which is the largest desert in the world?",
        answer: [
            { text: "thar desert", correct: false },
            { text: "kalhari", correct: false },
            { text: "sahara desert", correct: false },
            { text: "Antartica", correct: true },
        ]
    },
    {
        question: "which is the smallest continent in the world?",
        answer: [
            { text: "asia", correct: false },
            { text: "africa", correct: false },
            { text: "australia", correct: true },
            { text: "Arctic", correct: false },
        ]
    },

];

//  const quizBox = document.getElementById("quiz-box");
const q = document.getElementById("Q")
const answerBtns = document.getElementById("answer-btns")
const nextBtn = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startquiz() {

    currentQuestionIndex = 0
    score = 0
    nextBtn.innerHTML = "Next"
    showquestion();
}

function showquestion() {
    resetstate();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    q.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answer.forEach((answer) => {
        let button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('ans-btn')
        answerBtns.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        };
        button.addEventListener('click' , selectAnswer)
    })

}

function resetstate() {

    nextBtn.style.display = "none"
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild)
    }
}

function selectAnswer(e){
 
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++;
    } else {
        selectedBtn.classList.add('Incorrect')
    }

    Array.from(answerBtns.children).forEach((button) => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = "true"
        nextBtn.style.display = "block"
    })
}

function showScore(){
    resetstate();
    q.innerHTML = `Your score is ${score} out of ${questions.length}`
    nextBtn.style.display = "block"
    nextBtn.innerHTML = "Play Again"
}

function handlenextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showquestion();
    }else {
        showScore();
    }
        
    
}

nextBtn.addEventListener('click' , ()=>{
    if(currentQuestionIndex < questions.length){
        handlenextbutton();
    } else{
        startquiz();
    }
})
startquiz()
