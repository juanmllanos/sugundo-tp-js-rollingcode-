let pisosPiramide = parseInt(prompt('Escriba el numero de escalones que quiera que tenga la piramide. (Entre 1 y 50)'));

while (pisosPiramide < 1 || pisosPiramide > 50 || !pisosPiramide) {
	if (pisosPiramide < 1 || pisosPiramide > 50) {
		alert('Numero Invalido.');
		pisosPiramide = parseInt(prompt('Escriba el numero de escalones que quiera que tenga la piramide. (Entre 1 y 50)'));
	};
	if (!pisosPiramide) {
		alert('No ingresaste un Numero.');
		pisosPiramide = parseInt(prompt('Escriba el numero de escalones que quiera que tenga la piramide. (Entre 1 y 50)'));
	};
};

for (let escalones = pisosPiramide; escalones > 0; escalones--) {
	for (let numero = 1; numero <= escalones; numero++) {
		document.write(`${escalones}`);
		if (numero === escalones) {
			document.write(`<br>`);
		};
	};
};