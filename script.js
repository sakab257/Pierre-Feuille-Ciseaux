let you;
let score = 0;
let ennemy_score = 0;
let choice = ["rock","paper","scissors"];

const ennemy_image = document.getElementById("ennemy-choice");
const image = document.getElementById("choice");




document.getElementById("rock").onclick = function(){
    image.src = "rock.png";
    let opponent_choice = choice[Math.floor(Math.random() * 3)];
    ennemy_image.src = opponent_choice + ".png";

    if(opponent_choice == "rock"){
        score += 0;
        ennemy_score += 0;
        document.getElementById("ennemy-score").textContent = ennemy_score;
        document.getElementById("score").textContent = score;
    } else if(opponent_choice == "paper"){
        score += 0;
        ennemy_score += 1;
        document.getElementById("ennemy-score").textContent = ennemy_score;
        document.getElementById("score").textContent = score;
    } else{
        score += 1;
        ennemy_score += 0;
        document.getElementById("ennemy-score").textContent = ennemy_score;
        document.getElementById("score").textContent = score;
    }
}

document.getElementById("paper").onclick = function(){
    image.src = "paper.png";
    let opponent_choice = choice[Math.floor(Math.random() * 3)];
    ennemy_image.src = opponent_choice + ".png";

    if(opponent_choice == "rock"){
        score += 1;
        ennemy_score += 0;
        document.getElementById("ennemy-score").textContent = ennemy_score;
        document.getElementById("score").textContent = score;
    } else if(opponent_choice == "paper"){
        score += 0;
        ennemy_score += 0;
        document.getElementById("ennemy-score").textContent = ennemy_score;
        document.getElementById("score").textContent = score;
    } else{
        score += 0;
        ennemy_score += 1;
        document.getElementById("ennemy-score").textContent = ennemy_score;
        document.getElementById("score").textContent = score;
    }
}

document.getElementById("scissors").onclick = function(){
    image.src = "scissors.png";
    let opponent_choice = choice[Math.floor(Math.random() * 3)];
    ennemy_image.src = opponent_choice + ".png";

    if(opponent_choice == "rock"){
        score += 0;
        ennemy_score += 1;
        document.getElementById("ennemy-score").textContent = ennemy_score;
        document.getElementById("score").textContent = score;
    } else if(opponent_choice == "paper"){
        score += 1;
        ennemy_score += 0;
        document.getElementById("ennemy-score").textContent = ennemy_score;
        document.getElementById("score").textContent = score;
    } else{
        score += 0;
        ennemy_score += 0;
        document.getElementById("ennemy-score").textContent = ennemy_score;
        document.getElementById("score").textContent = score;
    }
}