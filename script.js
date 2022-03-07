'use strict';
// emojis such as ⛔️ 🎉 📉 were added using the extension :emojisense: -> Ctrl + i

let secretNumber = Math.trunc(Math.random() * 20) + 1; //Math.trunc() returns the integer part of a number by removing any fractional digits
let score = 20; //we lose one point for each wrong guess; we start with 20
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //retrieving the value from the input field ; if we didn't add Number, we would get a string
  // console.log(guess, typeof guess);

  // When there is no input -> guess is false or guess is not true
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!'; -> it's replaced with LINE 8
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!'; -> it's replaced with LINE 8
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';  -> it's replaced with LINE 8
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';  -> it's replaced with LINE 8
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; //we are reassigning it

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; //empty value

  //restoring the style:
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});