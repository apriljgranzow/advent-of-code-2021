const { match } = require('assert');
const fsPromises = require('fs/promises');
const { get } = require('http');

const bracketPairs = new Map([
  ['>', '<'],
  [')', '('],
  ['}', '{'],
  [']', '['],
  ['<', '>'],
  ['(', ')'],
  ['{', '}'],
  ['[', ']'],
]);

const openingBrackets = new Set(['(', '{', '[', '<']);

/** Given two brackets, return whether they are correctly paired
 * @param {string} rightBracket
 * @param {string} leftBracket
 */
const isMatching = function isMatching(bracketA, bracketB) {
  return (bracketPairs.get(bracketA) === bracketB);
};

/** Given a character, return its  */
const syntaxErrorScore = function syntaxErrorScore(bracket) {
  const scoreTable = new Map([
    [')', 3],
    [']', 57],
    ['}', 1197],
    ['>', 25137],
  ]);
  return scoreTable.get(bracket);
};

/** Return the index of the first incorrect character, or -1 if noncorrupted
 * @param {string[]} line - a list of characters representing sets of brackets
 * @returns {number} */
const indexOfFirstCorrupted = function indexOfFirstCorrupted(line) {
  const stack = [];
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
  let errorScore = 0;
  lines.forEach((line) => {
    const errorIndex = indexOfFirstCorrupted(line);
    if (errorIndex !== -1) {
      errorScore += syntaxErrorScore(line[errorIndex]);
    }
  });
  return errorScore;
};

const getCompletionString = function getCompletionString(brackets) {
  const stack = [];
  const closingBrackets = [];
  if (brackets.every((bracket) => {
    if (openingBrackets.has(bracket)) {
      stack.push(bracket);
    } else {
      const leftBracket = stack.pop();
      if (!isMatching(leftBracket, bracket)) {
        return false;
      }
    }
    return true;
  })) {
    while (stack.length !== 0) {
      const unmatchedLeft = stack.pop();
      const matchingRight = bracketPairs.get(unmatchedLeft);
      closingBrackets.push(matchingRight);
    }
  }
  return closingBrackets.join('');
};

const scoreCompletionString = function scoreCompletionString(completionString) {
  const scoreTable = new Map([
    [')', 1],
    [']', 2],
    ['}', 3],
    ['>', 4],
  ]);
  let score = 0;
  [...completionString].forEach((char) => {
    score *= 5;
    score += scoreTable.get(char);
  });
  return score;
};

const part2 = function part2(lines) {
  const scores = [];
  lines.forEach((line) => {
    
  });
};

// fsPromises.readFile('example.txt')
//   .then((text) => (
//     text
//       .toString('utf8')
//       .split('\n')
//       .map((line) => ([...line]))
//   ))
//   .then((input) => {
//     // console.log(input);
//     console.log((input));
//   });

module.exports.isMatching = isMatching;
module.exports.indexOfFirstCorrupted = indexOfFirstCorrupted;
module.exports.getCompletionString = getCompletionString;
module.exports.scoreCompletionString = scoreCompletionString;
