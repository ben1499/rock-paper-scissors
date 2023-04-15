//Generate random computer choice
//Get user choice using prompt
//convert user choice to lowercase
//Compare both choices and return result string
//Run 5 times
//Show winner or loser at end based on a win loss counter

const buttons = document.querySelectorAll('button');
const output = document.querySelector('#output');
const result = document.querySelector('#result');

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');


buttons.forEach((button) => button.addEventListener('click', playRound));


function getPlayerChoice() {
    let playerSelection = prompt("Enter your choice: ");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerSelection;
    } else {
        return;
    }
   
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
//let gameCount = 0;

function playRound(e) {
    result.textContent = '';
    console.log(winCount);
    //output.textContent = '';
    let playerSelection = this.classList.value;
    let computerSelection = getComputerChoice();
    console.log(playerSelection);
    if (playerSelection === computerSelection) {
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        output.innerText = `It is a tie! \n ${playerSelection} ties with ${computerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        winCount++;
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        playerScore.textContent = winCount;
        output.innerText = `You Won! \n${playerSelection} beats ${computerSelection}`;
    } else {
        loseCount++;
        computerScore.textContent = loseCount;
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        output.innerText = `You Lost! \n${computerSelection} beats ${playerSelection}`;
    }
    if (winCount === 5) {
        result.textContent = "You have won the game!!";
        winCount = 0;
        loseCount = 0;
        playerScore.textContent = '?';
        computerScore.textContent = '?';
        return;
    } else if (loseCount === 5) {
        result.textContent = "You lost! Computer won the game!!";
        winCount = 0;
        loseCount = 0;
        playerScore.textContent = '?';
        computerScore.textContent = '?';
        return;
    }
}




// function game() {
//     while (gameCount < 5) {
//         let playerSelection = getPlayerChoice();
//         let computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     if (winCount > loseCount) {
//         console.log("You won! Player wins the game");
//     } else {
//         console.log("You lost! Computer wins the game");
//     }
// }

// game();