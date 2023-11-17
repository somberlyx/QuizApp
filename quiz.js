const questions = [
  {
    question: "Which animal is known as the 'Ship of the Desert'?",
    options: [
      { choice: "Cow", correct: false },
      { choice: "Moose", correct: false },
      { choice: "Camel", correct: true },
      { choice: "Cactus", correct: false }
    ]
  },
  {
    question: "Which is the biggest continent in the world?",
    options: [
      { choice: "North America", correct: false },
      { choice: "Asia", correct: true },
      { choice: "Africa", correct: false },
      { choice: "Australia", correct: false }
    ]
  },
  { question: "Which is the longest river in the world?",
    options: [
      { choice: "Great Ganga", correct: false },
      { choice: "Nile", correct: true },
      { choice: "Amazon", correct: false },
      { choice: "Niger", correct: false }
    ]
  },
  {
    question: "Which is the largest flower in the world?",
    options: [
      { choice: "Rafflesia", correct: true },
      { choice: "Balloon Flower", correct: false },
      { choice: "Camellia", correct: false },
      { choice: "Jasmine", correct: false }
    ]
  },
  {
    question: "Which is largest island in the world?",
    options: [
      { choice: "New Guinea", correct: false },
      { choice: "Andaman Nicobar", correct: false },
      { choice: "Hawaii", correct: false },
      { choice: "Greenland", correct: true }
    ]
  }
];

const questionElement = document.getElementById("questions");
const optionbtn  = document.getElementById("answer-options");
const nextBtn  = document.getElementById("next-question");

let currentQuestionIndex = 0;
let score = 0;

function beginQuiz(){
  reset();
  currentQuestionIndex = 0;
  score = 0
  nextBtn.innerHTML = "Next";
  showQandA();
}

function showQandA(){
  reset();
  let currentQuestion = questions[currentQuestionIndex]
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerText = questionNumber + ". " + currentQuestion.question

  currentQuestion.options.forEach(answers => {
    const option = document.createElement("button");
    option.innerText = answers.choice;
    option.classList.add("options");
    optionbtn.appendChild(option);  
    if(answers.correct){
      option.dataset.correct = answers.correct;
    }  
    option.addEventListener('click', selectAnswer)
  });
}

function reset(){
  nextBtn.style.display = "none";
  while(optionbtn.firstChild){
    optionbtn.removeChild(optionbtn.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(optionbtn.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  })
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextQuestion();
  } else {
    beginQuiz();
  }
})

function handleNextQuestion(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQandA();
  }else{
    showScore();
  }
}

function showScore(){
  reset();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

beginQuiz();