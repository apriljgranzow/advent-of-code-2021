const fsPromises = require('fs/promises');

const part1 = function part1(ints) {
  let nums = ints.slice();
  for (let turn = 0; turn < 80; turn += 1) {
    let count = 0;
    nums = nums.map((n) => {
      if (n === 0) {
        count += 1;
        return 6;
      } return n - 1;
    });
    nums = nums.concat(Array(count).fill(8));
  }
  return nums.length;
};

fsPromises.readFile('input.txt')
  .then((input) => (
    input
      .toString('utf8')
      .split(',')
      .map((line) => Number(line))
  ))
  .then((input) => (console.log(part1(input))));
