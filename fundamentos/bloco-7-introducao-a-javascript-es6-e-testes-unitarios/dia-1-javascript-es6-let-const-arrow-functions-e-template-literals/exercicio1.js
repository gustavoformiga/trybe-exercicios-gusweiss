// 1-Crie uma função que receba um número e retorne seu fatorial.
const fatorial = (n) => {
  let result = n;
  for (let index = 1; index < n; index += 1) {
    result = result * index;
  } return result;
}
console.log(fatorial(5));