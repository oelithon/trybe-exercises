// 1.Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindrome (texto) {
  for (let index in texto) {
    if (texto[index] != texto[(word.length - 1) - index]) {
      return false;
    } return true;
  }
}