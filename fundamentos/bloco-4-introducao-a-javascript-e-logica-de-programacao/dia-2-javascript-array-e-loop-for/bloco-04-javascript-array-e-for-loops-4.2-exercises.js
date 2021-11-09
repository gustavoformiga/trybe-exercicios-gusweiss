//parte9-Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
let = newArray = [];
for (i = 1; i <= 25; i += 1) {
    newArray.push(i);
}
for (i = 0; i < newArray.length; i +=1) {
    let testDivision = newArray[i] / 2;
    console.log(testDivision);
}