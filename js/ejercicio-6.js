for (let escalones = 1; escalones <= 30; escalones++) {
	for (let numero = 1; numero <= escalones; numero++) {
		document.write(`${escalones}`);
		if (numero === escalones) {
			document.write(`<br>`);
		};
	};
};