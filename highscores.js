document.addEventListener("DOMContentLoaded", function(){

var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores.map ( score => {
    return `<li class="high-score text-center">${score.name}-${score.score}</li>`;
})
.join("");

})