const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const first_value = 10

rl.question("Skriv et tall: ", (second_value) => {
  console.log(first_value + Number(second_value); // 15
  rl.close();
});	
























