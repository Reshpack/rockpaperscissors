const game = ()=> {
    let pScore = 0;
    let cScore = 0;


    //Start the Game
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelectorAll('.player-hand');
        const computerHand = document.querySelectorAll('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        //Computers Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option=> {
            option.addEventListener('click', function(){
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //Where you compare hands function text
                compareHands(this.textContent, computerChoice);
                //Updating Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                
                //Animation
                playerHand.styles.animation = "shakePlayer 2s ease";
                computerHand.styles.animation = "shakeComputer 2s ease";
            });
        });  
    };

    //Update score function
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        //Updating Text 
        const winner = document.querySelector('.winner');
        //checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie!';
            return;
        }
        //Checking for rock and winner
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        //Checking for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            }
        }
        //Checking for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    //Call all inner functions
    startGame();
    playMatch();
};
//Start Game
game();