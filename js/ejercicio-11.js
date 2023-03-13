const nombrePersonaUno = prompt('Ingrese un nombre:');
const edadPersonaUno = parseInt(prompt(`Ingrese la edad de ${nombrePersonaUno}:`));
const nombrePersonaDos = prompt('Ingrese un nombre:');
const edadPersonaDos = parseInt(prompt(`Ingrese la edad de ${nombrePersonaDos}:`));
const nombrePersonaTres = (prompt('Ingrese un nombre:')); 
const edadPersonaTres =parseInt(prompt(`Ingrese la edad de ${nombrePersonaTres}:`));

const edadMayor = Math.max(edadPersonaUno, edadPersonaDos, edadPersonaTres);

switch (edadMayor) {
	case edadPersonaUno:
		document.write(`La persona mayor es ${nombrePersonaUno}.`);
		break;
	case edadPersonaDos:
		document.write(`La persona mayor es ${nombrePersonaDos}.`);
		break;
	case edadPersonaTres:
		document.write(`La persona mayor es ${nombrePersonaTres}.`);
		break;
};