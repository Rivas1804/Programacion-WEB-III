/* Realizar un código para ejecutar una función callback después 2 segundos */
function ejecutarCallback(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

ejecutarCallback(() => {
  console.log("Ejecutado después de 2 segundos");
});