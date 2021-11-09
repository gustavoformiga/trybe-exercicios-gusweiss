//parte6-Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 6, 9, 1, 20, 40, 2];
let oddNumbers = 0;
for (let i = 0; i < numbers.length; i += 1) {
    let verifyingOdd = numbers[i] % 2;
    if (verifyingOdd != 0) {
        oddNumbers = oddNumbers + 1;
    } else if (oddNumbers === 0) {
        console.log("nenhum valor ímpar encontrado")
    }
} 
console.log(oddNumbers);