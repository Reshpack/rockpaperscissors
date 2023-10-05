console.log('hi');

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
const choice = options[Math.floor(Math.random() * options.length)]
console.log(choice);
return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Tie!";
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
     (playerSelection == "scissor" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie!"){
        return "It's a Tie!!"
    }
    else if(result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `YOU LOSE!! ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));