function QuizApp() {
  const questions = [
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A function inside a loop",
        "A function with preserved lexical scope",
        "A JavaScript keyword",
        "A type of promise",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which keyword is used to declare a constant?",
      options: ["var", "let", "const", "static"],
      correctAnswer: 2,
    },
    {
      question: "Which method is used to transform each element of an array?",
      options: ["forEach", "map", "filter", "reduce"],
      correctAnswer: 1,
    },
    {
      question: "What does `===` operator do?",
      options: [
        "Checks only value",
        "Checks only type",
        "Checks value and type",
        "Assigns a value",
      ],
      correctAnswer: 2,
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["Number", "String", "Boolean", "Character"],
      correctAnswer: 3,
    },
  ];

  const start = document.getElementById("start");
  const options = document.getElementById("options");
  const questionScreen =  document.getElementById("question-screen")
  const resultScreen = document.getElementById("result-screen");

  let currentQuestionIndex = 0;
  let score = 0;
  let selectedAnswer;

  function loadQuestions(){
    if(currentQuestionIndex >= questions.length){
        loadResult();
        return;
    }
    questionScreen.innerHTML = "";
    //document.getElementById("question-screen").classList.toggle("active");

    const questionNumber = currentQuestionIndex;
    const currentQuestion = questions[questionNumber];

    const h2 = document.createElement("h2");
    h2.innerHTML = currentQuestion.question;

    questionScreen.appendChild(h2);

    const div = document.createElement("div");

    currentQuestion.options.map(option => {
            const p = document.createElement("p");
            p.innerText = option;
            div.appendChild(p);
    })

    function loadResult(){
        
    }

    questionScreen.appendChild(div);

    currentQuestionIndex++;

  }

  function selectAnswer(){

  }

  function loadResult(){
    resultScreen.innerHTML = `
        <h3>Your score is ${score}/ ${questions.length}</h3>
    `;
  }

    


  start.addEventListener("click", loadQuestions);

}

QuizApp();
