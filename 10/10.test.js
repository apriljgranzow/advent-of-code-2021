const day10 = require('./10');

test('Matching individual bracket pairs', () => {
  expect(day10.isMatching('>', '<')).toBe(true);
  expect(day10.isMatching(')', '(')).toBe(true);
  expect(day10.isMatching(']', '[')).toBe(true);
  expect(day10.isMatching('}', '{')).toBe(true);
  expect(day10.isMatching('}', '<')).toBe(false);
  expect(day10.isMatching('}', '}')).toBe(false);
});

test('Valid sets of brackets should return -1', () => {
  const validLines = [
    '()',
    '[]',
    '([])',
    '{()()()}',
    '<([{}])>',
    '[<>({}){}[([])<>]]',
    '(((((((((())))))))))',
  ];

  validLines.forEach((line) => {
    expect(day10.validateParens([...line])).toBe(-1);
  });
});

test('Invalid sets of brackets should return the index of the first mismatched closing bracket', () => {
  expect(day10.validateParens([...'(]'])).toBe(1);
  expect(day10.validateParens([...'{()()()>'])).toBe(7);
  expect(day10.validateParens([...'(((()))}'])).toBe(7);
  expect(day10.validateParens([...'<([]){()}[{}])'])).toBe(13);
});
