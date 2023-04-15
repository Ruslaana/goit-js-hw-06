// 1.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const inputEl = document.querySelector('input');
// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const boxes = document.querySelector('#boxes');

// createBtn.addEventListener('click', createBoxes);
// destroyBtn.addEventListener('click', destroyBoxes);

// function createBoxes() {
//   const amount = inputEl.value;
//   const boxesArr = [];
//   let size = 30;

//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement('div');
//     box.style.backgroundColor = getRandomHexColor();
//     box.style.width = size + 'px';
//     box.style.height = size + 'px';
//     boxesArr.push(box);
//     size += 10;
//   }

//   boxes.append(...boxesArr);
// }

// function destroyBoxes() {
//   boxes.innerHTML = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, '0')}`;
// }

// 2.
// const inputEl = document.querySelector('input');
// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const boxes = document.querySelector('#boxes');

// function createBoxes(amount) {
//   boxes.innerHTML = '';

//   let size = 30;
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement('div');
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxes.appendChild(box);
//     size += 10;
//   }
// }

// function destroyBoxes() {
//   boxes.innerHTML = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, '0')}`;
// }

// createBtn.addEventListener('click', () => {
//   createBoxes(inputEl.value);
// });

// destroyBtn.addEventListener('click', () => {
//   destroyBoxes();
// });

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => createBoxes(Number(inputEl.value)));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxesArr = [];

  const childElementCount = boxes.childElementCount;

  for (let i = childElementCount; i < amount + childElementCount; i++) {
    let size = i * 10 + 30;

    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = size + 'px';
    box.style.height = size + 'px';

    boxesArr.push(box);
  }
  boxes.append(...boxesArr);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
