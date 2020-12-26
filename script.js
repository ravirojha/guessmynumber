'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMesssage = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMesssage('No Number!');
  }

  //Player wins
  else if (guess === number) {
    displayMesssage('Correct Number!');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== number) {
    if (score > 1) {
      displayMesssage(guess > number ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMesssage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
  // too high
  else if (guess > number) {
    if (score > 1) {
      displayMesssage('Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMesssage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // too low
  else if (guess < number) {
    if (score > 1) {
      displayMesssage('Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMesssage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMesssage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
