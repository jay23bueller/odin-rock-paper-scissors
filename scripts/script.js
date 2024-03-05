const choices = ["rock", "paper", "scissors"];

//Randomly choose between rock, paper,and scissors
function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

//Get player input and validate it
function getPlayerChoice() {
    let choice;

    do {
        choice = window.prompt("Type in one of the following options: rock, paper, scissors").toLowerCase();
        if(choices.findIndex(val => val === choice) === -1)
            console.log("Please enter a valid option");
    } while(choices.findIndex(val => val === choice) === -1)

    return choice;
}

//Play a round
function playRound(playerChoice, computerChoice) {
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
    } else {
        output = `You Win! ${playerChoice} beats ${computerChoice}!`;
        playerWon = true;
    }

   return {output,playerWon,computerWon};
}

// Play a game, best of 5
function playGame() {
    let playerWins = 0;
    let computerWins = 0;

    for(let i = 0; i < 5; i++) {
        let results = playRound(getPlayerChoice(), getComputerChoice());
        console.log(results.output);
        if(results.playerWon) playerWins++;
        if(results.computerWon) computerWins++;
    }

    if(playerWins === computerWins) console.log("Draw!");
    else if(playerWins > computerWins) console.log("Player won!");
    else console.log("Computer won!");
}

playGame();