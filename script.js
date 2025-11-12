function getCompChoice() {
    let rand = Math.random();
    let choice = "";
    if (rand > (2 / 3)) { choice = "rock" }
    else if (rand > (1 / 3)) { choice = "paper" }
    else { choice = "scissors" };
    return choice;
}

function getPlayerChoice() {
    const allowedValues = ["rock", "paper", "scissors"];

    let choice = prompt("Rock, Paper, or Scissors?", "Rock");
    choice = choice.toLowerCase();
    while (!allowedValues.includes(choice)) {
        choice = prompt("You must type Rock Paper or Scissors", "Rock");
        choice = choice.toLowerCase();
    }
    return choice;
}

let humanScore = 0;
let compScore = 0;

function winDeterminer(playerChoice, compChoice){

    if(playerChoice == compChoice){
        console.log("Tie! Nobody wins :)")
    }
    else if(playerChoice == "rock"){
        if (compChoice == "paper"){
            console.log("You lose, Paper beats Rock")
            compScore += 1
        }
        else{
            console.log("You Win, Rock beats Scissors")
            humanScore += 1
        }
    }
    else if(playerChoice == "paper")
    {
        if (compChoice == "Scissors"){
            console.log("You Lose, Scissors beats Paper")
            compScore += 1
        }
        else{
            console.log("You Win, Paper beats Rock")
            humanScore += 1
        }
    }
    else{
        if (compChoice == "paper"){
            console.log("You Win, Scissors beats Paper")
            humanScore += 1
        }
        else{
            console.log("You Lose, Rock beats Scissors")
            compScore += 1
        }
    }

}

function playRound(){
        let playerChoice = getPlayerChoice();
        let compChoice = getCompChoice();
        winDeterminer(playerChoice, compChoice);   
}
function printScores(){
       console.log("Current Score....   Computer: " + compScore + "  Your Score: " + humanScore)
}
function playGame(){
        for(i = 0; i < 5; i++)
    {playRound();
        printScores();
    }
}


playGame();