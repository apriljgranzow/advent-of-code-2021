const fsPromises = require('fs/promises');

const countIncreases = (array) => {
  let increases = 0;
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i + 1] > array[i]) {
      increases += 1;
    }
  } return increases;
};

const sumReducer = (prev, curr) => (prev + curr);

const countWindowIncreases = (array) => {
  let increases = 0;
  let prevWindowSum = array.slice(0, 3).reduce(sumReducer);
  let currWindowSum = 0;
  for (let i = 1; i < array.length - 1; i += 1) {
    currWindowSum = array.slice(i, i + 3).reduce(sumReducer);
    if (currWindowSum > prevWindowSum) {
      increases += 1;
    }
    prevWindowSum = currWindowSum;
  }
  return increases;
};

fsPromises.readFile('input.txt')
  .then((input) => (
    input
      .toString('utf8')
      .split('\n')
      .map((line) => Number(line))
  ))
  .then((input) => (console.log(countIncreases(input), countWindowIncreases(input))));

module.exports.countIncreases = countIncreases;
module.exports.countWindowIncreases = countWindowIncreases;
