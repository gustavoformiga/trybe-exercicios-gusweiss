// bloco-5-5.2-trabalhando-com-elementos-fixacao
// 1-Acesse o elemento elementoOndeVoceEsta .
console.log(document.getElementById("elementoOndeVoceEsta"));

//2-Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "blue"; 

//3-Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
console.log(document.getElementById("elementoOndeVoceEsta").firstElementChild.innerText = "O primeiro filho é Icaro!");

//4-Acesse o primeiroFilho a partir de pai .
console.log(document.querySelector('#pai').firstElementChild); 

//5-Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

//6-Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

//7-Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

// 8-Agora acesse o terceiroFilho a partir de pai .
let pai = document.querySelector('#pai');
let terceiroFilhoDoPai = pai.lastElementChild.previousElementSibling;