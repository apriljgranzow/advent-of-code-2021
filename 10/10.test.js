const day10 = require('./10');

test('Matching individual bracket pairs', () => {
  expect(day10.isMatching('>', '<')).toBe(true);
  expect(day10.isMatching(')', '(')).toBe(true);
  expect(day10.isMatching(']', '[')).toBe(true);
  expect(day10.isMatching('}', '{')).toBe(true);
  expect(day10.isMatching('}', '<')).toBe(false);
  expect(day10.isMatching('}', '}')).toBe(false);
});

describe('Index of first corrupted bracket', () => {
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
      expect(day10.indexOfFirstCorrupted([...line])).toBe(-1);
    });
  });

  test('Invalid sets of brackets should return the index of the first mismatched closing bracket', () => {
    expect(day10.indexOfFirstCorrupted([...'(]'])).toBe(1);
    expect(day10.indexOfFirstCorrupted([...'{()()()>'])).toBe(7);
    expect(day10.indexOfFirstCorrupted([...'(((()))}'])).toBe(7);
    expect(day10.indexOfFirstCorrupted([...'<([]){()}[{}])'])).toBe(13);
  });
});

describe('Completion strings', () => {
  const incompleteLines = [
    ['[({(<(())[]>[[{[]{<()<>>', '}}]])})]'],
    ['[(()[<>])]({[<{<<[]>>(', ')}>]})'],
    ['(((({<>}<{<{<>}{[]{[]{}', '}}>}>))))'],
    ['{<[[]]>}<{[{[{[]{()[[[]', ']]}}]}]}>'],
    ['<{([{{}}[<[[[<>{}]]]>[]]', '])}>'],
  ];
  test('For an uncorrupted/incomplete line, getCompletionString should return the exact sequence of brackets that would complete a valid line', () => {
    incompleteLines.forEach(([line, solution]) => {
      expect(day10.getCompletionString([...line])).toEqual(solution);
    });
  });

  const corruptedLines = [
    '{([(<{}[<>[]}>{[]{[(<()>',
    '[[<[([]))<([[{}[[()]]]',
    '[{[{({}]{}}([{[{{{}}([]',
    '[<(<(<(<{}))><([]([]()',
    '<{([([[(<>()){}]>(<<{{',
  ];
  test('For a corrupted line, getCompletionString should return an empty string', () => {
    corruptedLines.forEach((line) => {
      expect(day10.getCompletionString([...line])).toEqual('');
    });
  });
  test('Scoring completion strings', () => {
    const scores = [288957, 5566, 1480781, 995444, 294];
    incompleteLines.forEach(([, solution], index) => {
      expect(day10.scoreCompletionString(solution)).toEqual(scores[index]);
    });
  });
});
