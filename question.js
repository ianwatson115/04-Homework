var startBtn = document.getElementById("start");
var timer = 0;
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

}
  
  

startBtn.addEventListener("click", quiz());
  