'use strict';

let secretNumber = generateNumber();
let score = 20;
let highScore = 0;

function generateNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.guess').style.borderColor = '#00ffe7';

  if (!guess) {
    displayMessage('🚫 Please enter a number!');
    document.querySelector('.guess').style.borderColor = 'red';

  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 That’s correct!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('💀 You lost the game!');
      setScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = generateNumber();
  score = 20;
  setScore(score);
  displayMessage('Ready to play...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
