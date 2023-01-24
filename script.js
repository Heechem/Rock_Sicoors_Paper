"use strict";

const computerChoice = ["ROCK", "PAPER", "SCISSORS"];
const buttons = document.querySelectorAll("input");
const startGame = document.querySelector(".start");
const container = document.querySelector(".container");
const images = document.querySelectorAll("img");
const restartBtn = document.querySelector(".restart");
const humanArea = document.querySelector(".human-choice");
const aiChoice = document.querySelector(".computer-choice");
const playBtn = document.querySelector(".play-buttons");
const HumanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".AI-score");
const finalMessage = document.getElementById("message");
const equalityMsg = document.querySelector(".equality");
const winningMsg = document.querySelector(".winning-message");

let computerSelection;
let score = 0;
let compScore = 0;

HumanScore.innerHTML = `Your scrore : 0`;
computerScore.innerHTML = `Computer score : 0`;

// player selection and how it to the screen

let PlayerSelection = container.addEventListener("click", function (e) {
  e.stopPropagation();
  if (
    e.target.className === "paper" ||
    e.target.className === "rock" ||
    e.target.className === "scissors"
  ) {
    PlayerSelection = e.target.className;
  }
  images.forEach((img) => {
    e.stopPropagation();
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

container.addEventListener("click", function (e) {
  if (
    e.target.className === "paper" ||
    e.target.className === "rock" ||
    e.target.className === "scissors"
  ) {
    if (score <= 4 && compScore <= 4) {
      game();
      removeVisible();
    } else {
      finalMessage.classList.add("visible");
      startGame.disabled = true;
    }
  }
});

// the game function

function playRound(PlayerSelection, computerSelection) {
  const PlayerSensitive = PlayerSelection.toUpperCase().trim();
  const computerSensitive = computerSelection.toUpperCase().trim();

  // alert(`The AI choosed ${computerSensitive}`);

  // start by the comparaison

  if (PlayerSensitive.trim() === computerSelection.toUpperCase().trim()) {
    equalityMsg.classList.add("visible");
  } else {
    winner(PlayerSensitive, computerSensitive);
  }
}

function game() {
  computerSelection = getComputerChoice().toLocaleLowerCase();

  computerAppear(computerSelection);
}

// restart game and score

function restart() {
  // equalityMsg.classList.remove("visible");
  removeVisible();
  startGame.disabled = false;
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
  finalMessage.classList.remove("visible");
}

// Start the game

startGame.addEventListener("click", (e) => {
  // game();
  if (equalityMsg.classList.contains("visible")) {
    removeVisible();
  }

  if (winningMsg.classList.contains("visible")) {
    removeVisible();
  }

  playRound(PlayerSelection, computerSelection);

  images.forEach((img) => {
    img.classList.remove("selected");
  });
  images.forEach((img) => {
    img.classList.remove("AI-choice");
  });
  // equalityMsg.classList.remove("visible");
});
restartBtn.addEventListener("click", restart);

//function that compares the winner

function winner(P1, P2) {
  if ((P1 == "PAPER" && P2 == "ROCK") || (P1 == "SCISSORS" && P2 == "PAPER")) {
    // alert(`You win ! ${P1} beats ${P2}`);
    winningMsg.classList.add("visible");
    winningMsg.innerHTML = `You win ! ${P1} beats ${P2}`;
    score++;
    HumanScore.innerHTML = `Your scrore : ${score}`;
  } else if (
    (P1 == "ROCK" && P2 == "SCISSORS") ||
    (P1 == "PAPER" && P2 == "ROCK")
  ) {
    winningMsg.classList.add("visible");
    winningMsg.innerHTML = `You win !${P1} beats ${P2}`;
    // alert(`You win !${P1} beats ${P2}`);
    score++;
    HumanScore.innerHTML = `Your scrore : ${score}`;
  } else if (
    (P1 == "ROCK" && P2 == "PAPER") ||
    (P1 == "PAPER" && P2 == "SCISSORS")
  ) {
    winningMsg.classList.add("visible");
    winningMsg.innerHTML = `You Lost !! ${P2} beats ${P1}`;

    // alert(`You Lost !! ${P2} beats ${P1}`);
    compScore++;
    computerScore.innerHTML = `computer score is ${compScore}`;
  } else if (P1 == "SCISSORS" && P2 == "ROCK") {
    winningMsg.classList.add("visible");
    winningMsg.innerHTML = `You Lost !! ${P2} beats ${P1}`;
    // alert(`You Lost !! ${P2} beats ${P1}`);
    compScore++;
    console.log("hello");

    computerScore.innerHTML = `computer score is : ${compScore}`;
  }
}

// function addvisible() {
//   ;
// }

function removeVisible() {
  equalityMsg.classList.remove("visible");
  winningMsg.classList.remove("visible");
}
equalityMsg.addEventListener("click", removeVisible);
winningMsg.addEventListener("click", removeVisible);
