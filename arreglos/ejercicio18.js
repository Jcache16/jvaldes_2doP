/*
Suma 2 puntos por cada número par existente en el arreglo
Suma 1 punto por cada número impar del arreglo, excepto si es el número "7"
Suma 3 puntos cada vez que aparezca el número "7" en el arreglo.
*/

// Declaracion del arreglo
//let arrEnteros = [1, 2, 3, 4, 5]; //1 + 2 + 1 + 2 + 1 = 7
//let arrEnteros = [17,19,21]; //1 + 1 + 1 = 3
let arrEnteros = [7,7,7]; //3 + 3 + 3 = 9


let resultado = calcularPuntaje(arrEnteros);
console.log(resultado); 


function calcularPuntaje(arreglo) {
  let puntaje = 0; //inicializacion para la suma
  for (let i = 0; i < arreglo.length; i++) {
    let valorNumero = arreglo[i];
    if (valorNumero === 7) { //Caso que sea 7
      puntaje += 3;
    } else if (valorNumero % 2 === 0) { //Saber si el numero es par o si es igual a 0 (que vale como par)
      puntaje += 2;
    } else {
      puntaje += 1; //De lo contrario es impar
    }
  }
  return puntaje;
}



