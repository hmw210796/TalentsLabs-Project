/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
// missed ({sigint: true});
const prompt = require('prompt-sync')({sigint: true});

let board = {
    1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
    board[`${position}`] = mark;
}

// TODO: print the game board as described at the top of this code skeleton
function printBoard() {
    let newBoard = [];
    for (let i = 1; i <= 9; i++) {
        if (board[i] == " ") {
            newBoard.push(i);
        } else {
            newBoard.push(board[i]);
        }
    }
    console.log('\n' + newBoard[0] + ' | ' + newBoard[1] + ' | ' + newBoard[2] + '\n'
    + '---------- \n'+
    newBoard[3] + ' | ' + newBoard[4] + ' | ' + newBoard[5] + '\n'
    +'---------- \n' +
    newBoard[6] + ' | ' + newBoard[7] + ' | ' + newBoard[8] + '\n');
}


// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
function validateMove(position) {
    if (isNaN(position)) {
        console.log("Wrong Input");
        return false;
    } else if (position < 1 || position > 9) {
        console.log("Out of bound position");
        return false;
    } else if (board[`${position}`] !== ' ') {
        console.log("The position is already occupied.")
        return false;
    } 
    return true;
}

// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
let winCombinations = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [4, 5, 6],
    [7, 8, 9],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9]
];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
function checkWin(player) {
    let array = [];
    for (let i = 1; i <= 9; i++) {
        if (board[i] == player) {
            array.push(i);
        }
    }
    for (let j = 0; j < winCombinations.length; j++) {
        if (winCombinations[j].every(elem =>array.includes(elem))) {
            return true;
        }
    }
    return false;    
};

// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull() {
    for (let i = 1; i <= 9; i++) {
        if (board[i] == " ") {
            return false;
        }
    }
    return true;
}

// *****************************************************
// Copy all your code/fucntions in Part 1 to above lines
// (Without Test Cases)
// *****************************************************


// TODO: the main part of the program
// This part should handle prompting the users to put in their next step, checking for winning or tie, etc
function playTurn(player) {
        if (!checkWin(player) && !checkFull()) {
            var input = prompt(player + "'s turn, input: ");
            if (validateMove(input)) {
                markBoard(input, player);
                printBoard();
                if (currentTurnPlayer == 'X'){
                    currentTurnPlayer = 'O'
                } else {
                    currentTurnPlayer = 'X';
                }
            }
        }
        if (checkWin(player)) {
            console.log("Congrats player " + player);
            winnerIdentified = true;
        }
        else if (checkFull()) {
            console.log("Tie");
            winnerIdentified = true;
            }
        }

function askGame() {
    var newGame = prompt("Do you want to play another game? (Y/N) ")
    if (newGame == "Y") {
        winnerIdentified = false;
        for (let i = 0; i <= 9; i++) {
            board[i] = " ";
        }
        currentTurnPlayer = 'X'
    } else if (newGame == "N") {
        playAgain = false;
    }
}


// entry point of the whole program
console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

let winnerIdentified = false
let currentTurnPlayer = 'X'
let playAgain = true;

while (playAgain) {
    while (!winnerIdentified){
        playTurn(currentTurnPlayer);
    // feel free to add logic here if needed, e.g. announcing winner or tie
    }
    askGame();
}

// Bonus Point: Implement the feature for the user to restart the game after a tie or game over
