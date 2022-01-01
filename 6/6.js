const fsPromises = require('fs/promises');

const part1 = function part1(ints) {
  let nums = ints.slice();
  for (let turn = 0; turn < 256; turn += 1) {
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

class FishSchool {
  constructor(nums) {
    this.timers = new Map([
      [8, 0],
      [7, 0],
      [6, 0],
      [5, 0],
      [4, 0],
      [3, 0],
      [2, 0],
      [1, 0],
      [0, 0],
    ]);
    nums.forEach((n) => {
      const oldVal = this.timers.get(n);
      this.timers.set(n, oldVal + 1);
    });
  }

  propagate() {
    const newTimers = new Map([
      [8, 0],
      [7, 0],
      [6, 0],
      [5, 0],
      [4, 0],
      [3, 0],
      [2, 0],
      [1, 0],
      [0, 0],
    ]);

    this.timers.forEach((value, key) => {
      if (key === 0) {
        const old6 = newTimers.get(6);
        newTimers.set(6, old6 + value);
        newTimers.set(8, value);
      } else {
        newTimers.set(key - 1, value);
      }
    });
    this.timers = newTimers;
  }

  sum() {
    const sumReducer = (prev, next) => (prev + next);
    return [...this.timers.values()].reduce(sumReducer);
  }
}

const part2 = function part2(nums) {
  const turns = 256;
  const fish = new FishSchool(nums);
  for (let i = 0; i < turns; i += 1) {
    fish.propagate();
  }
  return fish.sum();
};

// const example = [3, 4, 3, 1, 2];
// console.log(part2(example));
fsPromises.readFile('input.txt')
  .then((input) => (
    input
      .toString('utf8')
      .split(',')
      .map((line) => Number(line))
  ))
  .then((nums) => {
    console.log(part2(nums));
  });
