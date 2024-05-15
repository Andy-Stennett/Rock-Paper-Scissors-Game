// Waiting for the page to load before starting the scripts //
document.addEventListener("DOMContentLoaded", function() {
    let buttons = this.getElementsByTagName('button');
    for(buttons of buttons) {
        buttons.addEventListener("click", function() {
            console.log(this);
            if(this.getAttribute("data-type") === "reset") {
                document.getElementById("player-choice").innerHTML = `<i class="fa-solid fa-circle placeholder--p"></i>`;
                document.getElementById("computer-choice").innerHTML = `<i class="fa-solid fa-circle placeholder--c"></i>`;
                alert("Game reset, choose your weapon to play.");
            } else {
                let playerChoice = this.getAttribute("data-type");
                mainGame(playerChoice);
            }
            
        });
    }
});
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

        let playerScore = AddScore.playerScore;
        let computerScore = AddScore.computerScore;

        if(playerScore === 5) {
            alert("Congratulations! You have won the game. Press Reset to restart.");
            document.getElementById("player-score").innerHTML = 0;
            document.getElementById("computer-score").innerHTML = 0;
        }
        else if(computerScore === 5) {
            alert("Sorry! You have lost the game. Press Reset to restart.");
            document.getElementById("player-score").innerHTML = 0;
            document.getElementById("computer-score").innerHTML = 0;
        }


        
};

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

function checkWinner(playerChoice, computerChoice) {
    let result = document.getElementById("result").innerHTML;
    
    if(playerChoice === computerChoice) {
        document.getElementById("result").innerHTML =`Its a draw. No score!`;
    }
    else if(playerChoice === "rock") {
        if(computerChoice === 2) {
            document.getElementById("result").innerHTML =`Paper wraps rock. Computer scores!`;
            result==="Computer Scores!";
        }
        else {
            document.getElementById("result").innerHTML =`Rock blunts Scissors. Player scores!`;
            result==="Player Scores!";
        }
    }
    else if(playerChoice === "paper") {
        if(computerChoice === 1) {
            document.getElementById("result").innerHTML =`Paper wraps rock. Player scores!`;
            result==="Player Scores!";
        }
        else {
            document.getElementById("result").innerHTML =`Scissors cut paper. Computer scores!`;
            result==="Computer Scores!";
        }
    }
    else if(playerChoice === "scissors") {
        if(computerChoice === 1) {
            document.getElementById("result").innerHTML =`Rock blunts Scissors. Computer scores!`;
            result==="Computer Scores!";
        }
        else {
            document.getElementById("result").innerHTML =`Scissors cut paper. Player scores!`;
            result==="Player Scores!";
        }
    }
    else {
        alert("Invalid choice, please choose again.");
    }
    
    return result;
}

    function AddScore(result) {

        let playerScore = parseInt(document.getElementById("player-score").innerText);
        let computerScore = parseInt(document.getElementById("computer-score").innerText);
        if(result==="Player Scores!") {
            playerScore = playerScore + 1;
        }
        else if(result==="Computer Scores!") {
            computerScore = computerScore + 1;
        }
        return(playerScore, computerScore);
    } 

// Path: assets/js/script.js