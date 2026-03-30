/*Crear una función que invierta el orden de las palabras en una frase.
let cad = miFuncion(“abcd”)
console.log(obj) // dcba*/

function miFuncion(cadena) {
  return cadena.split("").reverse().join("");
}

let cad = miFuncion("abcd");
console.log(cad);