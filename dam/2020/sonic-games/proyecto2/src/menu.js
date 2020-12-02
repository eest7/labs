//variables principales
const $menu = document.querySelector("#menu");
const $boton1 = document.querySelector("#boton1");
const $boton2 = document.querySelector("#boton2");
const $boton3 = document.querySelector("#boton3");
const $opciones = document.querySelector("#opciones");
const $opciones2 = document.querySelector("#opciones2");
const $opciones3 = document.querySelector("#opciones3");
const $volver = document.querySelector("#volver");
const $volver2 = document.querySelector("#volver2");
const $img = document.querySelector("#img");
const $bajar = document.querySelector("#bajar");
const $subir = document.querySelector("#subir");
const $bajar2 = document.querySelector("#bajar2");
const $subir2 = document.querySelector("#subir2");
const $main2 = document.querySelector("#main");

//etiquetas de audio
const $menump3 = document.createElement("audio");
const $juegomp3 = document.createElement("audio");
const $seleccion = document.createElement("audio");
const $retroceso = document.createElement("audio");

//variables mp3
$menump3.src = "menu.mpeg";
$juegomp3.src = "juegos.mpeg";
$seleccion.src = "./mp3/seleccion.wav";
$retroceso.src = "./mp3/retroceder.wav";

//declaración de loop
$menump3.loop= true;
$juegomp3.loop= false;


//declaración de posiciones
$img.x = 0;
$img.y = 0;
$img.style.marginLeft = $img.x + "px";
$img.style.marginTop = $img.y + "px";

$img.classList.add("#img");

$boton1.x = 0;
$boton1.y = 0;
$boton1.style.marginLeft = $boton1.x + "px";
$boton1.style.marginTop = $boton1.y + "px";

$boton1.classList.add("#boton1");

$boton2.x = 0;
$boton2.y = 0;
$boton2.style.marginLeft = $boton2.x + "px";
$boton2.style.marginTop = $boton2.y + "px";

$boton2.classList.add("#boton2");

$boton3.x = 0;
$boton3.y = 0;
$boton3.style.marginLeft = $boton3.x + "px";
$boton3.style.marginTop = $boton3.y + "px";

$boton3.classList.add("#boton3");

$opciones2.x = 0;
$opciones2.y = 0;
$opciones2.style.marginLeft = $opciones2.x + "px";
$opciones2.style.marginTop = $opciones2.y + "px";

$opciones2.classList.add("op2");

$opciones3.x = 0;
$opciones3.y = 0;
$opciones3.style.marginLeft = $opciones3.x + "px";
$opciones3.style.marginTop = $opciones3.y + "px";

$opciones3.classList.add("op3");

//ejecutar música
window.onload = function(e) {
  $menump3.play();
  $juegomp3.pause();
  $menump3.volume= 1;
  $juegomp3.volume= 1;
  $seleccion.volume= 1;
  $retroceso.volume= 1;
};

//volumen

$boton1.onclick = function() { 
  $seleccion.play();

     	const $moverboton = setInterval(function(){ 

      $img.x -= 100;
      $img.style.marginLeft = $img.x + "px";

    	$boton1.x -= 50;
    	$boton1.style.marginLeft = $boton1.x + "px";

    	$boton2.x += 50;
    	$boton2.style.marginLeft = $boton2.x + "px";

    	$boton3.x += 50;
    	$boton3.style.marginLeft = $boton3.x + "px";

      	if ($boton1.x <= -1450) {
     	    clearInterval($moverboton); 
		      $menu.style.display="none";
          $main2.style.display="block";

          $menump3.loop= false;
          $menump3.pause();

          $juegomp3.loop= true;
          $juegomp3.play();
      	}

    	}, 1);
};

$boton2.onclick = function() { 
  $seleccion.play();

     	const $moverboton = setInterval(function(){ 

    	$boton1.x += 50;
    	$boton1.style.marginLeft = $boton1.x + "px";

    	$boton2.x -= 50;
    	$boton2.style.marginLeft = $boton2.x + "px";

    	$boton3.x += 50;
    	$boton3.style.marginLeft = $boton3.x + "px";

      	if ($boton2.x <= -1450) {
     	clearInterval($moverboton); 
		$opciones.style.display="none";
		$opciones2.x = -2300;
		$opciones2.style.marginLeft = $opciones2.x + "px";
		$opciones2.style.display="block";
			const $moverop = setInterval(function(){
			$opciones2.x += 70;
    		$opciones2.style.marginLeft = $opciones2.x + "px";
    		if ($opciones2.x >= 0) {
    		$opciones2.x = 0;
			$opciones2.style.marginLeft = $opciones2.x + "px";
    		clearInterval($moverop); 	
    		}
    		}, 1);
      	}

    	}, 1);
};

$boton3.onclick = function() { 
  $seleccion.play();

     	const $moverboton = setInterval(function(){ 

    	$boton1.x += 50;
    	$boton1.style.marginLeft = $boton1.x + "px";

    	$boton2.x += 50;
    	$boton2.style.marginLeft = $boton2.x + "px";

    	$boton3.x -= 50;
    	$boton3.style.marginLeft = $boton3.x + "px";

      $img.x -= 100;
      $img.style.marginLeft = $img.x + "px";

      	if ($boton3.x <= -1400) {
     	  clearInterval($moverboton); 
		    $opciones.style.display="none";
        $img.style.display="none";
        $opciones3.x = -2300;
        $opciones3.style.marginLeft = $opciones3.x + "px";
        $opciones3.style.display="block";
        const $moverop = setInterval(function(){
        $opciones3.x += 70;
        $opciones3.style.marginLeft = $opciones3.x + "px";
        if ($opciones3.x >= 0) {
        $opciones3.x = 0;
        $opciones3.style.marginLeft = $opciones3.x + "px";
        clearInterval($moverop);  
        }
        }, 1);
      	}

    	}, 1);
};

$volver.onclick = function() {

const $moverop = setInterval(function(){
$retroceso.play();
			$opciones2.x -= 70;
    	$opciones2.style.marginLeft = $opciones2.x + "px";

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

			const $moverboton = setInterval(function(){ 

    			$opciones.x += 50;
    			$opciones.style.marginLeft = $opciones.x + "px";

      			if ($opciones.x >=0) {
     			clearInterval($moverboton); 
				$opciones.x = 0;
				$opciones.style.marginLeft = $opciones.x + "px";
      			}

    		}, 1);

    		}
    }, 1);
}

$volver2.onclick = function() {

const $moverop = setInterval(function(){
$retroceso.play();

      $opciones3.x -= 70;
      $opciones3.style.marginLeft = $opciones3.x + "px";

        if ($opciones3.x <= -2300) {
        $opciones3.style.display="none";
        clearInterval($moverop);

      $img.style.display="block";
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
}

$bajar2.onclick = function() {
  $menump3.volume -= 0.1;
  $juegomp3.volume -= 0.1;

  if($menump3.volume < 0){
    $menump3.volume = 0;
    $juegomp3.volume = 0;
  }
};

$subir2.onclick = function() {
  $menump3.volume += 0.1;
  $juegomp3.volume += 0.1;

  if($menump3.volume > 1){
    $menump3.volume = 1;
    $juegomp3.volume = 1;
  }
};

$bajar.onclick = function() {
  $seleccion.volume -= 0.1;
  $seleccion.play();

  if($seleccion.volume < 0){
    $seleccion.volume = 0;
  }

  $retroceso.volume -= 0.1;

  if($retroceso.volume < 0){
    $retroceso.volume = 0;
  }
};

$subir.onclick = function() {
  $seleccion.volume += 0.1;
  $seleccion.play();

  if($seleccion.volume > 1){
    $seleccion.volume = 1;
  }
  $retroceso.volume += 0.1;

  if($retroceso.volume > 1){
    $retroceso.volume = 1;
  }
};