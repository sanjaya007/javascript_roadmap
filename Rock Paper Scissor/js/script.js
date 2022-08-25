const myGame = ()=>{
    let pScore = 0;
    let cScore = 0;

    //Start game
    const startGame = ()=>{
        const letsPlay = document.querySelector('.start button');
        const startScreen = document.querySelector('.start');
        const matchScreen = document.querySelector('.match');

        letsPlay.addEventListener('click', ()=>{
            startScreen.classList.add('fadeOut');
            matchScreen.classList.remove('fadeOut');
        });
    }

    //Play match
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = "";
            });
        });

        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option =>{
            option.addEventListener('click', function(){
                //Computer Choice
                const randomComputerNumber = Math.floor(Math.random() * computerOptions.length);
                const computerChoice = computerOptions[randomComputerNumber];

                // //Call compare function
                // compare(this.className, computerChoice);

                // //Update Image
                // playerHand.src = `./images/${this.className}.png`;
                // computerHand.src = `./images/${computerChoice}.png`;

                setTimeout(()=>{
                    //Call compare function
                    compare(this.className, computerChoice);

                    //Update Image
                    playerHand.src = `./images/${this.className}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;

                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });

    }

    const updateScore = ()=>{
        const playerScore = document.querySelector('.playerScore p');
        const computerScore = document.querySelector('.computerScore p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    //Compare choices
    const compare = (playerChoice, computerChoice) =>{

        const winner = document.querySelector('.winner');

        //Check draw
        if (playerChoice === computerChoice){
            winner.textContent = "It is a tie !";
            return;
        }

        //Check for rock
        if (playerChoice === 'rock'){
            if (computerChoice === 'scissors'){
                winner.textContent = "You win !";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "You lost !";
                cScore++;
                updateScore();
                return;
            }
        }

        //Check for paper
        if (playerChoice === 'paper'){
            if (computerChoice === 'rock'){
                winner.textContent = "You win !";
                pScore++;
                updateScore();
                return;
        }else{
                winner.textContent = "You lost !";
                cScore++;
                updateScore();
                return;
            }
        }

        //Check for scissors
        if (playerChoice === 'scissors'){
            if (computerChoice === 'paper'){
                winner.textContent = "You Win !";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "You lost !";
                cScore++;
                updateScore();
                return;
            }
        }
    }

    startGame();
    playMatch();
}

myGame();