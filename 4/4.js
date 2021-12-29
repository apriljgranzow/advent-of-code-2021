const fsPromises = require('fs/promises');

/** Take an array of boards and creates an array of Map objects. */
const createBoardMap = function createBoardMaps(board) {
  const boardMap = new Map();
  board.forEach((row, rowIndex) => {
    row.forEach((number, colIndex) => {
      boardMap.set(number, {
        row: rowIndex,
        col: colIndex,
      });
    });
  });
  return boardMap;
};

class BingoBoard {
  constructor(matrix) {
    this.numberMap = createBoardMap(matrix);
    this.filledMap = { rows: new Map(), cols: new Map() };
  }

  fill(number) {
    if (this.numberMap.has(number)) {
      const { row, col } = this.numberMap.get(number);
      const rowCount = this.filledMap.rows.has(row) ? this.filledMap.rows.get(row) + 1 : 1;
      const colCount = this.filledMap.cols.has(col) ? this.filledMap.cols.get(col) + 1 : 1;
      this.filledMap.rows.set(row, rowCount);
      this.filledMap.cols.set(col, colCount);
    }
  }

  isWinner() {
    return (
      Array.from(this.filledMap.rows.values()).some((count) => count >= 5)
      || Array.from(this.filledMap.cols.values()).some((count) => count >= 5)
    );
  }

  score(calledSet, lastNumber) {
    // given a set of numbers that have been called
    // find all the numbers on this board that have not been called
    // sum those numbers and multiply by the last number that was called
    const sumReducer = (prev, curr) => (Number(prev) + Number(curr));
    const unmarkedNumbers = Array.from(this.numberMap.keys()).filter((x) => !(calledSet.has(x)));
    const sum = unmarkedNumbers.reduce(sumReducer);
    return sum * Number(lastNumber);
  }
}

const part1 = function part1(numbers, boards) {
  const bingoBoards = boards.map((board) => new BingoBoard(board));
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < bingoBoards.length; j += 1) {
      bingoBoards[j].fill(numbers[i]);
      if (i >= 5 && bingoBoards[j].isWinner()) {
        const calledSet = new Set(numbers.slice(0, i + 1));
        return (bingoBoards[j].score(calledSet, numbers[i]));
      }
    }
  }
};

fsPromises.readFile('input.txt')
  .then((text) => {
    const lines = text.toString('utf8').split('\n\n');
    const callOrder = lines[0].split(',');
    const boards = lines.slice(1)
      .map((board) => {
        const rowStrings = board.split('\n');
        const rows = [];
        rowStrings.forEach((rowString) => {
          // split by whitespace and remove empty strings
          rows.push(rowString.split(/\s/).filter(Boolean));
        });
        return rows;
      });

    console.log(part1(callOrder, boards));
  });
