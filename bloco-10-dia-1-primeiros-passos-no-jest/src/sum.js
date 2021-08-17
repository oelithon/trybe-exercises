const sum = (a, b) => {
  if (typeof a === 'number' || typeof b === 'number') {
    return a + b;
  }

  throw new Error('os parametros devem ser do tipo number')
};

console.log(sum(1, '2'));

module.exports = {
  sum,
}
