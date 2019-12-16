document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded


var startBtn = document.getElementById("start");
console.log(startBtn);
var paraGrab = document.getElementById("para");
console.log(paraGrab);
var listDiv = document.getElementById("list-group");  
var question = document.getElementById("question");
var choices = document.getElementById("choices"); 
var container = document.getElementById("container");
var timeEl = document.getElementById("timer");
var time;
var score = 0;

startBtn.addEventListener("click", quizStart);


function quizStart() {
    //hide the button and paragraph
  console.log("Wow it started!");
    startBtn.setAttribute("id", "hide");
    paraGrab.setAttribute("id", "hide");

    // show the question and choices
    listDiv.removeAttribute("id");
}
// function quiz() {

//   for (var i = 0; i < questions.length; i++) {

//     time = 60;
//     timer.innerHTML(time.value);

//     var title = questions[i].title;
//     document.append(title);
//     var ul = document.getElementById("list");
//     var li = document.createElement("li");
//     var choices = document.createElement("button", questions[i].choices);
//     li.appendChild(choices);
//     ul.appendChild(li);

//     var userChoice = this.addEventListener(questions.choices);

//     var answer = questions[i].answer;

//     if (userChoice.innerHTML === questions[i].answer) {
//       document.createElement("");
//       score = currentTime + 1;
//     } else {
//       score = 0;
//     }
//   }
// }
});