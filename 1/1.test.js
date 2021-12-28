const day1 = require('./1');

const example = `199
  200
  208
  210
  200
  207
  240
  269
  260
  263`.split('\n').map((line) => Number(line));

test('Count increases', () => {
  expect(day1.countIncreases(example)).toBe(7);
});

test('Count increases in sliding windows of length 3', () => {
  expect(day1.countWindowIncreases(example)).toBe(5);
});
