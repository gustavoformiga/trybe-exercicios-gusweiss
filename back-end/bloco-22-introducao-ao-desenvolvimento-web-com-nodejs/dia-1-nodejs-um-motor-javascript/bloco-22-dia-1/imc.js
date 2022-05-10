const readline = require('readline-sync');
const peso = readline.questionFloat('Digite seu peso:');
const altura = readline.questionFloat('Digite sua altura em cm:');

function imc(peso, altura) {
  const alturaMetros = altura/100;
  console.log(`Perfil: ${peso}kg e ${alturaMetros}m`);
  return `Seu imc é ${peso / alturaMetros ** 2}`;
}
console.log(imc(peso, altura));
module.export = imc;