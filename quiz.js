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

const questionElement = document.getElementById("question");
const optionbtn  = document.getElementById("answer-options");
const nextBtn  = document.getElementById("next-question");

let currentQuestionIndex = 0;
let score = 0;

function beginQuiz(){
  currentQuestionIndex = 0;
  score = 0
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQandA(){
  let currentQuestion = questions[currentQuestionIndex]
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerText = questionNumber + ". " + currentQuestion.question

  currentQuestion.options.forEach( answers => {
    const option = document.createElement("button");
    option.innerText = answers.choice;
    option.classList.add("options");
    optionbtn.appendChild(option);    
  });
}