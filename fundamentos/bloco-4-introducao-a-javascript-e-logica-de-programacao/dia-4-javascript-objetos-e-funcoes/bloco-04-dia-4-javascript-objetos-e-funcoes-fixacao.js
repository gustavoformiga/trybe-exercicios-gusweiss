// REFATORAÇÃO DOO BLOCO-04-4.1- 5 PRIMEIROS EXERCICIOS
/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

// Adição
function sum(a, b) {
  let result = a + b;
  return result;
};

// Subtração
function subtraction(a, b) {
  let result = a - b;
  return result;
};

// Multi
function multi(a, b) {
  let result = a * b;
  return result;
};

// Divisão
function division(a, b) {
  let result = a / b;
  return result;
};

// Módulo
function module(a, b) {
  let result = a % b;
  return result;
};

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
function  greater(x = 20, y = 30) {
  if (x > y) {
    console.log(x,"é maior")
} else {
    console.log(y, "é maior");
}
};

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
function greaterAmongThree(c = 10, d = 20, e = 5) {
  if (c > d && c > e) {
    console.log(c, "é o maior número");
} else if (d > c && d > e) {
    console.log(d, "é o maior número");
} else {
    console.log(e, "é o maior número");
}
}

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function positiveOrNegative(numero = -10) {
  if (numero > 0) {
    console.log("positive");
} else if (numero === 0) {
    console.log("zero");
} else {
    console.log("negative");
}
}

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
function IsItTriangle(anguloa = -50, angulob = 110, anguloc = 20) {
if (anguloa < 0 || angulob < 0 || anguloc < 0) {
  console.log("Erro: algum ângulo inválido, ou seja, menor que 0.");
}
if (anguloa + angulob + anguloc === 180) {
  console.log("true");
} else if (anguloa + angulob + anguloc > 180 || anguloa + angulob + anguloc < 180) {
  console.log("false");
} 
}