const { sum } = require('../src/sum');

test('Testa se o retorno de sum(4, 5) é 9', () => {
  expect(sum(4, 5)).toEqual(9);
});
test('Testa se o retorno de sum(0, 0) é 0', () => {
  expect(sum(0, 0)).toEqual(0);
});
test('Função sum recebeu parametro diferente de number', () => {
  expect(() => sum('4', 5)).toThrow();
});
test('Testa se a mensagem de erro é "os parametros devem ser do tipo number"', () => {
  expect(() => sum(4, '5')).toThrowError(new Error('os parametros devem ser do tipo number'));
});
