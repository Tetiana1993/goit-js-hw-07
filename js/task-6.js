function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  divBoxes.innerHTML = "";

  let boxSize = 30;
  let nextBoxSize = 10;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(box);

    boxSize += nextBoxSize;
  }
}
function destroyBoxes() {
  divBoxes.innerHTML = "";
}
