var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location1 + 2;
var guesses = 0;
var isSunk = false;

var clippedComment = "Yay! You clipped it!";

function gameTime() {

  var guess;

// Let's ask the user to shoot (make his guess)

  function myPrompt() {
    guess = window.prompt("Don't throw and hope. Better AIM and FIRE!");
  }

  myPrompt();

// Let's check if the number is valid

  while (!(guess >= 0 && guess <= 6 && guess != "" && guess != null)) {
      window.alert("Please use a number from 0 to 6.");
      myPrompt();
    }

// Okay, so the number is okay. Now let's start the main action!

if (isSunk == true) {
  document.getElementById("commentary").innerHTML = "Stop beating that damn horse! It's already dead!";
} else {

  guesses += 1;

  switch (+guess) {

    case location1:
      document.getElementById("cell" + location1).style.backgroundColor = "FireBrick";
      document.getElementById("commentary").innerHTML = clippedComment;
      location1 = "clipped";
      break;

    case location2:
      document.getElementById("cell" + location2).style.backgroundColor = "FireBrick";
      document.getElementById("commentary").innerHTML = clippedComment;
      location2 = "clipped";
      break;

    case location3:
      document.getElementById("cell" + location3).style.backgroundColor = "FireBrick";
      document.getElementById("commentary").innerHTML = clippedComment;
      location3 = "clipped";
      break;

    default:
      document.getElementById("cell" + guess).innerHTML = "X";
      document.getElementById("commentary").innerHTML = "Nice try, buddy, but that's a miss.";
    }

    if (location1 == "clipped" && location2 == "clipped" && location3 == "clipped") {
      isSunk = true;
      document.getElementById("commentary").innerHTML = "Woohoo! You did it! You sank that boat!<br>It took you " + guesses + " shots to do it.";
    }
  }

// Our main gameTime function ends here
}
