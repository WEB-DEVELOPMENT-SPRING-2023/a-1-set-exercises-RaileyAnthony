const colorCodeContainer = document.getElementById("color-code");
const optionContainer = document.getElementById("options-container");
const scoreContainer = document.getElementById("score");
const livesContainer = document.getElementById("lives");
var messageDisplay = document.getElementById("message")
let randomColor = null;
let score = 0;
let lives = 3;

function generateRandomColorRGB() {
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

function validateResult(el) {
  const selectedColor = el.target.style.backgroundColor;
  if (selectedColor === randomColor) {
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
  optionContainer.innerHTML = null;
  randomColor = generateRandomColorRGB();
  colorCodeContainer.innerText = randomColor;

  const ansIndex = Math.floor(Math.random() *3);

  for (let i = 0; i < 3; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", validateResult);
    div.style.backgroundColor =
      i === ansIndex ? randomColor : generateRandomColorRGB();
    optionContainer.append(div);
  }
}

window.addEventListener("load", () => startGame());