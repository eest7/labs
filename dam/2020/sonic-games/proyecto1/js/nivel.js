//BACKGROUNDS
const $background = document.querySelector("#backest");
$background.classList.add("background1");

//MÚSICA
const $greenhill = document.createElement("audio");
const $dialogocomienzo = document.createElement("audio");
const $dialogoarrancando = document.createElement("audio");
const $dialogoperdiendo = document.createElement("audio");
const $aceleron = document.createElement("audio");
const $saltando = document.createElement("audio");
const $ringsonido = document.createElement("audio");
const $gameover = document.createElement("audio");
const $gameoversong = document.createElement("audio");

//MP3
$greenhill.src = "./mp3/nivel.mp3";
$dialogocomienzo.src = "./mp3/Sonic Dialogo Comienzo.mp3";
$dialogoarrancando.src = "./mp3/Sonic Dialogo Arrancando.mp3";
$aceleron.src = "./mp3/Aceleron.mp3";
$saltando.src = "./mp3/Saltando.mp3";
$ringsonido.src = "./mp3/Ring.mp3";
$gameover.src = "./mp3/Game Over.mp3";
$dialogoperdiendo.src = "./mp3/Sonic Dialogo Perdiendo.mp3";
$gameoversong.src = "./mp3/sonic-1-music-game-over.mp3";

//PERSONAJES
const $personaje = document.createElement("div");

$personaje.x = 130;
$personaje.y = 430;
$personaje.h = 180;
$personaje.w = 170;
$personaje.style.marginLeft = $personaje.x + "px";
$personaje.style.marginTop = $personaje.y + "px";

$personaje.classList.add("personajei");
$background.append($personaje);

//-------------------------------------------------------------------

$greenhill.loop= true;

window.onload = function(e) {
  $dialogocomienzo.play();
};

window.onkeypress = function(event) {
  const keyCode = event.keyCode;
  if (keyCode == 100) {

    //CAMBIAR BACKGROUNDS
    $background.classList.remove("background1");
    $background.classList.add("background2");

    //CAMBIAR PERSONAJE
    $personaje.classList.remove("personajei");
    $personaje.classList.add("personajec");
    $personaje.x = 130;
    $personaje.y = 420;
    $personaje.h = 185;
    $personaje.w = 190;
    $personaje.style.marginLeft = $personaje.x + "px";
    $personaje.style.marginTop = $personaje.y + "px";

    $dialogoarrancando.play();
    $aceleron.play();
    $greenhill.play();

      function crearRings() {
      const $ring = document.createElement("div");

      const posX = 1530;

      function numaleatorio(min,max){ 
      return Math.round(Math.random() * (max - min) + min); 
      }
      const posY = numaleatorio(50, 400);
      const vel = 10;
      $ring.classList.add("ring");
      $ring.style.marginLeft = posX + "px";
      $ring.style.marginTop = posY + "px";

      $ring.x = posX;
      $ring.y = posY;
      $ring.vel = vel;
      $ring.h = 40;
      $ring.w = 40;

      $background.appendChild($ring);
      }

      const Ringloop = setInterval(function() {
      crearRings();
    }, 1000);

    const Moverring = setInterval(function() {

      const $ringarray = document.querySelectorAll(".ring");
      for (let i = 0; i < $ringarray.length; i++) {
      $ringarray[i].x -= $ringarray[i].vel;
       $ringarray[i].style.marginLeft = $ringarray[i].x + "px";


        for (let i = 0; i < $ringarray.length; i++) 
        {

          if ($ringarray[i].x < 0) {
            $background.removeChild($ringarray[i]);
          }

          if ($ringarray[i].x < $personaje.x + $personaje.w && $ringarray[i].x + 40 > $personaje.x
                && $ringarray[i].y < $personaje.y + $personaje.h && $ringarray[i].y + 40 > $personaje.y) 
              {
                $ringsonido.play();
                $background.removeChild($ringarray[i]);
              }

        }


         }

          
    }, 7);

    function crearEnemigo1() {
      const $enemigo1 = document.createElement("div");
      const posX = 1460;
      const posY = 490;
      const vel = 10;
      $enemigo1.classList.add("enemigo1");
      $enemigo1.style.marginLeft = posX + "px";
      $enemigo1.style.marginTop = posY + "px";

      $enemigo1.x = posX;
      $enemigo1.y = posY;
      $enemigo1.vel = vel;

      $background.appendChild($enemigo1);
      }

      const enemigo1loop = setInterval(function() {
      crearEnemigo1();
    }, 3000);

    const Moverenemigo1 = setInterval(function() {

      const $enemigo1array = document.querySelectorAll(".enemigo1");
      for (let i = 0; i < $enemigo1array.length; i++) {
      $enemigo1array[i].x -= $enemigo1array[i].vel;
       $enemigo1array[i].style.marginLeft = $enemigo1array[i].x + "px";

          if ($enemigo1array[i].x < 0) {
            $background.removeChild($enemigo1array[i]);
          }

          if($enemigo1array[i].x < $personaje.x + $personaje.w && $enemigo1array[i].x + 152 > $personaje.x
            && $personaje.y + $personaje.h > $enemigo1array[i].y){
            clearInterval(Moverenemigo1);
            clearInterval(enemigo1loop);
            clearInterval(Moverring);
            clearInterval(Ringloop);
            clearInterval(Moverenemigo2);
            clearInterval(enemigo2loop);
            clearInterval(Moverring);
            clearInterval(Ringloop);
            clearInterval(Moverenemigo3);
            clearInterval(enemigo3loop);
            clearInterval(Moverring);
            clearInterval(Ringloop);
            $background.classList.remove("background2");
            $background.classList.add("background1");
            $personaje.classList.remove("personajes");
            $personaje.classList.remove("personajec");
            $personaje.classList.add("personajep");
            $gameover.play();
            $greenhill.pause();
            $dialogoperdiendo.play();
            const $perdersubir = setInterval(function(){ 
    
            $personaje.y -= 10;
            $personaje.style.marginTop = $personaje.y + "px";

              if ($personaje.y <= 0) {
              clearInterval($perdersubir);
              const $perderbajar = setInterval(function(){
              $personaje.y += 10;
              $personaje.style.marginTop = $personaje.y + "px";
                if($personaje.y >= 609){
                clearInterval($perderbajar);
                $background.removeChild($personaje);
                $gameoversong.play();
                }

                }, 7); 
              }
            }, 7);
            


          }


     }

          
    }, 7);    

    function crearEnemigo2() {
      const $enemigo2 = document.createElement("div");
      const posX = 1440;
      const posY = 505;
      const vel = 10;
      $enemigo2.classList.add("enemigo2");
      $enemigo2.style.marginLeft = posX + "px";
      $enemigo2.style.marginTop = posY + "px";

      $enemigo2.x = posX;
      $enemigo2.y = posY;
      $enemigo2.vel = vel;

      $background.appendChild($enemigo2);
      }

      const enemigo2loop = setInterval(function() {
      crearEnemigo2();
    }, 5500);

    const Moverenemigo2 = setInterval(function() {

      const $enemigo2array = document.querySelectorAll(".enemigo2");
      for (let i = 0; i < $enemigo2array.length; i++) {
      $enemigo2array[i].x -= $enemigo2array[i].vel;
       $enemigo2array[i].style.marginLeft = $enemigo2array[i].x + "px";

       for (let i = 0; i < $enemigo2array.length; i++) 
        {

          if ($enemigo2array[i].x < 0) {
          $background.removeChild($enemigo2array[i]);
          }

          if($enemigo2array[i].x < $personaje.x + $personaje.w && $enemigo2array[i].x + 152 > $personaje.x
            && $personaje.y + $personaje.h > $enemigo2array[i].y){
            clearInterval(Moverenemigo1);
            clearInterval(enemigo1loop);
            clearInterval(Moverring);
            clearInterval(Ringloop);
            clearInterval(Moverenemigo2);
            clearInterval(enemigo2loop);
            clearInterval(Moverring);
            clearInterval(Ringloop);
            clearInterval(Moverenemigo3);
            clearInterval(enemigo3loop);
            clearInterval(Moverring);
            clearInterval(Ringloop);
            $background.classList.remove("background2");
            $background.classList.add("background1");
            $personaje.classList.remove("personajes");
            $personaje.classList.remove("personajec");
            $personaje.classList.add("personajep");
            $gameover.play();
            $greenhill.pause();
            $dialogoperdiendo.play();
            const $perdersubir = setInterval(function(){ 
    
            $personaje.y -= 10;
            $personaje.style.marginTop = $personaje.y + "px";

              if ($personaje.y <= 0) {
              clearInterval($perdersubir);
              const $perderbajar = setInterval(function(){
              $personaje.y += 10;
              $personaje.style.marginTop = $personaje.y + "px";
                if($personaje.y >= 609){
                clearInterval($perderbajar);
                $background.removeChild($personaje);
                $gameoversong.play();
                }

                }, 7); 
              }
            }, 7);
            


          }

        }


     }

          
    }, 7);  

    function crearEnemigo3() {
      const $enemigo3 = document.createElement("div");
      const posX = 1460;
      const posY = 100;
      const vel = 25;
      $enemigo3.classList.add("enemigo3");
      $enemigo3.style.marginLeft = posX + "px";
      $enemigo3.style.marginTop = posY + "px";

      $enemigo3.x = posX;
      $enemigo3.y = posY;
      $enemigo3.vel = vel;

      $background.appendChild($enemigo3);
      }

      const enemigo3loop = setInterval(function() {
      crearEnemigo3();
    }, 10000);

    const Moverenemigo3 = setInterval(function() {

      const $enemigo3array = document.querySelectorAll(".enemigo3");
      for (let i = 0; i < $enemigo3array.length; i++) {
      $enemigo3array[i].x -= $enemigo3array[i].vel;
       $enemigo3array[i].style.marginLeft = $enemigo3array[i].x + "px";

       for (let i = 0; i < $enemigo3array.length; i++) 
        {

          if ($enemigo3array[i].x < 0) {
          $background.removeChild($enemigo3array[i]);
          }

          if($enemigo3array[i].x < $personaje.x + $personaje.w && $enemigo3array[i].x + 156 > $personaje.x
            && $personaje.y < $enemigo3array[i].y + 76){
            clearInterval(Moverenemigo1);
            clearInterval(enemigo1loop);
            clearInterval(Moverring);
            clearInterval(Ringloop);
            clearInterval(Moverenemigo2);
            clearInterval(enemigo2loop);
            clearInterval(Moverring);
            clearInterval(Ringloop);
            clearInterval(Moverenemigo3);
            clearInterval(enemigo3loop);
            clearInterval(Moverring);
            clearInterval(Ringloop);
            $background.classList.remove("background2");
            $background.classList.add("background1");
            $personaje.classList.remove("personajes");
            $personaje.classList.remove("personajec");
            $personaje.classList.add("personajep");
            $gameover.play();
            $greenhill.pause();
            $dialogoperdiendo.play();
            const $perdersubir = setInterval(function(){ 
    
            $personaje.y -= 10;
            $personaje.style.marginTop = $personaje.y + "px";

              if ($personaje.y <= 0) {
              clearInterval($perdersubir);
              const $perderbajar = setInterval(function(){
              $personaje.y += 10;
              $personaje.style.marginTop = $personaje.y + "px";
                if($personaje.y >= 609){
                clearInterval($perderbajar);
                $background.removeChild($personaje);
                $gameoversong.play();
                }

                }, 7); 
              }
            }, 7);
            


          }

        }

     }

          
    }, 7);

  }
  if (keyCode == 119) {

    $personaje.classList.remove("personajec");
    $personaje.classList.add("personajes");
    $personaje.h = 155;
    $personaje.w = 155;

    $saltando.play();
    const $saltar = setInterval(function(){ 
    
    $personaje.y -= 10;
    $personaje.style.marginTop = $personaje.y + "px";

      if ($personaje.y <= 50) {
      clearInterval($saltar);
      const $bajar = setInterval(function(){
      $personaje.y += 10;
      $personaje.style.marginTop = $personaje.y + "px";
        if($personaje.y >= 420){
        $personaje.classList.remove("personajes");
        $personaje.classList.add("personajec");
        $personaje.h = 185;
        $personaje.w = 190;
        clearInterval($bajar);
        }

        }, 12); 
      }
    }, 7);    
  }
};