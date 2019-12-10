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
      title: "",
      choices: [""],
      answer: ""
    }
    ///etc.
  ];

var startBtn = document.getElementById("start");
var timer = 0;
  
  

startBtn.addEventListener("click", quiz());
  