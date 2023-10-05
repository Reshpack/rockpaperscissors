console.log('hello, world!');

//All Options
const options = ["rock", "paper", "scissors"];
//Math properties (Constants)
function getComputerChoice() {
const choice = options[Math.floor(Math.random() * options.length)]
console.log(choice);
return choice;
}

//function checks each option from player/s choice
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

//Round console to text
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

//Game LOOP
function game(){
    
}

//Spits out the result in the console
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));