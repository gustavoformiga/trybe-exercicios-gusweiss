// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const jokeDiv = document.getElementById('jokeContainer');
  fetch(API_URL, myObject)
  // recebe a resposta em json
    .then(response => response.json())
  // pega o objeto json, pega a piada em data.joke e coloca em jokeDiv no html
    .then((data) => jokeDiv.innerText = data.joke); 
}
// chama a funcao fetchjoke no carregamento da página
window.onload = () => fetchJoke();