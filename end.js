document.addEventListener("DOMContentLoaded", function(){

var initials = document.getElementById("initials");
var saveScoreBtn = document.getElementById("endBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

var maxHighScores = 5;



finalScore.innerText += " " + mostRecentScore;



initials.addEventListener("keyup", ()  => { 
    saveScoreBtn.disabled = !initials.value;
    
});



function saveHighScore () {
    
    var score = {
        score: Math.floor(Math.random()*100),
        name: initials.value
    };
    
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("highscores.html");

    console.log(highScores);
    
};

saveScoreBtn.addEventListener("click", saveHighScore);

})