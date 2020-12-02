//Elementos del Menú Principal
const $divMenuPrincipal = document.querySelector("#menuPrincipal");
const $btnStartGame = document.querySelector("#startGame");
const $btnOpciones = document.querySelector("#opcionesMenu");

//Elementos del Menú de Opciones
const $divOpciones = document.querySelector("#menuOpciones");
const $btnOpcionVolver = document.querySelector("#opcionVolver");

//Funciones de los botones del Menú Principal
$btnStartGame.onclick = function(event) {
  $divMenuPrincipal.classList.add("hide");
  $divMarco.classList.remove("hide");
};
$btnOpciones.onclick = function(event) {
  $divMenuPrincipal.classList.add("hide");
  $divOpciones.classList.remove("hide");
};

//Funciones de los botones del Menú de Opciones
$btnOpcionVolver.onclick = function(event) {
  $divOpciones.classList.add("hide");
  $divMenuPrincipal.classList.remove("hide");
};

