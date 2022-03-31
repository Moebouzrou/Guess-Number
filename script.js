"use strict";
/*
console.log(document.querySelector('.message').textContent); //this a  is method that's Available on the document object also by adding (.textContent) it will give us the message without the code elements in the Console.......> what is DOM and What is dom manipulation? first it stands fOR (DOM: Document Object Model) and it is basically a structured representation of HTML documents, the Dom alows us to use JS to access HTML elements and styles in order to manipulate them., by manipulating
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13; // your guessing umber
document.querySelector('.score').textContent = 10; // scoring results
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No Number!";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🤩 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;

    // coloring background
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // display the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😳 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        " 😭 You lost the game!!";
      document.querySelector(".score").textContent = 0;
    }

    // when the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😔 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        " 😭 You lost the game!!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
//////////////////
// Coding challenge I did as an exercise of the lesson

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
