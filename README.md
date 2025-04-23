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



The New Updated Version can be played from the webpage.


# Rock Paper Scissors Project

This project is a simple implementation of the classic "Rock, Paper, Scissors" game. The game is now playable directly from a webpage, where the user interacts with buttons representing "rock," "paper," and "scissors." The project has been further enhanced with new features and improvements.

---

## Additional Changes Since the Last Commit

### 1. **Web-Based Gameplay**
- The game has been updated to allow the user to play directly from the webpage by clicking on images representing "rock," "paper," and "scissors."
- The `index.html` file was modified to include buttons with images for each choice (rock, paper, scissors). Each button is linked to the game logic via the `onclick` attribute.

### 2. **Dynamic Score Updates**
- The game now dynamically updates the scores for both the player and the computer on the webpage.
- The `index.js` file was updated to manipulate the DOM and display the current scores and results in real-time.

### 3. **Result Display**
- The result of each round is displayed in a dedicated message area on the webpage.
- A final message is shown when either the player or the computer reaches 5 points, declaring the winner.

### 4. **Game Reset**
- After the game ends, the scores and result message are reset automatically, allowing the user to start a new game without refreshing the page.

---

## How to Play the New Web-Based Game

1. Open the `index.html` file in a browser.
2. You will see three buttons with images representing "rock," "paper," and "scissors."
3. Click on one of the buttons to make your choice.
4. The computer will make a random choice, and the result of the round will be displayed on the screen.
5. The scores for both the player and the computer will update dynamically.
6. The game continues until either the player or the computer reaches 5 points.
7. Once the game ends, a final message will be displayed announcing the winner.
8. The game will automatically reset, allowing you to play again.

---

## Example Gameplay
1. **Initial Screen**:
   - The scoreboard shows `0:0` for the player and computer scores.
   - The result message displays "Result: ?".

2. **During Gameplay**:
   - After clicking "rock," the result might display: "You win! rock beats scissors."
   - The scoreboard updates to reflect the new scores.

3. **Game Over**:
   - When the player reaches 5 points, the message displays: "Congratulations! You won the game!"
   - The game resets automatically for a new round.

---

## Lessons Learned
- Transitioning from a console-based game to a web-based game requires integrating JavaScript with HTML and manipulating the DOM.
- Adding interactivity through event listeners (e.g., `onclick`) enhances the user experience.
- Dynamic updates to the webpage (e.g., scores and messages) make the game more engaging and user-friendly.

---

## Future Enhancements
- Add animations or sound effects for each choice to make the game more interactive.
- Allow the user to set custom rules, such as the number of rounds required to win.
- Add a leaderboard to track high scores across multiple games.

---

Enjoy playing the updated Rock Paper Scissors game directly from your browser!