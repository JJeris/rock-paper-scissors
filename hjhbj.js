let winners = ['Player','Computer','Player','Computer','Computer','Player','Computer','Player','Computer'];

function countWins(item) {
    return item == 'Player';
}

const pWincount = winners.filter((item) => item == "Player");
let playerWinCount = winners.filter(function (item) {return item == 'Player'}).length;
let playerWinCount2 = winners.filter(countWins());

 console.log(pWincount);
console.log(playerWinCount);
console.log(playerWinCount2);
