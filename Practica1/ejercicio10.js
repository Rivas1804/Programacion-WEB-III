/* ¿Cuando es conveniente utilizar un callback, y cuando es necesario utilizar una
promesa? 
Callback: Para tareas simples y rápidas.
Promesas: Para manejar asincronía más compleja y evitar el “callback hell”.*/


//simple (callback):
function saludar(nombre, callback) {
  console.log("Hola " + nombre);
  callback();
}

function despedir() {
  console.log("Adiós!");
}

saludar("Juan", despedir);

//asincronía (setTimeout):
function tarea(callback) {
  setTimeout(() => {
    console.log("Tarea terminada");
    callback();
  }, 2000);
}

tarea(() => {
  console.log("Siguiente paso");
});



//promesa
function tarea() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tarea completada");
    }, 2000);
  });
}

//encadenado promesas
tarea().then(resultado => {
  console.log(resultado);
});

function paso1() {
  return Promise.resolve("Paso 1");
}

function paso2(data) {
  return Promise.resolve(data + " → Paso 2");
}

function paso3(data) {
  return Promise.resolve(data + " → Paso 3");
}

paso1()
  .then(paso2)
  .then(paso3)
  .then(console.log);