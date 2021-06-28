//5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

let anguloA = 100;
let anguloB = 30;
let anguloC = 50;

let somaAngulos = anguloA + anguloB + anguloC;

if (anguloA < 0) {
    console.log("Angulo A tem valor inválido.");
} else if (anguloB < 0) {
    console.log("Angulo B tem valor inválido.");
} else if (anguloC < 0) {
    console.log("Angulo C tem valor inválido.");
} else if (somaAngulos == 180) {
    console.log(true);
} else {
    console.log(false);
}
