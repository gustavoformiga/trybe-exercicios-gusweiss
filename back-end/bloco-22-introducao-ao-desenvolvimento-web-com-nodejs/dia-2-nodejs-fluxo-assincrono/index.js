function ex(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') {
      reject(new Error('Informe apenas números'))
    } else {
      const resultado = ((a+b) * c);
      if (resultado < 50) {
        reject(new Error('valor muito baixo'));
      }
      resolve(resultado);
    }
  })
  return promise;
};

// console.log(ex(10,10,10));
// console.log(ex(1,1,1));

// Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
function getRandom() {
  return Math.floor(Math.random() * 100 + 1);
}
const randomNumbersArray = [getRandom(), getRandom(), getRandom()]
ex(...randomNumbersArray)
  .then(result => console.log(result))
  .catch(error => console.log(error.message));