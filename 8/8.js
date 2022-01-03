const fsPromises = require('fs/promises');

const part1 = function part1(entries) {
  let total = 0;
  const uniqueLengths = new Set([2, 3, 4, 7]);
  entries.forEach((entry) => {
    const [, outputValues] = entry;
    total += outputValues.reduce((prev, curr) => (
      prev + (uniqueLengths.has(curr.length) ? 1 : 0)), 0);
  });
  return total;
};

fsPromises.readFile('input.txt')
  .then((input) => (
    input
      .toString('utf8')
      .split('\n')
      .map((line) => (line.split('|').map((half) => (half.split(' ').filter(Boolean)))))
  ))
  .then((input) => (console.log(part1(input))));
