const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
  const length = parseInt(input.getAttribute('data-length'));
  const value = event.target.value;
  
  if (value.length === length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
