// exercises1,2,3
const readline = require('readline-sync');
const peso = readline.questionFloat('Digite seu peso:');
const altura = readline.questionFloat('Digite sua altura em cm:');
const alturaMetros = altura/100;
const imc = peso/(alturaMetros**2);

function funcImc(peso, altura) {
  console.log(`Perfil: ${peso}kg e ${alturaMetros/100}m`);
  return `Seu imc é ${imc}`;
}

function situacao(funcImc) {
  if(imc < 18.5) {
    console.log('Abaixo do peso');
  }
  if(imc >= 18,5 && imc <= 24.9) {
    console.log('Peso normal');
  }
  if(imc >= 25 && imc <= 29.9) {
    console.log('Peso Acima do peso(sobrepeso)');
  }
  if(imc >= 30 && imc <= 34.9) {
    console.log('Peso Obesidade grau I');
  }
  if(imc >= 35 && imc <= 39.9) {
    console.log('Peso Obesidade grau II');
  }
  if(imc >= 40) {
    console.log('Peso Obesidade graus III e IV');
  }
};

console.log(funcImc(peso, altura), situacao(funcImc));
// module.export = funcImc;