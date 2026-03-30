/*Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.  */
function miPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operación exitosa");
    }, 3000);
  });
}

miPromesa().then(console.log);