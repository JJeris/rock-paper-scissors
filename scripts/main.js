let winnerArr = [];

const playerChoices = document.querySelectorAll('.choice-btn'); // A node list of the player choices
const computerChoiceDom = document.querySelector(".computer-choice");
const playerChoiceDom = document.querySelector(".player-choice");
const computerScoreDom = document.querySelector(".computer-score");
const playerScoreDom = document.querySelector(".player-score");
const winnerDom = document.querySelector(".winner");
const resetButtonDom = document.querySelector(".reset");
const resultMessageDom = document.querySelector(".result-message");

function getRandomInt () {
    /* Return a random int (0-2). */

    return Math.floor(Math.random()*3);
}

function getComputerChoice() {
    /* From a random integer (0,1,2) derive the corresponding value ("Rock", "Paper", "Scissors"). */

    let ramdomInt = getRandomInt();
    if (ramdomInt === 0) {
        return "Rock";
    }
    else if (ramdomInt == 1) {
        return "Paper";
    }
    else if (ramdomInt == 2) {
        return "Scissors";
    }
}

function compareChoices(playerSelection, computerChoice) {
    /* Compare the player and computer choices and return the winner. */

    if (
        (playerSelection == "Rock" && computerChoice == "Scissors") ||
        (playerSelection == "Paper" && computerChoice == "Rock") ||
        (playerSelection == "Scissors" && computerChoice == "Paper")
    ) {
        return "Player";
    }
    else if (playerSelection == computerChoice) {
        return "Tie";
    }
    else {
        return "Computer";
    }
}

function resetGame() {
    /* Resets the ui and score. */

    winnerArr = [];
    winnerDom.textContent = `Make your play`;
    winnerDom.style.color = "white";
    resultMessageDom.textContent = `First to 5 points wins the game`;    
    computerChoiceDom.textContent = `Computer chose ?`;
    playerChoiceDom.textContent = `Player chose ?`;
    computerScoreDom.textContent = `Computer: 0`;
    playerScoreDom.textContent = `Player: 0`;
    resetButtonDom.style.display = 'none';
}

function checkWins() {
    /* Return the competitor with the highest score. */ 

    let playerWinCount = winnerArr.filter(function (item) {return item == 'Player'}).length;
    let computerWinCount = winnerArr.filter(function (item) {return item == 'Computer'}).length;
    // const tiesCount = winners.filter(function (item) {return item == "Ties"}).length;
    return Math.max(playerWinCount, computerWinCount);   
}

function displayScore() {
    /* Return the overall score. */ 

    let playerWinCount = winnerArr.filter(function (item) {return item == 'Player'}).length;
    let computerWinCount = winnerArr.filter(function (item) {return item == 'Computer'}).length;
    // let tiesCount = winnerArr.filter(function (item) {return item == "Ties"}).length;

    computerScoreDom.textContent = `Computer: ${computerWinCount}`;
    playerScoreDom.textContent = `Player: ${playerWinCount}`;    
}

function displayChoice(computerChoice, playerChoice) {
    computerChoiceDom.textContent = `Computer chose ${computerChoice}`;
    playerChoiceDom.textContent = `Player chose ${playerChoice}`;
}

function displayRound (computerChoice, playerChoice, winner) {
    displayChoice(computerChoice, playerChoice);

    winnerDom.textContent = `The round winner is ${winner}`;// Has to display either winner or "Its a tie."
    if (winner == "Player") {
        resultMessageDom.textContent = `${playerChoice} beats ${computerChoice}`;
    }
    else if (winner == "Tie"){
        resultMessageDom.textContent = `${playerChoice} ties with ${computerChoice}`
    }
    else {
        resultMessageDom.textContent = `${playerChoice} is beaten by ${computerChoice}`;
    }
    displayScore();
}

function dislpayEnd() {
    /* Displays the end UI after the game has finished. */

    let playerScore = winnerArr.filter(function (item) {return item == 'Player'}).length;
    if(playerScore==5){
        resetButtonDom.style.display = 'flex';
        winnerDom.textContent = "You won!";
        winnerDom.style.color = "gold";
    }
    else {
        resetButtonDom.style.display = 'flex';
        winnerDom.textContent = "You lost..."
        winnerDom.style.color = "red";
    }
}

function playGame(playerChoice) {
    let wins = checkWins(); // Checks, who has won the most
    if (wins < 5) {

        // Has to display round info.

        let computerChoice = getComputerChoice();
        let winner = compareChoices(playerChoice, computerChoice); // Determine winner
        winnerArr.push(winner);

        displayRound(computerChoice, playerChoice, winner);
        
        wins = checkWins()

    }
    if (wins == 5){
        dislpayEnd();
    }
    else {
        return;
    }   
}
function startGame() {
    /* Starts the game, when a player makes a choice (rock, paper, scissors). */

    playerChoices.forEach((choice) => 
    choice.addEventListener(('click'), () => {
        if(choice.id) {
            playGame((choice.id[0].toUpperCase() + choice.id.slice(1).toLowerCase()).toString());
        }
    }));
}
startGame()