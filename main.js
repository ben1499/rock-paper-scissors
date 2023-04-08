//Generate random computer choice
//Get user choice using prompt
//convert user choice to lowercase
//Compare both choices and return result string
//Run 5 times
//Show winner or loser at end based on a win loss counter


function getPlayerChoice() {
    let playerSelection = prompt("Enter your choice: ");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors";
    }
}



let winCount = 0;
let loseCount = 0;
let gameCount = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It is a tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        winCount++;
        gameCount++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        loseCount++;
        gameCount++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    while (gameCount < 5) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (winCount > loseCount) {
        console.log("You won! Player wins the game");
    } else {
        console.log("You lost! Computer wins the game");
    }
}

game();