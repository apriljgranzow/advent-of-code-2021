const fsPromises = require('fs/promises');

const andReducer = function andReducer(prev, curr) { return prev && curr; };

const part1 = function part1(matrix) {
  let riskLevelSum = 0;
  matrix.forEach((row, rowNumber) => {
    row.forEach((digit, col) => {
      const neighbors = [];
      if (matrix[rowNumber - 1] !== undefined) {
        neighbors.push(matrix[rowNumber - 1][col]);
      }
      if (matrix[rowNumber + 1] !== undefined) {
        neighbors.push(matrix[rowNumber + 1][col]);
      }
      if (col + 1 < row.length) {
        neighbors.push(matrix[rowNumber][col + 1]);
      }
      if (col - 1 >= 0) {
        neighbors.push(matrix[rowNumber][col - 1]);
      }
      if (neighbors.map((neighbor) => (Number(neighbor) > Number(digit))).reduce(andReducer)) {
        riskLevelSum += Number(digit) + 1;
      }
    }, true);
  });
  return riskLevelSum;
};

fsPromises.readFile('input.txt')
  .then((text) => (
    text
      .toString('utf8')
      .split('\n')
      .map((line) => ([...line]))
  ))
  .then((input) => {
    console.log(part1(input));
  });
