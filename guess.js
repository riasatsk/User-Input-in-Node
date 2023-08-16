const { read } = require("./input");

let random = Math.floor(Math.random() * 100);

function guess() {
  read.question("Guess : ", (n) => {
    n = parseInt(n);
    if (n === random) {
      console.log("Yes");
      read.close();
    } else if (n > random) {
      console.log("You guess a big number");
      guess();
    } else if (n < random) {
      console.log("You guess a small number");
      guess();
    }
  });
}
guess();
