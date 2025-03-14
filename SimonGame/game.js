const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClikedPattern = [];
let level = 0;
let started = false;

//function to ctreate a pattern
function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  level++;
  $("#level-title").text("Level " + level);

  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
  new Audio(`sounds/${randomChosenColor}.mp3`).play();

  userClikedPattern = [];

  userChoice();
}

//function to get what the user chose
function userChoice() {
  $(".btn")
    .off("click")
    .on("click", function (e) {
      const userChosenColor = e.target.id;
      userClikedPattern.push(userChosenColor);
      new Audio(`sounds/${e.target.id}.mp3`).play();
      $(`#${userChosenColor}`).addClass("pressed");
      setTimeout(function () {
        $(`#${userChosenColor}`).removeClass("pressed");
      }, 100);

      if (userClikedPattern.length === level) {
        checkAnswer(userClikedPattern.length);
      }
    });
}

function checkAnswer(currentLevel) {
  for (let i = 0; i < currentLevel; i++) {
    if (gamePattern[i] !== userClikedPattern[i]) {
      gameOver();
      return;
    }
  }
  setTimeout(nextSequence, 1000);
}

function gameOver() {
  new Audio("sounds/wrong.mp3").play();
  $("body").addClass("game-over");
  $("#level-title").text("Game Over, Press Any Key to Restart");
}

$(document).keydown((e) => {
  if (started === true) {
    level = 0;
    gamePattern = [];
    userClikedPattern = [];
    $("#level-title").text("Press A Key to Start");
  }
  $("body").removeClass("game-over");
  if (e.key == "a" && level === 0) {
    started = true;
    setTimeout(nextSequence, 500);
  }
});
