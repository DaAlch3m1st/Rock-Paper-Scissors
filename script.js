let elements = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];
    return randomElement;
}

function getHumanChoice() {
    let userChoice = prompt("Write a value between. Rock, Paper, Scissors");
    return userChoice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice(elements)) {
        return alert('U won. Your Score is:');
    } else {
        return alert('Bad');
    }
}

// if (Hchoice.toLowerCase() === getComputerChoice(elements)) {
//     return alert('U won. Your Score is:');
// } else {
//     return alert('Bad');
// }

const humanSelection = getHumanChoice();
const computerSelection = getComputerchoice();

playRound(humanSelection, computerSelection);