//Generate random computer choice
//Get user choice using prompt
//convert user choice to lowercase
//Compare both choices and return result string
//Run 5 times
//Show winner or loser at end

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

