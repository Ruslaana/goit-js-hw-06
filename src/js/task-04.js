const counterValue = document.querySelector('#value');
console.log(counterValue);
const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);
const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);

let value = 0;

incrementBtn.addEventListener('click', () => {
  value += 1;
  counterValue.textContent = value;
});

decrementBtn.addEventListener('click', () => {
  value -= 1;
  counterValue.textContent = value;
});