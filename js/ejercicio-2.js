const nota = parseInt(prompt('Ingrese una nota (Del 1 al 10).'));

if (nota >= 0 && nota <= 2) {
	document.write('Muy deficiente.');
} else if (nota >= 3 && nota <= 4) {
	document.write('Insuficiente.');
} else if (nota >= 5 && nota < 7) {
	document.write('Suficiente.');
} else if (nota === 7) {
	document.write('Bien.');
} else if (nota > 7 && nota < 10) {
	document.write('Notable.');
} else if (nota === 10) {
	document.write('Sobresaliente.');
} else if (nota < 0) {
	document.write('Numero no valido.');
} else if (nota > 10) {
	document.write('Numero erroneo');
} else {
	document.write('No ingresaste un numero.');
};