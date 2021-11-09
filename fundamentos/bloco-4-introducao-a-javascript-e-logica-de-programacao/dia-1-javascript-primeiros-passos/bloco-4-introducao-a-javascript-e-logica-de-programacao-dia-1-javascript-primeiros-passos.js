//parte1-adição
let a = 50;
let b = 10;
let soma  = (a + b);
console.log(soma);

//parte1-subtração
let subtracao  = (a - b);
console.log(subtracao);

//parte1-multiplicação
let multiplicacao = (a * b)
console.log(multiplicacao);

//parte1-divisão
let divisao = (a / b)
console.log(divisao);

//parte1-módulo
let modulo = (a % b);
console.log(modulo);

//parte2-maiorNumero
const x = 20;
const y = 30;
if (x > y) {
    console.log(x,"é maior")
} else {
    console.log(y, "é maior");
}

//parte3-maior3numeros
const c = 10;
const d = 20;
const e = 5;
if (c > d && c > e) {
    console.log(c, "é o maior número");
} else if (d > c && d > e) {
    console.log(d, "é o maior número");
} else {
    console.log(e, "é o maior número");
}

//parte4-positiveZeroNegative
const numero = -10
if (numero > 0) {
    console.log("positive");
} else if (numero === 0) {
    console.log("zero");
} else {
    console.log("negative");
}

//parte5-angulosTriangulo
const anguloa = -50;
const angulob = 110;
const anguloc = 20;
if (anguloa < 0 || angulob < 0 || anguloc < 0) {
    console.log("Erro: algum ângulo inválido, ou seja, menor que 0.");
}
if (anguloa + angulob + anguloc === 180) {
    console.log("true");
} else if (anguloa + angulob + anguloc > 180 || anguloa + angulob + anguloc < 180) {
    console.log("false");
} 

// part6- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// reference page for the movements of chess pieces "https://www.chess.com/terms/chess-pieces#king"
let pieceName = "".toLowerCase();
if (pieceName === "pawn") {
    console.log("The pawn moves forward one or two squares")
} else if (pieceName === "bishop") {
    console.log("The bishop moves diagonally as many squares as it likes")
} else if (pieceName === "knight") {
    console.log("The knight moves in an L-shape")
} else if (pieceName === "rook") {
    console.log("The rook moves horizontally or vertically as many squares as it likes")
} else if (pieceName === "queen") {
    console.log("The queen moves diagonally or horizontally or vertically as many squares as it likes")
} else if (pieceName === "king") {
    console.log("The king moves diagonally or horizontally or vertically only one square at time")
} else {
    console.log("Warning: invalid pieceName");
}