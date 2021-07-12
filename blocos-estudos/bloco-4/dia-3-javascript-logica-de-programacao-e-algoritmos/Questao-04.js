// 4. Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let caractere = "*";
let resultado = "";

let meioDaPiramide = (n + 1) / 2;
let left = meioDaPiramide;
let right = meioDaPiramide;

for (let index = 0; index <= meioDaPiramide; index += 1) {
  for (let index2 = 0; index2 <= n; index2 += 1) {
    if (index2 > left && index2 < right) {
      resultado = resultado + caractere;
    } else {
      resultado = resultado + ' ';
    }
  }
  console.log(resultado);
  resultado = '';
  left -= 1;
  right += 1;
}
