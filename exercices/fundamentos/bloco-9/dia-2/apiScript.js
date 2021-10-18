const url = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const obj = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(url, obj)
    .then(response => response.json())
    .then(data => document.querySelector('#jokeContainer').innerText = data.joke);
}
window.onload = () => fetchJoke();