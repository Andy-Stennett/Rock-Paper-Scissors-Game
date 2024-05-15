// Waiting for the page to load before starting the scripts //
document.addEventListener("DOMContentLoaded", function() {
    let buttons = this.getElementsByTagName('button');
    for(buttons of buttons) {
        buttons.addEventListener("click", function() {
            console.log(this);
            if(this.getAttribute("data-type") === "reset") {
                resetGame();
            } else {
                let playerChoice = this.getAttribute("data-type");
                mainGame(playerChoice);
            }
            
        });
    }
});

/* mainGame function to run the game */

function mainGame(playerChoice) {
        if(playerChoice === "rock") {
            document.getElementById("player-choice").innerHTML = `<i class="fa-solid fa-hand-back-fist btn--rock"></i>`;
        }
        else if(playerChoice === "paper") {
            document.getElementById("player-choice").innerHTML = `<i class="fa-solid fa-hand-paper btn--paper"></i>`;
        }
        else if(playerChoice === "scissors") {
            document.getElementById("player-choice").innerHTML = `<i class="fa-solid fa-hand-scissors btn--scissors"></i>`;
        }
        else {
            alert("Invalid choice, please choose again.");
        }
        let computerChoice = getComputerChoice();
        
        let result = checkWinner(playerChoice, computerChoice);

        addScore(result);

/* checking if the player or computer has reached 5 points to end the match */

        let playerScore = parseInt(document.getElementById("player-score").innerText);
        let computerScore = parseInt(document.getElementById("computer-score").innerText);
        
        if(playerScore === 5) {
            alert("Congratulations! You have won the game. Press Reset to restart.");
        }
        else if(computerScore === 5) {
            alert("Sorry! You have lost the game. Press Reset to restart.");
        }


        
};
/* getting a random number between 1 and 3 to determine the computer's choice */

function getComputerChoice() {

    let computerChoice = (Math.floor(Math.random() * 3)) + 1;
    if(computerChoice === 1) {
        document.getElementById("computer-choice").innerHTML = `<i class="fa-solid fa-hand-back-fist btn--rock" style="rotate: 0 1 0 180deg;" ></i>`;
    }
    else if(computerChoice === 2) {
        document.getElementById("computer-choice").innerHTML = `<i class="fa-solid fa-hand-paper btn--paper" style="rotate: 0 1 0 180deg;" ></i>`;
    }
    else {
        document.getElementById("computer-choice").innerHTML = `<i class="fa-solid fa-hand-scissors btn--scissors" style="rotate: 0 1 0 180deg;" ></i>`;
        computerChoice===3;
    }
    return(computerChoice);
}

/* checking the winner of the game */
function checkWinner(playerChoice, computerChoice) {
    let result = document.getElementById("result").innerHTML;
    
    if(playerChoice === computerChoice) {
        document.getElementById("result").innerHTML =`Its a draw. No score!`;
    }
    else if(playerChoice === "rock") {
        if(computerChoice === 2) {
            document.getElementById("result").innerHTML =`Paper wraps rock. Computer scores!`;
            result = "Computer Scores!";
            return result;
        }
        else {
            document.getElementById("result").innerHTML =`Rock blunts Scissors. Player scores!`;
            result = "Player Scores!";
            return result;
        }
    }
    else if(playerChoice === "paper") {
        if(computerChoice === 1) {
            document.getElementById("result").innerHTML =`Paper wraps rock. Player scores!`;
            result = "Player Scores!";
            return result;
        }
        else {
            document.getElementById("result").innerHTML =`Scissors cut paper. Computer scores!`;
            result = "Computer Scores!";
            return result;
        }
    }
    else if(playerChoice === "scissors") {
        if(computerChoice === 1) {
            document.getElementById("result").innerHTML =`Rock blunts Scissors. Computer scores!`;
            result = "Computer Scores!";
            return result;
        }
        else {
            document.getElementById("result").innerHTML =`Scissors cut paper. Player scores!`;
            result = "Player Scores!";
            return result;
        }
    }
    else {
        alert("Invalid choice, please choose again.");
    }
    
    
}
 /* adding to the player and computer scores*/

    function addScore(result) {

        let playerScore = parseInt(document.getElementById("player-score").innerText);
        let computerScore = parseInt(document.getElementById("computer-score").innerText);
        if(result==="Player Scores!") {
            playerScore = playerScore + 1;
            document.getElementById("player-score").innerText = playerScore;
            return playerScore, computerScore;
        }
        
        else  { 
            computerScore = computerScore + 1;
            document.getElementById("computer-score").innerText = computerScore;
            return playerScore, computerScore;
        }
       
    }

    /* resetting the game */
    function resetGame() {
        document.getElementById("player-choice").innerHTML = `<i class="fa-solid fa-circle placeholder--p"></i>`;
        document.getElementById("computer-choice").innerHTML = `<i class="fa-solid fa-circle placeholder--c"></i>`;
        document.getElementById("result").innerText =`Look what happened`;
        document.getElementById("player-score").innerText = `0`;
        document.getElementById("computer-score").innerText = `0`;
        alert("Game reset, choose your weapon to play.");
    }


// Path: assets/js/script.js