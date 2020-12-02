//Elementos del juego
const $divMarco = document.querySelector("#frame");
const $btnOpcionVolverMenu = document.querySelector("#opcionVolverMenu");

$divMarco.classList.add("hide");

//Funcion del boton del Juego
$btnOpcionVolverMenu.onclick = function(event) {
  	$divMarco.classList.add("hide");
  	$divMenuPrincipal.classList.remove("hide");
};