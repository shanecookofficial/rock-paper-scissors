// globals
let score = [0,0,0];
let win = False;
let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');

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
    if (score[0] = 5) {
        document.querySelector('#game-message').textContent = 'You win!';
    } else if (score[1] = 5) {
        document.querySelector('#game-message').textContent = 'You lose!';
    } else {
        return;
    }
}

// the 'main' game function
function game(userInput) {
    if (win = False) {
        let result = gameLogic(userInput, generateComputerInput());
        updateScore(result);
        updateMessage(result);
        checkWin();
    } else {
        return;
    }
}