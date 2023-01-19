"use strict";

const computerChoice = ["ROCK", "PAPER", "SCISSORS"];
const buttons = document.querySelectorAll("input");
const startGame = document.querySelector("button");
const container = document.querySelector(".container");
const images = document.querySelectorAll("img");
const restartBtn = document.querySelector(".restart");
const humanArea = document.querySelector(".human-choice");
const aiChoice = document.querySelector(".computer-choice");
const playBtn = document.querySelector(".play-buttons");
const HumanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".AI-score");

let computerSelection;
let score = 0;
let compScore = 0;

HumanScore.innerHTML = `Your scrore :`;
computerScore.innerHTML = `Computer score :`;

// player selection and how it to the screen

let PlayerSelection = container.addEventListener("click", function (e) {
  if (
    e.target.className === "paper" ||
    e.target.className === "rock" ||
    e.target.className === "scissors"
  ) {
    PlayerSelection = e.target.className;
  }
  images.forEach((img) => {
    if (img.className === e.target.className) {
      img.classList.add("selected");
    }
  });
});

// get the computer choice

function getComputerChoice() {
  const comptuerRandom =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];

  return comptuerRandom;
}

function computerAppear(e) {
  images.forEach((image) => {
    if (image.classList.contains(e)) {
      image.classList.add("AI-choice");
    }
  });
}

container.addEventListener("click", function () {
  if (score < 5 && compScore < 5) {
    game();
  } else {
    alert("Session restarted the game is ended");
    restart();
  }
});

// function computerAppear(computerSelection) {
//   images.forEach((image) => {
//     if (
//       aiChoice.children.className === computerSelection &&
//       image.className === computerSelection
//     ) {
//       image.classList.add("AI-choice");
//     }
//   });
// }

// the game function

function playRound(PlayerSelection, computerSelection) {
  const PlayerSensitive = PlayerSelection.toUpperCase().trim();
  const computerSensitive = computerSelection.toUpperCase().trim();

  // alert(`The AI choosed ${computerSensitive}`);

  // start by the comparaison
  if (PlayerSensitive.trim() === computerSelection.toUpperCase().trim()) {
    alert("No one won please choose again");
  } else {
    setTimeout(winner(PlayerSensitive, computerSensitive), 1000);
  }
}

function game() {
  computerSelection = getComputerChoice().toLocaleLowerCase();

  computerAppear(computerSelection);

  // for (let i = 0; i < 5; i++) {
  //   const PlayerSelection = prompt(
  //     "Please choose between : Rock, Paper, Scissors"
  //   );
  //   const computerSelection = getComputerChoice();
  //   playRound(PlayerSelection, computerSelection);
  // }
  // images.forEach((image) => {
  //   if (image.className === computerSelection.toLocaleLowerCase()) {
  //     image.classList.add("AI-choice");
  //   }
  // });

  // playRound(PlayerSelection, computerSelection);
}

// restart game and score

function restart() {
  images.forEach((img) => {
    img.classList.remove("selected");
  });

  images.forEach((img) => {
    img.classList.remove("AI-choice");
  });
  score = 0;
  compScore = 0;
  HumanScore.innerHTML = `Your scrore :0`;
  computerScore.innerHTML = `Computer score :0`;
}

// Start the game

startGame.addEventListener("click", (e) => {
  e.preventDefault();
  // game();
  playRound(PlayerSelection, computerSelection);

  images.forEach((img) => {
    img.classList.remove("selected");
  });
  images.forEach((img) => {
    img.classList.remove("AI-choice");
  });
});
restartBtn.addEventListener("click", restart);

//function that compares the winner

function winner(P1, P2) {
  if ((P1 == "PAPER" && P2 == "ROCK") || (P1 == "SCISSORS" && P2 == "PAPER")) {
    alert(`You win ! ${P1} beats ${P2}`);
    score++;
    HumanScore.innerHTML = `Your scrore : ${score}`;
  } else if (
    (P1 == "ROCK" && P2 == "SCISSORS") ||
    (P1 == "PAPER" && P2 == "ROCK")
  ) {
    alert(`You win !${P1} beats ${P2}`);
    score++;
    HumanScore.innerHTML = `Your scrore : ${score}`;
  } else if (
    (P1 == "ROCK" && P2 == "PAPER") ||
    (P1 == "PAPER" && P2 == "SCISSORS")
  ) {
    alert(`You Lost !! ${P2} beats ${P1}`);
    compScore++;
    computerScore.innerHTML = `computer score is ${compScore}`;
  } else if (P1 == "SCISSORS" && P2 == "ROCK") {
    alert(`You Lost !! ${P2} beats ${P1}`);
    compScore++;
    computerScore.innerHTML = `computer score is ${compScore}`;
  }
}
