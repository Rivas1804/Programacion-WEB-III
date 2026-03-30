/* Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
reescribir mejor con async/await haciendo el código más limpio y mantenible.
 */
setTimeout(() => {
  console.log("Paso 1");
  setTimeout(() => {
    console.log("Paso 2");
    setTimeout(() => {
      console.log("Paso 3");
    }, 1000);
  }, 1000);
}, 1000);

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejecutar() {
  await esperar(1000);
  console.log("Paso 1");
  await esperar(1000);
  console.log("Paso 2");
  await esperar(1000);
  console.log("Paso 3");
}

ejecutar();