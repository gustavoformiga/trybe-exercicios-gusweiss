// 2- Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
function orderingArray() {
  let newArray = oddsAndEvens.sort(function(a, b){return a - b}); 
  return newArray;
}

console.log(orderingArray()); 
// used a compare function in the sort method to compare all values in the array to dispose in crescent order