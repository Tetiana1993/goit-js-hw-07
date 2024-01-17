function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const span = document.querySelector(`.color`);
const btnElem = document.querySelector(`.change-color`);
btnElem.addEventListener(`click`, changeColor);

function changeColor() {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
}
