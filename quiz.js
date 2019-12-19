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
var choiceEl = Array.from(document.getElementsByClassName("choices")); 
console.log(choiceEl);
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

  if (availableQuestions.length === 0 || questionCounter >= maxQuestions){
    return window.location.assign("end.html");
  }

  questionCounter++;

  questionIndex = Math.floor(Math.random() * availableQuestions.length);
  
  currentQuestion = availableQuestions[questionIndex];

  questionEl.innerText = currentQuestion.title;

  choiceEl.forEach( choice => {
    var number = choice.dataset["number"];
    
    choice.innerText = currentQuestion.choices[number - 1];
  })

  availableQuestions.splice(questionIndex, 1);
  
  acceptingAnswers = true;
}

choiceEl.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) {
      return;
    }
    acceptingAnswers = false; 
    var selectedChoice = e.target;
    var selectedAnswer = selectedChoice.dataset["number"];
    console.log(selectedAnswer);
    nextQuestion();
  })
})

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
//event listeners
startBtn.addEventListener("click", quizStart);

});