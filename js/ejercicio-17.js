const frase = prompt('Ingrese un texto:')
let vocal = /[aeiouáéíóúü]/i;
document.write(`La primera vocal es la "${frase[(frase.search(vocal))]}".`);