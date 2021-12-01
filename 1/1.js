const fsPromises = require('fs/promises');

const countIncreases = (array) => {
  let increases = 0;
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i + 1] > array[i]) {
      increases += 1;
    }
  } return increases;
};

// fsPromises.readFile('input.txt')
//   .then((input) => (
//     input
//       .toString('utf8')
//       .split('\n')
//       .map((line) => Number(line))
//   ))
//   .then((input) => (console.log(countIncreases(input))));

module.exports.countIncreases = countIncreases;
