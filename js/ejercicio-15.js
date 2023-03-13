const frase = prompt('Ingrese un texto:');
let vocales = 0;
for (const letra of frase) {
	if (/[aeiouáéíóúü]/i.test(letra)) vocales++;
};
document.write(`Las vocales son: ${vocales}.`);