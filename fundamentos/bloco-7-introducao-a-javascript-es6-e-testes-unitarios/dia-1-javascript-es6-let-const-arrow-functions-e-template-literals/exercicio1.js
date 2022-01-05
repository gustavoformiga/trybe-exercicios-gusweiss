/* // 3-Crie uma página que contenha:
Um botão ao qual será associado um event listener ;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada. */ 
const textNumber = document.getElementById('divCounter');
const btn = document.getElementById('clickButton');
let clickCount = 0;
function counter() {
  textNumber.innerHTML =  clickCount + 1;
};
btn.addEventListener('click', counter);


