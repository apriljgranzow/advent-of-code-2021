/* eslint-disable max-classes-per-file */
const fsPromises = require('fs/promises');

class Counter {
  constructor(nums) {
    this.counter = new Map();
    this.min = Infinity;
    this.max = 0;
    nums.forEach((num) => {
      this.min = this.min === undefined || num < this.min ? num : this.min;
      this.max = this.max === undefined || num > this.max ? num : this.max;
      if (this.counter.has(num)) {
        const oldVal = this.counter.get(num);
        this.counter.set(num, oldVal + 1);
      } else {
        this.counter.set(num, 1);
      }
    });
  }
}

class DistanceMap {
  constructor(counter) {
    const { min, max } = counter;
    const sumReducer = (prev, curr) => (prev + curr);
    this.distanceMap = new Map();
    for (let i = min; i <= max; i += 1) {
      const combinedDistance = [...counter.counter.entries()]
        .map(([key, value]) => (
          Math.abs(key - i) * value))
        .reduce(sumReducer);
      this.distanceMap.set(i, combinedDistance);
    }
  }

  min() {
    const minReducer = (prev, curr) => (curr[1] < prev[1]
      ? [curr[0], curr[1]] : [prev[0], prev[1]]);
    return [...this.distanceMap.entries()].reduce(minReducer);
  }
}

const part1 = function part1(nums) {
  const counter = new Counter(nums);
  const distanceMap = new DistanceMap(counter);
  // console.log(distanceMap);
  return distanceMap.min();
};

console.log(part1(new Int16Array([16, 1, 2, 0, 4, 2, 7, 1, 2, 14]).sort()));

fsPromises.readFile('input.txt')
  .then((input) => (
    input
      .toString('utf8')
      .split(',')
      .map((line) => Number(line))
  ))
  .then((nums) => {
    console.log(part1(nums));
  });
