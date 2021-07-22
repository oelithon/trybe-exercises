// 2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

  // Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
  // Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Função utilizada para realizar a comparação dos números no array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const compareNumbers = (a, b) => {
  return a - b;
}

const ordenaded = oddsAndEvens.sort(compareNumbers);
console.log(`Os números ${ordenaded} se encontram ordenados de forma crescente!`);
