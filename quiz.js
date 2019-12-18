document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded


var startBtn = document.getElementById("start");
console.log(startBtn);
var paraGrab = document.getElementById("para");
console.log(paraGrab);
var listDiv = document.getElementById("myList");    
console.log(listDiv);
var questionEl = document.getElementById("question");
var choices = document.getElementById("choices"); 
var container = document.getElementById("container");
var timeEl = document.getElementById("timer");
var randomQuestion, questionIndex;
var time;
var score = 0;

startBtn.addEventListener("click", quizStart);


function quizStart() {
    //hide the button and paragraph
  console.log("Wow it started!");
    startBtn.setAttribute("id", "hide");
    paraGrab.setAttribute("id", "hide");

    // show the question and choices
    console.log(listDiv);
    listDiv.classList.remove("hide");
    console.log(listDiv.classList);
    time = setInterval(quiz, 60000);
    console.log(time);

    nextQuestion();
}

function quiz() {
  nextQuestion();
  console.log("we made it here!");
  questionEl.append(questions.title[questionIndex]);
  
}


function nextQuestion() {
  randomQuestion = Math.floor(Math.random() * 9);
  console.log(randomQuestion);
  questions[title] = showQuestion[questionIndex];
  
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

choices.addEventListener("click", checkAnswer);

function setAnswer() {

  return;
}
});