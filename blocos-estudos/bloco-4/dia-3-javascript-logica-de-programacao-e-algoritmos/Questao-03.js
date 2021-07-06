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
let space = " ";
let caractere = "*";
let resultado = "";

for (index = 0; index < n; index += 1) {
  resultado += caractere;
  if (resultado === "*") {
    resultado += space;
  }
}
