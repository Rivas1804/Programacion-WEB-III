/* Proporcione un ejemplo concreto de encadenamiento de promesas.
 */
function paso1() {
  return Promise.resolve("Paso 1");
}

function paso2(data) {
  return Promise.resolve(data + " -> Paso 2");
}

function paso3(data) {
  return Promise.resolve(data + " -> Paso 3");
}

paso1()
  .then(paso2)
  .then(paso3)
  .then(console.log);