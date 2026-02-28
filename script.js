// Questions
const questions = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "float"],
    answer: "var"
  },
  {
    question: "Which method is used to select an element by ID?",
    options: ["querySelector()", "getElementById()", "getElements()", "select()"],
    answer: "getElementById()"
  },
  {
    question: "Which symbol is used for comments in JS?",
    options: ["//", "<!-- -->", "#", "**"],
    answer: "//"
  }
];

// DOM Elements
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");

const finalScoreEl = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const highScoreEl = document.getElementById("high-score");

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;

// Load High Score
let highScore = localStorage.getItem("highScore") || 0;
highScoreEl.textContent = highScore;

// Start Quiz
startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  loadQuestion();
});

// Restart Quiz
restartBtn.addEventListener("click", () => {
  location.reload();
});

// Load Question
function loadQuestion() {
  clearInterval(timerInterval);
  timeLeft = 15;
  timerEl.textContent = timeLeft;

  const current = questions[currentQuestion];
  questionEl.textContent = current.question;

  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectAnswer(option));
    optionsEl.appendChild(button);
  });

  startTimer();
}

// Timer Function
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      nextQuestion();
    }
  }, 1000);
}

// Select Answer
function selectAnswer(selected) {
  clearInterval(timerInterval);

  const correctAnswer = questions[currentQuestion].answer;

  if (selected === correctAnswer) {
    score++;
  }

  nextQuestion();
}

// Next Question
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show Result
function showResult() {
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";

  finalScoreEl.textContent = `${score} / ${questions.length}`;

  let percentage = (score / questions.length) * 100;

  if (percentage >= 80) {
    resultMessage.textContent = "Excellent 🎉";
  } else if (percentage >= 50) {
    resultMessage.textContent = "Good 👍";
  } else {
    resultMessage.textContent = "Keep Practicing 💪";
  }

  // Save High Score
  if (score > highScore) {
    localStorage.setItem("highScore", score);
  }
}