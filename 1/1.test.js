const day1 = require('./1');

const example = `
  199
  200
  208
  210
  200
  207
  240
  269
  260
  263`.split('\n').map((line) => Number(line));

describe('Count Increases', () => {
  test('Example data', () => {
    expect(day1.countIncreases(example)).toBe(7);
  });
});
