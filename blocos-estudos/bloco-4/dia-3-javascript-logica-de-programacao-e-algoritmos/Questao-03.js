//3. Agora inverta o lado do triângulo. Por exemplo:
// n = 5
//     *
//    **
//   ***
//  ****
// *****

//Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

/*
console.log("    *");
console.log("   **");
console.log("  ***");
console.log(" ****");
console.log("*****");
*/

let n = 5;
let caractere = "*";
let resultado = "";
let base = n;

for (index = 0; index < n; index += 1) {
  for (index2 = 0; index2 <= n; index2 += 1) {
    if (index2 < base) {
      resultado = resultado + ' ';
    } else {
      resultado = resultado + caractere;
    }
  }
  console.log(resultado);
  resultado = '';
  base -= 1;
}
