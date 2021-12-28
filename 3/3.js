const fsPromises = require('fs/promises');

/**
 * Returns the opposite value of a binary digit
 * @param {number} digit - a binary digit character
 * @returns {number} - the opposite of the input
 */
const flipBit = function flipBit(digit) {
  return Number(!digit);
};

/**
 * Finds the most common bit at the given index in the list
 * @param {string[]} list - a list of binary strings
 * @param {number} i - the index to calculate
 */
const gammaBit = function gammaBit(list, i) {
  let count0 = 0;
  let count1 = 0;
  list.forEach((string) => {
    if (string.charAt(i) === '0') {
      count0 += 1;
    } else {
      count1 += 1;
    }
  });
  return (count0 > count1 ? 0 : 1);
};

/**
 * Find the gamma rate, which is a list of the most common bit at each position
 * across all binary strings in the list
 * @param {string[]} list  - a list of binary strings
 * @returns {string[]} - a list of digits
 */
const gammaRate = function gammaRate(list) {
  const result = [];
  for (let i = 0; i < list[0].length; i += 1) {
    result.push(gammaBit(list, i));
  }
  return result;
};

const epsilonRate = function epsilonRate(gammaRate) {
  return gammaRate.map((bit) => flipBit(bit));
};

const part1 = function part1(list) {

};

// fsPromises.readFile('input.txt')
//   .then((input) => (
//     input
//       .toString('utf8')
//       .split('\n')
//       .map((line) => line)
//   ))
//   .then((input) => (console.log(part1(input))));

module.exports.flipBit = flipBit;
module.exports.gammaBit = gammaBit;
module.exports.gammaRate = gammaRate;
module.exports.part1 = part1;
