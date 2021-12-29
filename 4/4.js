const fsPromises = require('fs/promises');



fsPromises.readFile('example.txt')
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
    console.log(callOrder, boards);
  });
