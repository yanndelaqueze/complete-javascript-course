'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const secretNumberDisplay = document.querySelector('.number');
secretNumberDisplay.textContent = '?';

const message = document.querySelector('.message');

const resetButton = document.querySelector('.again');

const scoreDisplay = document.querySelector('.score');

const highScoreDisplay = document.querySelector('.highscore');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no input
  if (!guess) {
    message.textContent = '🚫 No Number !!';

    // guess is correct
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number !!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    secretNumberDisplay.style.width = '30rem';
    secretNumberDisplay.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }

    // guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '⬇️ Too Low !!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = '👎 You Lose !!';
      document.querySelector('.score').textContent = 0;
    }

    // guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '⬆️ Too High !!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = '👎 You Lose !!';
      scoreDisplay.textContent = 0;
    }
  }
});

resetButton.addEventListener('click', function () {
  score = 20;
  message.textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  scoreDisplay.textContent = score;
  secretNumberDisplay.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumberDisplay.style.width = '15rem';
});
