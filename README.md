# Rock-Paper-Scissors-Project
I will create the game Rock Paper Scissors. This game will be played entirely in the console.
I will approach this in a problem solving approach.

# Rock Paper Scissors Project

This project is a simple implementation of the classic "Rock, Paper, Scissors" game. The game is played entirely in the console, where the user competes against the computer. The project was developed with a problem-solving approach, and along the way, we encountered and resolved several issues while also improving the game's functionality.

---

## Features
- The game allows the user to play up to 5 rounds against the computer.
- The computer makes random choices between "rock," "paper," and "scissors."
- The game keeps track of the player's score, the computer's score, and the number of rounds played.
- At the end of the game, the final winner is announced.
- The user is prompted to play again after the game ends.

---

## Errors and Solutions Encountered.

### 1. **SyntaxError: Unexpected Identifier**
**Problem**: A function was named `check result()` with a space in the name, which is invalid in JavaScript.  
**Solution**: We renamed the function to `checkResult()` to follow proper JavaScript naming conventions.

---

### 2. **Uncaught ReferenceError: playgame is not defined**
**Problem**: The code included a call to a non-existent function `playgame()`.  
**Solution**: We removed the `playgame()` call since it was unnecessary and not defined anywhere in the code.

---

### 3. **Uncaught TypeError: Cannot read properties of null (reading 'toLowerCase')**
**Problem**: The `prompt()` function can return `null` if the user cancels the input dialog. Calling `.toLowerCase()` on `null` caused this error.  
**Solution**: We added a check to ensure the value returned by `prompt()` is not `null` before calling `.toLowerCase()`. If the user cancels, the game exits gracefully with a message.

---

## Improvements Made
1. **Graceful Handling of User Input**:
   - Added checks to handle invalid inputs and cancellations by the user.
   - If the user enters an invalid choice, they are prompted again without breaking the game.

2. **Game Reset Functionality**:
   - Implemented a `resetGame()` function to reset scores and rounds when the user chooses to play again.

3. **Final Results Display**:
   - Added a `checkResult()` function to summarize the final outcome of the game after all rounds are completed.

4. **Code Readability**:
   - Improved function and variable naming for better readability and maintainability.

---

## How to Play
1. Open the project in a browser or run it in a JavaScript console.
2. The game will prompt you to enter "rock," "paper," or "scissors."
3. The computer will make its choice, and the result of the round will be displayed.
4. Play up to 5 rounds, and the final winner will be announced.
5. After the game ends, you will be asked if you want to play again. Enter "yes" to restart or "no" to exit.

---