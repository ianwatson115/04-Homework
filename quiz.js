document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded


var startBtn = document.getElementById("start");
// console.log(startBtn);
var paraGrab = document.getElementById("para");
// console.log(paraGrab);
var listDiv = document.getElementById("myList");    
// console.log(listDiv);
var container = document.getElementById("container");
var questionEl = document.getElementById("question");
var choiceEl = Array.from(document.getElementsByClassName("choices")); 
// console.log(choiceEl);
var acceptingAnswers = true;
var questionCounter = 0;
var maxQuestions = 4;
var timeEl = document.getElementById("timer");
var randomQuestion, questionIndex;
var time;
var availableQuestions = [];

//vars for getting score
var scoreEl = document.getElementById("score");
var score = 0;
var correctBonus = 10;
var currentQuestion = {};

startBtn.addEventListener("click", quizStart);


function quizStart() {
  //hide the button and paragraph
  // console.log("Wow it started!");
  startBtn.setAttribute("id", "hide");
  paraGrab.setAttribute("id", "hide");
  
  questionCounter = 0;
  score = 0;
  availableQuestions = [ ... questions];
  // console.log(availableQuestions);
  
  // show the question and choices
  // console.log(listDiv);
  listDiv.classList.remove("hide");
  // console.log(listDiv.classList);
 
  time = setInterval(60000);
  timeEl = parseInt(time);
  console.log(timeEl);
  nextQuestion();
}

function quiz() {
  
  console.log("we made it here!");
  questionEl.append();
  
}


function nextQuestion() {

  if (availableQuestions.length === 0 || questionCounter >= maxQuestions){
    localStorage.setItem("mostRecentScore", score);
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

    var alertBottom = document.getElementById("getBottom");
    
    // all of our setters
    var classToApply = "incorrect";
    var alertClass = "";
    var alertText = "";

    if (selectedAnswer === currentQuestion.numAnswer) {
      classToApply = "correct";
      score += 5;
      alertClass = "alert-success";
      alertText = "Correct!"
    } else {
      classToApply = "incorrect"
      score -= 5;
      alertClass = "alert-danger";
      alertText = "Incorrect!"
    }

    selectedChoice.classList.add(classToApply);
    alertBottom.classList.add(alertClass);
    alertBottom.innerText += alertText;
    console.log(alertBottom);
    scoreEl.innerText = parseInt(score);
    
     setTimeout(() => {
      selectedChoice.classList.remove(classToApply);
      alertBottom.classList.remove(alertClass);
      alertBottom.innerText = "";

      nextQuestion();

    }, 1000)

    
    
    // console.log(selectedAnswer === currentQuestion.numAnswer);
  })
})

// function showQuestion(title) {
//   questionIndex = questions[title * randomQuestion];
// }

//event listeners
startBtn.addEventListener("click", quizStart);

});