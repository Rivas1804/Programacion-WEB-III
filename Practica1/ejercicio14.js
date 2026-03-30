/*Proporcione un ejemplo para convertir una promesa en un callback.
 */

function obtenerDatosPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; // Cambiar a false para simular error
      if (exito) {
        resolve("Datos obtenidos correctamente");
      } else {
        reject("Error al obtener datos");
      }
    }, 1000);
  });
}

function obtenerDatosCallback(cb) {
  obtenerDatosPromesa()
    .then(resultado => cb(null, resultado)) // null = sin error
    .catch(error => cb(error));            // si hay error
}

// Uso del callback:
obtenerDatosCallback((err, datos) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Éxito:", datos);
  }
});