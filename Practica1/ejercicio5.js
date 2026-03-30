/* Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
al revés).
let band = miFuncion(“oruro”)
console.log(band) // true
let band = miFuncion(“hola”)
console.log(band) // false */

function miFuncion(cadena) {
  let limpia = cadena.toLowerCase();
  let invertida = limpia.split("").reverse().join("");
  return limpia === invertida;
}

console.log(miFuncion("oruro")); // true
console.log(miFuncion("hola"));  // false