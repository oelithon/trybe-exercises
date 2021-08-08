// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (person) => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const person = (nome) => {
  const email = nome.toLowerCase().split(' ').join('_');
  const pessoa = {
    name: nome,
    email: `${email}@trybe.com`,
  }
  return pessoa;
}

console.log(person('Elithon Silva'));
console.log(person('Pedro Guerra'));
console.log(person('Luiza Drumond'));
console.log(person('Carla Paiva'));

// Referências e anotações:
// Utilizei o split(' ') para transformar a string passada em um array e separar as palavras quando tiver um espaço. E join('_') para verificar e substituir um espaço pelo caractere informado.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
