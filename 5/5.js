const { count } = require('console');
const fsPromises = require('fs/promises');

/** Takes a text file containing line segments represented by pairs of pairs of coordinates
 * and returns a 4-tuple containing [x1, y1, x2, y2]
 */
const processText = function processText(str) {
  return str.split('\n')
    .map((line) => (
      line.split(' -> ')
        .map((pair) => (pair.split(',')
          .map((char) => Number(char)))).flat()));
};

const isHorizontal = function isHorizontal(lineSegment) {
  const [, y1, , y2] = lineSegment;
  return y1 === y2;
};

const isVertical = function isVertical(lineSegment) {
  // eslint-disable-next-line no-unused-vars
  const [x1, , x2] = lineSegment;
  return x1 === x2;
};

const countValuesMoreThan1 = function countValuesMoreThan1(a, b) {
  return a + (b >= 2 ? 1 : 0);
};

const part1 = function part1(lineSegments) {
  const coveredPoints = new Map();
  lineSegments.forEach((lineSegment) => {
    if (isVertical(lineSegment)) {
      const [x1, y1, , y2] = lineSegment;
      const [start, end] = y1 > y2 ? [y2, y1] : [y1, y2];
      for (let y = start; y <= end; y += 1) {
        const coordString = JSON.stringify([x1, y]);
        const count = coveredPoints.has(coordString) ? coveredPoints.get(coordString) + 1 : 1;
        coveredPoints.set(coordString, count);
      }
    } else if (isHorizontal(lineSegment)) {
      const [x1, y1, x2] = lineSegment;
      const [start, end] = x1 > x2 ? [x2, x1] : [x1, x2];
      for (let x = start; x <= end; x += 1) {
        const coordString = JSON.stringify([x, y1]);
        const count = coveredPoints.has(coordString) ? coveredPoints.get(coordString) + 1 : 1;
        coveredPoints.set(coordString, count);
      }
    }
  });
  return [...coveredPoints.values()].reduce(countValuesMoreThan1, 0);
};

fsPromises.readFile('input.txt')
  .then((text) => {
    const lineSegments = processText(text.toString('utf8'));
    console.log(part1(lineSegments));
  });
