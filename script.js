let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    
    let choice = Math.floor(Math.random() * 3);
    return choice == 0?"rock":choice == 1?"paper":"scissors";
}
function getHumanChoice() {
    Input = prompt("Rock or Paper or Scissors","");
    return Input.toLowerCase();
    
    
    
}

function playRound(humanChoice,computerChoice) {
    if (humanChoice == computerChoice) {
        alert("Tied!!!");
    }
    else if(humanChoice == "rock") {
        if (computerChoice == "paper") {
            alert("You lose! Paper beats Rock");
            computerScore++;
        }
        else {
            alert("You win! Rock beats scissors");
            humanScore++;
        }
    }
    else if(humanChoice == "paper") {
        if (computerChoice == "rock") {
            alert("You win! Paper beats Rock");
            humanScore++
        }
        else {
            alert("You lose! Scissors beats Paper");
            computerScore++;
        }
    }
    else {
            if(computerChoice =="paper") {
                alert("You win! Scissors beats Paper");
                humanScore++;
            }
            else {
                alert("You lost! Rock beats Scissors");
                computerScore++;
            }
        
    }
}
function playGame() {
    
    for(i=1;i<=5;i++){
        const humanSelection = getHumanChoice() ;
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    if(humanScore<computerScore) {
        alert("You lost :(");
    }
    else if(humanScore>computerScore) {
        alert("You won :)");
    }
    else {
        alert("Tied :|");
    }
    
    

}
playGame();