let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    
    let choice = Math.floor(Math.random() * 3);
    return choice == 0?"rock":choice == 1?"paper":"scissors";
}

output = document.querySelector('.output');




function playRound(button, computerChoice) {
    if (button == computerChoice) {
        output.innerHTML ="Tied!!!";
    }
    else if(button == "rock") {
        if (computerChoice == "paper") {
            outputq.innerHTML = "You lose! Paper beats Rock";
            computerScore++;
        }
        else {
            output.innerHTML="You win! Rock beats scissors";
            humanScore++;
        }
    }
    else if(button == "paper") {
        if (computerChoice == "rock") {
            output.innerHTML="You win! Paper beats Rock";
            humanScore++
        }
        else {
            output.innerHTML="You lose! Scissors beats Paper";
            computerScore++;
        }
    }
    else {
            if(computerChoice =="paper") {
                output.innerHTML="You win! Scissors beats Paper";
                humanScore++;
            }
            else {
                output.innerHTML="You lost! Rock beats Scissors";
                computerScore++;
            }
        
    }
    if(humanScore == 5)
    {
        document.querySelector(".reseult").innerHTML = "You Won";
    }
    else if(computerScore == 5)
    {
        document.querySelector(".result").innerHTML = "You lost";
    }
}

const buttons = document.querySelectorAll("button")
buttons.forEach(button =>
    button.addEventListener('click', function(){
        if(humanScore ==5 || computerScore == 5)
        {
            return; 
        }
        playRound(button.value, getComputerChoice());
}))
