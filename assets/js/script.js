// Waiting for the page to load before starting the scripts //
document.addEventListener("DOMContentLoaded", function() {
    let buttons = this.getElementsByTagName('button');
    for(buttons of buttons) {
        buttons.addEventListener("click", function() {
            console.log(this);
            if(this.getAttribute("data-type") === "reset") {
                document.getElementById("player-choice").innerHTML = `<i class="fa-solid fa-circle placeholder--p"></i>`;
                alert("Game reset, choose your weapon to play.");
            } else {
                let playerChoice = this.getAttribute("data-type");
                mainGame(playerChoice);
            }
                //let gameType = this.getAttribute("data-type");
            //alert(You clicked ${gameType});
        });
    }
});
function mainGame(playerChoice) {
        if(playerChoice === "rock") {
            document.getElementById("player-choice").innerHTML = `<i class="fa-solid fa-hand-back-fist btn--rock" ></i>`;
        }
        else if(playerChoice === "paper") {
            document.getElementById("player-choice").innerHTML = `<i class="fa-solid fa-hand-paper btn--paper" style="font-size:60px; color:rgb(240, 121, 24); rotate:90deg;" ></i>`;
        }
        else if(playerChoice === "scissors") {
            document.getElementById("player-choice").innerHTML = `<i class="fa-solid fa-hand-scissors btn--scissors"></i>`;
        }
        else {
            alert("Invalid choice, please choose again.");
        }
        
};