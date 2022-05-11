// exercises1,2,3
const readline = require('readline-sync');
const peso = readline.questionFloat('Digite seu peso:');
const altura = readline.questionFloat('Digite sua altura em cm:');
const imc = peso/((altura/100)**2);

function funcImc(peso, altura) {
  const alturaMetros = altura/100;
  console.log(`Perfil: ${peso}kg e ${alturaMetros}m`);
  return `Seu imc é ${imc}`;
}

function situacao(imc) {
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

console.log(funcImc(peso, altura), situacao(imc));
// module.export = funcImc;