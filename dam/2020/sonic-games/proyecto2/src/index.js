//FONDO DEL JUEGO
const $window = window;
//SONIDOS

const $sncorriendo = document.createElement("audio");
$sncorriendo.src = "//sonidos/corriendo-.wav";
const $snarmaimpacto = document.createElement("audio");
$snarmaimpacto.src = "sonidos/arma-clavandose.wav";
const $sngameover = document.createElement("audio");
$sngameover.src = "sonidos/gameover.wav";
const $snarmalanzando = document.createElement("audio");
$snarmalanzando.src = "sonidos/lanzando-arma.wav";
const $snsalto = document.createElement("audio");
$snsalto.src = "sonidos/salto.wav";
const $snwin = document.createElement("audio");
$snwin.src = "sonidos/win.wav";
const $snmoneda = document.createElement("audio");
$snmoneda.src = "//sonidos/mario-coin.mp3";
const $snmuerte = document.createElement("audio");
$snmuerte.src = "sonidos/export.wav";

//------------------------------------------------------
const $main = document.querySelector("#main");
const $menu2 = document.querySelector("#menu");
//VARIABLES
let FPS = 60;
let gravedad = 1;
let limitevy = 6;
let alto, ancho;
let frametex;
let nivel = 1,
  frame = 1,
  frameninja = 1,
  framemoneda = 1;
let daño = 10;
let score = 0;
let vida = 3;
let contadormoneda = 0;
let codekey;
let contadore = 0;

iconovolver();
imprimirvida();
crearvida();
imprimirscore();
crearscore();
obtenerMedidas();

const $btsaltar = document.querySelector("#btsaltar");
$btsaltar.x = ancho - 120;
$btsaltar.y = alto - 190;
$btsaltar.style.marginLeft = $btsaltar.x + "px";
$btsaltar.style.marginTop = $btsaltar.y + "px";
const $btizquierda = document.querySelector("#btizquierda");
$btizquierda.x = 50;
$btizquierda.y = alto - 190;
$btizquierda.style.marginLeft = $btizquierda.x + "px";
$btizquierda.style.marginTop = $btizquierda.y + "px";
const $btderecha = document.querySelector("#btderecha");
$btderecha.x = 120;
$btderecha.y = alto - 190;
$btderecha.style.marginLeft = $btderecha.x + "px";
$btderecha.style.marginTop = $btderecha.y + "px";
const $btatacar = document.querySelector("#btatacar");
$btatacar.x = ancho - 190;
$btatacar.y = alto - 190;
$btatacar.style.marginLeft = $btatacar.x + "px";
$btatacar.style.marginTop = $btatacar.y + "px";
//-------------------------------------------------------------------------------
//PERSONAJE Y SUS ATRIBUTOS
const $ninja = document.createElement("div");
$ninja.classList.add("ninja");
$ninja.style.width = "38px";
$ninja.style.height = "68px";
$ninja.style.background = 'url("img/ninja/ninja-parado.gif")';
$ninja.style.backgroundSize = "100%";
$ninja.style.backgroundPosition = "center";
$ninja.style.backgroundRepeat = "no-repeat";
$ninja.style.position = "absolute";
$ninja.style.zIndex = "6";
$ninja.velocidad = 10;
$ninja.salto = -13;
$ninja.x = 30;
$ninja.y = 30;
$ninja.vy = 0;
$ninja.enpiso = 0;
$ninja.w = 38;
$ninja.h = 68;

$ninja.style.marginLeft = $ninja.x + "px";
$ninja.style.marginTop = $ninja.y + "px";

$main.appendChild($ninja);

function Kunai() {
  const $ku = document.createElement("div");
  const posX = $ninja.x;
  const posY = $ninja.y - 380;
  const vel = 50;

  $ku.classList.add("Kunai");
  $ku.style.width = "30px";
  $ku.style.height = "20px";
  $ku.style.backgroundColor = "red";
  if (codekey === 100) {
    $ku.style.background = 'url("img/ninja/kunai.png")';
  } else {
    $ku.style.background = 'url("img/ninja/kunai2.png")';
  }
  $ku.style.backgroundSize = "100%";
  $ku.style.backgroundPosition = "center";
  $ku.style.position = "absolute";
  $ku.style.zIndex = "9";
  $ku.vel = vel;
  $ku.daño = 2;
  $ku.x = posX;
  $ku.y = posY;
  $ku.w = 30;
  $ku.h = 20;
  $ku.style.marginLeft = posX + "px";
  $ku.style.marginTop = posY + "px";

  $main.appendChild($ku);
}
//-------------------------------------------------------------------------------
function crearEnemigo(posx, posy) {
  const $enemigo1 = document.createElement("div");
  $enemigo1.classList.add("enemigo");
  $enemigo1.style.width = "38px";
  $enemigo1.style.height = "70px";
  $enemigo1.style.background = 'url("img/enemigo1/enemigo1-parado2.gif")';
  $enemigo1.style.backgroundSize = "cover";
  $enemigo1.style.backgroundPosition = "center";
  $enemigo1.style.backgroundRepeat = "no-repeat";
  $enemigo1.style.position = "absolute";
  $enemigo1.style.zIndex = "6";
  $enemigo1.velocidad = 10;
  $enemigo1.salto = -13;
  $enemigo1.x = posx;
  $enemigo1.y = posy;
  $enemigo1.vy = 0;
  $enemigo1.enpiso = 0;
  $enemigo1.w = 38;
  $enemigo1.h = 68;

  $enemigo1.style.marginLeft = $enemigo1.x + "px";
  $enemigo1.style.marginTop = $enemigo1.y + "px";

  $main.appendChild($enemigo1);
}

const $diamante = document.createElement("div");

$diamante.classList.add("diamante");
$diamante.style.width = "50px";
$diamante.style.height = "50px";
$diamante.style.background = 'url("img/ninja/diamont.gif")';
$diamante.style.backgroundSize = "100%";
$diamante.style.backgroundPosition = "center";
$diamante.style.position = "absolute";
$diamante.style.zIndex = "3";
$diamante.style.display = "none";

$diamante.valor = 10;
$diamante.x = 0;
$diamante.y = 0;
$diamante.h = 40;
$diamante.w = 40;
$diamante.style.marginLeft = $diamante.x + "px";
$diamante.style.marginTop = $diamante.y + "px";

$main.appendChild($diamante);

const $calavera = document.createElement("div");

$calavera.classList.add("diamante");
$calavera.style.width = "50px";
$calavera.style.height = "50px";
$calavera.style.background = 'url("img/nivel2/calavera.gif")';
$calavera.style.backgroundSize = "100%";
$calavera.style.backgroundPosition = "center";
$calavera.style.position = "absolute";
$calavera.style.zIndex = "3";
$calavera.style.display = "none";

$calavera.valor = 10;
$calavera.x = 0;
$calavera.y = 0;
$calavera.h = 50;
$calavera.w = 50;
$calavera.style.marginLeft = $calavera.x + "px";
$calavera.style.marginTop = $calavera.y + "px";

$main.appendChild($calavera);

//----------NIVEL 1-----------------
const $frame1 = document.createElement("div");

$frame1.style.width = ancho + "px";
$frame1.style.height = alto + "px";
$frame1.frame = 1;

$main.appendChild($frame1);

//PLATAFORMAS
const $bloque1 = document.createElement("div");

$bloque1.style.width = "120px";
$bloque1.style.height = "50px";
$bloque1.style.backgroundColor = "red";
$bloque1.style.background = 'url("img/bloques/2Bloque.png")';
$bloque1.style.backgroundPosition = "center";
$bloque1.style.backgroundSize = "100%";
$bloque1.style.position = "absolute";
$bloque1.style.backgroundRepeat = "no-repeat";
$bloque1.x = 270;
$bloque1.y = 240;
$bloque1.w = 120;
$bloque1.h = 2;

$bloque1.style.marginLeft = $bloque1.x + "px";
$bloque1.style.marginTop = $bloque1.y + "px";

$frame1.appendChild($bloque1);

const $bloque2 = document.createElement("div");

$bloque2.style.width = ancho + "px";
$bloque2.style.height = "80px";
$bloque2.style.backgroundColor = "red";
$bloque2.style.background = 'url("img/bloques/piso.png")';
$bloque2.style.backgroundPosition = "center";
//$bloque2.style.backgroundSize = "100%";
$bloque2.style.position = "absolute";
$bloque2.style.backgroundRepeat = "no-repeat";
$bloque2.style.zIndex = "5";
$bloque2.x = 0;
$bloque2.y = alto - 80;
$bloque2.w = 1200;
$bloque2.h = 80;
$bloque2.style.marginLeft = $bloque2.x + "px";
$bloque2.style.marginTop = $bloque2.y + "px";

$frame1.appendChild($bloque2);

const $bloque3 = document.createElement("div");
$bloque3.style.width = "200px";
$bloque3.style.height = "50px";
$bloque3.style.backgroundColor = "red";
$bloque3.style.background = 'url("img/bloques/3Bloque.png")';
$bloque3.style.backgroundPosition = "center";
$bloque3.style.backgroundSize = "100%";
$bloque3.style.position = "absolute";
$bloque3.style.backgroundRepeat = "no-repeat";
$bloque3.x = 0;
$bloque3.y = 160;
$bloque3.w = 200;
$bloque3.h = 5;

$bloque3.style.marginLeft = $bloque3.x + "px";
$bloque3.style.marginTop = $bloque3.y + "px";

$frame1.appendChild($bloque3);

const $bloque4 = document.createElement("div");

$bloque4.style.width = "280px";
$bloque4.style.height = "175px";
$bloque4.style.backgroundColor = "red";
$bloque4.style.background = 'url("img/bloques/12Bloques.png")';
$bloque4.style.backgroundPosition = "center";
$bloque4.style.backgroundSize = "100%";
$bloque4.style.position = "absolute";
$bloque4.style.backgroundRepeat = "no-repeat";
$bloque4.x = ancho - 280;
$bloque4.y = $bloque2.y - 175;
$bloque4.w = 280;
$bloque4.h = 5;

$bloque4.style.marginLeft = $bloque4.x + "px";
$bloque4.style.marginTop = $bloque4.y + "px";

$frame1.appendChild($bloque4);

const $bloque5 = document.createElement("div");

$bloque5.style.width = "140px";
$bloque5.style.height = "70px";
$bloque5.style.backgroundColor = "gold";
$bloque5.style.background = 'url("img/bloques/2Bloquesimple.png")';
$bloque5.style.backgroundPosition = "center";
$bloque5.style.backgroundSize = "100%";
$bloque5.style.position = "absolute";
$bloque5.style.backgroundRepeat = "no-repeat";
$bloque5.x = ancho - 140;
$bloque5.y = $bloque2.y - 70;
$bloque5.w = 140;
$bloque5.h = 5;

$bloque5.style.marginLeft = $bloque5.x + "px";
$bloque5.style.marginTop = $bloque5.y + "px";

$frame1.appendChild($bloque5);

const $flechaderecha = document.createElement("div");

$flechaderecha.style.width = "62px";
$flechaderecha.style.height = "64px";
$flechaderecha.style.backgroundColor = "gold";
$flechaderecha.style.background = 'url("img/objetos/Sign_2.png")';
$flechaderecha.style.backgroundPosition = "center";
$flechaderecha.style.backgroundSize = "100%";
$flechaderecha.style.position = "absolute";
$flechaderecha.style.backgroundRepeat = "no-repeat";
$flechaderecha.style.display = "none";
$flechaderecha.x = 10;
$flechaderecha.y = $bloque2.y - 64;
$flechaderecha.w = 0;
$flechaderecha.h = 0;

$flechaderecha.style.marginLeft = $flechaderecha.x + "px";
$flechaderecha.style.marginTop = $flechaderecha.y + "px";

$frame1.appendChild($flechaderecha);

const $tronco1 = document.createElement("div");

$tronco1.style.width = "80px";
$tronco1.style.height = "30px";
$tronco1.style.backgroundColor = "gold";
$tronco1.style.background = 'url("img/objetos/Tree_1.png")';
$tronco1.style.backgroundPosition = "center";
$tronco1.style.backgroundSize = "100%";
$tronco1.style.position = "absolute";
$tronco1.style.backgroundRepeat = "no-repeat";
$tronco1.x = 395;
$tronco1.y = $bloque2.y - 30;

$tronco1.style.marginLeft = $tronco1.x + "px";
$tronco1.style.marginTop = $tronco1.y + "px";

$frame1.appendChild($tronco1);

const $hongo1 = document.createElement("div");

$hongo1.style.width = "25px";
$hongo1.style.height = "19px";
$hongo1.style.backgroundColor = "gold";
$hongo1.style.background = 'url("img/objetos/Mushroom_2.png")';
$hongo1.style.backgroundPosition = "center";
$hongo1.style.backgroundSize = "100%";
$hongo1.style.position = "absolute";
$hongo1.style.backgroundRepeat = "no-repeat";
$hongo1.x = 450;
$hongo1.y = $bloque2.y - 19;

$hongo1.style.marginLeft = $hongo1.x + "px";
$hongo1.style.marginTop = $hongo1.y + "px";

$frame1.appendChild($hongo1);

const $arbusto1 = document.createElement("div");

$arbusto1.style.width = "88px";
$arbusto1.style.height = "43px";
$arbusto1.style.backgroundColor = "gold";
$arbusto1.style.background = 'url("img/objetos/Bush (1).png")';
$arbusto1.style.backgroundPosition = "center";
$arbusto1.style.backgroundSize = "100%";
$arbusto1.style.position = "absolute";
$arbusto1.style.backgroundRepeat = "no-repeat";
$arbusto1.x = 160 - 88;
$arbusto1.y = $bloque3.y - 42;

$arbusto1.style.marginLeft = $arbusto1.x + "px";
$arbusto1.style.marginTop = $arbusto1.y + "px";

$frame1.appendChild($arbusto1);

const $arbol1 = document.createElement("div");

$arbol1.style.width = "150px";
$arbol1.style.height = "170px";
$arbol1.style.backgroundColor = "gold";
$arbol1.style.background = 'url("img/objetos/Tree_2.png")';
$arbol1.style.backgroundPosition = "center";
$arbol1.style.backgroundSize = "100%";
$arbol1.style.position = "absolute";
$arbol1.style.backgroundRepeat = "no-repeat";
$arbol1.x = 150 - 150;
$arbol1.y = $bloque3.y - 163;

$arbol1.style.marginLeft = $arbol1.x + "px";
$arbol1.style.marginTop = $arbol1.y + "px";

$frame1.appendChild($arbol1);

const $roca1 = document.createElement("div");

$roca1.style.width = "45px";
$roca1.style.height = "22px";
$roca1.style.backgroundColor = "gold";
$roca1.style.background = 'url("img/objetos/Stone.png")';
$roca1.style.backgroundPosition = "center";
$roca1.style.backgroundSize = "100%";
$roca1.style.position = "absolute";
$roca1.style.backgroundRepeat = "no-repeat";
$roca1.x = 140 - 45;
$roca1.y = $bloque3.y - 20;

$roca1.style.marginLeft = $roca1.x + "px";
$roca1.style.marginTop = $roca1.y + "px";

$frame1.appendChild($roca1);

const $arbusto2 = document.createElement("div");

$arbusto2.style.width = "85px";
$arbusto2.style.height = "40px";
$arbusto2.style.backgroundColor = "gold";
$arbusto2.style.background = 'url("img/objetos/Bush (2).png")';
$arbusto2.style.backgroundPosition = "center";
$arbusto2.style.backgroundSize = "100%";
$arbusto2.style.position = "absolute";
$arbusto2.style.backgroundRepeat = "no-repeat";
$arbusto2.x = 90 - 88;
$arbusto2.y = $bloque3.y - 38;

$arbusto2.style.marginLeft = $arbusto2.x + "px";
$arbusto2.style.marginTop = $arbusto2.y + "px";

$frame1.appendChild($arbusto2);

const $hongo2 = document.createElement("div");

$hongo2.style.width = "25px";
$hongo2.style.height = "19px";
$hongo2.style.backgroundColor = "gold";
$hongo2.style.background = 'url("img/objetos/Mushroom_1.png")';
$hongo2.style.backgroundPosition = "center";
$hongo2.style.backgroundSize = "100%";
$hongo2.style.position = "absolute";
$hongo2.style.backgroundRepeat = "no-repeat";
$hongo2.x = 630;
$hongo2.y = $bloque4.y - 20;

$hongo2.style.marginLeft = $hongo2.x + "px";
$hongo2.style.marginTop = $hongo2.y + "px";

$frame1.appendChild($hongo2);

const $arbol2 = document.createElement("div");

$arbol2.style.width = "140px";
$arbol2.style.height = "160px";
$arbol2.style.backgroundColor = "gold";
$arbol2.style.background = 'url("img/objetos/Tree_2.png")';
$arbol2.style.backgroundPosition = "center";
$arbol2.style.backgroundSize = "100%";
$arbol2.style.position = "absolute";
$arbol2.style.backgroundRepeat = "no-repeat";
$arbol2.x = 550;
$arbol2.y = $bloque4.y - 154;

$arbol2.style.marginLeft = $arbol2.x + "px";
$arbol2.style.marginTop = $arbol2.y + "px";

$frame1.appendChild($arbol2);

const $caja1 = document.createElement("div");

$caja1.style.width = "40px";
$caja1.style.height = "40px";
$caja1.style.backgroundColor = "gold";
$caja1.style.background = 'url("img/objetos/Crate.png")';
$caja1.style.backgroundPosition = "center";
$caja1.style.backgroundSize = "100%";
$caja1.style.position = "absolute";
$caja1.style.backgroundRepeat = "no-repeat";
$caja1.x = 550;
$caja1.y = $bloque4.y - 40;

$caja1.style.marginLeft = $caja1.x + "px";
$caja1.style.marginTop = $caja1.y + "px";

$frame1.appendChild($caja1);

const $arbusto3 = document.createElement("div");

$arbusto3.style.width = "63px";
$arbusto3.style.height = "37px";
$arbusto3.style.backgroundColor = "gold";
$arbusto3.style.background = 'url("img/objetos/Bush (3).png")';
$arbusto3.style.backgroundPosition = "center";
$arbusto3.style.backgroundSize = "100%";
$arbusto3.style.position = "absolute";
$arbusto3.style.backgroundRepeat = "no-repeat";
$arbusto3.x = 290;
$arbusto3.y = $bloque1.y - 32;

$arbusto3.style.marginLeft = $arbusto3.x + "px";
$arbusto3.style.marginTop = $arbusto3.y + "px";

$frame1.appendChild($arbusto3);

const $arbusto4 = document.createElement("div");

$arbusto4.style.width = "50px";
$arbusto4.style.height = "34px";
$arbusto4.style.backgroundColor = "gold";
$arbusto4.style.background = 'url("img/objetos/Bush (4).png")';
$arbusto4.style.backgroundPosition = "center";
$arbusto4.style.backgroundSize = "100%";
$arbusto4.style.position = "absolute";
$arbusto4.style.backgroundRepeat = "no-repeat";
$arbusto4.x = 330;
$arbusto4.y = $bloque1.y - 27;

$arbusto4.style.marginLeft = $arbusto4.x + "px";
$arbusto4.style.marginTop = $arbusto4.y + "px";

$frame1.appendChild($arbusto4);

const $roca2 = document.createElement("div");

$roca2.style.width = "90px";
$roca2.style.height = "54px";
$roca2.style.backgroundColor = "gold";
$roca2.style.background = 'url("img/objetos/Stone.png")';
$roca2.style.backgroundPosition = "center";
$roca2.style.backgroundSize = "100%";
$roca2.style.position = "absolute";
$roca2.style.backgroundRepeat = "no-repeat";
$roca2.x = 120 - 90;
$roca2.y = $bloque2.y - 49;

$roca2.style.marginLeft = $roca2.x + "px";
$roca2.style.marginTop = $roca2.y + "px";

$frame1.appendChild($roca2);
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
const $frame2 = document.createElement("div");

$frame2.style.width = ancho + "px";
$frame2.style.height = alto + "px";
$frame2.style.display = "none";
$frame2.frame = 2;

$main.appendChild($frame2);

const $bloque6 = document.createElement("div");

$bloque6.style.width = ancho + "px";
$bloque6.style.height = "80px";
$bloque6.style.backgroundColor = "red";
$bloque6.style.background = 'url("img/bloques/piso.png")';
$bloque6.style.backgroundPosition = "center";
//$bloque6.style.backgroundSize = "100%";
$bloque6.style.position = "absolute";
$bloque6.style.backgroundRepeat = "no-repeat";
$bloque6.style.zIndex = "5";
$bloque6.x = 0;
$bloque6.y = alto - 80;
$bloque6.w = 1200;
$bloque6.h = 80;
$bloque6.style.marginLeft = $bloque2.x + "px";
$bloque6.style.marginTop = $bloque2.y + "px";

$frame2.appendChild($bloque6);

const $bloque7 = document.createElement("div");

$bloque7.style.width = "210px";
$bloque7.style.height = "100px";
$bloque7.style.backgroundColor = "red";
$bloque7.style.background = 'url("img/bloques/6Bloque.png")';
$bloque7.style.backgroundPosition = "center";
$bloque7.style.backgroundSize = "100%";
$bloque7.style.position = "absolute";
$bloque7.style.backgroundRepeat = "no-repeat";
$bloque7.style.zIndex = "5";
$bloque7.x = 340;
$bloque7.y = $bloque6.y - 100;
$bloque7.w = 210;
$bloque7.h = 2;
$bloque7.style.marginLeft = $bloque7.x + "px";
$bloque7.style.marginTop = $bloque7.y + "px";

$frame2.appendChild($bloque7);

const $bloque8 = document.createElement("div");

$bloque8.style.width = "280px";
$bloque8.style.height = "175px";
$bloque8.style.backgroundColor = "red";
$bloque8.style.background = 'url("img/bloques/12Bloques.png")';
//$bloque8.style.backgroundPosition = "center";
$bloque8.style.backgroundSize = "100%";
$bloque8.style.position = "absolute";
$bloque8.style.backgroundRepeat = "no-repeat";
$bloque8.x = ancho - 280;
$bloque8.y = $bloque6.y - 175;
$bloque8.w = 280;
$bloque8.h = 2;
$bloque8.style.marginLeft = $bloque8.x + "px";
$bloque8.style.marginTop = $bloque8.y + "px";

$frame2.appendChild($bloque8);

const $bloque9 = document.createElement("div");

$bloque9.style.width = "300px";
$bloque9.style.height = "50px";
$bloque9.style.backgroundColor = "red";
$bloque9.style.background = 'url("img/bloques/5Bloque.png")';
$bloque9.style.backgroundPosition = "center";
$bloque9.style.backgroundSize = "100%";
$bloque9.style.position = "absolute";
$bloque9.style.backgroundRepeat = "no-repeat";
$bloque9.x = 0;
$bloque9.y = 165;
$bloque9.w = 300;
$bloque9.h = 2;
$bloque9.style.marginLeft = $bloque9.x + "px";
$bloque9.style.marginTop = $bloque9.y + "px";

$frame2.appendChild($bloque9);

const $caja2 = document.createElement("div");

$caja2.style.width = "50px";
$caja2.style.height = "50px";
$caja2.style.backgroundColor = "gold";
$caja2.style.background = 'url("img/objetos/Crate.png")';
$caja2.style.backgroundPosition = "center";
$caja2.style.backgroundSize = "100%";
$caja2.style.position = "absolute";
$caja2.style.backgroundRepeat = "no-repeat";
$caja2.x = 150;
$caja2.y = $bloque9.y - 50;

$caja2.style.marginLeft = $caja2.x + "px";
$caja2.style.marginTop = $caja2.y + "px";

$frame2.appendChild($caja2);

const $caja3 = document.createElement("div");

$caja3.style.width = "50px";
$caja3.style.height = "50px";
$caja3.style.backgroundColor = "gold";
$caja3.style.background = 'url("img/objetos/Crate.png")';
$caja3.style.backgroundPosition = "center";
$caja3.style.backgroundSize = "100%";
$caja3.style.position = "absolute";
$caja3.style.backgroundRepeat = "no-repeat";
$caja3.x = 100;
$caja3.y = $bloque9.y - 50;

$caja3.style.marginLeft = $caja3.x + "px";
$caja3.style.marginTop = $caja3.y + "px";

$frame2.appendChild($caja3);

const $caja4 = document.createElement("div");

$caja4.style.width = "40px";
$caja4.style.height = "40px";
$caja4.style.backgroundColor = "gold";
$caja4.style.background = 'url("img/objetos/Crate.png")';
$caja4.style.backgroundPosition = "center";
$caja4.style.backgroundSize = "100%";
$caja4.style.position = "absolute";
$caja4.style.backgroundRepeat = "no-repeat";
$caja4.x = 125;
$caja4.y = $caja2.y - 40;

$caja4.style.marginLeft = $caja4.x + "px";
$caja4.style.marginTop = $caja4.y + "px";

$frame2.appendChild($caja4);

const $arbusto8 = document.createElement("div");

$arbusto8.style.width = "63px";
$arbusto8.style.height = "37px";
$arbusto8.style.backgroundColor = "gold";
$arbusto8.style.background = 'url("img/objetos/Bush (3).png")';
$arbusto8.style.backgroundPosition = "center";
$arbusto8.style.backgroundSize = "100%";
$arbusto8.style.position = "absolute";
$arbusto8.style.backgroundRepeat = "no-repeat";
$arbusto8.x = 50;
$arbusto8.y = $bloque9.y - 36;

$arbusto8.style.marginLeft = $arbusto8.x + "px";
$arbusto8.style.marginTop = $arbusto8.y + "px";

$frame2.appendChild($arbusto8);

const $arbusto5 = document.createElement("div");

$arbusto5.style.width = "63px";
$arbusto5.style.height = "37px";
$arbusto5.style.backgroundColor = "gold";
$arbusto5.style.background = 'url("img/objetos/Bush (3).png")';
$arbusto5.style.backgroundPosition = "center";
$arbusto5.style.backgroundSize = "100%";
$arbusto5.style.position = "absolute";
$arbusto5.style.backgroundRepeat = "no-repeat";
$arbusto5.x = 300;
$arbusto5.y = $bloque6.y - 32;

$arbusto5.style.marginLeft = $arbusto5.x + "px";
$arbusto5.style.marginTop = $arbusto5.y + "px";

$frame2.appendChild($arbusto5);

const $arbusto6 = document.createElement("div");

$arbusto6.style.width = "88px";
$arbusto6.style.height = "43px";
$arbusto6.style.backgroundColor = "gold";
$arbusto6.style.background = 'url("img/objetos/Bush (1).png")';
$arbusto6.style.backgroundPosition = "center";
$arbusto6.style.backgroundSize = "100%";
$arbusto6.style.position = "absolute";
$arbusto6.style.backgroundRepeat = "no-repeat";
$arbusto6.style.zIndex = "8";
$arbusto6.x = 500;
$arbusto6.y = $bloque6.y - 42;

$arbusto6.style.marginLeft = $arbusto6.x + "px";
$arbusto6.style.marginTop = $arbusto6.y + "px";

$frame2.appendChild($arbusto6);

const $arbusto7 = document.createElement("div");

$arbusto7.style.width = "63px";
$arbusto7.style.height = "37px";
$arbusto7.style.backgroundColor = "gold";
$arbusto7.style.background = 'url("img/objetos/Bush (3).png")';
$arbusto7.style.backgroundPosition = "center";
$arbusto7.style.backgroundSize = "100%";
$arbusto7.style.position = "absolute";
$arbusto7.style.backgroundRepeat = "no-repeat";
$arbusto7.x = 600;
$arbusto7.y = $bloque8.y - 36;

$arbusto7.style.marginLeft = $arbusto7.x + "px";
$arbusto7.style.marginTop = $arbusto7.y + "px";

$frame2.appendChild($arbusto7);

const $arbol3 = document.createElement("div");

$arbol3.style.width = "140px";
$arbol3.style.height = "160px";
$arbol3.style.backgroundColor = "gold";
$arbol3.style.background = 'url("img/objetos/Tree_3.png")';
$arbol3.style.backgroundPosition = "center";
$arbol3.style.backgroundSize = "100%";
$arbol3.style.position = "absolute";
$arbol3.style.backgroundRepeat = "no-repeat";
$arbol3.x = 580;
$arbol3.y = $bloque8.y - 149;

$arbol3.style.marginLeft = $arbol3.x + "px";
$arbol3.style.marginTop = $arbol3.y + "px";

$frame2.appendChild($arbol3);

const $roca3 = document.createElement("div");

$roca3.style.width = "55px";
$roca3.style.height = "32px";
$roca3.style.backgroundColor = "gold";
$roca3.style.background = 'url("img/objetos/Stone.png")';
$roca3.style.backgroundPosition = "center";
$roca3.style.backgroundSize = "100%";
$roca3.style.position = "absolute";
$roca3.style.backgroundRepeat = "no-repeat";
$roca3.x = 430;
$roca3.y = $bloque7.y - 30;

$roca3.style.marginLeft = $roca3.x + "px";
$roca3.style.marginTop = $roca3.y + "px";

$frame2.appendChild($roca3);

const $roca4 = document.createElement("div");

$roca4.style.width = "35px";
$roca4.style.height = "12px";
$roca4.style.backgroundColor = "gold";
$roca4.style.background = 'url("img/objetos/Stone.png")';
$roca4.style.backgroundPosition = "center";
$roca4.style.backgroundSize = "100%";
$roca4.style.position = "absolute";
$roca4.style.backgroundRepeat = "no-repeat";
$roca4.x = 475;
$roca4.y = $bloque7.y - 10;

$roca4.style.marginLeft = $roca4.x + "px";
$roca4.style.marginTop = $roca4.y + "px";

$frame2.appendChild($roca4);
//-------------------------------------------------------------------------------
const $frame3 = document.createElement("div");

$frame3.style.width = ancho + "px";
$frame3.style.height = alto + "px";
$frame3.style.display = "none";
$frame3.style.zIndex = "9";
$frame3.frame = 2;

$main.appendChild($frame3);

const $bloque10 = document.createElement("div");

$bloque10.style.width = "350px";
$bloque10.style.height = "80px";
$bloque10.style.backgroundColor = "red";
$bloque10.style.background = 'url("img/bloques/piso.png")';
$bloque10.style.backgroundPosition = "center";
//$bloque10.style.backgroundSize = "100%";
$bloque10.style.position = "absolute";
$bloque10.style.backgroundRepeat = "no-repeat";
$bloque10.style.zIndex = "5";
$bloque10.x = 0;
$bloque10.y = alto - 80;
$bloque10.w = 350;
$bloque10.h = 80;
$bloque10.style.marginLeft = $bloque10.x + "px";
$bloque10.style.marginTop = $bloque10.y + "px";

$frame3.appendChild($bloque10);

const $bloque11 = document.createElement("div");

$bloque11.style.width = "120px";
$bloque11.style.height = "50px";
$bloque11.style.backgroundColor = "red";
$bloque11.style.background = 'url("img/bloques/2Bloque.png")';
$bloque11.style.backgroundPosition = "center";
$bloque11.style.backgroundSize = "100%";
$bloque11.style.position = "absolute";
$bloque11.style.backgroundRepeat = "no-repeat";
$bloque11.x = 200;
$bloque11.y = 260;
$bloque11.w = 120;
$bloque11.h = 2;

$bloque11.style.marginLeft = $bloque11.x + "px";
$bloque11.style.marginTop = $bloque11.y + "px";

$frame3.appendChild($bloque11);

const $bloque12 = document.createElement("div");
$bloque12.style.width = "140px";
$bloque12.style.height = "50px";
$bloque12.style.backgroundColor = "red";
$bloque12.style.background = 'url("img/bloques/2bloque.png")';
$bloque12.style.backgroundPosition = "center";
$bloque12.style.backgroundSize = "100%";
$bloque12.style.position = "absolute";
$bloque12.style.backgroundRepeat = "no-repeat";
$bloque12.x = 405.5;
$bloque12.y = 230;
$bloque12.w = 140;
$bloque12.h = 2;

$bloque12.style.marginLeft = $bloque12.x + "px";
$bloque12.style.marginTop = $bloque12.y + "px";

$frame3.appendChild($bloque12);

const $bloque13 = document.createElement("div");
$bloque13.style.width = "190px";
$bloque13.style.height = "150px";
$bloque13.style.backgroundColor = "red";
$bloque13.style.background = 'url("img/bloques/9Bloque.png")';
$bloque13.style.backgroundPosition = "center";
$bloque13.style.backgroundSize = "100%";
$bloque13.style.position = "absolute";
$bloque13.style.backgroundRepeat = "no-repeat";
$bloque13.x = ancho - 190;
$bloque13.y = 130;
$bloque13.w = 190;
$bloque13.h = 5;

$bloque13.style.marginLeft = $bloque13.x + "px";
$bloque13.style.marginTop = $bloque13.y + "px";

$frame3.appendChild($bloque13);

const $bloque14 = document.createElement("div");
$bloque14.style.width = ancho - $bloque10.w + "px";
$bloque14.style.height = "80px";
$bloque14.style.backgroundColor = "red";
$bloque14.style.background = 'url("img/bloques/agua.png")';
$bloque14.style.backgroundPosition = "center";
//$bloque14.style.backgroundSize = "100%";
$bloque14.style.position = "absolute";
$bloque14.style.backgroundRepeat = "no-repeat";
$bloque14.style.zIndex = "1";
$bloque14.x = $bloque10.w;
$bloque14.y = alto - 80;
$bloque14.w = ancho - $bloque10.w;
$bloque14.h = 80;

$bloque14.style.marginLeft = $bloque14.x + "px";
$bloque14.style.marginTop = $bloque14.y + "px";

$frame3.appendChild($bloque14);

const $bloque15 = document.createElement("div");
$bloque15.style.width = $bloque12.w + $bloque13.w + "px";
$bloque15.style.height = "140px";
$bloque15.style.backgroundColor = "red";
$bloque15.style.background = 'url("img/bloques/12Bloques.png")';
$bloque15.style.backgroundPosition = "center";
$bloque15.style.backgroundSize = "100%";
$bloque15.style.position = "absolute";
$bloque15.style.backgroundRepeat = "no-repeat";
$bloque15.x = ancho - ($bloque12.w + $bloque13.w);
$bloque15.y = alto - 140;
$bloque15.w = 0;
$bloque15.h = 5;

$bloque15.style.marginLeft = $bloque15.x + "px";
$bloque15.style.marginTop = $bloque15.y + "px";

$frame3.appendChild($bloque15);

const $flechaizquierda = document.createElement("div");

$flechaizquierda.style.width = "62px";
$flechaizquierda.style.height = "64px";
$flechaizquierda.style.backgroundColor = "gold";
$flechaizquierda.style.background = 'url("img/objetos/Sign_3.png")';
$flechaizquierda.style.backgroundPosition = "center";
$flechaizquierda.style.backgroundSize = "100%";
$flechaizquierda.style.position = "absolute";
$flechaizquierda.style.backgroundRepeat = "no-repeat";
$flechaizquierda.style.display = "none";
$flechaizquierda.x = ancho - 70;
$flechaizquierda.y = $bloque2.y - 64;
$flechaizquierda.w = 0;
$flechaizquierda.h = 0;

$flechaizquierda.style.marginLeft = $flechaizquierda.x + "px";
$flechaizquierda.style.marginTop = $flechaizquierda.y + "px";

$frame3.appendChild($flechaizquierda);

const $arbol4 = document.createElement("div");

$arbol4.style.width = "140px";
$arbol4.style.height = "160px";
$arbol4.style.backgroundColor = "gold";
$arbol4.style.background = 'url("img/objetos/Tree_2.png")';
$arbol4.style.backgroundPosition = "center";
$arbol4.style.backgroundSize = "100%";
$arbol4.style.position = "absolute";
$arbol4.style.backgroundRepeat = "no-repeat";
$arbol4.style.zIndex = "1";
$arbol4.x = 40;
$arbol4.y = $bloque10.y - 151;

$arbol4.style.marginLeft = $arbol4.x + "px";
$arbol4.style.marginTop = $arbol4.y + "px";

$frame3.appendChild($arbol4);

const $arbol5 = document.createElement("div");

$arbol5.style.width = "120px";
$arbol5.style.height = "140px";
$arbol5.style.backgroundColor = "gold";
$arbol5.style.background = 'url("img/objetos/Tree_3.png")';
$arbol5.style.backgroundPosition = "center";
$arbol5.style.backgroundSize = "100%";
$arbol5.style.position = "absolute";
$arbol5.style.backgroundRepeat = "no-repeat";
$arbol5.x = 5;
$arbol5.y = $bloque10.y - 126;

$arbol5.style.marginLeft = $arbol5.x + "px";
$arbol5.style.marginTop = $arbol5.y + "px";

$frame3.appendChild($arbol5);

const $arbol6 = document.createElement("div");

$arbol6.style.width = "100px";
$arbol6.style.height = "120px";
$arbol6.style.backgroundColor = "gold";
$arbol6.style.background = 'url("img/objetos/Tree_3.png")';
$arbol6.style.backgroundPosition = "center";
$arbol6.style.backgroundSize = "100%";
$arbol6.style.position = "absolute";
$arbol6.style.backgroundRepeat = "no-repeat";
$arbol6.x = 100;
$arbol6.y = $bloque10.y - 106;

$arbol6.style.marginLeft = $arbol6.x + "px";
$arbol6.style.marginTop = $arbol6.y + "px";

$frame3.appendChild($arbol6);

const $arbusto10 = document.createElement("div");

$arbusto10.style.width = "58px";
$arbusto10.style.height = "43px";
$arbusto10.style.backgroundColor = "gold";
$arbusto10.style.background = 'url("img/objetos/Bush (1).png")';
$arbusto10.style.backgroundPosition = "center";
$arbusto10.style.backgroundSize = "100%";
$arbusto10.style.position = "absolute";
$arbusto10.style.backgroundRepeat = "no-repeat";
$arbusto10.x = 80;
$arbusto10.y = $bloque10.y - 30;

$arbusto10.style.marginLeft = $arbusto10.x + "px";
$arbusto10.style.marginTop = $arbusto10.y + "px";

$frame3.appendChild($arbusto10);

const $hongo3 = document.createElement("div");

$hongo3.style.width = "17px";
$hongo3.style.height = "11px";
$hongo3.style.backgroundColor = "gold";
$hongo3.style.background = 'url("img/objetos/Mushroom_1.png")';
$hongo3.style.backgroundPosition = "center";
$hongo3.style.backgroundSize = "100%";
$hongo3.style.position = "absolute";
$hongo3.style.backgroundRepeat = "no-repeat";
$hongo3.x = 40;
$hongo3.y = $bloque10.y - 11;

$hongo3.style.marginLeft = $hongo3.x + "px";
$hongo3.style.marginTop = $hongo3.y + "px";

$frame3.appendChild($hongo3);

const $hongo4 = document.createElement("div");

$hongo4.style.width = "25px";
$hongo4.style.height = "19px";
$hongo4.style.backgroundColor = "gold";
$hongo4.style.background = 'url("img/objetos/Mushroom_2.png")';
$hongo4.style.backgroundPosition = "center";
$hongo4.style.backgroundSize = "100%";
$hongo4.style.position = "absolute";
$hongo4.style.backgroundRepeat = "no-repeat";
$hongo4.x = 555;
$hongo4.y = $bloque13.y - 19;

$hongo4.style.marginLeft = $hongo4.x + "px";
$hongo4.style.marginTop = $hongo4.y + "px";

$frame3.appendChild($hongo4);

const $arbol7 = document.createElement("div");

$arbol7.style.width = "120px";
$arbol7.style.height = "140px";
$arbol7.style.backgroundColor = "gold";
$arbol7.style.background = 'url("img/objetos/Tree_3.png")';
$arbol7.style.backgroundPosition = "center";
$arbol7.style.backgroundSize = "100%";
$arbol7.style.position = "absolute";
$arbol7.style.backgroundRepeat = "no-repeat";
$arbol7.x = 590;
$arbol7.y = $bloque13.y - 126;

$arbol7.style.marginLeft = $arbol7.x + "px";
$arbol7.style.marginTop = $arbol7.y + "px";

$frame3.appendChild($arbol7);

const $roca5 = document.createElement("div");

$roca5.style.width = "55px";
$roca5.style.height = "32px";
$roca5.style.backgroundColor = "gold";
$roca5.style.background = 'url("img/objetos/Stone.png")';
$roca5.style.backgroundPosition = "center";
$roca5.style.backgroundSize = "100%";
$roca5.style.position = "absolute";
$roca5.style.backgroundRepeat = "no-repeat";
$roca5.style.zIndex = "1";
$roca5.x = 450;
$roca5.y = $bloque12.y - 31;

$roca5.style.marginLeft = $roca5.x + "px";
$roca5.style.marginTop = $roca5.y + "px";

$frame3.appendChild($roca5);

const $arbusto11 = document.createElement("div");

$arbusto11.style.width = "50px";
$arbusto11.style.height = "34px";
$arbusto11.style.backgroundColor = "gold";
$arbusto11.style.background = 'url("img/objetos/Bush (4).png")';
$arbusto11.style.backgroundPosition = "center";
$arbusto11.style.backgroundSize = "100%";
$arbusto11.style.position = "absolute";
$arbusto11.style.backgroundRepeat = "no-repeat";
$arbusto11.x = 485;
$arbusto11.y = $bloque12.y - 33;

$arbusto11.style.marginLeft = $arbusto11.x + "px";
$arbusto11.style.marginTop = $arbusto11.y + "px";

$frame3.appendChild($arbusto11);

const $hongo5 = document.createElement("div");

$hongo5.style.width = "25px";
$hongo5.style.height = "19px";
$hongo5.style.backgroundColor = "gold";
$hongo5.style.background = 'url("img/objetos/Mushroom_2.png")';
$hongo5.style.backgroundPosition = "center";
$hongo5.style.backgroundSize = "100%";
$hongo5.style.position = "absolute";
$hongo5.style.backgroundRepeat = "no-repeat";
$hongo5.x = 490;
$hongo5.y = $bloque12.y - 19;

$hongo5.style.marginLeft = $hongo5.x + "px";
$hongo5.style.marginTop = $hongo5.y + "px";

$frame3.appendChild($hongo5);

const $caja5 = document.createElement("div");

$caja5.style.width = "40px";
$caja5.style.height = "40px";
$caja5.style.backgroundColor = "gold";
$caja5.style.background = 'url("img/objetos/Crate.png")';
$caja5.style.backgroundPosition = "center";
$caja5.style.backgroundSize = "100%";
$caja5.style.position = "absolute";
$caja5.style.backgroundRepeat = "no-repeat";
$caja5.x = 670;
$caja5.y = $bloque13.y - 38;

$caja5.style.marginLeft = $caja5.x + "px";
$caja5.style.marginTop = $caja5.y + "px";

$frame3.appendChild($caja5);

const $cartel = document.createElement("div");

$cartel.style.width = "70px";
$cartel.style.height = "40px";
$cartel.style.backgroundColor = "gold";
$cartel.style.background = 'url("img/objetos/Sign_1.png")';
$cartel.style.backgroundPosition = "center";
$cartel.style.backgroundSize = "100%";
$cartel.style.position = "absolute";
$cartel.style.backgroundRepeat = "no-repeat";
$cartel.innerText = "PELIGRO";
$cartel.style.textAlign = "center";
$cartel.style.color = "white";
$cartel.style.fontFamily = "impact";
$cartel.x = 600;
$cartel.y = $bloque12.y - 50;

$cartel.style.marginLeft = $cartel.x + "px";
$cartel.style.marginTop = $cartel.y + "px";

$frame3.appendChild($cartel);
//-------------------------------------------------------------------------------
//----------NIVEL 2-----------------
const $frame4 = document.createElement("div");

$frame4.style.width = ancho + "px";
$frame4.style.height = alto + "px";
$frame4.style.display = "none";
$frame4.style.zIndex = "9";
$frame4.frame = 1;

$main.appendChild($frame4);

const $bloque16 = document.createElement("div");

$bloque16.style.width = ancho + "px";
$bloque16.style.height = "80px";
$bloque16.style.backgroundColor = "red";
$bloque16.style.background = 'url("img/nivel2/piso.png")';
$bloque16.style.backgroundPosition = "center";
//$bloque16.style.backgroundSize = "100%";
$bloque16.style.position = "absolute";
$bloque16.style.backgroundRepeat = "no-repeat";
$bloque16.style.zIndex = "5";
$bloque16.x = 0;
$bloque16.y = alto - 80;
$bloque16.w = 1200;
$bloque16.h = 80;
$bloque16.style.marginLeft = $bloque16.x + "px";
$bloque16.style.marginTop = $bloque16.y + "px";

$frame4.appendChild($bloque16);

const $bloque17 = document.createElement("div");

$bloque17.style.width = "350px";
$bloque17.style.height = "160px";
$bloque17.style.backgroundColor = "red";
$bloque17.style.background = 'url("img/nivel2/f4bloque1.png")';
$bloque17.style.backgroundPosition = "center";
$bloque17.style.backgroundSize = "100%";
$bloque17.style.position = "absolute";
$bloque17.style.backgroundRepeat = "no-repeat";
$bloque17.x = 0;
$bloque17.y = $bloque16.y - 160;
$bloque17.w = 350;
$bloque17.h = 5;
$bloque17.style.marginLeft = $bloque17.x + "px";
$bloque17.style.marginTop = $bloque17.y + "px";

$frame4.appendChild($bloque17);

const $bloque18 = document.createElement("div");

$bloque18.style.width = "300px";
$bloque18.style.height = "70px";
$bloque18.style.backgroundColor = "gold";
$bloque18.style.background = 'url("img/nivel2/f4bloque3.png")';
$bloque18.style.backgroundPosition = "center";
$bloque18.style.backgroundSize = "100%";
$bloque18.style.position = "absolute";
$bloque18.style.backgroundRepeat = "no-repeat";
$bloque18.x = ancho - 300;
$bloque18.y = $bloque16.y - 70;
$bloque18.w = 400;
$bloque18.h = 5;
$bloque18.style.marginLeft = $bloque18.x + "px";
$bloque18.style.marginTop = $bloque18.y + "px";

$frame4.appendChild($bloque18);

const $bloque19 = document.createElement("div");

$bloque19.style.width = "100px";
$bloque19.style.height = "50px";
$bloque19.style.backgroundColor = "orange";
$bloque19.style.background = 'url("img/nivel2/f4bloque2.png")';
$bloque19.style.backgroundPosition = "center";
$bloque19.style.backgroundSize = "100%";
$bloque19.style.position = "absolute";
$bloque19.style.backgroundRepeat = "no-repeat";
$bloque19.x = 0;
$bloque19.y = $bloque16.y - 50;
$bloque19.w = 100;
$bloque19.h = 5;
$bloque19.style.marginLeft = $bloque19.x + "px";
$bloque19.style.marginTop = $bloque19.y + "px";

$frame4.appendChild($bloque19);

const $arbol8 = document.createElement("div");

$arbol8.style.width = "100px";
$arbol8.style.height = "70px";
$arbol8.style.backgroundColor = "gold";
$arbol8.style.background = 'url("img/objetos2/DeadBush.png")';
$arbol8.style.backgroundPosition = "center";
$arbol8.style.backgroundSize = "100%";
$arbol8.style.position = "absolute";
$arbol8.style.backgroundRepeat = "no-repeat";
$arbol8.x = 100;
$arbol8.y = $bloque17.y - 63;

$arbol8.style.marginLeft = $arbol8.x + "px";
$arbol8.style.marginTop = $arbol8.y + "px";

$frame4.appendChild($arbol8);

const $arbusto12 = document.createElement("div");

$arbusto12.style.width = "100px";
$arbusto12.style.height = "60px";
$arbusto12.style.backgroundColor = "gold";
$arbusto12.style.background = 'url("img/objetos2/Bush (1).png")';
$arbusto12.style.backgroundPosition = "center";
$arbusto12.style.backgroundSize = "100%";
$arbusto12.style.position = "absolute";
$arbusto12.style.backgroundRepeat = "no-repeat";
$arbusto12.x = 300;
$arbusto12.y = $bloque16.y - 53;

$arbusto12.style.marginLeft = $arbusto12.x + "px";
$arbusto12.style.marginTop = $arbusto12.y + "px";

$frame4.appendChild($arbusto12);

const $skeleto = document.createElement("div");

$skeleto.style.width = "50px";
$skeleto.style.height = "40px";
$skeleto.style.backgroundColor = "gold";
$skeleto.style.background = 'url("img/objetos2/Skeleton.png")';
$skeleto.style.backgroundPosition = "center";
$skeleto.style.backgroundSize = "100%";
$skeleto.style.position = "absolute";
$skeleto.style.backgroundRepeat = "no-repeat";
$skeleto.x = 200;
$skeleto.y = $bloque17.y - 31;

$skeleto.style.marginLeft = $skeleto.x + "px";
$skeleto.style.marginTop = $skeleto.y + "px";

$frame4.appendChild($skeleto);

const $cruz = document.createElement("div");

$cruz.style.width = "50px";
$cruz.style.height = "70px";
$cruz.style.backgroundColor = "gold";
$cruz.style.background = 'url("img/objetos2/TombStone (2).png")';
$cruz.style.backgroundPosition = "center";
$cruz.style.backgroundSize = "100%";
$cruz.style.position = "absolute";
$cruz.style.backgroundRepeat = "no-repeat";
$cruz.x = 70;
$cruz.y = $bloque16.y - 70;

$cruz.style.marginLeft = $cruz.x + "px";
$cruz.style.marginTop = $cruz.y + "px";

$frame4.appendChild($cruz);

const $caja6 = document.createElement("div");

$caja6.style.width = "50px";
$caja6.style.height = "50px";
$caja6.style.backgroundColor = "gold";
$caja6.style.background = 'url("img/objetos2/Crate.png")';
$caja6.style.backgroundPosition = "center";
$caja6.style.backgroundSize = "100%";
$caja6.style.position = "absolute";
$caja6.style.backgroundRepeat = "no-repeat";
$caja6.x = 550;
$caja6.y = $bloque18.y - 50;

$caja6.style.marginLeft = $caja6.x + "px";
$caja6.style.marginTop = $caja6.y + "px";

$frame4.appendChild($caja6);

const $caja7 = document.createElement("div");

$caja7.style.width = "50px";
$caja7.style.height = "50px";
$caja7.style.backgroundColor = "gold";
$caja7.style.background = 'url("img/objetos2/Crate.png")';
$caja7.style.backgroundPosition = "center";
$caja7.style.backgroundSize = "100%";
$caja7.style.position = "absolute";
$caja7.style.backgroundRepeat = "no-repeat";
$caja7.x = 500;
$caja7.y = $bloque18.y - 50;

$caja7.style.marginLeft = $caja7.x + "px";
$caja7.style.marginTop = $caja7.y + "px";

$frame4.appendChild($caja7);

const $caja8 = document.createElement("div");

$caja8.style.width = "40px";
$caja8.style.height = "40px";
$caja8.style.backgroundColor = "gold";
$caja8.style.background = 'url("img/objetos2/Crate.png")';
$caja8.style.backgroundPosition = "center";
$caja8.style.backgroundSize = "100%";
$caja8.style.position = "absolute";
$caja8.style.backgroundRepeat = "no-repeat";
$caja8.x = 530;
$caja8.y = $caja6.y - 40;

$caja8.style.marginLeft = $caja8.x + "px";
$caja8.style.marginTop = $caja8.y + "px";

$frame4.appendChild($caja8);

//-------------------------------------------------------------

const $frame5 = document.createElement("div");

$frame5.style.width = ancho + "px";
$frame5.style.height = alto + "px";
$frame5.style.display = "none";
$frame5.style.zIndex = "9";
$frame5.frame = 2;

$main.appendChild($frame5);

const $bloque20 = document.createElement("div");

$bloque20.style.width = ancho + "px";
$bloque20.style.height = "80px";
$bloque20.style.backgroundColor = "red";
$bloque20.style.background = 'url("img/nivel2/piso.png")';
$bloque20.style.backgroundPosition = "center";
//$bloque20.style.backgroundSize = "100%";
$bloque20.style.position = "absolute";
$bloque20.style.backgroundRepeat = "no-repeat";
$bloque20.style.zIndex = "5";
$bloque20.x = 0;
$bloque20.y = alto - 80;
$bloque20.w = 1200;
$bloque20.h = 80;
$bloque20.style.marginLeft = $bloque20.x + "px";
$bloque20.style.marginTop = $bloque20.y + "px";

$frame5.appendChild($bloque20);

const $arbol19 = document.createElement("div");

$arbol19.style.width = "286px";
$arbol19.style.height = "239px";
$arbol19.style.backgroundColor = "gold";
$arbol19.style.background = 'url("img/objetos2/Tree.png")';
$arbol19.style.backgroundPosition = "center";
$arbol19.style.backgroundSize = "100%";
$arbol19.style.position = "absolute";
$arbol19.style.backgroundRepeat = "no-repeat";
$arbol19.style.zIndex = "0";
$arbol19.x = 300;
$arbol19.y = $bloque20.y - 239;

$arbol19.style.marginLeft = $arbol19.x + "px";
$arbol19.style.marginTop = $arbol19.y + "px";

$frame5.appendChild($arbol19);

const $bloque21 = document.createElement("div");

$bloque21.style.width = "100px";
$bloque21.style.height = "50px";
$bloque21.style.backgroundColor = "red";
$bloque21.style.background = 'url("img/nivel2/f5bloque1.png")';
$bloque21.style.backgroundPosition = "center";
$bloque21.style.backgroundSize = "100%";
$bloque21.style.position = "absolute";
$bloque21.style.backgroundRepeat = "no-repeat";
$bloque21.x = 270;
$bloque21.y = 255;
$bloque21.w = 100;
$bloque21.h = 1;
$bloque21.style.marginLeft = $bloque21.x + "px";
$bloque21.style.marginTop = $bloque21.y + "px";

$frame5.appendChild($bloque21);

const $bloque22 = document.createElement("div");

$bloque22.style.width = "100px";
$bloque22.style.height = "50px";
$bloque22.style.backgroundColor = "red";
$bloque22.style.background = 'url("img/nivel2/f5bloque1.png")';
$bloque22.style.backgroundPosition = "center";
$bloque22.style.backgroundSize = "100%";
$bloque22.style.position = "absolute";
$bloque22.style.backgroundRepeat = "no-repeat";
$bloque22.x = 100;
$bloque22.y = 180;
$bloque22.w = 100;
$bloque22.h = 1;
$bloque22.style.marginLeft = $bloque22.x + "px";
$bloque22.style.marginTop = $bloque22.y + "px";

$frame5.appendChild($bloque22);

const $bloque23 = document.createElement("div");

$bloque23.style.width = "100px";
$bloque23.style.height = "50px";
$bloque23.style.backgroundColor = "red";
$bloque23.style.background = 'url("img/nivel2/f5bloque1.png")';
$bloque23.style.backgroundPosition = "center";
$bloque23.style.backgroundSize = "100%";
$bloque23.style.position = "absolute";
$bloque23.style.backgroundRepeat = "no-repeat";
$bloque23.x = 270;
$bloque23.y = 95;
$bloque23.w = 100;
$bloque23.h = 1;
$bloque23.style.marginLeft = $bloque23.x + "px";
$bloque23.style.marginTop = $bloque23.y + "px";

$frame5.appendChild($bloque23);

const $bloque24 = document.createElement("div");

$bloque24.style.width = "200px";
$bloque24.style.height = "50px";
$bloque24.style.backgroundColor = "red";
$bloque24.style.background = 'url("img/nivel2/f5bloque2.png")';
$bloque24.style.backgroundPosition = "center";
$bloque24.style.backgroundSize = "100%";
$bloque24.style.position = "absolute";
$bloque24.style.backgroundRepeat = "no-repeat";
$bloque24.x = ancho - 200;
$bloque24.y = 140;
$bloque24.w = 200;
$bloque24.h = 1;
$bloque24.style.marginLeft = $bloque24.x + "px";
$bloque24.style.marginTop = $bloque24.y + "px";

$frame5.appendChild($bloque24);

const $caja9 = document.createElement("div");

$caja9.style.width = "40px";
$caja9.style.height = "40px";
$caja9.style.backgroundColor = "gold";
$caja9.style.background = 'url("img/objetos2/Crate.png")';
$caja9.style.backgroundPosition = "center";
$caja9.style.backgroundSize = "100%";
$caja9.style.position = "absolute";
$caja9.style.backgroundRepeat = "no-repeat";
$caja9.x = 120;
$caja9.y = $bloque22.y - 40;

$caja9.style.marginLeft = $caja9.x + "px";
$caja9.style.marginTop = $caja9.y + "px";

$frame5.appendChild($caja9);

const $piedra = document.createElement("div");

$piedra.style.width = "54px";
$piedra.style.height = "55px";
$piedra.style.backgroundColor = "gold";
$piedra.style.background = 'url("img/objetos2/TombStone (1).png")';
$piedra.style.backgroundPosition = "center";
$piedra.style.backgroundSize = "100%";
$piedra.style.position = "absolute";
$piedra.style.backgroundRepeat = "no-repeat";
$piedra.x = 600;
$piedra.y = $bloque24.y - 55;

$piedra.style.marginLeft = $piedra.x + "px";
$piedra.style.marginTop = $piedra.y + "px";

$frame5.appendChild($piedra);

const $arbusto9 = document.createElement("div");

$arbusto9.style.width = "70px";
$arbusto9.style.height = "50px";
$arbusto9.style.backgroundColor = "gold";
$arbusto9.style.background = 'url("img/objetos2/Bush (2).png")';
$arbusto9.style.backgroundPosition = "center";
$arbusto9.style.backgroundSize = "100%";
$arbusto9.style.position = "absolute";
$arbusto9.style.backgroundRepeat = "no-repeat";
$arbusto9.x = 550;
$arbusto9.y = $bloque24.y - 47;

$arbusto9.style.marginLeft = $arbusto9.x + "px";
$arbusto9.style.marginTop = $arbusto9.y + "px";

$frame5.appendChild($arbusto9);

//-------------------------------------------------------------------------------

const $frame6 = document.createElement("div");

$frame6.style.width = ancho + "px";
$frame6.style.height = alto + "px";
$frame6.style.display = "none";
$frame6.style.zIndex = "9";
$frame6.frame = 3;

$main.appendChild($frame6);

const $bloque25 = document.createElement("div");

$bloque25.style.width = ancho + "px";
$bloque25.style.height = "80px";
$bloque25.style.backgroundColor = "red";
$bloque25.style.background = 'url("img/nivel2/piso.png")';
$bloque25.style.backgroundPosition = "center";
//$bloque25.style.backgroundSize = "100%";
$bloque25.style.position = "absolute";
$bloque25.style.backgroundRepeat = "no-repeat";
$bloque25.style.zIndex = "5";
$bloque25.x = 0;
$bloque25.y = alto - 80;
$bloque25.w = 1200;
$bloque25.h = 80;
$bloque25.style.marginLeft = $bloque25.x + "px";
$bloque25.style.marginTop = $bloque25.y + "px";

$frame6.appendChild($bloque25);

const $bloque26 = document.createElement("div");

$bloque26.style.width = "350px";
$bloque26.style.height = "160px";
$bloque26.style.backgroundColor = "red";
$bloque26.style.background = 'url("img/nivel2/f6bloque1.png")';
$bloque26.style.backgroundPosition = "center";
$bloque26.style.backgroundSize = "100%";
$bloque26.style.position = "absolute";
$bloque26.style.backgroundRepeat = "no-repeat";
$bloque26.x = ancho / 2 - 175;
$bloque26.y = $bloque25.y - 160;
$bloque26.w = 350;
$bloque26.h = -160;
$bloque26.style.marginLeft = $bloque26.x + "px";
$bloque26.style.marginTop = $bloque26.y + "px";

$frame6.appendChild($bloque26);

const $bloque27 = document.createElement("div");

$bloque27.style.width = "100px";
$bloque27.style.height = "70px";
$bloque27.style.backgroundColor = "gold";
$bloque27.style.background = 'url("img/nivel2/f6bloque2.png")';
$bloque27.style.backgroundPosition = "center";
$bloque27.style.backgroundSize = "100%";
$bloque27.style.position = "absolute";
$bloque27.style.backgroundRepeat = "no-repeat";
$bloque27.x = $bloque26.x - 100;
$bloque27.y = $bloque25.y - 70;
$bloque27.w = 100;
$bloque27.h = 1;
$bloque27.style.marginLeft = $bloque27.x + "px";
$bloque27.style.marginTop = $bloque27.y + "px";

$frame6.appendChild($bloque27);

const $bloque28 = document.createElement("div");

$bloque28.style.width = "100px";
$bloque28.style.height = "70px";
$bloque28.style.backgroundColor = "gold";
$bloque28.style.background = 'url("img/nivel2/f6bloque3.png")';
$bloque28.style.backgroundPosition = "center";
$bloque28.style.backgroundSize = "100%";
$bloque28.style.position = "absolute";
$bloque28.style.backgroundRepeat = "no-repeat";
$bloque28.x = $bloque26.x + $bloque26.w;
$bloque28.y = $bloque25.y - 70;
$bloque28.w = 100;
$bloque28.h = 5;
$bloque28.style.marginLeft = $bloque28.x + "px";
$bloque28.style.marginTop = $bloque28.y + "px";

$frame6.appendChild($bloque28);

const $piedra2 = document.createElement("div");

$piedra2.style.width = "54px";
$piedra2.style.height = "55px";
$piedra2.style.backgroundColor = "gold";
$piedra2.style.background = 'url("img/objetos2/TombStone (1).png")';
$piedra2.style.backgroundPosition = "center";
$piedra2.style.backgroundSize = "100%";
$piedra2.style.position = "absolute";
$piedra2.style.backgroundRepeat = "no-repeat";
$piedra2.x = 400;
$piedra2.y = $bloque26.y - 54;

$piedra2.style.marginLeft = $piedra2.x + "px";
$piedra2.style.marginTop = $piedra2.y + "px";

$frame6.appendChild($piedra2);

const $skeleto2 = document.createElement("div");

$skeleto2.style.width = "50px";
$skeleto2.style.height = "40px";
$skeleto2.style.backgroundColor = "gold";
$skeleto2.style.background = 'url("img/objetos2/Skeleton.png")';
$skeleto2.style.backgroundPosition = "center";
$skeleto2.style.backgroundSize = "100%";
$skeleto2.style.position = "absolute";
$skeleto2.style.backgroundRepeat = "no-repeat";
$skeleto2.x = 430;
$skeleto2.y = $bloque26.y - 31;

$skeleto2.style.marginLeft = $skeleto2.x + "px";
$skeleto2.style.marginTop = $skeleto2.y + "px";

$frame6.appendChild($skeleto2);

const $arbusto13 = document.createElement("div");

$arbusto13.style.width = "70px";
$arbusto13.style.height = "50px";
$arbusto13.style.backgroundColor = "gold";
$arbusto13.style.background = 'url("img/objetos2/Bush (2).png")';
$arbusto13.style.backgroundPosition = "center";
$arbusto13.style.backgroundSize = "100%";
$arbusto13.style.position = "absolute";
$arbusto13.style.backgroundRepeat = "no-repeat";
$arbusto13.x = 440;
$arbusto13.y = $bloque25.y - 47;

$arbusto13.style.marginLeft = $arbusto13.x + "px";
$arbusto13.style.marginTop = $arbusto13.y + "px";

$frame6.appendChild($arbusto13);

const $arbusto14 = document.createElement("div");

$arbusto14.style.width = "100px";
$arbusto14.style.height = "60px";
$arbusto14.style.backgroundColor = "gold";
$arbusto14.style.background = 'url("img/objetos2/Bush (1).png")';
$arbusto14.style.backgroundPosition = "center";
$arbusto14.style.backgroundSize = "100%";
$arbusto14.style.position = "absolute";
$arbusto14.style.backgroundRepeat = "no-repeat";
$arbusto14.x = 170;
$arbusto14.y = $bloque25.y - 53;

$arbusto14.style.marginLeft = $arbusto14.x + "px";
$arbusto14.style.marginTop = $arbusto14.y + "px";

$frame6.appendChild($arbusto14);

const $submenu = document.createElement("div");
$submenu.classList.add("submenu");
$submenu.style.width = "300px";
$submenu.style.height = "100px";
$submenu.style.backgroundColor = "rgba(0,0,0,0.7)";
$submenu.style.position = "absolute";
$submenu.style.display = "none";
$submenu.style.zIndex = "99999";
$submenu.style.borderRadius = "10px";
    
$submenu.innerText = "GANASTE"; 
$submenu.style.color="white";
$submenu.style.fontSize="40px";
$submenu.style.textAlign="center";
$submenu.style.padding ="12px";

$submenu.x = ancho - 520;
$submenu.y = alto - 700;
$submenu.style.marginLeft = $submenu.x + "px";
$submenu.style.marginTop = $submenu.y + "px";

$main.appendChild($submenu);

const $volverm = document.createElement("div");
$volverm.style.width = "80px";
$volverm.style.height = "20px";
$volverm.style.backgroundColor = "rgba(0,0,0,1)";
$volverm.style.position = "absolute";
$volverm.style.zIndex = "99999";
$volverm.style.borderRadius = "10px";

$volverm.innerText ="Volver";
$volverm.style.fontFamily = "Ninjastrike";
$volverm.style.fontSize="18px";
$volverm.style.color="white";
$volverm.style.textAlign = "center";
$volverm.style.padding="5px 0px";

$volverm.x = 110;
$volverm.y = 20;
$volverm.style.marginLeft = $volverm.x + "px";
$volverm.style.marginTop = $volverm.y + "px";

$submenu.appendChild($volverm);

//-------------------------------------------------------------------------------

//MOVIMIENTOS DEL PERSONAJE COMPUTADORA
$window.onkeypress = function (e) {
  const keyCode = e.keyCode;
  //SALTO
  if (keyCode === 119) {
    Saltar();
    $snsalto.play();
    $ninja.style.background = 'url("img/ninja/saltar.gif")';
    $ninja.style.width = "58px";
    $ninja.style.height = "70px";
    $ninja.style.backgroundSize = "100%";
    $ninja.style.backgroundPosition = "center";
    $ninja.style.backgroundRepeat = "no-repeat";
    $ninja.w = 58;
    $ninja.h = 70;
    window.onkeyup = function (e) {
      $ninja.style.width = "38px";
      $ninja.style.height = "68px";
      $ninja.style.background = 'url("img/ninja/ninja-parado.gif")';
      $ninja.style.backgroundSize = "100%";
      $ninja.style.backgroundPosition = "center";
      $ninja.style.backgroundRepeat = "no-repeat";
      $ninja.w = 38;
      $ninja.h = 68;
    };
  }
  //DERECHA
  else if (keyCode === 100 && $ninja.x < ancho - $ninja.w / 2) {
    codekey = 100;
    ///$sncorriendo.play();
    $ninja.style.background = 'url("img/ninja/ninja-corriendo.gif")';
    $ninja.style.width = "60px";
    $ninja.style.height = "63px";
    $ninja.style.backgroundSize = "100%";
    $ninja.style.backgroundPosition = "center";
    $ninja.style.backgroundRepeat = "no-repeat";
    $ninja.w = 60;
    $ninja.h = 63;
    $ninja.x += $ninja.velocidad;
    $ninja.style.marginLeft = $ninja.x + "px";

    window.onkeyup = function (e) {
      $ninja.style.width = "38px";
      $ninja.style.height = "68px";
      $ninja.style.background = 'url("img/ninja/ninja-parado.gif")';
      $ninja.style.backgroundSize = "100%";
      $ninja.style.backgroundPosition = "center";
      $ninja.style.backgroundRepeat = "no-repeat";
      $ninja.w = 38;
      $ninja.h = 68;
    };
  }
  //IZQUIERDA
  else if (keyCode === 97 && $ninja.x > 0 - $ninja.w / 2) {
    codekey = 97;
    //$sncorriendo.play();
    $ninja.style.background = 'url("img/ninja/ninja-corriendo2.gif")';
    $ninja.style.width = "60px";
    $ninja.style.height = "63px";
    $ninja.style.backgroundSize = "100%";
    $ninja.style.backgroundPosition = "center";
    $ninja.style.backgroundRepeat = "no-repeat";
    $ninja.w = 60;
    $ninja.h = 63;
    $ninja.x -= $ninja.velocidad;
    $ninja.style.marginLeft = $ninja.x + "px";

    window.onkeyup = function (e) {
      $ninja.style.width = "38px";
      $ninja.style.height = "68px";
      $ninja.style.background = 'url("img/ninja/ninja-parado2.gif")';
      $ninja.style.backgroundSize = "100%";
      $ninja.style.backgroundPosition = "center";
      $ninja.style.backgroundRepeat = "no-repeat";
      $ninja.w = 38;
      $ninja.h = 68;
    };
  } else if (keyCode === 32) {
    Kunai();
  }
};
//-------------------------------------------------------------------------------
frametex = $frame1;
let posX = 500;
while (contadormoneda < 3) {
  crearmoneda(posX, $bloque3.y - 35, $frame1);
  contadormoneda++;
  posX += 35;
}

posX = 100;
while (contadormoneda < 7) {
  crearmoneda(posX, $bloque2.y - 35, $frame1);
  contadormoneda++;
  posX += 35;
}
//-------------------------------------------------------------------------------
//LOOP PRINCIPAL
setInterval(function () {
  aplicarGravedad(".ninja");
  //aplicarGravedad(".enemigo");
  mostrarnivel(nivel);
  colosion();
  colisionmonedas();
}, 1000 / FPS);
//-------------------------------------------------------------------------------
//FUNCIONES

function aplicarGravedad($personaje) {
  const $div = document.querySelector($personaje);
  if ($div.y < alto - $div.h) {
    if ($div.enpiso === 0) {
      $div.vy += gravedad;
      if ($div.vy > limitevy) {
        $div.vy = limitevy;
      }
      $div.y += $div.vy;
      $div.style.marginTop = $div.y + "px";
    }
  } else {
    $div.enpiso = 1;
  }
}
function Saltar() {
  if ($ninja.enpiso === 1) {
    $ninja.vy = $ninja.salto;
    $ninja.y += $ninja.vy;
    $ninja.style.marginTop = $ninja.y + "px";
    $ninja.enpiso = 0;
  }
}

function obtenerMedidas() {
  alto = document.documentElement.clientHeight;
  ancho = document.documentElement.clientWidth;
}

function colosion() {
  if ($ninja.vy < 0) {
    return;
  }
  if (nivel === 1) {
    if (frame === 1) {
      if (
        $bloque1.x <= $ninja.x + $ninja.w &&
        $bloque1.x + $bloque1.w >= $ninja.x &&
        $bloque1.y <= $ninja.y + $ninja.h &&
        $bloque1.y + $bloque1.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque2.x <= $ninja.x + $ninja.w &&
        $bloque2.x + $bloque2.w >= $ninja.x &&
        $bloque2.y <= $ninja.y + $ninja.h &&
        $bloque2.y + $bloque2.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }
      if (
        $bloque3.x <= $ninja.x + $ninja.w &&
        $bloque3.x + $bloque3.w >= $ninja.x &&
        $bloque3.y <= $ninja.y + $ninja.h &&
        $bloque3.y + $bloque3.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }
      if (
        $bloque4.x <= $ninja.x + $ninja.w &&
        $bloque4.x + $bloque4.w >= $ninja.x &&
        $bloque4.y <= $ninja.y + $ninja.h &&
        $bloque4.y + $bloque4.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }
      if (
        $bloque5.x <= $ninja.x + $ninja.w &&
        $bloque5.x + $bloque5.w >= $ninja.x &&
        $bloque5.y <= $ninja.y + $ninja.h &&
        $bloque5.y + $bloque5.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }
    } else if (frame === 2) {
      if (
        $bloque6.x <= $ninja.x + $ninja.w &&
        $bloque6.x + $bloque6.w >= $ninja.x &&
        $bloque6.y <= $ninja.y + $ninja.h &&
        $bloque6.y + $bloque6.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }
      if (
        $bloque7.x <= $ninja.x + $ninja.w &&
        $bloque7.x + $bloque7.w >= $ninja.x &&
        $bloque7.y <= $ninja.y + $ninja.h &&
        $bloque7.y + $bloque7.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque8.x <= $ninja.x + $ninja.w &&
        $bloque8.x + $bloque8.w >= $ninja.x &&
        $bloque8.y <= $ninja.y + $ninja.h &&
        $bloque8.y + $bloque8.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque9.x <= $ninja.x + $ninja.w &&
        $bloque9.x + $bloque9.w >= $ninja.x &&
        $bloque9.y <= $ninja.y + $ninja.h &&
        $bloque9.y + $bloque9.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }
    } else if (frame === 3) {
      if (
        $bloque10.x <= $ninja.x + $ninja.w &&
        $bloque10.x + $bloque10.w >= $ninja.x &&
        $bloque10.y <= $ninja.y + $ninja.h &&
        $bloque10.y + $bloque10.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque11.x <= $ninja.x + $ninja.w &&
        $bloque11.x + $bloque11.w >= $ninja.x &&
        $bloque11.y <= $ninja.y + $ninja.h &&
        $bloque11.y + $bloque11.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque12.x <= $ninja.x + $ninja.w &&
        $bloque12.x + $bloque12.w >= $ninja.x &&
        $bloque12.y <= $ninja.y + $ninja.h &&
        $bloque12.y + $bloque12.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }
      if (
        $bloque13.x <= $ninja.x + $ninja.w &&
        $bloque13.x + $bloque13.w >= $ninja.x &&
        $bloque13.y <= $ninja.y + $ninja.h &&
        $bloque13.y + $bloque13.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }
      if (
        $bloque14.x <= $ninja.x + $ninja.w &&
        $bloque14.x + $bloque14.w >= $ninja.x &&
        $bloque14.y <= $ninja.y + $ninja.h &&
        $bloque14.y + $bloque14.h >= $ninja.y
      ) {
        daño = daño - 0.05;
        console.log("daño:" + daño);
        if (daño <= 0) {
          $snmuerte.play();
          imprimirvida2();
          daño = 10;
          console.log("daño:" + daño);
        }
      }
      if (
        $diamante.x <= $ninja.x + $ninja.w &&
        $diamante.x + $diamante.w >= $ninja.x &&
        $diamante.y <= $ninja.y + $ninja.h &&
        $diamante.y + $diamante.h >= $ninja.y
      ) {
        $diamante.style.display = "none";
        $snwin.play();
        imprimirscore2(50);
        $submenu.style.transition ="1s";
        $submenu.style.display="block";

      }
    }
  } else if (nivel === 2) {
    if (frame === 4) {
      if (
        $bloque16.x <= $ninja.x + $ninja.w &&
        $bloque16.x + $bloque16.w >= $ninja.x &&
        $bloque16.y <= $ninja.y + $ninja.h &&
        $bloque16.y + $bloque16.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque17.x <= $ninja.x + $ninja.w &&
        $bloque17.x + $bloque17.w >= $ninja.x &&
        $bloque17.y <= $ninja.y + $ninja.h &&
        $bloque17.y + $bloque17.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque18.x <= $ninja.x + $ninja.w &&
        $bloque18.x + $bloque18.w >= $ninja.x &&
        $bloque18.y <= $ninja.y + $ninja.h &&
        $bloque18.y + $bloque18.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque19.x <= $ninja.x + $ninja.w &&
        $bloque19.x + $bloque19.w >= $ninja.x &&
        $bloque19.y <= $ninja.y + $ninja.h &&
        $bloque19.y + $bloque19.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }
    } else if (frame === 5) {
      if (
        $bloque20.x <= $ninja.x + $ninja.w &&
        $bloque20.x + $bloque20.w >= $ninja.x &&
        $bloque20.y <= $ninja.y + $ninja.h &&
        $bloque20.y + $bloque20.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque21.x <= $ninja.x + $ninja.w &&
        $bloque21.x + $bloque21.w >= $ninja.x &&
        $bloque21.y <= $ninja.y + $ninja.h &&
        $bloque21.y + $bloque21.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque22.x <= $ninja.x + $ninja.w &&
        $bloque22.x + $bloque22.w >= $ninja.x &&
        $bloque22.y <= $ninja.y + $ninja.h &&
        $bloque22.y + $bloque22.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque23.x <= $ninja.x + $ninja.w &&
        $bloque23.x + $bloque23.w >= $ninja.x &&
        $bloque23.y <= $ninja.y + $ninja.h &&
        $bloque23.y + $bloque23.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque24.x <= $ninja.x + $ninja.w &&
        $bloque24.x + $bloque24.w >= $ninja.x &&
        $bloque24.y <= $ninja.y + $ninja.h &&
        $bloque24.y + $bloque24.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }
    } else if (frame === 6) {
      if (
        $bloque25.x <= $ninja.x + $ninja.w &&
        $bloque25.x + $bloque25.w >= $ninja.x &&
        $bloque25.y <= $ninja.y + $ninja.h &&
        $bloque25.y + $bloque25.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque26.x <= $ninja.x + $ninja.w &&
        $bloque26.x + $bloque26.w >= $ninja.x &&
        $bloque26.y <= $ninja.y + $ninja.h &&
        $bloque2.y + $bloque26.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque27.x <= $ninja.x + $ninja.w &&
        $bloque27.x + $bloque27.w >= $ninja.x &&
        $bloque27.y <= $ninja.y + $ninja.h &&
        $bloque27.y + $bloque27.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }

      if (
        $bloque28.x <= $ninja.x + $ninja.w &&
        $bloque28.x + $bloque28.w >= $ninja.x &&
        $bloque28.y <= $ninja.y + $ninja.h &&
        $bloque28.y + $bloque28.h >= $ninja.y
      ) {
        $ninja.enpiso = 1;
        $ninja.vy = 0;
        return;
      }
    }
  }

  $ninja.enpiso = 0;
}

function mostrarnivel(nivel) {
  nivel=nivel;
  if (nivel === 1) {
    console.log("nivel: " + nivel);

    if (frame === 1 && $ninja.x > ancho - $ninja.w / 2) {
      frame = 2;
      frameninja = 2;
      framemoneda = 2;
      console.log("frame: " + frame);
      $frame1.style.display = "none";
      $frame2.style.display = "block";

      $ninja.x = 30;
      $ninja.style.marginLeft = $ninja.x + "px";
      if (frame === 2) {
        frametex = $frame2;
        posX = 200;
        while (contadormoneda < 12) {
          crearmoneda(posX, 300, $frame2, "block");
          contadormoneda++;
          posX += 35;
        }

        posX = 100;
        while (contadormoneda < 16) {
          crearmoneda(posX, $bloque9.y - 35, $frame2);
          contadormoneda++;
          posX += 35;
        }
      }
    } else if (frame === 2 && $ninja.x < 0 - $ninja.w / 2) {
      frame = 1;
      frameninja = 1;
      framemoneda = 1;
      console.log("frame: " + frame);
      $frame1.style.display = "block";

      $ninja.x = ancho - $ninja.w;
      $ninja.style.marginLeft = $ninja.x + "px";

      $diamante.style.display = "none";

      if (frame === 1) {
        frametex = $frame1;
        let posX = 500;
        while (contadormoneda < 3) {
          crearmoneda(posX, $bloque3.y - 35, $frame1);
          contadormoneda++;
          posX += 35;
        }

        posX = 100;
        while (contadormoneda < 7) {
          crearmoneda(posX, $bloque2.y - 35, $frame1);
          contadormoneda++;
          posX += 35;
        }
      }
    } else if (frame === 2 && $ninja.x > ancho - $ninja.w / 2) {
      frame = 3;
      frameninja = 3;
      framemoneda = 3;
      console.log("frame: " + frame);
      $frame2.style.display = "none";
      $frame3.style.display = "block";

      $ninja.x = 30;
      $ninja.style.marginLeft = $ninja.x + "px";

      if (frame === 3) {
        frametex = $frame3;
        posX = 200;
        while (contadormoneda < 20) {
          crearmoneda(posX, $bloque21.y - 35, $frame3);
          contadormoneda++;
          posX += 35;
        }

        posX = 550;
        while (contadormoneda < 25) {
          crearmoneda(posX, $bloque23.y - 35, $frame3);
          contadormoneda++;
          posX += 35;
        }
      }
    } else if (frame === 3 && $ninja.x < 0 - $ninja.w / 2) {
      frame = 2;
      frameninja = 2;
      framemoneda = 2;
      console.log("frame: " + frame);
      if (frame === 2) {
      }
      $frame2.style.display = "block";
      $frame3.style.display = "none";
      $diamante.style.display = "none";

      $ninja.x = ancho - $ninja.w;
      $ninja.style.marginLeft = $ninja.x + "px";

      frametex = $frame2;
      posX = 200;
      while (contadormoneda < 12) {
        crearmoneda(posX, 300, $frame2);
        contadormoneda++;
        posX += 35;
      }

      posX = 100;
      while (contadormoneda < 16) {
        crearmoneda(posX, $bloque9.y - 35, $frame2);
        contadormoneda++;
        posX += 35;
      }
    }

    //-------------------------------------------------------
    else if (frame === 1 && $ninja.x < 0 - $ninja.w / 2) {
      $flechaderecha.style.display = "block";
    }
  }
  //MOSTRAR NIVEL 2
  else if (nivel === 2) {
    console.log("nivel: " + nivel);
    $frame3.style.display = "none";
    if (frame === 4) {
      $frame4.style.display = "block";
      frametex = $frame4;
      posX = 20;
      while (contadormoneda < 10) {
        crearmoneda(posX, $bloque16.y - 35, $frame4);
        contadormoneda++;
        posX += 35;
      }

      posX = 500;
      while (contadormoneda < 16) {
        crearmoneda(posX, $bloque18.y - 35, $frame4);
        contadormoneda++;
        posX += 35;
      }
    }
    if (frame === 4 && $ninja.x > ancho - $ninja.w / 2) {
      frame = 5;
      frameninja = 2;
      framemoneda = 2;
      console.log("frame: " + frame);
      $frame4.style.display = "none";
      $frame5.style.display = "block";

      $ninja.x = 30;
      $ninja.style.marginLeft = $ninja.x + "px";

      frametex = $frame5;
      posX = 130;
      while (contadormoneda < 18) {
        crearmoneda(posX, $bloque22.y - 35, $frame5);
        contadormoneda++;
        posX += 35;
      }

      posX = 280;
      while (contadormoneda < 20) {
        crearmoneda(posX, $bloque21.y - 35, $frame5);
        contadormoneda++;
        posX += 35;
      }
      posX = 280;
      while (contadormoneda < 22) {
        crearmoneda(posX, $bloque23.y - 35, $frame5);
        contadormoneda++;
        posX += 35;
      }
    } else if (frame === 5 && $ninja.x < 0 - $ninja.w / 2) {
      frame = 4;
      frameninja = 1;
      framemoneda = 1;
      console.log("frame: " + frame);
      $frame4.style.display = "block";

      $ninja.x = ancho - $ninja.w;
      $ninja.style.marginLeft = $ninja.x + "px";
      frametex = $frame4;
      posX = 20;
      while (contadormoneda < 10) {
        crearmoneda(posX, $bloque16.y - 35, $frame4);
        contadormoneda++;
        posX += 35;
      }

      posX = 500;
      while (contadormoneda < 16) {
        crearmoneda(posX, $bloque18.y - 35, $frame4);
        contadormoneda++;
        posX += 35;
      }
    } else if (frame === 5 && $ninja.x > ancho - $ninja.w / 2) {
      frame = 6;
      frameninja = 3;
      framemoneda = 3;
      console.log("frame: " + frame);
      $frame5.style.display = "none";
      $frame6.style.display = "block";

      $ninja.x = 30;
      $ninja.style.marginLeft = $ninja.x + "px";
      frametex = $frame6;
      posX = ancho / 2 - 35;
      while (contadormoneda < 27) {
        crearmoneda(posX, $bloque25.y - 35, $frame6);
        contadormoneda++;
        posX += 35;
      }
      posX = ancho / 3;
      while (contadormoneda < 34) {
        crearmoneda(posX, $bloque26.y - 35, $frame6);
        contadormoneda++;
        posX += 35;
      }
    } else if (frame === 6 && $ninja.x < 0 - $ninja.w / 2) {
      frame = 5;
      frameninja = 2;
      framemoneda = 2;
      console.log("frame: " + frame);
      $frame5.style.display = "block";
      $frame6.style.display = "none";

      $ninja.x = ancho - $ninja.w;
      $ninja.style.marginLeft = $ninja.x + "px";
      frametex = $frame5;
      posX = 130;
      while (contadormoneda < 18) {
        crearmoneda(posX, $bloque22.y - 35, $frame5);
        contadormoneda++;
        posX += 35;
      }

      posX = 280;
      while (contadormoneda < 20) {
        crearmoneda(posX, $bloque21.y - 35, $frame5);
        contadormoneda++;
        posX += 35;
      }
      posX = 280;
      while (contadormoneda < 22) {
        crearmoneda(posX, $bloque23.y - 35, $frame5);
        contadormoneda++;
        posX += 35;
      }
    }
  }
  //-------------------------------------------------------
}
function crearmoneda(posx, posy, frame) {
  const $moneda = document.createElement("div");

  $moneda.classList.add("moneda");
  $moneda.style.width = "30px";
  $moneda.style.height = "30px";
  $moneda.style.background = 'url("img/ninja/moneda.gif")';
  $moneda.style.backgroundSize = "100%";
  $moneda.style.backgroundPosition = "center";
  $moneda.style.position = "absolute";
  $moneda.style.zIndex = "9";

  $moneda.valor = 10;
  $moneda.x = posx;
  $moneda.y = posy;
  $moneda.h = 30;
  $moneda.w = 30;
  $moneda.style.marginLeft = posx + "px";
  $moneda.style.marginTop = posy + "px";

  frame.appendChild($moneda);
}

function colisionmonedas() {
  const $monedalist = document.querySelectorAll(".moneda");
  for (let p = 0; p < $monedalist.length; p++) {
    if (
      $monedalist[p].x <= $ninja.x + $ninja.w &&
      $monedalist[p].x + $monedalist[p].w >= $ninja.x &&
      $monedalist[p].y <= $ninja.y + $ninja.h &&
      $monedalist[p].y + $monedalist[p].h >= $ninja.y
    ) {
      //$snmoneda.play();
      frametex.removeChild($monedalist[p]);
      imprimirscore2($monedalist[p].valor);
    }
  }
}

//-------------VIDA-----------------------
function iconovolver() {
  const $btvolver = document.createElement("div");

  $btvolver.style.width = "30px";
  $btvolver.style.height = "30px";
  $btvolver.style.backgroundColor = "gold";
  $btvolver.style.background= "transparent";
  $btvolver.style.background = 'url("img/icono-volver.png")';
  $btvolver.style.backgroundPosition = "center";
  $btvolver.style.backgroundSize = "100%";
  $btvolver.style.position = "absolute";
  $btvolver.style.backgroundRepeat = "no-repeat";
  $btvolver.style.zIndex = "8";
  $btvolver.x = 370;
  $btvolver.y = 15;

  $btvolver.style.marginLeft = $btvolver.x + "px";
  $btvolver.style.marginTop = $btvolver.y + "px";

  $main.appendChild($btvolver);

  $btvolver.setAttribute("onclick", "volverMeu()");
}

function crearvida() {
  const $vida = document.createElement("div");

  $vida.style.width = "30px";
  $vida.style.height = "30px";
  $vida.style.backgroundColor = "gold";
  $vida.style.background = 'url("img/ninja/cabeza-vida.png")';
  $vida.style.backgroundPosition = "center";
  $vida.style.backgroundSize = "100%";
  $vida.style.position = "absolute";
  $vida.style.backgroundRepeat = "no-repeat";
  $vida.style.zIndex = "8";
  $vida.x = 170;
  $vida.y = 10;

  $vida.style.marginLeft = $vida.x + "px";
  $vida.style.marginTop = $vida.y + "px";

  $main.appendChild($vida);
}

function imprimirvida() {
  const $vidatexto = document.createElement("h4");

  $vidatexto.style.fontSize = "25px";
  setInterval(function(){
    if (nivel === 1) {
    $vidatexto.style.color = "black";
  }else if (nivel === 2) {
    $vidatexto.style.color = "white";
  }
  },10);
  $vidatexto.style.position = "absolute";
  $vidatexto.innerText = "X" + vida;
  $vidatexto.style.paddingRight = "89px";
  $vidatexto.style.alignItems = "center";
  $vidatexto.zIndex = "9999";
  $vidatexto.x = 200;
  $vidatexto.y = 15;
  $vidatexto.style.marginLeft = $vidatexto.x + "px";
  $vidatexto.style.marginTop = $vidatexto.y + "px";

  $main.appendChild($vidatexto);
}

function imprimirvida2() {
  const $h1 = document.querySelector("h4");
  vida--;
  $h1.innerText = "X" + vida;
}

function crearscore() {
  const $score = document.createElement("div");

  $score.style.width = "30px";
  $score.style.height = "30px";
  $score.style.backgroundColor = "gold";
  $score.style.background = 'url("img/ninja/moneda.gif")';
  $score.style.backgroundPosition = "center";
  $score.style.backgroundSize = "100%";
  $score.style.position = "absolute";
  $score.style.backgroundRepeat = "no-repeat";
  $score.style.zIndex = "8";
  $score.x = 265;
  $score.y = 10;

  $score.style.marginLeft = $score.x + "px";
  $score.style.marginTop = $score.y + "px";

  $main.appendChild($score);
}

function imprimirscore() {
  const $scoretext = document.createElement("h5");

  $scoretext.style.fontSize = "25px";
  setInterval(function(){
    if (nivel === 1) {
    $scoretext.style.color = "black";  
  }else if(nivel === 2){
    $scoretext.style.color = "white";
  }
  },10);
  $scoretext.style.position = "absolute";
  $scoretext.innerText = "X" + score;
  $scoretext.style.paddingRight = "89px";
  $scoretext.style.alignItems = "center";
  $scoretext.x = 300;
  $scoretext.y = 15;
  $scoretext.style.marginLeft = $scoretext.x + "px";
  $scoretext.style.marginTop = $scoretext.y + "px";

  $main.appendChild($scoretext);
}

function imprimirscore2(valor) {
  const $h2 = document.querySelector("h5");
  score += valor;
  $h2.innerText = "x" + score;
}


setInterval(function () {
  const $kunaiList = document.querySelectorAll(".Kunai");

  for (let i = 0; i < $kunaiList.length; i++) {
    if (codekey === 100) {
      $kunaiList[i].x += $kunaiList[i].vel;
      $kunaiList[i].style.marginLeft = $kunaiList[i].x + "px";
    } else if (codekey === 97) {
      $kunaiList[i].x -= $kunaiList[i].vel;
      $kunaiList[i].style.marginLeft = $kunaiList[i].x + "px";
    }

    if ($kunaiList[i].x > ancho || $kunaiList[i].x < 0) {
      $main.removeChild($kunaiList[i]);
    }
    /*for (let j = 0; j < $kunaiList.length; j++) {
      if (
        $kunaiList[j].x <= $enemigo1.x + $enemigo1.w &&
        $kunaiList[j].x + $kunaiList[j].w >= $enemigo1.x &&
        $kunaiList[j].y <= $enemigo1.y + $enemigo1.h &&
        $kunaiList[j].y + $kunaiList[j].h >= $enemigo1.y
      ) {
        $snarmaimpacto.play();
        console.log("hola");
      }
    }*/
  }
}, 100);

function volverGa(){
    volverMeu();
    setInterval(function(){
      if (nivel === 2) {
      $main.style.background = 'url("img/BG2.png")';
      $main.style.backgroundSize = "cover";
      $main.style.backgroundPosition = "center";
      $main.style.backgroundRepeat = "no repeat";
    }else{
      $main.style.background = 'url("img/BG.png")';
    }
    },10);

    //arreglar esta parte
    if (nivel <2) {
      nivel += 1;
      frame += 1;  
    }else{
      nivel = 1;
      $frame1.style.display = "block";
      $frame6.style.display = "none";
      contadormoneda = 0;
      score=0;
    }
    
    $frame3.style.display = "none";
    $frame4.style.display = "block";
    contadormoneda = 0;
    $ninja.x=30;
    $ninja.y=30;
    $ninja.style.marginLeft = $ninja.x + "px";
    $ninja.style.marginTop = $ninja.y + "px";

    if (nivel === 1) {
      frame=1;
      $frame1.style.display = "block";
      contadormoneda=0;
      score = 0;
      $ninja.x=30;
      $ninja.y=30;
      $ninja.style.marginLeft = $ninja.x + "px";
      $ninja.style.marginTop = $ninja.y + "px";
    }else{
      frame = 4;
      $frame4.style.display = "block";
      contadormoneda=0;
      score = 0;
      $ninja.x=30;
      $ninja.y=30;
      $ninja.style.marginLeft = $ninja.x + "px";
      $ninja.style.marginTop = $ninja.y + "px";
    }
}


function volverMeu(){
  setTimeout(function(){

    $main.style.display="none";
    $menu2.style.display="block";
    $img.style.display="block";
    $submenu.style.display = "none";

    $menump3.loop= true;
    $menump3.play();

    $juegomp3.loop= false;
    $juegomp3.pause();

    contadormoneda = 0;
    vida = 3;
    $ninja.x=30;
    $ninja.y=30;
    $ninja.style.marginLeft = $ninja.x + "px";
    $ninja.style.marginTop = $ninja.y + "px";

    if (nivel === 1) {
      frame=1;
      $frame1.style.display = "block";
      contadormoneda=0;
      score = 0;
      $ninja.x=30;
      $ninja.y=30;
      $ninja.style.marginLeft = $ninja.x + "px";
      $ninja.style.marginTop = $ninja.y + "px";
    }else{
      frame = 4;
      $frame4.style.display = "block";
      contadormoneda=0;
      score = 0;
      $ninja.x=30;
      $ninja.y=30;
      $ninja.style.marginLeft = $ninja.x + "px";
      $ninja.style.marginTop = $ninja.y + "px";
    }

    const $moverop = setInterval(function(){
      $retroceso.play();
      $opciones2.x -= 70;
      $opciones2.style.marginLeft = $opciones2.x + "px";

      $img.style.display="block";
      $img.x = -2300;
      $img.style.marginLeft = $img.x + "px";
      $img.style.display = "flex";
      $img.style.justifyContent = "center";

        if ($opciones2.x <= -2300) {
        $opciones2.style.display="none";
        clearInterval($moverop);

        $opciones.style.display="block";

        $boton1.x = 0;
      $boton1.style.marginLeft = $boton1.x + "px";

      $boton2.x = 0;
      $boton2.style.marginLeft = $boton2.x + "px";

      $boton3.x = 0;
      $boton3.style.marginLeft = $boton3.x + "px";

      $opciones.x = -2300;
      $opciones.style.marginLeft = $opciones.x + "px";

      $img.x = -2300;
      $img.style.marginLeft = $img.x + "px";
      $img.style.display = "flex";
      $img.style.justifyContent = "center";

      const $moverboton = setInterval(function(){ 

          $opciones.x += 50;
          $opciones.style.marginLeft = $opciones.x + "px";
          $img.x += 50;
          $img.style.marginLeft = $img.x + "px";

            if ($opciones.x >=0) {
              clearInterval($moverboton); 
              $opciones.x = 0;
              $opciones.style.marginLeft = $opciones.x + "px";
              $img.x = 0;
              $img.style.marginLeft = $img.x + "px";
            }

        }, 1);

        }
    }, 1);
  }, 500);
}
$volverm.setAttribute("onclick", "volverGa()");

const $loopScore = setInterval(function(){
          if (nivel===1 && score >= 250) {
          $submenu.style.display="block";
          $snwin.play();
        }else if (nivel===2 && score >= 500){
          $submenu.style.display="block";
          $snwin.play();
        }
},100);

setInterval(function(){
  if (vida<1) {

    const $div = document.querySelector(".submenu");
    $div.innerText = "PERDISTE";
    $submenu.style.display="block";
  }
},100);

//-------------------------------------------------------------------------------
var izquierda = null,
  derecha = null,
  saltarloop = null;
$btizquierda.addEventListener("touchstart", camizquierda, false);
$btizquierda.addEventListener("touchend", nocamizquierda, false);

$btderecha.addEventListener("touchstart", camderecha, false);
$btderecha.addEventListener("touchend", nocamderecha, false);

$btsaltar.addEventListener("touchstart", loopsaltar, false);
$btsaltar.addEventListener("touchend", nosaltar, false);

$btatacar.addEventListener("touchstart", Kunai, false);
$btatacar.addEventListener("touchend", nocamderecha, false);

function camizquierda() {
  izquierda = setInterval(function () {
    if ($ninja.x > 0 - $ninja.w / 2){
    console.log("izquierda");
    $ninja.style.background = 'url("img/ninja/ninja-corriendo2.gif")';
    $ninja.style.width = "60px";
    $ninja.style.height = "63px";
    $ninja.style.backgroundSize = "100%";
    $ninja.style.backgroundPosition = "center";
    $ninja.style.backgroundRepeat = "no-repeat";
    $ninja.w = 60;
    $ninja.h = 63;
    $ninja.x -= $ninja.velocidad;
    $ninja.style.marginLeft = $ninja.x + "px";

    codekey = 97;

    window.mousedown = function (e) {
      $ninja.style.width = "38px";
      $ninja.style.height = "68px";
      $ninja.style.background = 'url("img/ninja/ninja-parado2.gif")';
      $ninja.style.backgroundSize = "100%";
      $ninja.style.backgroundPosition = "center";
      $ninja.style.backgroundRepeat = "no-repeat";
      $ninja.w = 38;
      $ninja.h = 68;
    };
    }
  }, 50);
}

function nocamizquierda() {
  clearInterval(izquierda);
}

function camderecha() {
  derecha = setInterval(function () {
    if ($ninja.x < ancho - $ninja.w / 2) {
    console.log("derecha");

    $ninja.style.background = 'url("img/ninja/ninja-corriendo.gif")';
    $ninja.style.width = "60px";
    $ninja.style.height = "63px";
    $ninja.style.backgroundSize = "100%";
    $ninja.style.backgroundPosition = "center";
    $ninja.style.backgroundRepeat = "no-repeat";
    $ninja.w = 60;
    $ninja.h = 63;
    $ninja.x += $ninja.velocidad;
    $ninja.style.marginLeft = $ninja.x + "px";

    codekey = 100;

    window.onclick = function (e) {
      $ninja.style.width = "38px";
      $ninja.style.height = "68px";
      $ninja.style.background = 'url("img/ninja/ninja-parado.gif")';
      $ninja.style.backgroundSize = "100%";
      $ninja.style.backgroundPosition = "center";
      $ninja.style.backgroundRepeat = "no-repeat";
      $ninja.w = 38;
      $ninja.h = 68;
    };
    }
  }, 50);
}

function nocamderecha() {
  clearInterval(derecha);
}

function loopsaltar(){
  saltarloop = setInterval(function(){
    Saltar();
  },50);
}

function nosaltar(){
  clearInterval(saltarloop);
}