// Waiting for the page to load before starting the scripts //

document.addEventListener("DOMContentLoaded", function() {

   
    /*for(let buttons of buttons) {
        buttons.addEventListener("click", function() {

            if(this.getAttribute("data-type") === "reset") {
                document.getElementById("player-choice").innerHTML = <i class="fa-solid fa-circle placeholder--p"></i>; 
                alert("Game reset, choose your weapon to play.");
            } else {
                let playerChoice = this.getAttribute("data-type");
                
                mainGame(playerChoice);
            
            }
                //let gameType = this.getAttribute("data-type");
            //alert(`You clicked ${gameType}`);
        });
    }

}); */

function mainGame() {
    /*let playerChoice = playerChoice;

    if(playerChoice === "rock") {
        document.getElementById("player-choice").innerHTML = <i class="fa-solid fa-hand-back-fist btn--rock" ></i>
    }
    else if(playerChoice === "paper") {
        document.getElementById("player-choice").innerHTML = <i class="fa-solid fa-hand-paper placeholder--p"></i>;
    }
    else if(playerChoice === "scissors") {
        document.getElementById("player-choice").innerHTML = <i class="fa-solid fa-hand-scissors placeholder--p"></i>;
    }
    else {
        alert("Invalid choice, please choose again.");*/
    } 
   
    function rockFunction() {
   
        document.getElementById("#player-choice").innerHTML = `<i class="fa-solid fa-hand-back-fist btn--rock" ></i>`;
    }

    /*     let computerChoice = Math.random();
        if(computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        } */

});