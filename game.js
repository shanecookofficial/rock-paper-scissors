function setComputerInput() {
    let choices = ['rock','paper','scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function getComputerInput() {
    return setComputerInput();
}