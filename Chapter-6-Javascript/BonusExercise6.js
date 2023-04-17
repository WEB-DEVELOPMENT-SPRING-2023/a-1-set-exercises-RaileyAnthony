const rgbValueContainer = document.getElementById("rgb-value"); /*Grabs the rgb-value HTML element in order to execute an incoming action.*/
const choicesContainer = document.getElementById("choices");
const scoreContainer = document.getElementById("score");
const livesContainer = document.getElementById("lives");
var messageDisplay = document.getElementById("message");
var gameOverText = document.getElementById("GameOverText");
var totalScore = document.getElementById("TotalScore");
let randomColor = null; /*sets the variable to unknown or empty.*/
let score = 0; /*sets the variable to 0.*/
let lives = 3; /*sets the variable to 3.*/

function createRandomColors() { /*Function to generate random RGB colors.*/
  const r = Math.floor(Math.random() *256);
  const g = Math.floor(Math.random() *256);
  const b = Math.floor(Math.random() *256);
  return `rgb(${r}, ${g}, ${b})`;
}

function replay(){ /*Function to restart the page when button is clicked.*/
  location.reload();
}

function incrementScore() { /*Function to add 1 point to a player's score if they answer correctly.*/
  score += 1;
  scoreContainer.innerText = score;
}

function decrementLife() { /*Function to remove one life from the player if they answered incorrectly. */
  lives--
  if(lives <= 0) { /*Ends the program if player runs out of lives and displays a message showing the player's final score and the option to play again.*/
    document.getElementById('GameOver').style.display = 'block';
    totalScore.innerHTML = "Your total score is " + score + " point(s)!";
  }
}

function checkAnswer(input) { /*Function to check if the chosen color is correct or incorrect*/
  const chosenColor = input.target.style.backgroundColor;
  if (chosenColor === randomColor) { /*Adds 1 point to the player and displays a message telling their answer is correect.*/
    incrementScore();
    messageDisplay.textContent = "Correct!";
  } else { /*Removes 1 life from the player and displays a message telling their answer is incorrect.*/
    messageDisplay.textContent = "Incorrect!";
    decrementLife();
  }
  play();
}

function play() {
  livesContainer.innerText = lives;
  scoreContainer.innerText = score;
  choicesContainer.innerHTML = null;
  randomColor = createRandomColors();
  rgbValueContainer.innerText = randomColor;

  const resAppendix = Math.floor(Math.random() *3); /*Displays 3 random colors with one correct answer.*/

  var i = 0; /*While loop to generate the color choices and validates the chosen answer by calling the checkAnswer function*/
  while(i < 3){
     i++
     const div = document.createElement("div");
      div.addEventListener("click", checkAnswer);
      div.style.backgroundColor =
        i === resAppendix ? randomColor : createRandomColors();
      choicesContainer.append(div);
  }
}
play();