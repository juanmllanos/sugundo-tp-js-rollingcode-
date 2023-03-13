const frase = prompt('Ingrese un texto:');
document.write(frase.charAt(0));
for (let letra = 1; letra < frase.length -1; letra++) {
	document.write(`-${frase.charAt(letra)}`);
};
document.write(`-${frase.charAt(frase.length - 1)}`);