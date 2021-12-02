const fsPromises = require('fs/promises');

const submarineDirections = (instructions) => {
  let d = 0;
  let h = 0;

  const commands = {
    forward(distance) {
      h += distance;
    },
    down(distance) {
      d += distance;
    },
    up(distance) {
      d -= distance;
    },
  };

  instructions.forEach((instruction) => {
    const [command, distance] = instruction.split(' ');
    commands[command](Number(distance));
  });
  return d * h;
};

const aimDirections = (instructions) => {
  let d = 0;
  let h = 0;
  let a = 0;
  const commands = {
    forward(distance) {
      h += distance;
      d += a * distance;
    },
    down(distance) {
      a += distance;
    },
    up(distance) {
      a -= distance;
    },
  };
  instructions.forEach((instruction) => {
    const [command, distance] = instruction.split(' ');
    commands[command](Number(distance));
  });
  return h * d;
};

fsPromises.readFile('input.txt')
  .then((input) => (
    input
      .toString('utf8')
      .split('\n')
      .map((line) => line)
  ))
  .then((input) => (console.log(submarineDirections(input), aimDirections(input))));

module.exports.submarineDirections = submarineDirections;
