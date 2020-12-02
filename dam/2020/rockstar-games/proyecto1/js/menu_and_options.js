//Efectos de hover en el boton Start Game
const $btnStart = document.getElementById("start"),
  $divBall1 = document.getElementById("ball1");
$btnStart.onmouseover = function(event) {
  $divBall1.classList.remove("hidden");
};
$btnStart.onmouseout = function(event) {
  $divBall1.classList.add("hidden");
};
//Efectos de hover en el boton Options
const $btnOpciones = document.getElementById("opciones"),
  $divBall2 = document.getElementById("ball2");
$btnOpciones.onmouseover = function(event) {
  $divBall2.classList.remove("hidden");
};
$btnOpciones.onmouseout = function(event) {
  $divBall2.classList.add("hidden");
};
//Transicion de menu a menu de Options
const $divMenu = document.getElementById("divMenu"),
  $divOpciones = document.getElementById("divOpciones"),
  $logo = document.getElementById("logo");
$btnOpciones.onclick = function(event) {
  $divMenu.classList.add("noDisplay");
  $divOpciones.classList.remove("noDisplay");
  $logo.style.fontSize = 14 + "vh";
};
//Sistema de muteo y desmuteo del sonida de fondo
const $menuAudio = document.getElementById("audio-menu"),
  $audioHit = document.getElementById("audioHit"),
  $volumeOff = document.getElementById("volumeOff"),
  $volumeOn = document.getElementById("volumeOn");
var audio = true;
$volumeOff.onclick = function(event) {
  audio = false;
  $menuAudio.muted = true;
  $audioHit.muted = true;
  $volumeOn.style.fontSize = 20 + "px";
  $volumeOn.style.color = "gray";
  $volumeOn.style.textShadow = "none";
  $volumeOff.style.textShadow = "0 0 0.4em #05d5fc";
  $volumeOff.style.fontSize = 25 + "px";
  $volumeOff.style.color = "white";
};
$volumeOn.onclick = function(event) {
  audio = true;
  $menuAudio.currentTime = 0;
  $menuAudio.muted = false;
  $audioHit.muted = false;
  $volumeOff.style.fontSize = 20 + "px";
  $volumeOff.style.color = "gray";
  $volumeOff.style.textShadow = "none";
  $volumeOn.style.textShadow = "0 0 0.4em #05d5fc";
  $volumeOn.style.fontSize = 25 + "px";
  $volumeOn.style.color = "white";
};
//Transicion de menu Options a menu
//Sistema de idiomas en el juego
const $btnVolver = document.getElementById("volver"),
  $selectIdiomas = document.getElementById("select"),
  $textIdiomas = document.getElementById("textIdioma");
$btnVolver.onclick = function(event) {
  $logo.style.fontSize = 19 + "vh";
  $divMenu.classList.remove("noDisplay");
  $divOpciones.classList.add("noDisplay");
  if ($selectIdiomas.value == 2) {
    $textIdiomas.innerHTML = "Language:";
    document.getElementById("textVolver").innerHTML = "BACK";
    document.getElementById("textStart").innerHTML = "START";
    document.getElementById("textOptions").innerHTML = "OPTIONS";
    document.getElementById("textEspañol").innerHTML = "Spanish";
    document.getElementById("textIngles").innerHTML = "English";
    document.getElementById("textTip1").innerHTML =
      "Don't let de ball or the bricks reach the floor.";
    document.getElementById("textTip2").innerHTML =
      "Attack first the blocks at the bottom.";
    document.getElementById("textTip3").innerHTML =
      "Try to aim your target with the ball.";
    document.getElementById("textTip4").innerHTML =
      "Hit the magent bricks twice to destroy them.";
    document.getElementById("textInst1").innerHTML = "TAP A KEY TO START.";
    document.getElementById("textInst2").innerHTML =
      "TAP THE ARROW KEYS TO MOVE FROM RIGHT TO LEFT.";
    document.getElementById("textInst3").innerHTML =
      "DESTROY THE BRICKS TO EARN POINTS.";
    document.getElementById("textInst4").innerHTML =
      "FROM TIME TO TIME A NEW LINE OF BRICKS WILL BE ADDED.";
    document
      .getElementById("lose-game-pop")
      .setAttribute("data-title", "GAME OVER");
    document.getElementById("textPerder").innerHTML = "You lost!";
    document.getElementById("textScore").innerHTML = "Score:";
    document.getElementById("lose-game-volver").innerHTML = "BACK";
    document.getElementById("textInfo").setAttribute("data-title", "Options");
  }
  if ($selectIdiomas.value == 1) {
    document.getElementById("textStart").innerHTML = "COMENZAR";
    document.getElementById("textOptions").innerHTML = "OPCIONES";
    document.getElementById("textInfo").setAttribute("data-title", "Opciones");
    document.getElementById("textVolver").innerHTML = "VOLVER";
    $textIdiomas.innerHTML = "Idioma:";
    document.getElementById("textEspañol").innerHTML = "Español";
    document.getElementById("textIngles").innerHTML = "Inglés";
    document.getElementById("textTip1").innerHTML =
      "Impide que la pelota o los bloques toquen el suelo.";
    document.getElementById("textTip2").innerHTML =
      "Ataca primero a los bloques de abajo.";
    document.getElementById("textTip3").innerHTML =
      "Trata de dirigir la pelota hacia tus objetivos.";
    document.getElementById("textTip4").innerHTML =
      "Golpea los bloques magentas 2 veces para destruirlos.";
    document.getElementById("textInst1").innerHTML =
      "TOQUE UNA TECLA PARA COMENZAR.";
    document.getElementById("textInst2").innerHTML =
      "TOQUE LAS FLECHAS PARA MOVERSE DE IZQUIERDA A DERECHA.";
    document.getElementById("textInst3").innerHTML =
      "DESTRUYE LOS BLOQUES PARA OBTENER PUNTOS.";
    document.getElementById("textInst4").innerHTML =
      "CADA CIERTO TIEMPO SE AGREGARA UNA NUEVA LINEA DE BLOQUES.";
    document
      .getElementById("lose-game-pop")
      .setAttribute("data-title", "JUEGO TERMINADO");
    document.getElementById("textPerder").innerHTML = "Perdiste!";
    document.getElementById("textScore").innerHTML = "Tu puntuacion fue:";
    document.getElementById("lose-game-volver").innerHTML = "VOLVER";
  }
};
