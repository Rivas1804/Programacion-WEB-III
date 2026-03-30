/* Proporcione un ejemplo para migrar una función con promesas a async/await.
 */
// Antes
miPromesa().then(res => console.log(res));

// Después
async function ejecutar() {
  let res = await miPromesa();
  console.log(res);
}

ejecutar();