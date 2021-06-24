//1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:

// Adição

/*
let a;
let b;
let resultado;

a = 5;
b = 3;
resultado = a + b;
console.log(resultado);
*/

// Subtração

/*
let a = 5;
let b = 3;
let resultado;

resultado = a - b;
console.log(resultado);
*/

// Multiplicação

/*
let a = 5;
let b = 3;
let resultado = a * b;

console.log(resultado);
*/

// Divisão

/*
let a = 5;
let b = 2;
let resultado = a / b;

console.log(resultado);
*/

// Módulo (Resto)

/*
let a = 3;
let b = 2;
let resultado = a % b;

console.log(resultado);
*/

//2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

/*
let valor1 = 4;
let valor2 = 8;
let resultado;

if (valor1 > valor2) {
    console.log(resultado = valor1);
} else {
    console.log(resultado = valor2);
}
*/

//3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

/*
let valor1 = 8;
let valor2 = 1;
let valor3 = 5;

if (valor1 > valor2 && valor1 > valor3) {
    console.log(valor1);
} else if (valor2 > valor1 && valor2 > valor3) {
    console.log(valor2);
} else {
    console.log(valor3);
}
*/

//4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

/*
let valor;

if (valor > 0) {
    console.log("positivo");
} else if (valor < 0) {
    console.log("negativo");
} else if (valor == 0) {
    console.log("zero");
} else {
    console.log("indefinido");
}
*/

//5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.



//6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

/*
let nomeDaPeca = "Bispo".toLowerCase();

switch (nomeDaPeca) {
    case "rainha":
        console.log("movimento rainha");
        break;
    case "rei":
        console.log("movimento rei");
        break;
    case "bispo":
        console.log("movimento bispo");
        break;
}
*/