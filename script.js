let elements = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * elements.length);
  let computerChoice = elements[randomIndex];
  return computerChoice;
}

function getUserChoice() {
  let userChoice = prompt("Write a value (Rock, Paper, Scissors):").toLowerCase();
  return userChoice;
}

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    alert(`It's a tie!`);
    return; // Exit the function on tie
  }

  if (userChoice === 'rock' && computerChoice === 'scissors' ||
      userChoice === 'paper' && computerChoice === 'rock' ||
      userChoice === 'scissors' && computerChoice === 'paper') {
    userScore++;
    alert(`You won! Your score is: ${userScore}`);
  } else {
    computerScore++;
    alert(`You lose! Computer score is: ${computerScore}`);
  }
}

function playGame() {
  let roundsPlayed = 0; // Track played rounds
  while (roundsPlayed < 5 && userScore < 3 && computerScore < 3) {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
    roundsPlayed++;
  }

  if (userScore > computerScore) {
    alert('U wyn!');
  } else {
    alert('U l0se!');
  }
}

playGame();