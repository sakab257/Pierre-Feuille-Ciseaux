let you;
let score = 0;
let ennemy_score = 0;
let choice = ["rock","paper","scissors"];

const ennemy_image = document.getElementById("ennemy-choice");
const image = document.getElementById("choice");

// Fonction pour changer les grandes images avec animation
function updateBigImage(element, newSrc) {
    element.classList.add("change");

    setTimeout(() => {
        element.src = newSrc;
        element.classList.remove("change");
    }, 300); // Attendre la fin de l'animation
}

// Fonction pour changer les scores avec animation
function updateScore(element, newScore) {
    element.textContent = newScore;
    element.classList.add("score-change");

    setTimeout(() => {
        element.classList.remove("score-change");
    }, 300);
}

// Récupération des éléments HTML
const scoreElement = document.getElementById("score");
const enemyScoreElement = document.getElementById("ennemy-score");

let playerScore = 0;
let enemyScore = 0;

// Détection du clic sur une image
document.querySelectorAll(".images").forEach(image => {
    image.addEventListener("click", function() {
        let playerChoice = this.getAttribute("alt"); // "rock", "paper" ou "scissors"
        let choices = ["rock", "paper", "scissors"];
        let enemyChoice = choices[Math.floor(Math.random() * choices.length)]; // Choix aléatoire de l'ennemi

        // Mise à jour des images avec animation
        updateBigImage(document.getElementById("choice"), playerChoice + ".png");
        updateBigImage(document.getElementById("ennemy-choice"), enemyChoice + ".png");

        // Détermination du gagnant
        if (playerChoice === enemyChoice) {
            console.log("Égalité !");
        } else if (
            (playerChoice === "rock" && enemyChoice === "scissors") ||
            (playerChoice === "paper" && enemyChoice === "rock") ||
            (playerChoice === "scissors" && enemyChoice === "paper")
        ) {
            console.log("Joueur gagne !");
            playerScore++;
            updateScore(scoreElement, playerScore);
        } else {
            console.log("Ennemi gagne !");
            enemyScore++;
            updateScore(enemyScoreElement, enemyScore);
        }
    });
});

