const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML= highScores
    .map(score =>{
        return `<li class="high-score"> ${score.name}  ==>  ${score.score} Marks</li>`;
    })
    .join("");
    
console.log(highScoresList);