"use strict";
/*
//select the element text content
console.log(document.querySelector(".gusses"));

//change the element text content
document.querySelector(".low-high").textContent = "Game Started";

document.querySelector(".answerNumber").textContent = 3;

document.querySelector(".score").textContent = 3;

//getting input from input content
document.querySelector(".gusses").value;
//getting input from input content and setting
document.querySelector(".gusses").value = 3;
*/

// event listner on the check button
let randomNumber = Math.floor(Math.random() * 100 + 1);
let score = 20;
let highScore = 0;
console.log(randomNumber);

const disPlayMessage = function (message) {
  document.querySelector(".low-high").textContent = message;
};

const check = function () {
  const guess = Number(document.querySelector(".gusses").value);
  if (!guess) {
    disPlayMessage("Forbiden Number");
  } else if (guess === randomNumber) {
    document.querySelector(".low-high").textContent = "You Won";

    //manipulating css
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".answerNumber").style.width = "30rem";

    document.querySelector(".answerNumber").textContent = randomNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess != randomNumber) {
    if (score > 1) {
      disPlayMessage(guess > randomNumber ? "Try Lower" : "Try Higher");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      disPlayMessage("You Lost The Game");
      document.querySelector(".score").textContent = 0;
    }
  }
};

document.querySelector(".check_btn").addEventListener("click", check);

document.querySelector(".play_again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".answerNumber").style.width = "15rem";
  document.querySelector(".score").textContent = "20";
  disPlayMessage("Start playing...");
  document.querySelector(".gusses").value = "";
  score = 20;
  document.querySelector(".answerNumber").textContent = "?";
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
});
