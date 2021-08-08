// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
// O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numberGenerator = (number) => {
  const numberRandom = Math.round(Math.random() * 5);
  if (numberRandom === number) {
    return 'Parabéns você ganhou!';
  } return 'Tente novamente';
};

const yourNumber = 2;
console.log(numberGenerator(yourNumber));

// Com Math.random() é possível gerar números aleatórios.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Usei Math.round() para ter o retorno de um número arredondado para o inteiro mais próximo.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
