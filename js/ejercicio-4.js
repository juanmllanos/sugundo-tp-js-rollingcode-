let acumulador = 0;
do {
	let numero = parseInt(prompt('Ingrese un numero'));
	if (numero + 0){
	acumulador = acumulador + numero;
	} else alert('No ingresaste un numero.');
} while (confirm());
document.write(`La suma de todos los numero ingresados es: ${acumulador}`);