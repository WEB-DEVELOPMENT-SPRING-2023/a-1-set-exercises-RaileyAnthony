const rgbValueContainer = document.getElementById("rgb-value");
const choicesContainer = document.getElementById("choices");
const scoreContainer = document.getElementById("score");
const livesContainer = document.getElementById("lives");
var messageDisplay = document.getElementById("message")
let randomColor = null;
let score = 0;
let lives = 3;

function createRandomColors() {
  const r = Math.floor(Math.random() *256);
  const g = Math.floor(Math.random() *256);
  const b = Math.floor(Math.random() *256);
  return `rgb(${r}, ${g}, ${b})`;
}

function incrementScore() {
  score += 1;
  scoreContainer.innerText = score;
}
function decrementLife() {
  lives--
  if(lives <= 0) {
    alert("Game over!\nYour final score is: " + score + "\nPress ok to play again.");
    document.location.reload();
  }
}

function checkAnswer(input) {
  const chosenColor = input.target.style.backgroundColor;
  if (chosenColor === randomColor) {
    incrementScore();
    messageDisplay.textContent = "Correct!";
  } else {
    messageDisplay.textContent = "Incorrect!";
    decrementLife();
  }
  startGame();
}

function startGame() {
  livesContainer.innerText = lives;
  scoreContainer.innerText = score;
  choicesContainer.innerHTML = null;
  randomColor = createRandomColors();
  rgbValueContainer.innerText = randomColor;

  const resAppendix = Math.floor(Math.random() *3);

  var i = 0;
  while(i < 3){
     i++
     const div = document.createElement("div");
      div.addEventListener("click", checkAnswer);
      div.style.backgroundColor =
        i === resAppendix ? randomColor : createRandomColors();
      choicesContainer.append(div);
  }
}
startGame();