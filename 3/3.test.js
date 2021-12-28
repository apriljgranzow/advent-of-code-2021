const day3 = require('./3');

test('Flip bit', () => {
  expect(day3.flipBit(0)).toBe(1);
  expect(day3.flipBit(1)).toBe(0);
});

test('Binary to decimal', () => {
  expect(day3.binaryToDecimal('10110')).toBe(22);
  expect(day3.binaryToDecimal('01001')).toBe(9);
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

  test('Epsilon rate', () => {
    expect(day3.epsilonRate([1, 0, 1, 1, 0]).join('')).toBe('01001');
  });

  test('Part one', () => {
    expect(day3.part1(example)).toBe(198);
  });
  // Part 2
  test('Oxygen Generator Rating', () => {
    expect(day3.oxygenGeneratorRating(example)).toBe('10111');
  });

  test('CO2 Scrubber Rating', () => {
    expect(day3.co2ScrubberRating(example)).toBe('01010');
  });

  test('Part two', () => {
    expect(day3.part2(example)).toBe(230);
  });
});
