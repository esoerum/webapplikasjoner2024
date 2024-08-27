const readline= require("readline");

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

	r1.question("[D]ollar eller [N]orske kroner? ", (currency) => {
	const selectedCurrency = currency.toLowerCase();
	if(selectedCurrency === "d") {
	r1.question("Hvilken verdi i dollar vil du konvertere til norske kroner? ", (value) => {
	console.log(Number(value) * 10);
	r1.close();
	}
	);
	} else if (selectedCurrency === "n") {
	r1.question("Hvilken verdi i norske kroner vil du konvertere til dollar? ", (value) => {
	console.log(Number(value) / 10);
	r1.close();
	}
	);
	} else {
	console.log("Verdien var ikke gyldig");
	r1.close();
	}
});
