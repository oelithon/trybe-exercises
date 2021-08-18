const { describe } = require('@jest/globals');
const { uppercase } = require('../src/uppercase');

// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas.

describe('Verifica se função retorna palavra com letras maiúsculas.', () => {
  it('', (done) => {
    uppercase('Elithon', (str) => {
      try {
        expect(str).toBe('ELITHON');
        done();
      } catch (error) {
        done(error)
      }
    });
  });
});
