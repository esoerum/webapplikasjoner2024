const readline = require("readline");

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const language = "Node";

r1.question("Hva heter du? ", (name) => {
	console.log(`Hei ${name}. Velkommen til intro til programmering med ${name}.`);
	r1.close();

});





