const button = document.querySelector('.button');
const p = document.querySelector('.p');
let clickCount = 0;

button.addEventListener('click', () => p.innerHTML = clickCount += 1);
