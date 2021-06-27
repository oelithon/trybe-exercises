//Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
//Bonus: use somente um if.

let numberOne = 3;
let numberTwo = 2;
let numberThree = 4;

if (numberOne % 2 != 0 || numberTwo % 2 != 0 || numberThree % 2 != 0) {
    console.log(true);
} else {
    console.log(false);
}
