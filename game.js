// globals
let score = [0,0,0];
let win = false;
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');
let playAgainButton = document.getElementById('play-again');

// eventListners
rockButton.addEventListener("click", function () {
    game('rock');
})
paperButton.addEventListener("click", function () {
    game('paper');
})
scissorsButton.addEventListener("click", function () {
    game('scissors');
})
playAgainButton.addEventListener("click", function () {
    resetGame();
})

// generates int out of 0,1,2
function generateComputerInput() {
    let choices = ['rock','paper','scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

// returns 'tie', 'user', 'computer' depending on comparisons of user and computer input
function gameLogic(userInput, computerInput) {
    if (userInput == computerInput) {
        return 'tie';
    } else if (userInput == 'rock' && computerInput == 'paper') {
        return 'computer';
    } else if (userInput == 'rock' && computerInput == 'scissors') {
        return 'user';
    } else if (userInput == 'paper' && computerInput == 'rock') {
        return 'user';
    } else if (userInput == 'paper' && computerInput == 'scissors') {
        return 'computer';
    } else if (userInput == 'scissors' && computerInput == 'paper') {
        return 'user';
    } else if (userInput == 'scissors' && computerInput == 'rock') {
        return 'computer';
    } else {
        console.log('Something in the gameLogic function is wrong');
    }
}

// updates array num based off of the gameResult
function updateScore(gameResult) {
    if (gameResult == 'user') {
        score[0] += 1;
    } else if (gameResult == 'computer') {
        score[1] += 1;
    } else if (gameResult == 'tie') {
        score[2] += 1;
    } else {
        console.log('Something in the updateScore function is wrong');
    }
}

// IN PROGRESS
function updateVisualScore(gameResult) {
    if (gameResult == 'user') {
        document.getElementById('player-wins').textContent = score[0];
    } else if (gameResult == 'computer') {
        document.getElementById('computer-wins').textContent = score[1];
    } else if (gameResult == 'tie') {
        document.getElementById('ties').textContent = score[2];
    } else {
        console.log('Something in the updateVisualScore function is wrong');
    }
}

// updates #game-message on the DOM based off of the gameResult
function updateMessage(gameResult) {
    if (gameResult == 'user') {
        document.querySelector('#game-message').textContent = 'You won that round!';
    } else if (gameResult == 'computer') {
        document.querySelector('#game-message').textContent = 'You lost that round!';
    } else if (gameResult == 'tie') {
        document.querySelector('#game-message').textContent = 'You tied that round!';
    } else {
        console.log('Something in the updateMessage function is wrong');
    }
}

// updates #game-message on the DOM if a win is achieved
function checkWin() {
    if (score[0] == 5) {
        document.querySelector('#game-message').textContent = 'You win!';
        win = true;
    } else if (score[1] == 5) {
        document.querySelector('#game-message').textContent = 'You lose!';
        win = true;
    } else {
        return;
    }
}

// resets the score and the win variable so the user can play again
function resetGame() {
    score = [0,0,0];
    document.getElementById('player-wins').textContent = score[0];
    document.getElementById('computer-wins').textContent = score[1];
    document.getElementById('ties').textContent = score[2];
    document.getElementById('game-message').textContent = 'Click a button to play!';
    win = false;
}

// the 'main' game function
function game(userInput) {
    if (win == false) {
        let result = gameLogic(userInput, generateComputerInput());
        updateScore(result);
        updateVisualScore(result);
        updateMessage(result);
        checkWin();
    } else {
        return;
    }
}