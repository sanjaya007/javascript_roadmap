var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

const box = document.getElementById("box");
const ball = document.getElementById("ball");

let ballDimension = ball.getBoundingClientRect().width;
let boxWidth = box.getBoundingClientRect().width;
let boxHeight = box.getBoundingClientRect().height;
let speedX = 1;
let speedY = 1;
let positionX = 0;
let positionY = 0;

function moveBall() {
  positionX += speedX;
  positionY += speedY;

  if (positionX + ballDimension >= boxWidth || positionX <= 0) {
    speedX *= -1;
  }

  if (positionY + ballDimension >= boxHeight || positionY <= 0) {
    speedY *= -1;
  }

  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";

  requestAnimationFrame(moveBall);
}

moveBall();
