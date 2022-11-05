const prompt = require('prompt-sync')();

// let limit = +prompt("Limit:"); 

function getRandomInt () {
    /* Function returns random int between 0 and 2.*/
    
    return Math.floor(Math.random()*3);
}

function getPlayerChoice() {
    /* Function returns players chosen play. */
    
    let rawText = prompt("You're choice:");
    let playerSelection = rawText[0].toUpperCase() + rawText.slice(1).toLowerCase();
    
    while (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
        
        rawText = prompt("Invalid input! You're choice:");
        playerSelection = rawText[0].toUpperCase() + rawText.slice(1).toLowerCase();
    
    }

    return playerSelection;
}

function getComputerChoice (){
    /* Function return the randomly chosen computers move (rock, paper or scissors). */

    let gestureNumber = getRandomInt(); //gestureOrdinal
    let computerChoice = "";

    if (gestureNumber == 0) {
        computerChoice = "Rock";
    }
    else if (gestureNumber == 1) {
        computerChoice = "Paper";
    }
    else if (gestureNumber == 2) {
        computerChoice = "Scissors";
    }
    else {
        return "ERROR: Inputed randomint() value is out of bounds."
    }
    
    console.log(computerChoice);
    return computerChoice;
}

function compareChoices(playerSelection, computerChoice) {
    /* Function compares the computer and players choices, and return who wins. */ 


    let tieMessage = "It's a tie!";
    let computerWinMessage = "Computer wins!";
    let playerWinMessage = "Player wins!";


    if (playerSelection == computerChoice) {
        // console.log(tieMessage);
        return tieMessage;
    }

    else if (playerSelection == "Rock" && computerChoice == "Scissors") {
        // console.log(playerWinMessage);
        return playerWinMessage;
    }

    else if (playerSelection == "Rock" && computerChoice == "Paper") {
        // console.log(computerWinMessage);
        return computerWinMessage;
    }

    else if (playerSelection == "Paper" && computerChoice == "Rock") {
        // console.log(playerWinMessage);
        return playerWinMessage;
    }

    else if (playerSelection == "Paper" && computerChoice == "Scissors") {
        // console.log(computerWinMessage);
        return computerWinMessage;
    }

    else if (playerSelection == "Scissors" && computerChoice == "Paper") {
        // console.log(playerWinMessage);
        return playerWinMessage;
    }

    else if (playerSelection == "Scissors" && computerChoice == "Rock") {
        // console.log(computerWinMessage);
        return computerWinMessage;
    }
    else {
        console.log("ERROR: Comparrison failed."); 
        return 0;
    }
}

function playGame() {
    /* Functions runs 1 game session. */

    playerSelection = getPlayerChoice();
    computerChoice = getComputerChoice();

    return compareChoices(playerSelection, computerChoice);
}

function game() {
    /* Function game() (main()) runs the game 5 times and counts up the score for player and computer. */ 


    let tieMessage = "It's a tie!";
    let computerWinMessage = "Computer wins!";
    let playerWinMessage = "Player wins!";

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i<5; i++) {
        result = playGame();
        console.log(result);
        
        if (result === tieMessage) {
            playerScore++;
            computerScore++;
        }
        
        else if (result === computerWinMessage) {
            computerScore++;
        }

        else if (result === playerWinMessage) {
            playerScore++;
        }

    }

    if (playerScore > computerScore) {
        console.log("Pleyer wins in the end!")
    }
    else if (playerScore < computerScore) {
        console.log("Computer wins in the end!")
    }
    else {
        console.log("Its a tie in the end!")
    }
    console.log(`Player score = ${playerScore}, Computer score = ${computerScore}.`)
}

game();