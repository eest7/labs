const $Menu = document.querySelector("#Menu");
const $Start = document.querySelector("#Start");
const $Options = document.querySelector("#Options");
const $Controls = document.querySelector("#Controls");

const $Select = document.querySelector("#Select");
const $Return = document.querySelector("#Return");
const $Personajes = document.querySelector("#Personajes");
const $Personajesdesc = document.querySelector("#Personajesdesc");
const $Run = document.querySelector("#run");
const $Run2 = document.querySelector("#run2");
const $botoncito= document.querySelector('#botoncito');
const $sonic= document.querySelector('#sonic');
const $tails= document.querySelector('#tails');
const $sonicdesc = document.querySelector('#sonicdesc');
const $tailsdesc = document.querySelector('#tailsdesc');

const $Controles = document.querySelector("#Controles");
const $Returncontroles = document.querySelector("#Returncontroles");

const $Opciones = document.querySelector("#Opciones");
const $ReturnOptions = document.querySelector("#ReturnOptions");

const $SeleccionarOpcionaudio = document.createElement("audio");
const $Retrocederaudio = document.createElement("audio");
const $SeleccionPersonajeaudio = document.createElement("audio");
const $ChooseYourCharacteraudio = document.createElement("audio");
const $FondoMusica = document.createElement("audio");
const $Sonicdialogo = document.createElement("audio");
const $Tailsdialogo = document.createElement("audio");

$SeleccionarOpcionaudio.src = "./mp3/seleccionmenu.mp3";
$Retrocederaudio.src = "./mp3/retroceder.mp3";
$SeleccionPersonajeaudio.src = "./mp3/seleccion.mp3";
$ChooseYourCharacteraudio.src = "./mp3/super-smash-bros-melee-announcer-choose-your-character.mp3";
$FondoMusica.src = "./mp3/fondo.mp3";
$Sonicdialogo.src = "./mp3/Sonic Dialogo Seleccion.mp3";
$Tailsdialogo.src = "./mp3/Tails Dialogo Seleccion.mp3";

$FondoMusica.loop= true;

window.onload = function(e) {
  $FondoMusica.play();
};

$Start.onclick = function() {
  $ChooseYourCharacteraudio.play();
  $SeleccionarOpcionaudio.play();
  $Menu.style.display="none";
  $Select.style.display="block";
};

$Return.onclick = function() {
  $Retrocederaudio.play();
  $Menu.style.display="block";
  $Select.style.display="none";
}

$ReturnOptions.onclick = function() {
  $Retrocederaudio.play();
  $Menu.style.display="block";
  $Opciones.style.display="none";
}

$Options.onclick=function(){
  $SeleccionarOpcionaudio.play();
  $Menu.style.display="none";
  $Opciones.style.display="block";
}
$Controls.onclick=function(){
  $SeleccionarOpcionaudio.play();
  $Menu.style.display="none";
  $Controles.style.display="block";
}

$Returncontroles.onclick = function() {
  $Retrocederaudio.play();
  $Menu.style.display="block";
  $Controles.style.display="none";
}

$botoncito.onclick=function(){
  $SeleccionarOpcionaudio.play();
}

$sonic.onclick=function(){
  $SeleccionPersonajeaudio.play();
  $Sonicdialogo.play();
  $sonicdesc.style.display = "block";
  $Run.style.display = "block";
  $tailsdesc.style.display = "none";
  $Run2.style.display = "none";
}

$tails.onclick=function(){
  $Tailsdialogo.play();
  $SeleccionPersonajeaudio.play();
  $tailsdesc.style.display = "block";
  $Run2.style.display = "block";
  $sonicdesc.style.display = "none";
  $Run.style.display = "none";
}