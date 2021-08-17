const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('os parametros devem ser do tipo number');
  }

  return a + b;
};

module.exports = {
  sum,
}
