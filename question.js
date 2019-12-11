var startBtn = document.getElementsByClassName("start");
var divAbove = document.getElementsByClassName("container");
var timer = document.getElementById("timer");
var time = 0;
var score = 0;



var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },

    {
      title: "Inside the parentheses of a for loop includes the following EXCEPT",
      choices: ["variable declaration", "update counter" , "condition", "semicolon at the end of the update counter"],
      answer: "semicolon at the end of the update counter"
    }
    ///etc.
  ];

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
  
  

startBtn.addEventListener("click", quiz());
  