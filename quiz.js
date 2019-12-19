document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded


var startBtn = document.getElementById("start");
console.log(startBtn);
var paraGrab = document.getElementById("para");
console.log(paraGrab);
var listDiv = document.getElementById("myList");    
console.log(listDiv);
var container = document.getElementById("container");
var questionEl = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choices")); 
console.log(choices);
var acceptingAnswers = true;
var questionCounter = 0;
var maxQuestions = 3;
var timeEl = document.getElementById("timer");
var randomQuestion, questionIndex;
var time;
var availableQuestions = [];

//vars for getting score
var score = 0;
var correctBonus = 10;
var currentQuestion = {};

startBtn.addEventListener("click", quizStart);


function quizStart() {
    //hide the button and paragraph
  console.log("Wow it started!");
    startBtn.setAttribute("id", "hide");
    paraGrab.setAttribute("id", "hide");


    //
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ... questions];
    console.log(availableQuestions);

    // show the question and choices
    console.log(listDiv);
    listDiv.classList.remove("hide");
    console.log(listDiv.classList);
    time = setInterval(quiz, 60000);
    console.log(time);

    nextQuestion();
}

function quiz() {
  
  console.log("we made it here!");
  questionEl.append();
  
}


function nextQuestion() {
  questionCounter++;

  questionIndex = Math.floor(Math.random() * availableQuestions.length);
  console.log(questionIndex);
  
  currentQuestion = availableQuestions[questionIndex];
  console.log(currentQuestion);

  questionEl.innerText = currentQuestion.title;
  
}

function showQuestion(title) {
  questionIndex = questions[title * randomQuestion];
}

function choicesAppend () {
  return;
}

function checkAnswer () {
  return;
}

// choices.addEventListener("click", checkAnswer);

function setAnswer() {

  return;
}
startBtn.addEventListener("click", quizStart);
});