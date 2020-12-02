window.onload = function (e) {
    inicioMusica.play();
};

//audio
const risaBruja = document.createElement("audio");
const juegoMusica = document.createElement("audio");
const inicioMusica = document.createElement("audio");
const risaPerder = document.createElement("audio");
const $click = document.createElement("audio");

inicioMusica.src = "musica/musica-inicio.mp3";
risaBruja.src = "musica/risaBruja.mp3";
juegoMusica.src = "musica/musicaJuego.mp3";
risaPerder.src = "musica/risaPerder.mp3";
$click.src = "musica/click.mp3";

juegoMusica.loop = true;

//elementos inicio
fondo = document.getElementById("fondo");
logo = document.getElementById("logo");
playbtn = document.getElementById("play");
juegoStarted = false;

//elementos juego
score = document.getElementById("score");
fondoboost = document.getElementById("fondoBoost");
main = document.getElementById("main");
$boost = false;
fondoPerder = document.getElementById("fondoPerder");
btnReintentar = document.getElementById("btnReintentar");
hScore = 0;
vidas=3;
vida=document.getElementById("vida");





playbtn.onclick = function () {

    inicioMusica.pause();
    risaBruja.play();
    fondo.src = "images/info.png";
    playbtn.style.visibility = "hidden";
    logo.style.visibility = "hidden";
    btnMusica.style.visibility = "hidden";
    pregunta = setInterval(function () {
        if (risaBruja.ended && !juegoStarted) {
            juegoStarted = true;
            iniciarJuego();
            clearInterval(pregunta);
        }
    }, 1150);


}
btnMusica = document.getElementById("btnMusica");
btnMusica.onclick = function () {
    if (juegoStarted) {
        if (juegoMusica.paused && !$boost) {
            juegoMusica.play();
        } else {
            if (fondoboost.muted) {
                fondoboost.muted = false;
            } else {
                fondoboost.muted = true;
            }
            juegoMusica.pause();
        }
    } else {
        if (inicioMusica.paused) {
            inicioMusica.play();
        } else {
            inicioMusica.pause();
        }
    }
}


function iniciarJuego() {

    fondo.src = "images/fondo-juego.gif";

    juegoMusica.play();

    vida.style.visibility = "visible";
    btnMusica.style.visibility = "visible";
    
    playbtn.style.visibility = "hidden";
    logo.style.visibility = "hidden";


    score.style.visibility = "visible";

    vidas=3;
    scoreVal = 0;
    velAdic = 0;
    $perder = false;

    vida.innerHTML="♥: "+vidas;

    const itemLoop = setInterval(function () {

        crearitem();
    }, 1000);

    const itemMoverLoop = setInterval(function () {

        const $itemList = document.querySelectorAll(".item");
        for (let i = 0; i < $itemList.length; i++) {
            $itemList[i].y += $itemList[i].vel + velAdic;
            $itemList[i].style.top = $itemList[i].y + "px";
            $itemList[i].rotation += 0.5;
            $itemList[i].style.transform = "rotate(" + $itemList[i].rotation + "deg)";

            if ($itemList[i].y > fondo.height && $itemList[i].val > 0 && $itemList[i].val < 90) {
                if(vidas < 1){
                    console.log(vidas);
                    clearInterval(itemMoverLoop);
                    clearInterval(itemLoop);
                    perder();

                }else{
                    main.removeChild($itemList[i]);
                    vidas-=1;
                    vida.innerHTML="♥: "+vidas;
                }

            }
            if ($itemList[i].y > fondo.height && $itemList[i].val < 0) {
                main.removeChild($itemList[i]);
            }
            if ($itemList[i].y > fondo.height && $itemList[i].val > 80) {
                main.removeChild($itemList[i]);
            }


            $itemList[i].onmousedown = function () {
                
                    console.log(vidas);
                    $click.play();
                    if ($itemList[i].val == 100 && !$boost) {
                        boost();
                    }

                    main.removeChild($itemList[i]);
                    sumarPuntos($itemList[i].val);
                    velAdic += 0.03;
                    console.log(velAdic);
                
            }

        }
    }, 10);
}

function sumarPuntos(cantidad) {

    scoreVal = scoreVal + cantidad;
    score.innerHTML = "Score: " + scoreVal;
}

function crearitem() {
    const $item = document.createElement("div");

    posX = Math.round(Math.random() * 300);
    while (posX > parseInt(fondo.width) - 50) {
        posX = Math.round(Math.random() * 300);
    }
    const posY = -100;
    vel = 1;
    /*if ($boost) {
        vel += 1;
    }*/
    rotation = Math.round(Math.random() * 180);

    $item.classList.add("item");
    $item.style.left = posX + "px";
    $item.style.top = posY + "px";
    $item.style.position = "absolute";

    clase = Math.round(Math.random() * 9);
    switch (clase) {
        case 1:
            $item.style.backgroundImage = "url('images/murcielago.png')";
            $item.style.height = 42 + "px";
            $item.style.width = 91 + "px";
            $item.val = 5;
            break;
        case 2:
            $item.style.backgroundImage = "url('images/ataud.png')";
            $item.style.height = 106 + "px";
            $item.style.width = 48 + "px";
            $item.val = -10;
            break;
        case 3:
            $item.style.backgroundImage = "url('images/caramelo1.png')";
            $item.style.height = 50 + "px";
            $item.style.width = 87 + "px";
            $item.val = 15;
            break;
        case 4:
            $item.style.backgroundImage = "url('images/caramelo2.png')";
            $item.style.height = 50 + "px";
            $item.style.width = 80 + "px";
            $item.val = 15;
            break;
        case 5:
            $item.style.backgroundImage = "url('images/caramelo3.png')";
            $item.style.height = 50 + "px";
            $item.style.width = 95 + "px";
            $item.val = 15;
            break;
        case 6:
            $item.style.backgroundImage = "url('images/calabaza.png')";
            $item.style.height = 60 + "px";
            $item.style.width = 60 + "px";
            $item.val = 10;
            break;
        case 7:
            $item.style.backgroundImage = "url('images/gomita.png')";
            $item.style.height = 65 + "px";
            $item.style.width = 50 + "px";
            $item.val = 50;
            break;
        case 8:
            $item.style.backgroundImage = "url('images/logo.png')";
            $item.style.height = 90 + "px";
            $item.style.width = 70 + "px";
            $item.val = -20;
            break;
        case 9:
            $item.style.backgroundImage = "url('images/varita.png')";
            $item.style.height = 90 + "px";
            $item.style.width = 70 + "px";
            $item.val = 100;
            break;
        default:
            $item.style.backgroundImage = "url('images/murcielago.png')";
            $item.style.height = 42 + "px";
            $item.style.width = 91 + "px";
            $item.val = 5;
            break;

    }

    $item.style.transform = "rotate(" + rotation + "deg)";

    $item.rotation = rotation;
    $item.x = posX;
    $item.y = posY;
    $item.vel = vel;


    main.insertBefore($item, main.lastElementChild.nextSibling);
    main.appendChild($item);
}


function boost() {

    if (!juegoMusica.paused) {
        juegoMusica.pause();
        musica = 1;
    } else {
        musica = 0;
    }
    $boost = true;

    fondo.style.visibility = "hidden";
    fondoboost.style.visibility = "visible";
    fondoboost.play();


    boostStarted = false;


    pregunta = setInterval(function () {
        if (fondoboost.ended && !boostStarted) {
            boostStarted = true;

            fondo.style.visibility = "visible";
            fondoboost.style.visibility = "hidden";
            clearInterval(pregunta);

            $boost = false;


            if (musica = 1 && !$perder) {
                juegoMusica.play();
            } else {

            }
            clearInterval(crearItemsBoost);

        }
    }, 1150);
    crearItemsBoost = setInterval(function () {
        crearitem();
    }, 700);


}

function perder() {
    $perder = true;
    fondoboost.style.visibility = "hidden";
    fondo.style.visibility = "hidden";
    fondoPerder.style.visibility = "visible";
    if (scoreVal > hScore) {
        hScore = scoreVal;
        hP = document.getElementById("high");
        hP.innerHTML = "MaxScore: " + hScore;
    }
    juegoMusica.currentTime = 130;
    juegoMusica.pause();
    if ($boost) {
        fondoboost.currentTime = 70;
        clearInterval(crearItemsBoost);
    }
    const $itemList = document.querySelectorAll(".item");
    for (let i = 0; i < $itemList.length; i++) {
        main.removeChild($itemList[i]);

    }
    risaPerder.play();
    btnReintentar.onclick = function () {
        fondo.style.visibility = "visible";
        risaPerder.currentTime = 20;
        velAdic = 0;
        scoreVal = 0;
        score.innerHTML = "Score: " + scoreVal;
        fondoPerder.style.visibility = "hidden";
        iniciarJuego();
    }

}