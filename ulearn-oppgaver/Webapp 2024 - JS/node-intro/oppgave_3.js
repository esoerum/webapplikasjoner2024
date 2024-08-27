const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Skal du ha på munnbind i dag?: ", (answer) => {
  if(answer === '1') {
    console.log("Ja")
  } else if(answer === '2') {
    console.log("Nei")
  } else {
    console.log("Hold deg inne")
  }
  rl.close();
});