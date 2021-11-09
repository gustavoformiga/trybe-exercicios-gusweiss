//parte7-Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 6, 9, 1, 20, 40, 2];
let menorNumero = Infinity;
for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menorNumero) {
        menorNumero = numbers[i]
    }
}
console.log(menorNumero);