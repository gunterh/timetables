var chances = 3;
var selectedTimetable = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var score = 0;
var dig1 = 0;
var dig2 = 0;
var input = [];

function GoToGame() {
  document.getElementById("menu-container").style = "display:none ;";
  document.getElementById("game").style = "display:block ;";
}

function GoToMenu() {
  document.getElementById("menu-container").style = "display:block ;";
  document.getElementById("game").style = "display:none ;";
}

function Create() {
  const randomNumber = Math.floor(Math.random() * selectedTimetable.length);
  dig1 = selectedTimetable[randomNumber];
  dig2 = Math.floor(Math.random() * 12) + 1;
  console.log(dig2);
  document.getElementById("question").innerHTML = +dig1 + " x " + dig2 + " =";
}

function enterNumber(n) {
  if (input.length < 4) {
    input.push(n);
    CreateInput();
  }
}

function clearInput() {
  input = [];
  CreateInput();
}
function CreateInput() {
  document.getElementById("inp").innerHTML = input.join("");
}

function CheckAnswer() {
  var ans = parseInt(input.join(""));
  if (ans == dig1 * dig2) {
    score++;
  } else {
    chances--;
  }

  if (chances == 0) {
    alert("gameover");
    GoToMenu();
    chances = 3;
    score = 0;
  }

  CreateScore();
  Create();
  clearInput();
  CreateChances();
}

function CreateScore() {
  document.getElementById("score").innerHTML = "score = " + score;
}

function CreateChances() {
  document.getElementById("chances").innerHTML = "chances = " + chances;
}
