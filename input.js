const readline = require("readline");
let input = process.stdin;
let output = process.stdout;
const read = readline.createInterface({ input, output });

function readInput(param, result) {
  read.question(param, (userInput) => {
    result(userInput);
    read.close();
  });
}
exports.read = read;
exports.input = readInput;
