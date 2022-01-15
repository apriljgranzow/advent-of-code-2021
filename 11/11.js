/* eslint-disable no-param-reassign */
const fsPromises = require('fs/promises');

const getNeighbors = function getNeighbors(i, j) {
  return [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j - 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];
};

class Queue {
  constructor() {
    this.storage = new Map();
    this.nextInLine = 0;
    this.lastIndex = -1;
  }

  enqueue(value) {
    this.storage.set(this.lastIndex + 1, value);
  }

  dequeue() {
    const result = this.storage.get(this.nextInLine);
    this.storage.delete(this.nextInLine);
    this.nextInLine += 1;
    return result;
  }

  size() {
    return this.storage.size;
  }
}

const simulateTurn = function simulateTurn(matrix) {
  const flashed = new Set();
  const q = new Queue();
  matrix.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      value += 1;
      if (value > 9) {
        q.enqueue(JSON.stringify([rowIndex, colIndex]));
      }
    });
  });
  while (q.size() !== 0) {
    const coordString = q.dequeue();
    const [rowIndex, colIndex] = JSON.parse(coordString);
    matrix[rowIndex][colIndex] = 0;
    flashed.add(coordString);
    const neighbors = getNeighbors(rowIndex, colIndex);
    neighbors.forEach((neighborCoord) => {
      matrix[neighborCoord] += 1;
      if (matrix[neighborCoord] > 9
        && !(flashed.has(JSON.stringify(neighborCoord)))) {
        q.enqueue(JSON.stringify(neighborCoord));
      }
    });
  } return flashed.size;
};

const simulate = function simulate(matrix, numTurns) {
  let turn = 0;
  let flashes = 0;
  while (turn < numTurns) {
    flashes += simulateTurn(matrix);
    turn += 1;
  }
  return flashes;
};

const part1 = function part1(matrix) {
  return simulate(matrix, 100);
};

fsPromises.readFile('example.txt')
  .then((text) => (
    text
      .toString('utf8')
      .split('\n')
      .map((line) => ([...line])
        .map((char) => (Number(char))))
  ))
  .then((matrix) => {
    console.log(matrix.join('\n'));
    console.log(simulateTurn(matrix));
    console.log(matrix.join('\n'));
  });
