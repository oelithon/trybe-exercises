//8. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
//Bonus: use somente um if.

let numberOne = 4;
let numberTwo = 3;
let numberThree = 5;

if (numberOne % 2 == 0 || numberTwo % 2 == 0 || numberThree % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}
