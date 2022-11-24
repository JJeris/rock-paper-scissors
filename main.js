let winnerArr = [];

let computerChoiceDom = document.querySelector(".computer-choice");
let playerChoiceDom = document.querySelector(".player-choice");

function resetGame() {
    winnerArr = [];

    let computerChoiceDom = document.querySelector(".computer-choice").textContent = ``;
    let playerChoiceDom = document.querySelector(".player-choice").textContent = ``;

    document.querySelector('.reset').style.display = 'none';

}

function checkWins() {
    /* Return the competitor with the highest score. */ 

    let playerWinCount = winnerArr.filter(function (item) {return item == 'Player'}).length;
    let computerWinCount = winnerArr.filter(function (item) {return item == 'Computer'}).length;
    // const tiesCount = winners.filter(function (item) {return item == "Ties"}).length;
    return Math.max(playerWinCount, computerWinCount);   
}

// function func (item) {
//     return item == 'Player';
// }

function getScore() {
    /* Return the overall score. */ 

    let playerWinCount = winnerArr.filter(function (item) {return item == 'Player'}).length;
    let computerWinCount = winnerArr.filter(function (item) {return item == 'Computer'}).length;
    let tiesCount = winnerArr.filter(function (item) {return item == "Ties"}).length;
    
    // console.log(playerWinCount, computerWinCount, tiesCount);
    displayScore(playerWinCount, computerWinCount, tiesCount);
}

function displayScore(pWinCount, cWinCount, tCount) {
    /* Display the overall score. */

    // console.log(pWinCount, cWinCount, tCount);
    let computerScoreDom = document.querySelector(".computer-score").textContent = `Computer score: ${cWinCount}`;
    let playerScoreDom = document.querySelector(".player-score").textContent = `Player score: ${pWinCount}`;
    
}

function dislpayEnd() {
    let playerScore = winnerArr.filter(function (item) {return item == 'Player'}).length;
    if(playerScore==5){
        document.querySelector('.reset').style.display = 'flex';
        return "Player";
        
    }
    else {
        document.querySelector('.reset').style.display = 'flex';
        return "Computer"
    }
    // document.querySelector('reset').style.display = 'flex';
    // Make a seperate class.
}

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

function playGame(playerChoice) {
    let wins = checkWins(); // Checks, who has won the most
    if (wins < 5) {

        // Play a round, and update the score
        let computerChoice = getComputerChoice();

        // DisplayScore;
        computerChoiceDom.textContent = `Computer: ${computerChoice}`;
        playerChoiceDom.textContent = `Player: ${playerChoice}`;
        
        let winner = compareChoices(playerChoice, computerChoice);
        winnerArr.push(winner);

        // console.log(winner);
        let winnerDom = document.querySelector('.winner').textContent = `The result is: ${winner}`;// Has to display either winner or "Its a tie."


        // console.log(winnerArr);
        getScore();
        wins = checkWins()
    }
    if (wins == 5){
        // End game, return end result, button and announce a winner
        // displayEnd();
        console.log(`The winner is: ${dislpayEnd()}.`);
    }
    else {
        return;
    }   
}

function startGame() {
    /* Starts the game, when a player makes a choice (rock, paper, scissors). */

    const playerChoices = document.querySelectorAll('.choice-btn'); // A node list of the player choices
    playerChoices.forEach((choice) => 
    choice.addEventListener(('click'), () => {
        if(choice.id) {
            playGame((choice.id[0].toUpperCase() + choice.id.slice(1).toLowerCase()).toString());
            // choice.id;
        }

    }));
}
startGame()