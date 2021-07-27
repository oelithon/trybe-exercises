// Base de cálculo            Alíquota    Dedução
// de 0,00 até 1.903,98       isento      0,00
// de 1.903,99 até 2.826,65   7,50%	      142,80
// de 2.826,66 até 3.751,05   15,00%      354,80
// de 3.751,06 até 4.664,68   22,50%      636,13
// a partir de 4.664,68       27,50%      869,36

// Escreva uma função que, dado um valor de salário, retorne a alíquota a ser
// aplicada para descontar o IR. Escreva os cenários de teste.

const assert = require('assert');

let irpf = (salario) => {
  if (salario >= 0 && salario <= 1903.98) {
    return 'isento';
  } else if (salario >= 1903.99 && salario <= 2826.65) {
    return '7,50%';
  } else if (salario >= 2826.66 && salario <= 3751.05) {
    return '15,00%';
  } else if (salario >= 3451.06 && salario <= 4664.68) {
    return '22,50%';
  } else (salario > 4664.69)
    return '27,50%';
};
