const nameInput = document.querySelector('#name-input');
console.log(nameInput);
const nameOutput = document.querySelector('#name-output');
console.log(nameOutput);

nameInput.addEventListener('input', () => {
  nameOutput.textContent = nameInput.value.trim() || 'Anonymous'
});
