var sequence = [];
var index = 0;
var intervalID;

/* Flash a color - callback function called after flash is done */
function flash(color, duration, callback) {
  document.getElementById(color).className = 'button ' + color + '-flash';
  window.setTimeout(function() {
    document.getElementById(color).className = 'button ' + color;
    if (callback) {
      callback();
    }
  }, duration);
}

function flashNextColor() {
  var color = sequence[index];
  flash(color, 500, function() {
    index = index + 1;
    if (index === sequence.length) {
      donePlaying();
    }
  });
}

function addColorToSequence() {
  var colors = ['green', 'red', 'yellow', 'blue'];
  var random = (Math.floor(Math.random() * 4));
  var color = colors[random];
  sequence.push(color); // Add color to the end of the list
}

function playSequence() {
  index = 0;
  intervalID = window.setInterval(flashNextColor, 1000); 
}

function donePlaying() {
  window.clearInterval(intervalID);
  index = 0;
}

function gameOver() {
  var text = 'GAME OVER - SCORE: ' + (sequence.length - 1).toString();
  document.getElementById('text').innerHTML = text;
}

function handleButtonClick(color) {
  flash(color, 200);
  if (sequence[index] === color) {
    index = index + 1;
    if (index === sequence.length) {
      addColorToSequence();
      playSequence();
    }
  } else {
    gameOver();
  }
}

/* Button click handlers... */

function handleGreenClick() {
  handleButtonClick('green');
}

function handleRedClick() {
  handleButtonClick('red');
}

function handleYellowClick() {
  handleButtonClick('yellow');
}

function handleBlueClick() {
  handleButtonClick('blue');
}

addColorToSequence();
playSequence();9