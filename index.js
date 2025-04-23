// Rock, Paper, Scissors Game
// This is a simple implementation of the classic game "Rock, Paper, Scissors".
// The game allows a player to play against the computer.
// The player can choose rock, paper, or scissors, and the computer makes a random choice.
// The game keeps track of the score and announces the winner when either the player or computer reaches 5 points.
// The game is played using a web interface.

const options = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Function to play a single round
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

// Function to handle the player's choice
function handleChoice(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  // Update the scores in the DOM
  document.getElementById("user-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;

  // Display the result message
  document.getElementById("message").textContent = result;

  // Check if the game is over
  if (playerScore === 5 || computerScore === 5) {
    const finalMessage =
      playerScore > computerScore
        ? "Congratulations! You won the game!"
        : "Game over! The computer won.";
    document.getElementById("message").textContent = finalMessage;

    // Reset the game
    resetGame();
  }
}

// Function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("user-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("message").textContent = "Result: ?";
}