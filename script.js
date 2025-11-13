let humanScore = 0;
let compScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");
const restartBtn = document.querySelector("#restartButton");
const winMsg = document.querySelector("#winMsg");
const playerScoreTxt = document.querySelector("#playerScore");
const compScoreTxt = document.querySelector("#compScore");

rockBtn.onclick = () => playGame("rock");
paperBtn.onclick = () => playGame("paper");
scissorBtn.onclick = () => playGame("scissors");
restartBtn.onclick = () => restart();

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


function winDeterminer(playerChoice, compChoice){

    let msg = ""
    if(playerChoice == compChoice){
        msg = "Tie! Nobody wins :)"
    }
    else if(playerChoice == "rock"){
        if (compChoice == "paper"){
            msg = "You lose, Paper beats Rock"
            compScore += 1
        }
        else{
            msg = "You Win, Rock beats Scissors"
            humanScore += 1
        }
    }
    else if(playerChoice == "paper")
    {
        if (compChoice == "Scissors"){
            msg = "You Lose, Scissors beats Paper"
            compScore += 1
        }
        else{
            msg = "You Win, Paper beats Rock"
            humanScore += 1
        }
    }
    else{
        if (compChoice == "paper"){
            msg = "You Win, Scissors beats Paper"
            humanScore += 1
        }
        else{
            msg = "You Lose, Rock beats Scissors"
            compScore += 1
        }
    }
    
    winMsg.classList = "text-center text-4xl font-bold"
    winMsg.textContent = msg;
    playerScoreTxt.textContent = humanScore;
    compScoreTxt.textContent = compScore;
}

function playRound(playerChoice){
        
        let compChoice = getCompChoice();
        winDeterminer(playerChoice, compChoice);   
}
function printScores(){
       
       console.log("Current Score....   Computer: " + compScore + "  Your Score: " + humanScore)
}
function playGame(playerChoice){
    winMsg.textContent = "";
    winMsg.classList = "loader text-center flex justify";
    let waitTime = Math.floor((Math.random() + 1) * 1000);
    setTimeout(function(){
        playRound(playerChoice);
        printScores();
    }, waitTime);
  
}
function restart(){
    humanScore = 0;
    compScore = 0;
    winMsg.classList = "text-center text-4xl font-bold"
    winMsg.textContent = "";
    playerScoreTxt.textContent = humanScore;
    compScoreTxt.textContent = compScore;
}


//playGame();