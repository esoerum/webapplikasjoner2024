const readline = require("readline");

const r1 = readline.createInterface({

	input: process.stdin,
	output: process.stdout,
});

r1.question("Skriv to tall (med mellomrom: ", (values) => {
	const [first_value, second_value] = values.split(' ')
	console.log(Number(first_value) + Number(second_value))
	r1.close();
});	
