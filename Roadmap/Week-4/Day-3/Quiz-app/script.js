function closure(){
    const questions = [
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A function inside a loop",
      "A function with preserved lexical scope",
      "A JavaScript keyword",
      "A type of promise"
    ],
    correctAnswer: 1
  },
  {
    question: "Which keyword is used to declare a constant?",
    options: ["var", "let", "const", "static"],
    correctAnswer: 2
  },
  {
    question: "Which method is used to transform each element of an array?",
    options: ["forEach", "map", "filter", "reduce"],
    correctAnswer: 1
  },
  {
    question: "What does `===` operator do?",
    options: [
      "Checks only value",
      "Checks only type",
      "Checks value and type",
      "Assigns a value"
    ],
    correctAnswer: 2
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["Number", "String", "Boolean", "Character"],
    correctAnswer: 3
  }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;
let timeLeft = 30;
let timerId = null;


const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const questionText = document.getElementById("questionText");
const optionsList = document.getElementById("optionsList");
const nextBtn = document.getElementById("nextBtn");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restartBtn");
const timerElement = document.getElementById("timer");


startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  loadQuestion();
}

function loadQuestion() {
  resetState();
  clearInterval(timerId);   // stop previous timer
  startTimer(); 

  const currentQuestion = questions[currentQuestionIndex];

  questionText.textContent = currentQuestion.question;
  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.textContent = option;
    button.classList.add("option-btn");

    button.addEventListener("click", () => selectAnswer(index, button));

    li.appendChild(button);
    optionsList.appendChild(li);
  });
}

function selectAnswer(index, button) {
  if (selectedOptionIndex !== null) return; // prevent reselect

  clearInterval(timerId); 
  selectedOptionIndex = index;
  nextBtn.disabled = false;

  const correctIndex = questions[currentQuestionIndex].correctAnswer;


  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn, i) => {
    btn.disabled = true;

    if (i === correctIndex) btn.classList.add("correct");
    if (i === index && i !== correctIndex) btn.classList.add("wrong");
  });

  if (index === correctIndex) {
    score++;
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function resetState() {
  selectedOptionIndex = null;
  nextBtn.disabled = true;
  optionsList.innerHTML = "";
}

function showResult() {
  clearInterval(timerId);
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  scoreText.textContent = `You scored ${score} / ${questions.length}`;

  // Persist score (real-world feature)
  localStorage.setItem("lastQuizScore", score);
}

restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;

  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
});


//TIMEER
function startTimer() {
  timeLeft = 30;
  timerElement.textContent = `⏱ ${timeLeft}s`;

  timerId = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `⏱ ${timeLeft}s`;

    if (timeLeft === 0) {
      clearInterval(timerId);
      autoMoveNext();
    }
  }, 1000);
}

function autoMoveNext() {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);
  currentQuestionIndex++;
  loadQuestion();
}


}
closure();