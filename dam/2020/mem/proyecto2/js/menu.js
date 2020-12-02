//Elementos del Menú Principal
const $divMenuPrincipal = document.querySelector("#menuPrincipal");
const $btnStartGame = document.querySelector("#startGame");
const $btnOpciones = document.querySelector("#opcionesMenu");
const $btnRedes = document.querySelector("#redesMenu");

//Elementos del Menú de Opciones
const $divOpciones = document.querySelector("#menuOpciones");
const $btnOpcionVolver = document.querySelector("#opcionVolver");

//Elementos del Contenedor de Redes
const $divContenedorRedes = document.querySelector("#contenedorRedes");
const $btnOpcionVolver2 = document.querySelector("#opcionVolver2");


//Funciones de los botones del Menú Principal
$btnStartGame.onclick = function(event) {
  $divMenuPrincipal.classList.add("hide");
  $divMarco.classList.remove("hide");
};
$btnOpciones.onclick = function(event) {
  $divMenuPrincipal.classList.add("hide");
  $divOpciones.classList.remove("hide");
};
$btnRedes.onclick = function(event) {
  $divMenuPrincipal.classList.add("hide");
  $divContenedorRedes.classList.remove("hide");
};

//Funciones de los botones del Menú de Opciones
$btnOpcionVolver.onclick = function(event) {
  $divOpciones.classList.add("hide");
  $divMenuPrincipal.classList.remove("hide");
};

//Funciones de los botones del Contenedor de Redes
$btnOpcionVolver2.onclick = function(event) {
  $divContenedorRedes.classList.add("hide");
  $divMenuPrincipal.classList.remove("hide");
};