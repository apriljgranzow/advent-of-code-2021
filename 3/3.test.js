const day3 = require('./3');

test('Flip bit', () => {
  expect(day3.flipBit(0)).toBe(1);
  expect(day3.flipBit(1)).toBe(0);
});

describe('Example input', () => {
  const example = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`.split('\n');

  test('Gamma rate', () => {
    expect(day3.gammaRate(example).join('')).toBe('10110');
  });
});
