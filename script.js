let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Was bedeutet das HMTL Tag &lt;a&gt;?",
    answer_1: "Text Fett",
    answer_2: "Container",
    answer_3: "Ein Link",
    answer_4: "Kursiv",
    right_answer: 1,
  },
  {
    question: "Wie bindet man eine Website in eine Website ein?",
    answer_1: "&lt;iframe&gt;,&lt;iframe&gt;, and &lt;iframe&gt; ",
    answer_2: "&lt;iframe&gt;",
    answer_3: "&lt;frame&gt;",
    answer_4: "&lt;iframeset&gt;",
    right_answer: 2,
  },
  {
    question: "Was ist CSS?",
    answer_1: "Cursiv Super Style",
    answer_2: "Client-Side-Scanning",
    answer_3: "Cascading Sheets Style",
    answer_4: "Cascading Style Sheets",
    right_answer: 4,
  },
  {
    question: "Was ist ein CSS-Framework?",
    answer_1: "CSS-Framework bedeutet CSS-Code von anderen Website zu Kopieren",
    answer_2: "CSS-Framework bezeichnet man als rahmen um die Website",
    answer_3:
      "CSS-Frameworks bezeichnet man Bibliotheken von vorgefertigten CSS-Dateien",
    answer_4: "Wrong Answer",
    right_answer: 3,
  },
];
let rightQuestions = 0;
let currentQuestion = 0;

function init() {
  document.getElementById("all-question").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    updateNextQuestion();
  }
}

function gameIsOver(){
  return currentQuestion >= questions.length;
}

function answer(selection) {
  let question = questions[currentQuestion];

  let selectedQuestionNumber = selection.slice(-1);

  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (rightAnswerSelected(selectedQuestionNumber)) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber){
  return selectedQuestionNumber == question["right_answer"];
}

function nextQuestion(selection) {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButton();
  showQuestion();
}

function resetAnswerButton() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById("header-image").src = "img/education.jpg";
  rightQuestions = 0;
  currentQuestion = 0;
  document.getElementById("end-screen").style = "display: none";
  document.getElementById("question-body").style = "";
  init();
}

function showEndScreen() {
  document.getElementById("end-screen").style = "";
  document.getElementById("question-body").style = "display: none";
  document.getElementById("amount-of-question").innerHTML = questions.length;
  document.getElementById("amount-of-right-question").innerHTML =
    rightQuestions;
  document.getElementById("header-image").src = "img/trophy.png";
}

function updateNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("number-increase").innerHTML = currentQuestion + 1;
  document.getElementById("questionTxt").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function updateProgressBar() {
  let percent = ((currentQuestion + 1) / questions.length) * 100;
  console.log(percent.toFixed(0) + "%");
  document.getElementById("progress-bar").innerHTML = `${percent.toFixed(0)}%`;
  document.getElementById("progress-bar").style.width = `${percent}%`;
}
