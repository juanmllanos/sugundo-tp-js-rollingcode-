const filas = prompt('Ingrese el numero de filas');
const columnas = prompt('Ingrese el numero de columnas');
let totalDeCeldas = filas*columnas;
document.write('<table><tbody>');
for(let indiceFilas=0; indiceFilas < filas; indiceFilas++){
   document.write('<tr>');
        for( let indiceColumnas=0;  indiceColumnas <columnas; indiceColumnas++){
            document.write(`<td>${totalDeCeldas}</td>`);
			totalDeCeldas--;
        };
   document.write('</tr>');
};
document.write('</tbody></table>');