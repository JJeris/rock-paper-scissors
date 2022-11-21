let winners = [];

// Functions

function resetGame() {
    winners = [];
    document.querySelector('.player-score').textContent = "Score: 0";
    document.querySelector('.computer-score').textContent = "Score: 0";
    document.querySelector('.tie-score').textContent = "Ties: 0";
    document.querySelector('.winner').textContent = "";
    document.querySelector('.player-choice').textContent = "";
    document.querySelector('.computer-choice').textContent = "";
    document.querySelector('.reset').style.display = "none"
}

function getRandomInt () {
    /* Function returns random int between 0 and 2.*/
    return Math.floor(Math.random()*3);
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
    return computerChoice;
}

function compareChoices(playerChoiceID, computerChoice) {
    /* Function compares the computer and players choices, and return who wins. */ 

    playerSelection = playerChoiceID[0].toUpperCase() + playerChoiceID.slice(1).toLowerCase();
    // rawText[0].toUpperCase() + rawText.slice(1).toLowerCase();
    
    let tieMessage = "Tie";
    let computerWinMessage = "Computer";
    let playerWinMessage = "Player";

    if (
        (playerSelection == "Rock" && computerChoice == "Scissors") ||
        (playerSelection == "Paper" && computerChoice == "Rock") ||
        (playerSelection == "Scissors" && computerChoice == "Paper")
    ) {
        return playerWinMessage;
    }
    else if (playerSelection == computerChoice) {
        return tieMessage;
    }
    else {
        return computerWinMessage;
    }
}

function checkWins() {
    const pWincount = winners.filter((item) => item == "Player").length;
    const cWincount = winners.filter((item) => item == "Computer").length;
    return Math.max(pWincount, cWincount);
}

function setWins() {
    const pWincount = winners.filter((item) => item == "Player").length;
    const cWincount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length; 
}

function tallyWins() {
    const pWincount = winners.filter((item) => item == "Player").length;
    const cWincount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length; 

    // document.querySelector('.player-score').textContent = `Score: ${pWincount}`;
    console.log(`Score: ${pWincount}`);
    // document.querySelector('.computer-score').textContent = `Score: ${cWincount}`;
    console.log(`Score: ${cWincount}`);
    document.querySelector('.tie-score').textContent = `Score: ${ties}`;
    console.log(`Score: ${ties}`);
}

function displayRound (playerChoiceID, computerChoice, winner) {
    document.querySelector('player-choice').textContent = `You chose: ${playerChoiceID}`;
    document.querySelector('computer-choice').textContent = `Computer chose: ${computerChoice}`;

    document.querySelector('.winner').textContent = `Round winner: ${winner}`;
    displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
    if (winner == "Player") {
        document.querySelector(".winner").textContent = "You won the round."
    }
    else if (winner == "Computer") {
        document.querySelector(".winner").textContent = "You won the round."
    }
    else {
        document.querySelector(".winner").textContent = "The round was a tie."
    }
}

function dislpayEnd() {
    let playerWins = winners.filter((item) => item == "Player").length;

    if(playerWins == 5) {
        document.querySelector('.winner').textContent = `You won 5 games, Congrats.`;
    }
    else {
        document.querySelector('.winner').textContent = `The computer won 5 games, better luck next time.`;
    }
    document.querySelector('reset').style.display = 'flex';

}

function playRound(playerChoiceID) {
    /* Functions runs 1 game session. */
    
    let wins = checkWins();
    if(wins >= 5) {
        return;
    }

    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    
    const winner = compareChoices(playerChoiceID, computerChoice);
    console.log(compareChoices(playerChoiceID, computerChoice));

    winners.push(winner);
    tallyWins();
    displayRound(playerChoiceID, computerChoice, winner);

    wins = checkWins();
    if (wins == 5) {
        dislpayEnd();
    }

    
}


function startGame() {
    /* Play the game until someone wins 5 times. */

    const choices = document.querySelectorAll('.choice-btn');
    choices.forEach((choice) => 
    choice.addEventListener(('click'), () => {
        if(choice.id){
            playRound(choice.id)
        }
    }));
}

startGame();






// From Node.js
// const prompt = require('prompt-sync')();

// // let limit = +prompt("Limit:"); 

// function getRandomInt () {
//     /* Function returns random int between 0 and 2.*/
    
//     return Math.floor(Math.random()*3);
// }

// function getPlayerChoice() {
//     /* Function returns players chosen play. */
    
//     let rawText = prompt("You're choice:");
//     let playerSelection = rawText[0].toUpperCase() + rawText.slice(1).toLowerCase();
    
//     while (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
        
//         rawText = prompt("Invalid input! You're choice:");
//         playerSelection = rawText[0].toUpperCase() + rawText.slice(1).toLowerCase();
    
//     }

//     return playerSelection;
// }

// function getComputerChoice (){
//     /* Function return the randomly chosen computers move (rock, paper or scissors). */

//     let gestureNumber = getRandomInt(); //gestureOrdinal
//     let computerChoice = "";

//     if (gestureNumber == 0) {
//         computerChoice = "Rock";
//     }
//     else if (gestureNumber == 1) {
//         computerChoice = "Paper";
//     }
//     else if (gestureNumber == 2) {
//         computerChoice = "Scissors";
//     }
//     else {
//         return "ERROR: Inputed randomint() value is out of bounds."
//     }
    
//     console.log(computerChoice);
//     return computerChoice;
// }

// function compareChoices(playerSelection, computerChoice) {
//     /* Function compares the computer and players choices, and return who wins. */ 


//     let tieMessage = "It's a tie!";
//     let computerWinMessage = "Computer wins!";
//     let playerWinMessage = "Player wins!";


//     if (playerSelection == computerChoice) {
//         // console.log(tieMessage);
//         return tieMessage;
//     }

//     else if (playerSelection == "Rock" && computerChoice == "Scissors") {
//         // console.log(playerWinMessage);
//         return playerWinMessage;
//     }

//     else if (playerSelection == "Rock" && computerChoice == "Paper") {
//         // console.log(computerWinMessage);
//         return computerWinMessage;
//     }

//     else if (playerSelection == "Paper" && computerChoice == "Rock") {
//         // console.log(playerWinMessage);
//         return playerWinMessage;
//     }

//     else if (playerSelection == "Paper" && computerChoice == "Scissors") {
//         // console.log(computerWinMessage);
//         return computerWinMessage;
//     }

//     else if (playerSelection == "Scissors" && computerChoice == "Paper") {
//         // console.log(playerWinMessage);
//         return playerWinMessage;
//     }

//     else if (playerSelection == "Scissors" && computerChoice == "Rock") {
//         // console.log(computerWinMessage);
//         return computerWinMessage;
//     }
//     else {
//         console.log("ERROR: Comparrison failed."); 
//         return 0;
//     }
// }

// function playGame() { // playRound
//     /* Functions runs 1 game session. */

//     playerSelection = getPlayerChoice();
//     computerChoice = getComputerChoice();

//     return compareChoices(playerSelection, computerChoice);
// }

// function game() {
//     /* Function game() (main()) runs the game 5 times and counts up the score for player and computer. */ 


//     let tieMessage = "It's a tie!";
//     let computerWinMessage = "Computer wins!";
//     let playerWinMessage = "Player wins!";

//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i<5; i++) {
//         result = playGame();
//         console.log(result);
        
//         if (result === tieMessage) {
//             playerScore++;
//             computerScore++;
//         }
        
//         else if (result === computerWinMessage) {
//             computerScore++;
//         }

//         else if (result === playerWinMessage) {
//             playerScore++;
//         }

//     }

//     if (playerScore > computerScore) {
//         console.log("Pleyer wins in the end!")
//     }
//     else if (playerScore < computerScore) {
//         console.log("Computer wins in the end!")
//     }
//     else {
//         console.log("Its a tie in the end!")
//     }
//     console.log(`Player score = ${playerScore}, Computer score = ${computerScore}.`)
// }

// game();


// <script>

// // Elements
// const choices = document.querySelectorAll('.choice-btn');
// const finalScore = document.querySelector('.final-score');  

// // Functions

// function getRandomInt () {
//     /* Function returns random int between 0 and 2.*/
    
//     return Math.floor(Math.random()*3);
// }

// function getPlayerChoice(choice) {
//     /* Function returns players chosen play. */
//     console.log(choice)
//     let rawText = choice;

//     //let rawText = prompt("You're choice:");
//     let playerSelection = rawText[0].toUpperCase() + rawText.slice(1).toLowerCase();
    
//     while (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
        
//         rawText = prompt("Invalid input! You're choice:");
//         playerSelection = rawText[0].toUpperCase() + rawText.slice(1).toLowerCase();
    
//     }

//     return playerSelection;
// }

// function getComputerChoice (){
//     /* Function return the randomly chosen computers move (rock, paper or scissors). */

//     let gestureNumber = getRandomInt(); //gestureOrdinal
//     let computerChoice = "";

//     if (gestureNumber == 0) {
//         computerChoice = "Rock";
//     }
//     else if (gestureNumber == 1) {
//         computerChoice = "Paper";
//     }
//     else if (gestureNumber == 2) {
//         computerChoice = "Scissors";
//     }
//     else {
//         return "ERROR: Inputed randomint() value is out of bounds."
//     }
    
//     //console.log(computerChoice);
//     return computerChoice;
// }

// function compareChoices(playerSelection, computerChoice) {
//     /* Function compares the computer and players choices, and return who wins. */ 


//     let tieMessage = "It's a tie!";
//     let computerWinMessage = "Computer wins!";
//     let playerWinMessage = "Player wins!";


//     if (playerSelection == computerChoice) {
//         // console.log(tieMessage);
//         return tieMessage;
//     }

//     else if (playerSelection == "Rock" && computerChoice == "Scissors") {
//         // console.log(playerWinMessage);
//         return playerWinMessage;
//     }

//     else if (playerSelection == "Rock" && computerChoice == "Paper") {
//         // console.log(computerWinMessage);
//         return computerWinMessage;
//     }

//     else if (playerSelection == "Paper" && computerChoice == "Rock") {
//         // console.log(playerWinMessage);
//         return playerWinMessage;
//     }

//     else if (playerSelection == "Paper" && computerChoice == "Scissors") {
//         // console.log(computerWinMessage);
//         return computerWinMessage;
//     }

//     else if (playerSelection == "Scissors" && computerChoice == "Paper") {
//         // console.log(playerWinMessage);
//         return playerWinMessage;
//     }

//     else if (playerSelection == "Scissors" && computerChoice == "Rock") {
//         // console.log(computerWinMessage);
//         return computerWinMessage;
//     }
//     else {
//         console.log("ERROR: Comparrison failed."); 
//         return 0;
//     }
// }

// function playGame(choice) {
//     /* Functions runs 1 game session. */

//     playerSelection = getPlayerChoice(choice);
//     console.log(playerSelection);
//     computerChoice = getComputerChoice();
//     console.log(computerChoice);

//     //return compareChoices(playerSelection, computerChoice);
    
//     console.log(compareChoices(playerSelection, computerChoice));
//     console.log("1 round played.")
//     finalScore.textContent = compareChoices(playerSelection, computerChoice).toString();
// }
// function game() {
//     /* Function game() (main()) runs the game 5 times and counts up the score for player and computer. */ 

//     let tieMessage = "It's a tie!";
//     let computerWinMessage = "Computer wins!";
//     let playerWinMessage = "Player wins!";

//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         //result = playGame();
//         //console.log(result);
        
//         if (result === tieMessage) {
//             playerScore++;
//             computerScore++;
//         }
        
//         else if (result === computerWinMessage) {
//             computerScore++;
//         }

//         else if (result === playerWinMessage) {
//             playerScore++;
//         }

//     }

//     if (playerScore > computerScore) {
//         console.log("Pleyer wins in the end!")
//     }
//     else if (playerScore < computerScore) {
//         console.log("Computer wins in the end!")
//     }
//     else {
//         console.log("Its a tie in the end!")
//     }
//     console.log(`Player score = ${playerScore}, Computer score = ${computerScore}.`)
// }
// //game();

// // Event listeners
// choices.forEach ((choice) => {
//     choice.addEventListener('click', () => {
//         //alert(choice.id);
//         //console.log(choice.id.toString());
//         playGame(choice.id.toString());
//     });   
// });

// </script>