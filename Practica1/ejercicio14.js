/*Proporcione un ejemplo para convertir una promesa en un callback.
 */

function conCallback(callback) {
  miPromesa().then(resultado => callback(resultado));
}

conCallback(console.log);