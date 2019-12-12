var startBtn = document.getElementsByClassName("start");
var paraGrab = document.getElementsByClassName("para");
var question = document.getElementsByClassName("question");
var choices = document.getElementsByClassName("choices"); 
var divAbove = document.getElementsByClassName("container");
var timer = document.getElementById("timer");
var time = 0;
var score = 0;


function quizStart() {
    //hide the button and paragraph
    startBtn.setAttribute("class", "hide");
    paraGrab.setAttribute("class", "hide");

    //show the question and choices
    question.classList.remove("hide");
    choices.classList.remove("hide");

    quiz();
}


function quiz() {

  for (var i = 0; i < questions.length; i++) {

    time = 60;
    timer.innerHTML(time.value);

    var title = questions[i].title;
    document.append(title);
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var choices = document.createElement("button", questions[i].choices);
    li.appendChild(choices);
    ul.appendChild(li);

    var userChoice = this.addEventListener(questions.choices)

    var answer = questions[i].answer;

    if (userChoice.innerHTML === questions[i].answer) {
      document.createElement("");
      score = currentTime + 1;
    } else {
      score = 0;
    }
  }
}
  
  

startBtn.addEventListener("click", quizStart());
