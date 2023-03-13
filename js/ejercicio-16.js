const frase = prompt('Ingrese un texto:');
let fraseInvertida = "";
for (let letra = frase.length - 1; letra >= 0; letra--) {
    fraseInvertida += frase[letra];
};
document.write(fraseInvertida);