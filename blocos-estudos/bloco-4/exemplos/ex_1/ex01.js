//No exemplo abaixo, temos as informações de um paciente. Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail . Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) retornará number .

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

// runCode para ver o resultado
// Experimente executar o comando console.log(typeof patientAge) e veja o que acontece!
console.log(typeof patientAge);
// Retornou undefined, essa variável ainda não possui uma atrubuição.

// Experimente também trocar o valor de patientId = 50 para patientId = '50' . Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação. Você verá que o retorno agora é uma string pois colocamos o número 50 dentro das aspas. O JavaScript interpreta como string tudo o que estiver entre aspas.
