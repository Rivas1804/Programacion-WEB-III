/* Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
elementos de un arreglo, mediante desestructuración. */

let arr = [10, 20, 30, 40];
let [a, b, ...resto] = arr;

console.log(resto);