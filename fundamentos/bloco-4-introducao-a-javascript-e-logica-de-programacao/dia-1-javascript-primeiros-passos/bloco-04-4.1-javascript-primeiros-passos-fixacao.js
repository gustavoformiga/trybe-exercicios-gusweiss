//parte1
let base = 5;
let height = 8;
const area = base * height;
let perimeter = (base * 2) + (height * 2)
console.log(base, height)
console.log(area)
console.log(perimeter)

//parte2
const nota = 30;
if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)");
}
else if (nota >= 60 && nota < 80) {
    console.log("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovado(a)");
}

//parte3
const currentHour = 10;
let message = "";
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
}
else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
}
console.log(message);

//parte4
let weekDay = "domingo"
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um aprendizado na Trybe >:D")
}
else {
    console.log("FINALMENTE,descanso merecido UwU")
}

//parte5-switch
let estado = "reprovada";
switch (estado) {
    case "aprovada":
        console.log("aprovada");
        break;

    case "lista":
        console.log("lista");
        break;

    case "reprovada":
        console.log("reprovada");
        break;

    default:
        console.log("não se aplica")
}

