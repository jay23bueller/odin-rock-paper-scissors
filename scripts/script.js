const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock-button");
rockButton.addEventListener("click", () => {playRound("rock", getComputerChoice());});

const paperButton = document.querySelector("#paper-button");
paperButton.addEventListener("click", () => {playRound("paper", getComputerChoice());});

const scissorsButton = document.querySelector("#scissors-button");
scissorsButton.addEventListener("click",() => {playRound("scissors", getComputerChoice());});


//Randomly choose between rock, paper,and scissors
function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}


//Play a round
function playRound(playerChoice, computerChoice) {
    if(playerScore == 5 || computerScore == 5) return;
    
    const playerScoreElement = document.querySelector("#player-score");
    const roundPromptElement = document.querySelector("#round-prompt");
    const computerScoreElement = document.querySelector("#computer-score");
    
    let output;
    let playerWon = false;
    let computerWon = false;
    if(playerChoice == computerChoice) {
        output = "It's a draw" + " you both chose " + playerChoice;
        playerWon = true;
        computerWon = true;
    } else if((playerChoice == "rock" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "scissors") || (playerChoice == "scissor" && computerChoice == "rock")) {
        output = `You Lose! ${computerChoice} beats ${playerChoice}!`;
        computerWon = true;
        computerScore++;
    } else {
        output = `You Win! ${playerChoice} beats ${computerChoice}!`;
        playerWon = true;
        playerScore++;
    }

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    roundPromptElement.textContent = output;
   
}

