// exercise 6-Crie um script para calcular a velocidade média de um carro numa corrida.
const readline = require('readline-sync');
const distancia = readline.questionInt('Digite a distância percorrida em metros:');
const tempo = readline.questionInt('Digite o tempo dispendido em segundos:');

function velocidadeM(distancia, tempo) {
  const velocidadeMedia = distancia/tempo;
  return `Sua velocidade média é de ${velocidadeMedia} m/s.`;
}
console.log(velocidadeM(distancia, tempo));