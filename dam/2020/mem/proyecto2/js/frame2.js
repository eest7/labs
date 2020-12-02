//Elementos del juego
const $divMarco2 = document.querySelector("#frame2");
const $btnOpcionVolverMenu2 = document.querySelector("#opcionVolverMenu2");

//Funcion del boton del Juego
$btnOpcionVolverMenu2.onclick = function(event) {
	$divMarco2.classList.add("hide");
  	location.href="game.html";
};