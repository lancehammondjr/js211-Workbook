'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (guess) =>  {
  // your code here
  let correctLetters = 0;
  let correctLetterLocations = 0;
  let solutionArray = solution.split('');
  let guessArray = guess.split('');

  // solution = solutionArray.split('');
  // gues = guessArray.split('');

  

  guessArray.forEach(function(s1, index) {
    if (s1 === solutionArray[index]) {
      correctLetterLocations += 1;
      solutionArray[index] = null;
      guessArray[index] = null;
    }
  });
  

  guessArray.forEach(function(g1, index) {
    if (g1 === null) {
      let targetIndex = solutionArray.indexOf(g1);
      if(targetIndex > -1) {
        correctLetters += 1;
        solutionArray[targetIndex] = null;
        guessArray[index] = null;
      }
    }
    
  });
  // console.log(solutionArray);
  // console.log(guessArray);
  console.log(`${correctLetterLocations}-${correctLetters}`)
  return `${correctLetterLocations}-${correctLetters}`
}

const mastermind = (guess) => {
  //solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  board.push(guess);
  let hint = generateHint(guess);
  if (solution === guess) {
    console.log(`You guessed it! ${guess} - ${solution}`)
    return 'You guessed it!';
  }
  if (board.length >= 10) {
    console.log(`Try Again ${solution}`)
    return `You ran out of turns! ${hint}`;
  }
}

const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}