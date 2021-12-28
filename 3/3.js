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

const epsilonRate = function epsilonRate(gammaRating) {
  return gammaRating.map((bit) => flipBit(bit));
};

/**
 * Find the decimal given a binary string
 * @param {string} binaryString - a number represented as a binary string
 * @returns {number} decimal - a decimal number
 */
const binaryToDecimal = function binaryToDecimal(binaryString) {
  return parseInt(binaryString, 2);
};

const part1 = function part1(list) {
  const gamma = gammaRate(list);
  const epsilon = epsilonRate(gamma);
  const gammaDecimal = binaryToDecimal(gamma.join(''));
  const epsilonDecimal = binaryToDecimal(epsilon.join(''));
  return gammaDecimal * epsilonDecimal;
};

const oxygenGeneratorRating = function oxygenGeneratorRating(list, i = 0) {
  if (list.length === 1) {
    return list[0];
  }
  const mostCommonValue = gammaBit(list, i);
  const filtered = list.filter((string) => (string.charAt(i) === String(mostCommonValue)));
  return oxygenGeneratorRating(filtered, i + 1);
};

const co2ScrubberRating = function co2ScrubberRating(list, i = 0) {
  if (list.length === 1) {
    return list[0];
  }
  const leastCommonValue = flipBit(gammaBit(list, i));
  const filtered = list.filter((string) => (string.charAt(i) === String(leastCommonValue)));
  return co2ScrubberRating(filtered, i + 1);
};

const part2 = function part2(list) {
  const oxygenGenerator = oxygenGeneratorRating(list);
  const co2Scrubber = co2ScrubberRating(list);
  const oxygenDecimal = binaryToDecimal(oxygenGenerator);
  const co2Decimal = binaryToDecimal(co2Scrubber);
  return oxygenDecimal * co2Decimal;
};

// fsPromises.readFile('input.txt')
//   .then((input) => (
//     input
//       .toString('utf8')
//       .split('\n')
//       // .map((line) => line)
//   ))
//   .then((input) => (console.log(part1(input))));

module.exports.flipBit = flipBit;
module.exports.gammaBit = gammaBit;
module.exports.gammaRate = gammaRate;
module.exports.epsilonRate = epsilonRate;
module.exports.binaryToDecimal = binaryToDecimal;
module.exports.part1 = part1;
module.exports.oxygenGeneratorRating = oxygenGeneratorRating;
module.exports.co2ScrubberRating = co2ScrubberRating;
module.exports.part2 = part2;
