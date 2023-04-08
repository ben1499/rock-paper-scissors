//Generate random computer choice
//Get user choice using prompt
//convert user choice to lowercase
//Compare both choices and return result string
//Run 5 times
//Show winner or loser at end


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


let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
console.log(computerSelection);


function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    if (playerSelection === computerSelection) {
        return "It is a tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

console.log(playRound(playerSelection, computerSelection));