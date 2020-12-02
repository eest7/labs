//Elementos del juego
const $divMarco3 = document.querySelector("#frame3");
const $btnOpcionVolverMenu3 = document.querySelector("#opcionVolverMenu3");

//Funcion del boton del Juego
$btnOpcionVolverMenu3.onclick = function(event) {
	$divMarco3.classList.add("hide");
  	location.href="game.html";
};