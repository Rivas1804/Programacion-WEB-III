/*Proporcione un ejemplo concreto donde el anidamiento de promesas se puede
reescribir mejor con async/await haciendo el código más limpio y mantenible.
 */
// Antes
miPromesa()
  .then(res => {
    console.log(res);
    return miPromesa();
  })
  .then(console.log);

// Después
async function ejecutar() {
  let res1 = await miPromesa();
  console.log(res1);
  let res2 = await miPromesa();
  console.log(res2);
}