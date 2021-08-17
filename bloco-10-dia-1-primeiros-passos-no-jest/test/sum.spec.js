const { sum } = require('../src/sum');

test('Testa se o retorno de sum(4, 5) é 9', () => {
  expect(sum(4, 5)).toEqual(9);
});
