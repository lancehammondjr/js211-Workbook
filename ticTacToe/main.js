'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// creates and empty "board" for the user to see where marks can be placed.
// using let because the variable is expected to change with more 'X's and 'O's to add
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// assigns the first mark as 'X'
// using let because the variable is expected to change from 'X' to 'O' and back
let playerTurn = 'X';

// is a function that print the current status of the board using the variable - board
const printBoard = () => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}


function horizontalWin() {
  // Your code here
  for (let i=0; i<3; i++){
    if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != ' '){
      //console.log("horizontalWin")
      return true;
    }
  }
    return false;
}

function verticalWin() {
  // Your code here
  for (let i=0; i<3; i++){
    if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != ' '){
      //console.log(verticalWin)
      return true;
    }
  }
    return false;
}

function diagonalWin() {
  // Your code here
  if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' '){
    return true;
  }
  if (board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[2][0] != ' '){
    return true;
  }
    return false;
}

function checkForWin() {
  // Your code here
  if (horizontalWin()){
    console.log(playerTurn + " Wins!");
    console.log("horizontalWin");
  }
  if (verticalWin()){
    console.log(playerTurn + " Wins!");
    console.log("verticalWin");
  }
  if(diagonalWin()){
    console.log(playerTurn + " Wins!");
    console.log("diagonalWin");
  }
  return true;
}

function ticTacToe(row, column) {
  // Your code here
  board[row][column] = playerTurn;
  checkForWin();
  if(playerTurn == "X"){
    playerTurn = "O";
  }
  else{
    playerTurn = "X";
  }
}



const getPrompt = () => {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}