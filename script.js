let player = { name: 'player',score: 0, choice: null };
let computer = { name: 'computer', score: 0, choice: null };

let choices = ["rock", "scissors", "paper"];

window.onload = function() {
    choices.forEach(renderChoices);
}

function renderChoices(choice, _index, _arr) {
  let choiceImg = document.getElementsByClassName(choice)[0];
  choiceImg.addEventListener("click", selectChoice);
}

function selectChoice() {
    player.choice = this.className
    playerImg = document.getElementsByClassName("player-choice")[0]
    playerImg.src = player.choice + ".png";

    //Computer choices
    computer.choice = choices[Math.floor(Math.random() * 3)];
    document.getElementsByClassName("computer-choice")[0].src = computer.choice + ".png"
     

    if (computer.choice ==  player.choice) {
      return
    }

    let winner = PlayerHasWon(player.choice, computer.choice) ? player : computer
    winner.score += 1

    let winnerCountText = document.getElementsByClassName(`${winner.name}-score`)[0].getElementsByTagName('p')[0]

    winnerCountText.innerText = winner.score
}

function PlayerHasWon(playerChoice, computerChoice) {
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return true
    }
    
    if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return true
    }
    
    if (playerChoice == 'paper' && computerChoice == 'rock') {
        return true
    }
    
    return false
}