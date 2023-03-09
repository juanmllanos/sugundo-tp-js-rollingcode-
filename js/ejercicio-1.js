const edadUsuario = parseInt(prompt('Ingresa tu edad.'));
if (edadUsuario >= 18 && edadUsuario <= 110) {
	document.write('Podes manejar.');
} else if (edadUsuario > 0 && edadUsuario < 18){
	document.write('Sos menor de edad, no podes manejar.');
} else if (edadUsuario < 0 || edadUsuario > 110) {
	document.write('Ingrese un numero invalido.');
} else {
	document.write('No ingresaste un numero.');
};