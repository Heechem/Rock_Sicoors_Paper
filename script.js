const computerChoice = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
  const comptuerRandom =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  return comptuerRandom;
}

function playRound(PlayerSelection, computerSelection) {
  const PlayerSensitive = PlayerSelection.toUpperCase().trim();

  const computerSensitive = computerSelection.toUpperCase().trim();

  console.log(`The AI choosed ${computerSensitive}`);

  // start by the comparaison
  if (PlayerSensitive.trim() === computerSelection.toUpperCase().trim()) {
    console.log("No one won please choose again");
  } else winner(PlayerSensitive, computerSensitive);
}

const PlayerSelection = "";
const computerSelection = getComputerChoice();

function game() {
  for (let i = 0; i < 5; i++) {
    const PlayerSelection = prompt(
      "Please choose between : Rock, Paper, Scissors"
    );
    const computerSelection = getComputerChoice();
    playRound(PlayerSelection, computerSelection);
  }
}

game();

//function that compares the winner
function winner(P1, P2) {
  if ((P1 == "PAPER" && P2 == "ROCK") || (P1 == "SCISSORS" && P2 == "PAPER")) {
    console.log(`You win ! ${P1} beats ${P2}`);
  } else if (
    (P1 == "ROCK" && P2 == "SCISSORS") ||
    (P1 == "PAPER" && P2 == "ROCK")
  ) {
    console.log(`You win !${P1} beats ${P2}`);
  } else if (
    (P1 == "ROCK" && P2 == "PAPER") ||
    (P1 == "PAPER" && P2 == "SCISSORS")
  ) {
    console.log(`You Lost !! ${P2} beats ${P1}`);
  }
}
