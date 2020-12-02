const $window = window;
const $saltosonido = document.createElement("audio");
const $muertecallesonido = document.createElement("audio");
const $nenufarsonido = document.createElement("audio");
const $muerteaguasonido = document.createElement("audio");

$saltosonido.src = "./sonidos/salto.wav";
$muertecallesonido.src = "./sonidos/muertecalle.wav";
$nenufarsonido.src = "./sonidos/nenufar.mpeg";
$muerteaguasonido.rcs = "./sonidos/muerteagua";

let score = 0;
let vida = 3;
let contadorcasa = 0;
let contadormosca = 0;

//FONDO DEL JUEGO
const $main = document.querySelector("#main");

$main.style.width = "600px";
$main.style.height = "600px";
$main.style.margin = "auto";
$main.style.backgroundColor = "#0B173B";
$main.style.background = 'url("img/mapa.png")';
$main.style.backgroundSize = "100%";
$main.style.backgroundPosition = "center";

//-------------------------------------------------------------

//PERSONAJE Y SUS ATRIBUTOS
const $personaje = document.createElement("div");

$personaje.style.width = "40px";
$personaje.style.height = "40px";
$personaje.style.backgroundColor = "gold";
$personaje.style.background = 'url("img/rana arriba.png")';
$personaje.style.backgroundSize = "100%";
$personaje.style.backgroundPosition = "center";
$personaje.style.position = "absolute";
$personaje.velocidad = 44;
$personaje.x = 275;
$personaje.y = 556;
$personaje.h = 40;
$personaje.w = 40;
$personaje.style.marginLeft = $personaje.x + "px";
$personaje.style.marginTop = $personaje.y + "px";

$main.append($personaje);
//-------------------------------------------------------------

//CREAR CAMIONES
function camion() {
  const $camion = document.createElement("div");
  const posX = 0;
  const posY = Math.floor(Math.random() * (400 - 350)) + 350;

  $camion.classList.add("camion");
  $camion.style.width = "60px";
  $camion.style.height = "30px";
  $camion.style.backgroundColor = "gold";
  $camion.style.background = 'url("img/camion.gif")';
  $camion.style.backgroundSize = "110%";
  $camion.style.backgroundPosition = "center";
  $camion.style.position = "absolute";

  $camion.velocidad = 13;
  $camion.x = posX;
  $camion.y = posY;
  $camion.h = 30;
  $camion.w = 60;
  $camion.style.marginLeft = posX + "px";
  $camion.style.marginTop = posY + "px";

  $main.append($camion);
}

// CREAR AUTOS
function crearCoche() {
  const $coche = document.createElement("div");
  $coche.classList.add("coche");
  $coche.style.width = "40px";
  $coche.style.height = "40px";
  $coche.style.backgroundColor = "red";
  $coche.style.background = 'url("img/car3.gif")';
  $coche.style.backgroundSize = "110%";
  $coche.style.backgroundPosition = "center";
  $coche.style.position = "absolute";
  $coche.velocidad = 15;
  $coche.x = 550;
  $coche.y = 490;

  const posX = 550;
  const posY = 490;
  const vel = 20;

  $coche.style.marginLeft = posX + "px";
  $coche.style.marginTop = posY + "px";

  $coche.x = posX;
  $coche.y = posY;
  $coche.vel = vel;
  $coche.h = 40;
  $coche.w = 40;

  $main.append($coche);
}

function crearpuntoextra() {
  const posY = 292;
  const posX = Math.floor(Math.random() * 590);
  const $mosca = document.createElement("div");

  $mosca.classList.add("mosca");
  $mosca.style.width = "40px";
  $mosca.style.height = "40px";
  $mosca.style.background = 'url("img/mosca.png")';
  $mosca.style.backgroundSize = "100%";
  $mosca.style.backgroundPosition = "center";
  $mosca.style.position = "absolute";

  $mosca.x = posX;
  $mosca.y = posY;
  $mosca.h = 40;
  $mosca.w = 40;
  $mosca.style.marginLeft = posX + "px";
  $mosca.style.marginTop = posY + "px";

  $main.appendChild($mosca);
}

//SCORE
function imprimirscore() {
  const $scoretext = document.createElement("h1");

  $scoretext.style.fontSize = "30px";
  $scoretext.style.color = "white";
  $scoretext.style.position = "absolute";
  $scoretext.innerText = "Score: " + score;
  $scoretext.style.paddingRight = "89px";
  $scoretext.style.alignItems = "center";
  $scoretext.x = 620;
  $scoretext.y = 0;
  $scoretext.style.marginLeft = $scoretext.x + "px";
  $scoretext.style.marginTop = $scoretext.y + "px";

  $main.appendChild($scoretext);
}

function crearvida() {
  const h2 = document.createElement("h2");

  h2.classList.add("@font-face");
  h2.innerText = "Vida: " + vida;
  h2.style.fontSize = "30px";
  h2.style.position = "absolute";
  h2.style.color = "white";
  h2.x = 620;
  h2.y = 37;
  h2.style.marginLeft = h2.x + "px";
  h2.style.marginTop = h2.y + "px";
  h2.style.zIndex = "10";
  $main.appendChild(h2);
}

//MOVIMIENTO DE PESONAJE
$window.onkeypress = function(event) {
  const keyCode = event.keyCode;

  //Letra "A" (Izquierda)
  if (keyCode === 97 && $personaje.x > 11) {
    $personaje.style.background = 'url("img/rana izquierda mov.png")';
    $personaje.x -= $personaje.velocidad;
    $personaje.style.marginLeft = $personaje.x + "px";
    $personaje.style.zIndex = "6";
    $saltosonido.play();

    window.onkeyup = function(e) {
      $personaje.style.background = 'url("img/rana izquierda.png")';
    };
  }
  //Letra "D" (Derecha)
  else if (keyCode === 100 && $personaje.x < 539) {
    $personaje.style.background = 'url("img/rana derecha mov.png")';
    $personaje.x += $personaje.velocidad;
    $personaje.style.marginLeft = $personaje.x + "px";
    $saltosonido.play();
    window.onkeyup = function(e) {
      $personaje.style.background = 'url("img/rana derecha.png")';
    };
  }
  //Letra "W" (Arriba)
  else if (keyCode === 119 && $personaje.y > 28) {
    $personaje.style.background = 'url("img/rana arriba mov.png")';
    $personaje.y -= $personaje.velocidad;
    $personaje.style.marginTop = $personaje.y + "px";
    $saltosonido.play();
    window.onkeyup = function(e) {
      $personaje.style.background = 'url("img/rana arriba.png")';
    };
  }
  //Letra "S" (Abajo)
  else if (keyCode === 115 && $personaje.y < 550) {
    $personaje.style.background = 'url("img/rana abajo mov.png")';
    $personaje.y += $personaje.velocidad;
    $personaje.style.marginTop = $personaje.y + "px";
    $saltosonido.play();

    window.onkeyup = function(e) {
      $personaje.style.background = 'url("img/rana abajo.png")';
    };
  }
};
//------------------------------------------------------------------------

//TRONCO
function creartronco() {
  const $tronco = document.createElement("div");
  const posX = -150;
  const posY = 248;

  $tronco.classList.add("tronco");
  $tronco.style.width = "150px";
  $tronco.style.height = "40px";
  $tronco.style.backgroundColor = "gold";
  $tronco.style.background = 'url("img/troncomati.gif")';
  $tronco.style.backgroundSize = "100%";
  $tronco.style.backgroundPosition = "center";
  $tronco.style.position = "absolute";

  $tronco.velocidad = 7;
  $tronco.x = posX;
  $tronco.y = posY;
  $tronco.h = 40;
  $tronco.w = 150;
  $tronco.style.marginLeft = posX + "px";
  $tronco.style.marginTop = posY + "px";

  $main.appendChild($tronco);
}

function creartortuga1() {
  const $tortuga1 = document.createElement("div");
  const posX = 610;
  const posY = 204;

  $tortuga1.classList.add("tronco2");
  $tortuga1.style.width = "40px";
  $tortuga1.style.height = "40px";
  $tortuga1.style.background = 'url("img/tortuga.gif")';
  $tortuga1.style.backgroundSize = "100%";
  $tortuga1.style.backgroundPosition = "center";
  $tortuga1.style.position = "absolute";

  $tortuga1.velocidad = 6;
  $tortuga1.x = posX;
  $tortuga1.y = posY;
  $tortuga1.h = 40;
  $tortuga1.w = 40;
  $tortuga1.style.marginLeft = posX + "px";
  $tortuga1.style.marginTop = posY + "px";

  $main.appendChild($tortuga1);
}
function creartronco3() {
  const $tronco3 = document.createElement("div");
  const posX = -150;
  const posY = 153;

  $tronco3.classList.add("tronco3");
  $tronco3.style.width = "100px";
  $tronco3.style.height = "40px";
  $tronco3.style.background = 'url("img/tronco2.gif")';
  $tronco3.style.backgroundSize = "100%";
  $tronco3.style.backgroundPosition = "center";
  $tronco3.style.position = "absolute";

  $tronco3.velocidad = 5;
  $tronco3.x = posX;
  $tronco3.y = posY;
  $tronco3.h = 40;
  $tronco3.w = 100;
  $tronco3.style.marginLeft = posX + "px";
  $tronco3.style.marginTop = posY + "px";

  $main.appendChild($tronco3);
}

function creartronco4() {
  const $tronco4 = document.createElement("div");
  const posX = -100;
  const posY = 118;

  $tronco4.classList.add("tronco4");
  $tronco4.style.width = "150px";
  $tronco4.style.height = "40px";
  $tronco4.style.background = 'url("img/troncomati.gif")';
  $tronco4.style.backgroundSize = "100%";
  $tronco4.style.backgroundPosition = "center";
  $tronco4.style.position = "absolute";

  $tronco4.velocidad = 8;
  $tronco4.x = posX;
  $tronco4.y = posY;
  $tronco4.h = 40;
  $tronco4.w = 150;
  $tronco4.style.marginLeft = posX + "px";
  $tronco4.style.marginTop = posY + "px";

  $main.appendChild($tronco4);
}

function creartortuga2() {
  const $tortuga2 = document.createElement("div");
  const posX = 560;
  const posY = 74;

  $tortuga2.classList.add("tortuga2");
  $tortuga2.style.width = "40px";
  $tortuga2.style.height = "40px";
  $tortuga2.style.background = 'url("img/tortuga.gif")';
  $tortuga2.style.backgroundSize = "100%";
  $tortuga2.style.backgroundPosition = "center";
  $tortuga2.style.position = "absolute";

  $tortuga2.velocidad = 8;
  $tortuga2.x = posX;
  $tortuga2.y = posY;
  $tortuga2.h = 40;
  $tortuga2.w = 40;
  $tortuga2.style.marginLeft = posX + "px";
  $tortuga2.style.marginTop = posY + "px";

  $main.appendChild($tortuga2);
}

//-------------------------------------------------------------

//------------------------------------------------------------------------

// APARICION DEL CAMION
const loopcami = setInterval(function() {
  camion();
  crearCoche();
}, 1000);

// APARICION DEL AUTO
const loopauto = setInterval(function() {
  creartortuga1();
  creartortuga2();
}, 1500);
// APARICION DE TROCO
const looptronco2 = setInterval(function() {
  creartronco();
  creartronco3();
}, 3000);
const looptronco = setInterval(function() {
  creartronco4();
}, 2000);

const loopmosca2 = setInterval(function() {
  while (contadormosca < 1) {
    crearpuntoextra();
    contadormosca++;
  }
}, 15000);

// COLISIONES
const loopmover = setInterval(function() {
  const $camionList = document.querySelectorAll(".camion");
  const $autoList = document.querySelectorAll(".coche");
  const $arbolList = document.querySelectorAll(".tronco");
  const $arbolList2 = document.querySelectorAll(".tronco2");
  const $arbolList3 = document.querySelectorAll(".tronco3");
  const $arbolList4 = document.querySelectorAll(".tronco4");
  const $arbolList5 = document.querySelectorAll(".tortuga2");

  for (let i = 0; i < $camionList.length; i++) {
    //$camionList[i].y -= $camionList[i].velocidad;
    $camionList[i].x += $camionList[i].velocidad;
    $camionList[i].style.marginLeft = $camionList[i].x + "px";

    if ($camionList[i].x > 540) {
      $main.removeChild($camionList[i]);
    }
    for (let j = 0; j < $camionList.length; j++) {
      if (
        $camionList[j].x <= $personaje.x + $personaje.w &&
        $camionList[j].x + $camionList[j].w >= $personaje.x &&
        $camionList[j].y <= $personaje.y + $personaje.h &&
        $camionList[j].y + $camionList[j].h >= $personaje.y
      ) {
        $muertecallesonido.play();
        const $h1 = document.querySelector("h1");
        const $h2 = document.querySelector("h2");
        vida--;
        $h2.innerText = "Vida: " + vida;

        $personaje.x = 275;
        $personaje.y = 556;
        $personaje.style.marginLeft = $personaje.x + "px";
        $personaje.style.marginTop = $personaje.y + "px";

        console.log(vida);

        if (vida < 1) {
          $h1.style.color = "white";
          $h1.x = 250;
          $h1.y = 300;
          $h1.style.marginLeft = $h1.x + "px";
          $h1.style.marginTop = $h1.y + "px";
          clearInterval(loopmosca);
          clearInterval(loopmosca2);
          clearInterval(looptronco);
          clearInterval(looptronco2);
          clearInterval(loopauto);
          clearInterval(loopcami);
          $personaje.style.display = "none";
          $h2.style.display = "none";
        }
      }
    }
  }

  for (let i = 0; i < $autoList.length; i++) {
    //$camionList[i].y -= $camionList[i].velocidad;
    $autoList[i].x -= $autoList[i].velocidad;
    $autoList[i].style.marginLeft = $autoList[i].x + "px";

    if ($autoList[i].x < 0) {
      $main.removeChild($autoList[i]);
    }
  }
  for (let z = 0; z < $autoList.length; z++) {
    if (
      $autoList[z].x <= $personaje.x + $personaje.w &&
      $autoList[z].x + $autoList[z].w >= $personaje.x &&
      $autoList[z].y <= $personaje.y + $personaje.h &&
      $autoList[z].y + $autoList[z].h >= $personaje.y
    ) {
      $muertecallesonido.play();
      const $h1 = document.querySelector("h1");
      const $h2 = document.querySelector("h2");

      vida--;
      $h2.innerText = "Vida: " + vida;

      $personaje.x = 275;
      $personaje.y = 556;
      $personaje.style.marginLeft = $personaje.x + "px";
      $personaje.style.marginTop = $personaje.y + "px";

      if (vida < 1) {
        $h1.style.color = "white";
        $h1.x = 250;
        $h1.y = 300;
        $h1.style.marginLeft = $h1.x + "px";
        $h1.style.marginTop = $h1.y + "px";
        clearInterval(loopmosca);
        clearInterval(loopmosca2);
        clearInterval(looptronco);
        clearInterval(looptronco2);
        clearInterval(loopauto);
        clearInterval(loopcami);
        $personaje.style.display = "none";
        $h2.style.display = "none";
      }
    }
  }

  for (let i = 0; i < $arbolList.length; i++) {
    //$camionList[i].y -= $camionList[i].velocidad;
    $arbolList[i].x += $arbolList[i].velocidad;
    $arbolList[i].style.marginLeft = $arbolList[i].x + "px";

    if ($arbolList[i].x > 600) {
      $main.removeChild($arbolList[i]);
    }
    for (let j = 0; j < $arbolList.length; j++) {
      if (
        $arbolList[j].x <= $personaje.x + $personaje.w &&
        $arbolList[j].x + $arbolList[j].w >= $personaje.x &&
        $arbolList[j].y <= $personaje.y + $personaje.h &&
        $arbolList[j].y + $arbolList[j].h >= $personaje.y
      ) {
        //clearInterval(loopcami);
        //clearInterval(loopmover);
        //$personaje.style.background = 'url("img/rana arriba.png")';
        $personaje.style.zIndex = "6";
        $personaje.x = $arbolList[j].x + 55;
        $personaje.style.marginLeft = $personaje.x + "px";
      }
    }
  }

  for (let i = 0; i < $arbolList2.length; i++) {
    //$camionList[i].y -= $camionList[i].velocidad;
    $arbolList2[i].x -= $arbolList2[i].velocidad;
    $arbolList2[i].style.marginLeft = $arbolList2[i].x + "px";

    if ($arbolList2[i].x < -100) {
      $main.removeChild($arbolList2[i]);
    }
    for (let j = 0; j < $arbolList2.length; j++) {
      if (
        $arbolList2[j].x <= $personaje.x + $personaje.w &&
        $arbolList2[j].x + $arbolList2[j].w >= $personaje.x &&
        $arbolList2[j].y <= $personaje.y + $personaje.h &&
        $arbolList2[j].y + $arbolList2[j].h >= $personaje.y
      ) {
        //clearInterval(loopcami);
        //clearInterval(loopmover);
        //$personaje.style.background = 'url("img/rana arriba.png")';
        $personaje.style.zIndex = "6";
        $personaje.x = $arbolList2[j].x;
        $personaje.style.marginLeft = $personaje.x + "px";
      }
    }
  }

  for (let i = 0; i < $arbolList3.length; i++) {
    //$camionList[i].y -= $camionList[i].velocidad;
    $arbolList3[i].x += $arbolList3[i].velocidad;
    $arbolList3[i].style.marginLeft = $arbolList3[i].x + "px";

    if ($arbolList3[i].x > 600) {
      $main.removeChild($arbolList3[i]);
    }
    for (let j = 0; j < $arbolList3.length; j++) {
      if (
        $arbolList3[j].x <= $personaje.x + $personaje.w &&
        $arbolList3[j].x + $arbolList3[j].w >= $personaje.x &&
        $arbolList3[j].y <= $personaje.y + $personaje.h &&
        $arbolList3[j].y + $arbolList3[j].h >= $personaje.y
      ) {
        //clearInterval(loopcami);
        //clearInterval(loopmover);
        //$personaje.style.background = 'url("img/rana arriba.png")';
        $personaje.style.zIndex = "6";
        $personaje.x = $arbolList3[j].x + 30;
        $personaje.style.marginLeft = $personaje.x + "px";
      }
    }
  }
  for (let i = 0; i < $arbolList4.length; i++) {
    //$camionList[i].y -= $camionList[i].velocidad;
    $arbolList4[i].x += $arbolList4[i].velocidad;
    $arbolList4[i].style.marginLeft = $arbolList4[i].x + "px";

    if ($arbolList4[i].x > 600) {
      $main.removeChild($arbolList4[i]);
    }
    for (let j = 0; j < $arbolList4.length; j++) {
      if (
        $arbolList4[j].x <= $personaje.x + $personaje.w &&
        $arbolList4[j].x + $arbolList4[j].w >= $personaje.x &&
        $arbolList4[j].y <= $personaje.y + $personaje.h &&
        $arbolList4[j].y + $arbolList4[j].h >= $personaje.y
      ) {
        //clearInterval(loopcami);
        //clearInterval(loopmover);
        //$personaje.style.background = 'url("img/rana arriba.png")';
        $personaje.style.zIndex = "6";
        $personaje.x = $arbolList4[j].x + 55;
        $personaje.style.marginLeft = $personaje.x + "px";
      }
    }
  }

  for (let i = 0; i < $arbolList5.length; i++) {
    //$camionList[i].y -= $camionList[i].velocidad;
    $arbolList5[i].x -= $arbolList5[i].velocidad;
    $arbolList5[i].style.marginLeft = $arbolList5[i].x + "px";

    if ($arbolList5[i].x < -100) {
      $main.removeChild($arbolList5[i]);
    }
    for (let j = 0; j < $arbolList5.length; j++) {
      if (
        $arbolList5[j].x <= $personaje.x + $personaje.w &&
        $arbolList5[j].x + $arbolList5[j].w >= $personaje.x &&
        $arbolList5[j].y <= $personaje.y + $personaje.h &&
        $arbolList5[j].y + $arbolList5[j].h >= $personaje.y
      ) {
        //clearInterval(loopcami);
        //clearInterval(loopmover);
        //$personaje.style.background = 'url("img/rana arriba.png")';
        $personaje.style.zIndex = "6";
        $personaje.x = $arbolList5[j].x;
        $personaje.style.marginLeft = $personaje.x + "px";
      }
    }
  }
}, 70);

const loopmosca = setInterval(function() {
  const $moscalist = document.querySelectorAll(".mosca");

  for (let p = 0; p < $moscalist.length; p++) {
    if (
      $moscalist[p].x <= $personaje.x + $personaje.w &&
      $moscalist[p].x + $moscalist[p].w >= $personaje.x &&
      $moscalist[p].y <= $personaje.y + $personaje.h &&
      $moscalist[p].y + $moscalist[p].h >= $personaje.y
    ) {
      $main.removeChild($moscalist[p]);
      contadormosca = 0;
      const $h1 = document.querySelector("h1");
      score += 100;
      $h1.innerText = "Score: " + score;
    }
  }
}, 10);

//-------------------------------------------------------------

// CASA DE LOS SAPOS
//--------------------CASA SAPO 1-----------------------------------------

const $casa = document.createElement("div");
$casa.classList.add("casa");
$casa.style.width = "40px";
$casa.style.height = "40px";
$casa.style.position = "absolute";
$casa.x = 22;
$casa.y = 31;
$casa.h = 40;
$casa.w = 40;
$casa.punto = 200;
$casa.style.marginLeft = $casa.x + "px";
$casa.style.marginTop = $casa.y + "px";

$main.append($casa);

const casasapo = setInterval(function() {
  const $bloqueList = document.querySelectorAll(".casa");
  for (let p = 0; p < $bloqueList.length; p++) {
    if (
      $bloqueList[p].x <= $personaje.x + $personaje.w &&
      $bloqueList[p].x + $bloqueList[p].w >= $personaje.x &&
      $bloqueList[p].y <= $personaje.y + $personaje.h &&
      $bloqueList[p].y + $bloqueList[p].h >= $personaje.y
    ) {
      $nenufarsonido.play();
      contadorcasa++;
      const $h1 = document.querySelector("h1");
      const $h2 = document.querySelector("h2");
      score += $casa.punto;
      $h1.innerText = "Score: " + score;
      $casa.style.background = 'url("img/gana.gif")';
      $personaje.x = 275;
      $personaje.y = 556;
      $personaje.style.marginLeft = $personaje.x + "px";
      $personaje.style.marginTop = $personaje.y + "px";
      if (contadorcasa >= 5) {
        $h1.style.color = "white";
        $h1.x = 250;
        $h1.y = 300;
        $h1.style.marginLeft = $h1.x + "px";
        $h1.style.marginTop = $h1.y + "px";
        clearInterval(loopmosca);
        clearInterval(loopmosca2);
        clearInterval(looptronco);
        clearInterval(looptronco2);
        clearInterval(loopauto);
        clearInterval(loopcami);
        $personaje.style.display = "none";
        $h2.style.display = "none";
      }
    }
  }
}, 10);

//--------------------CASA SAPO 2-----------------------------------------
const casasapodos = setInterval(function() {
  const $bloqueList = document.querySelectorAll(".casaDos");
  for (let p = 0; p < $bloqueList.length; p++) {
    if (
      $bloqueList[p].x <= $personaje.x + $personaje.w &&
      $bloqueList[p].x + $bloqueList[p].w >= $personaje.x &&
      $bloqueList[p].y <= $personaje.y + $personaje.h &&
      $bloqueList[p].y + $bloqueList[p].h >= $personaje.y
    ) {
      $nenufarsonido.play();
      contadorcasa++;
      const $h1 = document.querySelector("h1");
      const $h2 = document.querySelector("h2");
      score += $casa.punto;
      $h1.innerText = "Score: " + score;
      $casaDos.style.background = 'url("img/gana.gif")';
      $personaje.x = 275;
      $personaje.y = 556;
      $personaje.style.marginLeft = $personaje.x + "px";
      $personaje.style.marginTop = $personaje.y + "px";
      if (contadorcasa >= 5) {
        $h1.style.color = "white";
        $h1.x = 250;
        $h1.y = 300;
        $h1.style.marginLeft = $h1.x + "px";
        $h1.style.marginTop = $h1.y + "px";
        clearInterval(loopmosca);
        clearInterval(loopmosca2);
        clearInterval(looptronco);
        clearInterval(looptronco2);
        clearInterval(loopauto);
        clearInterval(loopcami);
        //$pantallawinner.style.display = "inline";
        $personaje.style.display = "none";
        $h2.style.display = "none";
        //alert("ganaste");
      }
    }
  }
}, 10);

const $casaDos = document.createElement("div");
$casaDos.classList.add("casaDos");
$casaDos.style.width = "40px";
$casaDos.style.height = "40px";
$casaDos.style.position = "absolute";
$casaDos.x = 152;
$casaDos.y = 31;
$casaDos.h = 40;
$casaDos.w = 40;
$casaDos.punto = 200;
$casaDos.style.marginLeft = $casaDos.x + "px";
$casaDos.style.marginTop = $casaDos.y + "px";

$main.append($casaDos);

//--------------------CASA SAPO 3-----------------------------------------
const casasapotres = setInterval(function() {
  const $bloqueList = document.querySelectorAll(".casaTres");
  for (let p = 0; p < $bloqueList.length; p++) {
    if (
      $bloqueList[p].x <= $personaje.x + $personaje.w &&
      $bloqueList[p].x + $bloqueList[p].w >= $personaje.x &&
      $bloqueList[p].y <= $personaje.y + $personaje.h &&
      $bloqueList[p].y + $bloqueList[p].h >= $personaje.y
    ) {
      $nenufarsonido.play();
      contadorcasa++;
      const $h1 = document.querySelector("h1");
      const $h2 = document.querySelector("h2");
      score += $casa.punto;
      $h1.innerText = "Score: " + score;
      $casaTres.style.background = 'url("img/gana.gif")';
      $personaje.x = 275;
      $personaje.y = 556;
      $personaje.style.marginLeft = $personaje.x + "px";
      $personaje.style.marginTop = $personaje.y + "px";
      if (contadorcasa >= 5) {
        $h1.style.color = "white";
        $h1.x = 250;
        $h1.y = 300;
        $h1.style.marginLeft = $h1.x + "px";
        $h1.style.marginTop = $h1.y + "px";
        clearInterval(loopmosca);
        clearInterval(loopmosca2);
        clearInterval(looptronco);
        clearInterval(looptronco2);
        clearInterval(loopauto);
        clearInterval(loopcami);
        $personaje.style.display = "none";
        $h2.style.display = "none";
        //alert("ganaste");
      }
    }
  }
}, 10);

const $casaTres = document.createElement("div");
$casaTres.classList.add("casaTres");
$casaTres.style.width = "40px";
$casaTres.style.height = "40px";
$casaTres.style.position = "absolute";
$casaTres.x = 280;
$casaTres.y = 31;
$casaTres.h = 40;
$casaTres.w = 40;
$casaTres.punto = 200;
$casaTres.style.marginLeft = $casaTres.x + "px";
$casaTres.style.marginTop = $casaTres.y + "px";

$main.append($casaTres);

//--------------------CASA SAPO 4-----------------------------------------
const casasapocuatro = setInterval(function() {
  const $bloqueList = document.querySelectorAll(".casaCuatro");
  for (let p = 0; p < $bloqueList.length; p++) {
    if (
      $bloqueList[p].x <= $personaje.x + $personaje.w &&
      $bloqueList[p].x + $bloqueList[p].w >= $personaje.x &&
      $bloqueList[p].y <= $personaje.y + $personaje.h &&
      $bloqueList[p].y + $bloqueList[p].h >= $personaje.y
    ) {
      $nenufarsonido.play();
      contadorcasa++;
      const $h1 = document.querySelector("h1");
      const $h2 = document.querySelector("h2");
      score += $casa.punto;
      $h1.innerText = "Score: " + score;
      $casaCuatro.style.background = 'url("img/gana.gif")';
      $personaje.x = 275;
      $personaje.y = 556;
      $personaje.style.marginLeft = $personaje.x + "px";
      $personaje.style.marginTop = $personaje.y + "px";
      if (contadorcasa >= 5) {
        $h1.style.color = "white";
        $h1.x = 250;
        $h1.y = 300;
        $h1.style.marginLeft = $h1.x + "px";
        $h1.style.marginTop = $h1.y + "px";
        clearInterval(loopmosca);
        clearInterval(loopmosca2);
        clearInterval(looptronco);
        clearInterval(looptronco2);
        clearInterval(loopauto);
        clearInterval(loopcami);
        //$pantallawinner.style.display = "inline";
        $personaje.style.display = "none";
        $h2.style.display = "none";
        //alert("ganaste");
      }
    }
  }
}, 10);

const $casaCuatro = document.createElement("div");
$casaCuatro.classList.add("casaCuatro");
$casaCuatro.style.width = "40px";
$casaCuatro.style.height = "40px";
$casaCuatro.style.position = "absolute";
$casaCuatro.x = 409;
$casaCuatro.y = 31;
$casaCuatro.h = 40;
$casaCuatro.w = 40;
$casaCuatro.punto = 200;
$casaCuatro.style.marginLeft = $casaCuatro.x + "px";
$casaCuatro.style.marginTop = $casaCuatro.y + "px";

$main.append($casaCuatro);

//--------------------CASA SAPO 5-----------------------------------------
const casasapocinco = setInterval(function() {
  const $bloqueList = document.querySelectorAll(".casaCinco");
  for (let p = 0; p < $bloqueList.length; p++) {
    if (
      $bloqueList[p].x <= $personaje.x + $personaje.w &&
      $bloqueList[p].x + $bloqueList[p].w >= $personaje.x &&
      $bloqueList[p].y <= $personaje.y + $personaje.h &&
      $bloqueList[p].y + $bloqueList[p].h >= $personaje.y
    ) {
      $nenufarsonido.play();
      contadorcasa++;
      const $h1 = document.querySelector("h1");
      const $h2 = document.querySelector("h2");
      score += $casa.punto;
      $h1.innerText = "Score: " + score;
      $casaCinco.style.background = 'url("img/gana.gif")';
      $personaje.x = 275;
      $personaje.y = 556;
      $personaje.style.marginLeft = $personaje.x + "px";
      $personaje.style.marginTop = $personaje.y + "px";
      if (contadorcasa >= 5) {
        $h1.style.color = "white";
        $h1.x = 250;
        $h1.y = 300;
        $h1.style.marginLeft = $h1.x + "px";
        $h1.style.marginTop = $h1.y + "px";
        clearInterval(loopmosca);
        clearInterval(loopmosca2);
        clearInterval(looptronco);
        clearInterval(looptronco2);
        clearInterval(loopauto);
        clearInterval(loopcami);
        $personaje.style.display = "none";
        $h2.style.display = "none";
      }
    }
  }
}, 10);

const $casaCinco = document.createElement("div");
$casaCinco.classList.add("casaCinco");
$casaCinco.style.width = "40px";
$casaCinco.style.height = "40px";
$casaCinco.style.position = "absolute";
$casaCinco.x = 538;
$casaCinco.y = 31;
$casaCinco.h = 40;
$casaCinco.w = 40;
$casaCinco.punto = 200;
$casaCinco.style.marginLeft = $casaCinco.x + "px";
$casaCinco.style.marginTop = $casaCinco.y + "px";

imprimirscore();

$main.append($casaCinco);
crearvida();
//----------------------tapatroncos---------------------------------------
function tapatroncos() {
  let $color1 = document.createElement("main");
  let $color2 = document.createElement("main");
  $color1.style.backgroundColor = "pink";
  $color1.style.width = "250px";
  $color1.style.height = "301px";
  $color1.style.position = "absolute";
  $color1.style.zIndex = "6";
  $color1.x = 600;
  $color1.y = 100;

  $color1.style.marginLeft = $color1.x + "px";
  $color1.style.marginTop = $color1.y + "px";

  $main.appendChild($color1);

  $color2.style.backgroundColor = "pink";
  $color2.style.width = "250px";
  $color2.style.height = "301px";
  $color2.style.position = "absolute";
  $color2.style.zIndex = "6";
  $color2.x = -250;
  $color2.y = 0;
  $color2.style.marginLeft = $color2.x + "px";
  $color2.style.marginTop = $color2.y + "px";

  $main.appendChild($color2);
}

tapatroncos();

//---------------------------------------------------------

const $pantallawinner = document.createElement("div");

$pantallawinner.style.width = "400px";
$pantallawinner.style.height = "200px";
$pantallawinner.style.backgroundColor = "gold";
$pantallawinner.style.position = "absolute";
$pantallawinner.style.display = "none";

$pantallawinner.x = 100;
$pantallawinner.y = 200;
$pantallawinner.style.marginLeft = $pantallawinner.x + "px";
$pantallawinner.style.marginTop = $pantallawinner.y + "px";

$main.appendChild($pantallawinner);
