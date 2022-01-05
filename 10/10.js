const fsPromises = require('fs/promises');

const bracketPairs = new Map([
  ['>', '<'],
  [')', '('],
  ['}', '{'],
  [']', '['],
]);

/** Given two brackets, return whether they are correctly paired
 * @param {string} rightBracket
 * @param {string} leftBracket
 */
const isMatching = function isMatching(rightBracket, leftBracket) {
  return (bracketPairs.get(rightBracket) === leftBracket);
};

/** Given a character, return its  */
const syntaxErrorScore = function syntaxErrorScore(bracket) {
  const scoreTable = new Map([
    [')', 3],
    [']', 57],
    ['}', 1197],
    ['>', 25137],
  ]);
};

/** Return the index of the first incorrect character, or -1 if noncorrupted
 * @param {string[]} line - a list of characters representing sets of brackets
 * @returns {number}
*/
const validateParens = function validateParens(line) {
  const stack = [];
  const openingBrackets = new Set(['(', '{', '[', '<']);
  // eslint-disable-next-line consistent-return
  for (let i = 0; i < line.length; i += 1) {
    if (openingBrackets.has(line[i])) {
      stack.push(line[i]);
    } else {
      const rightBracket = line[i];
      const leftBracket = stack.pop();
      if (!isMatching(rightBracket, leftBracket)) {
        return i;
      }
    }
  }
  return -1;
};

const part1 = function part1(lines) {

};
console.log(validateParens([...'(]']));
// fsPromises.readFile('input.txt')
//   .then((text) => (
//     text
//       .toString('utf8')
//       .split('\n')
//       .map((line) => ([...line]))
//   ))
//   .then((input) => {
//     console.log(part1(input));
//   });

module.exports.isMatching = isMatching;
module.exports.validateParens = validateParens;
