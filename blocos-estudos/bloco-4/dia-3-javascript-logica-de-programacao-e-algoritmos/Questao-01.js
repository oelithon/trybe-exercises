//1.  Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// n = 5
// *****
// *****
// *****
// *****
// *****

let n = 5;
let caractere = "";

for (let index = 0; index < n; index += 1) {
    caractere += "*";
}
for (let index = 0; index < n; index += 1) {
    console.log(caractere);
}
