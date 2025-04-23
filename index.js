// Rock, Paper, Scissors Game
// This is a simple implementation of the classic game "Rock, Paper, Scissors".
// The game allows a player to play against the computer for a set number of rounds.
// The player can choose rock, paper, or scissors, and the computer makes a random choice.
// The game keeps track of the score and announces the winner at the end.
// The player can also choose to play again after the game ends.
const options = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let maxRounds = 5;
let playerChoice = null;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}
function game() {
  while (rounds < maxRounds) {
    const input = prompt("Enter rock, paper, or scissors:");
    if (input === null) {
      console.log("Game canceled by the user.");
      return; // Exit the game if the user cancels
    }
    playerChoice = input.toLowerCase();
    if (!options.includes(playerChoice)) {
      console.log("Invalid choice. Please try again.");
      continue;
    }
    const computerChoice = getComputerChoice();
    console.log(`Computer chose: ${computerChoice}`);
    const result = playRound(playerChoice, computerChoice);
    console.log(result);
    rounds++;
  }

  if (playerScore > computerScore) {
    console.log(`You win the game! Final score: ${playerScore} to ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lose the game! Final score: ${computerScore} to ${playerScore}`);
  } else {
    console.log(`The game is a tie! Final score: ${playerScore} to ${computerScore}`);
  }
}

function checkResult() {
  if (playerScore > computerScore) {
    return "You win!";
  } else if (computerScore > playerScore) {
    return "You lose!";
  } else {
    return "It's a tie!";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  rounds = 0;
  playerChoice = null;
  console.log("Game reset. Ready to play again!");
}

function startGame() {
  console.log("Welcome to Rock, Paper, Scissors!");
  console.log(`You have ${maxRounds} rounds to play.`);
  game();
  const input = prompt("Do you want to play again? (yes/no)");
  if (input === null) {
    console.log("Game canceled by the user.");
    return; // Exit if the user cancels
  }
  const playAgain = input.toLowerCase();
  if (playAgain === "yes") {
    resetGame();
    startGame();
  } else {
    console.log("Thanks for playing!");
  }
}

// Start the game
startGame();