let colada = document.querySelector(".hacer-colada");
let hermana = document.querySelector(".cuidar-hermana");
let perro = document.querySelector(".pasear-perro");
let boton = document.querySelector(".boton-tareas");
let botonTema = document.querySelector(".boton-tema");

// Guardar un valor
if (localStorage.getItem("theme") === "claro") {
  botonTema.textContent = "Cambiar a tema oscuro";
  document.documentElement.setAttribute("theme", "");
} else {
  botonTema.textContent = "Cambiar a tema claro";
  document.documentElement.setAttribute("theme", "dark");
}

function hacerColada() {
  return new Promise((resolve) => {
    console.log("Iniciando tarea: Hacer la colada");
    setTimeout(() => {
      resolve("Tarea finalizada: Hacer la colada");
    }, 3000);
  });
}

function cuidarHermana() {
  return new Promise((resolve) => {
    console.log("Iniciando tarea: Cuidar hermana");
    setTimeout(() => {
      resolve("Tarea finalizada: Cuidar hermana");
    }, 3000);
  });
}

function pasearPerro() {
  return new Promise((resolve) => {
    console.log("Iniciando tarea: Pasear perro");
    setTimeout(() => {
      resolve("Tarea finalizada: Pasear perro");
    }, 3000);
  });
}

function reset() {
  return new Promise((resolve) => {
    console.log("Reiniciando...");
    setTimeout(() => {
      resolve("Reinicio Completado");
    }, 5000);
  });
}

botonTema.addEventListener("click", function () {
  if (localStorage.getItem("theme") === "claro") {
    localStorage.setItem("theme", "oscuro");
    document.documentElement.setAttribute("theme", "dark");
    botonTema.textContent = "Cambiar a tema claro";
  } else {
    localStorage.setItem("theme", "claro");
    document.documentElement.setAttribute("theme", "");
    botonTema.textContent = "Cambiar a tema oscuro";
  }
});

boton.addEventListener("click", function () {
  hacerColada()
    .then((resultado) => {
      console.log(resultado);
      colada.firstElementChild.classList.remove("blanco-negro");
      colada.firstElementChild.classList.add("color");
      return cuidarHermana();
    })
    .then((resultado) => {
      console.log(resultado);
      hermana.firstElementChild.classList.remove("blanco-negro");
      hermana.firstElementChild.classList.add("color");
      return pasearPerro();
    })
    .then((resultado) => {
      console.log(resultado);
      perro.firstElementChild.classList.remove("blanco-negro");
      perro.firstElementChild.classList.add("color");
      console.log("Tareas Completadas!");
      return reset();
    })
    .then((resultado) => {
      console.log(resultado);
      colada.firstElementChild.classList.remove("color");
      colada.firstElementChild.classList.add("blanco-negro");
      hermana.firstElementChild.classList.remove("color");
      hermana.firstElementChild.classList.add("blanco-negro");
      perro.firstElementChild.classList.remove("color");
      perro.firstElementChild.classList.add("blanco-negro");
    })
    .catch((error) => {
      console.error("Error en la limpieza:", error);
    });
});

/*
## Notas P4 - Reloj Merena

## Descripción General

- Debes implementar la funcionalidad de cambio de tema (de tema claro a tema oscuro y viceversa) en la P1 - Tareas.
- NOTA: El texto del botón debe cambiar de "Cambiar a tema oscuro" o "Cambiar a tema claro" según el tema actual.
- Cuando haya cambio de tema, debes de guardar esa preferencia del usuarie en localStorage y recuperarla cuando se refresque la página.
- PISTA: document.documentElement -> root

## Calificación

- Funcionalidad cambio tema -> 20 puntos
- Funcionalidad localStorage -> 20 puntos
*/
