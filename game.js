function generateComputerInput() {
    let choices = ['rock','paper','scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

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
        console.log('Something is wrong :/')
    }
}