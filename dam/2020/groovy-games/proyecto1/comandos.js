window.addEventListener("load", initAudioPlayer);


document.getElementById("playbtn").onclick = function () {
	limpiaryGenerar()
};

//musica
var audio, playbtn, seek_bar;
function initAudioPlayer(){
	audio = new Audio();
	audio.src = "musica/musica.mp3";
	audio.loop = true;
	playbtn = document.getElementById("playpausebtn");
	playbtn.onclick= function(){
		playPause();
	};
	function playPause(){
		if(audio.paused){
				  audio.play();
		} 
		else {
		    audio.pause();
		}
	}


}


var inicio= false;
function limpiaryGenerar() {

	initAudioPlayer();
	var play = document.getElementById("play");
	play.parentNode.removeChild(play);

	var playbtn = document.getElementById("playbtn");
	playbtn.parentNode.removeChild(playbtn);

	var logo = document.getElementById("logo");
	logo.parentNode.removeChild(logo);

	var fondo = document.getElementById("fondo");
	fondo.parentNode.removeChild(fondo);

	var fondo = document.createElement("div");
	fondo.setAttribute("class", "fondo2");
	fondo.setAttribute("id", "fondo2");
	var element = document.getElementById("body");
	element.appendChild(fondo);
	

	var fondo = document.createElement("div");
	fondo.setAttribute("class", "musicbtn");
	fondo.setAttribute("id", "musicbtn");
	var element = document.getElementById("fondo2");
	element.appendChild(fondo);

	var fondo = document.createElement("button");
	fondo.setAttribute("id", "playpausebtn");
	var element = document.getElementById("musicbtn");
	element.appendChild(fondo);

	var fondo = document.createElement("img");
	fondo.setAttribute("src", "img/playmu.png");
	var element = document.getElementById("playpausebtn");
	element.appendChild(fondo);



	var player = document.createElement("img");
	player.setAttribute("class", "player");
	player.setAttribute("id", "player");
	player.setAttribute("src", "img/kyu/quieto.gif");
	player.setAttribute("dir", "2");
	player.style.bottom = '74';
	player.style.left = '0';
	player.style.position = 'absolute';
	player.style.width = '70';
	player.style.height = '100';
	var element = document.getElementById("fondo2");
	element.appendChild(player);

	var plata = document.createElement("div");
	plata.setAttribute("id", "plata");
	plata.style.bottom = '150';
	plata.style.left = '400';
	plata.style.width = '200';
	plata.style.height = '20';
	plata.style.background = 'red';
	plata.style.position = 'absolute';
	var element = document.getElementById("fondo2");
	element.appendChild(plata);

	var plata = document.createElement("div");
	plata.setAttribute("id", "plata1");
	plata.style.bottom = '250';
	plata.style.left = '100';
	plata.style.width = '200';
	plata.style.height = '20';
	plata.style.background = 'red';
	plata.style.position = 'absolute';
	var element = document.getElementById("fondo2");
	element.appendChild(plata);

	var enemigo = document.createElement("img");
	enemigo.setAttribute("class", "enemigo");
	enemigo.setAttribute("id", "enemigo");
	enemigo.setAttribute("src", "img/enemigo1/izquierda.gif");
	enemigo.setAttribute("dir", "1");
	enemigo.style.bottom = '74';
	enemigo.style.left = '800';
	enemigo.style.position = 'absolute';
	enemigo.style.width = '70';
	enemigo.style.height = '100';
	var element = document.getElementById("fondo2");
	element.appendChild(enemigo);

	inicio=true;

	initAudioPlayer();

	juego.iniciar();

}


var juego = {



	controles: {
		arriba: 38,
		izquierda: 37,
		derecha: 39,
		abajo: 40,
		pegar: 90
	},
	enemigo: {
		vida: 100,
		hit: false,
		muerto: false,
		caminandoder: false,
		estado: {
			saltando: false,
			hit: false,
			subiendo: false
		},
		floor: 74
	},
	personaje: {
		elemento: document.getElementById("player"),
		velocidad: 5,
		estado: {
			saltando: false,
			hit: false,
			subiendo: false,
			plataforma: false,
			golpeando: false
		},
		floor: 74,
		vida: 100
	},
	fondo: {
		backx: 0
	},
	movimientos: Array(),



	iniciar: function () {

		var sprite = 0;
		var contador = 0;
		var sprite1 = 0;
		var contador1 = 0;

		

		setInterval(function () {
			if (juego.personaje.vida > 1) {
				var player = document.getElementById("player");

				plataformas();


				

				malo();


				if (juego.movimientos[juego.controles.izquierda]) {



					if (!juego.personaje.estado.saltando || !juego.personaje.estado.pegando) {


						player.setAttribute("src", "img/kyu/" + sprite + "l.png");

						if (contador == 0 || contador == 4 || contador == 8 || contador == 12 || contador == 16 || contador == 20) {
							sprite++;
						}

						contador++;
						if (sprite > 5) {
							sprite = 0;
							contador = 0;
						}




					}

					player.setAttribute("dir", "1");


					var posicion = parseInt(player.style.left, 10);
					var velocidad = 10;

					if (posicion < 1) {
						velocidad = 0;
					}

					player.style.left = (posicion - velocidad);


				}



				if (juego.movimientos[juego.controles.derecha]) {

					var player = document.getElementById("player");


					if (!juego.personaje.estado.saltando || !juego.personaje.estado.pegando) {

						player.setAttribute("src", "img/kyu/" + sprite + ".png");

						if (contador == 0 || contador == 4 || contador == 8 || contador == 12 || contador == 16 || contador == 20) {
							sprite++;
						}
						contador++;
						if (sprite > 5) {
							sprite = 0;
							contador = 0;
						}




					}


					player.setAttribute("dir", "2");

					var posicion = parseInt(player.style.left, 10);
					var velocidad = 10;
					var back = document.getElementById("fondo2");


					player.style.left = (posicion + velocidad);

					if (parseInt(player.style.left) > 510) {
						juego.fondo.backx = (juego.fondo.backx - velocidad);

						back.style.backgroundPositionX = (juego.fondo.backx + 'px');
						player.style.left = 510;

						moverplataformas();
						moverenemigo();

					}



				}
				if (juego.movimientos[juego.controles.pegar]) {




					if (!juego.personaje.estado.saltando) {
						if (parseInt(player.getAttribute("dir")) == 1) {
							player.setAttribute("src", "img/kyu/pegarl" + sprite1 + ".png");

							juego.personaje.estado.pegando = true;

							if (contador1 == 0 || contador1 == 4 || contador1 == 8 || contador1 == 12 || contador1 == 16 || contador1 == 20) {
								sprite1++;
							}
							contador1++;
							if (sprite1 > 4) {
								sprite1 = 0;
								contador1 = 0;
							}
						}

						if (parseInt(player.getAttribute("dir")) == 2) {
							player.setAttribute("src", "img/kyu/pegar" + sprite1 + ".png");

							juego.personaje.estado.pegando = true;

							if (contador1 == 0 || contador1 == 4 || contador1 == 8 || contador1 == 12 || contador1 == 16 || contador1 == 20) {
								sprite1++;
							}
							contador1++;
							if (sprite1 > 4) {
								sprite1 = 0;
								contador1 = 0;
							}
						}


					}



				}

				if (juego.personaje.vida < 1) {
					morirpj();
					
				}
			}
		}, 30)

	},

	saltar: function () {

		var player = document.getElementById("player");

		var posicioninicial = parseInt(player.style.bottom);

		if (!juego.personaje.estado.saltando) {

			juego.personaje.estado.saltando = true;

			juego.personaje.estado.subiendo = true;

			function fntanimar() {
				setTimeout(function () {


					if (parseInt(player.style.bottom, 10) < posicioninicial + 150) {
						player.style.bottom = (parseInt(player.style.bottom, 10) + 2);

						if (parseInt(player.getAttribute("dir")) == 1) {
							player.setAttribute("src", "img/kyu/saltol.png");
						} else {
							player.setAttribute("src", "img/kyu/salto.png");
						}

						fntanimar();

					} else {
						juego.personaje.estado.subiendo = false;
						setTimeout(function () {
							ftnbajar();
						}, 80);

					}

				});


				function ftnbajar() {

					setTimeout(function () {


						if (!juego.personaje.estado.subiendo) {

							plata = document.getElementById("plata");
							plata1 = document.getElementById("plata1");


							if (parseInt(player.style.bottom) > juego.personaje.floor) {

								player.style.bottom = (parseInt(player.style.bottom) - 2);

								if (parseInt(player.getAttribute("dir")) == 1) {
									player.setAttribute("src", "img/kyu/bajarl.png");
								} else {
									player.setAttribute("src", "img/kyu/bajar.png");
								}
								ftnbajar();


								if (parseInt(player.style.bottom) == juego.personaje.floor) {

									if (parseInt(player.getAttribute("dir")) == 1) {
										player.setAttribute("src", "img/kyu/quietol.gif");
									} else {
										player.setAttribute("src", "img/kyu/quieto.gif");
									}
									juego.personaje.estado.saltando = false;
								}




							} else {

								juego.personaje.estado.saltando = false;
								floor = 74;
								ftnbajar();
							}


						} else {

						}


					});
				}
			}


			fntanimar();


		}
	}
};

document.addEventListener('keydown', function (e) {

	if (inicio) {

		juego.movimientos[e.which] = true;

		if (juego.movimientos[juego.controles.arriba]) {

			juego.saltar();

		}
		if (juego.movimientos[juego.controles.abajo]) {

			juego.personaje.estado.hit = false;

		}
	}
});

document.addEventListener('keyup', function (e) {
	if (inicio) {
		if (juego.movimientos[juego.controles.pegar]) {
			juego.personaje.estado.pegando = false;
		}
		juego.movimientos[e.which] = false;

		if (!juego.personaje.estado.saltando) {
			if (parseInt(player.getAttribute("dir")) == 1) {

				player.setAttribute("src", "img/kyu/quietol.gif");
			} else {

				player.setAttribute("src", "img/kyu/quieto.gif");
			}

		}
	}
});




function malo() {


	var player = document.getElementById("player");
	var enemy = document.getElementById("enemigo");

	if (!juego.enemigo.muerto) {
		perseguir();
		danio();
		morir();

	}

	function perseguir() {
		if (parseInt(player.style.left) > parseInt(enemy.style.left)) {

			enemy.style.left = (parseInt(enemy.style.left) + 5);
			enemy.setAttribute("dir", "2");

		} else {
			enemy.style.left = (parseInt(enemy.style.left) - 5);
			enemy.setAttribute("dir", "1");
		}
		if (!juego.enemigo.estado.saltando) {
			if (parseInt(enemy.getAttribute("dir")) == 1) {


				if (!juego.enemigo.caminandoder) {
					enemigo.setAttribute("src", "img/enemigo1/izquierda.gif");
					juego.enemigo.caminandoder = true;
				}


			}
			if (parseInt(enemy.getAttribute("dir")) == 2) {
				if (juego.enemigo.caminandoder) {
					enemigo.setAttribute("src", "img/enemigo1/derecha.gif");
					juego.enemigo.caminandoder = false;
				}

			}
		}
		if (parseInt(player.style.left) == parseInt(enemy.style.left)) {
			if (!juego.enemigo.estado.saltando) {
				if (parseInt(player.style.bottom) != parseInt(enemy.style.bottom)) {
					salto();
				}
			}


		}
	}

	function danio() {

		if (parseInt(player.style.left) + parseInt(player.style.width) > parseInt(enemy.style.left) && parseInt(player.style.left) + parseInt(player.style.width) < parseInt(enemy.style.left) + parseInt(enemy.style.width)) {
			if (parseInt(player.style.bottom) == parseInt(enemy.style.bottom)) {
				juego.enemigo.hit = true;
				if (!juego.personaje.estado.pegando) {
					console.log(juego.personaje.vida);
					juego.personaje.vida = (juego.personaje.vida - 30)
				}
				if (juego.personaje.estado.pegando) {

					juego.enemigo.vida = (juego.enemigo.vida - 35);
					console.log(juego.enemigo.vida);
					juego.personaje.estado.pegando = false;
				} else {
					juego.personaje.estado.pegando = false;
				}
			} else {
				juego.enemigo.hit = false;

			}
		}


	}

	function morir() {
		if (juego.enemigo.vida <= 0) {
			var enemy = document.getElementById("enemigo");
			enemy.parentNode.removeChild(enemy);
			juego.enemigo.muerto = true;
		}
	}




}


function salto() {


	var enemy = document.getElementById("enemigo");

	var posicioninicial = parseInt(enemy.style.bottom);

	if (!juego.enemigo.estado.saltando) {

		juego.enemigo.estado.saltando = true;

		juego.enemigo.estado.subiendo = true;

		function fntanimarene() {
			setTimeout(function () {


				if (parseInt(enemy.style.bottom, 10) < posicioninicial + 150) {
					enemy.style.bottom = (parseInt(enemy.style.bottom, 10) + 2);

					if (parseInt(enemy.getAttribute("dir")) == 1) {
						enemy.setAttribute("src", "img/enemigo1/saltol.png");
					} else {
						enemy.setAttribute("src", "img/enemigo1/salto.png");
					}

					fntanimarene();

				} else {
					juego.enemigo.estado.subiendo = false;
					setTimeout(function () {
						ftnbajarene();
					}, 80);

				}

			});


			function ftnbajarene() {

				setTimeout(function () {


					if (!juego.enemigo.estado.subiendo) {

						plata = document.getElementById("plata");
						plata1 = document.getElementById("plata1");


						if (parseInt(enemy.style.bottom) > juego.enemigo.floor) {

							enemy.style.bottom = (parseInt(enemy.style.bottom) - 2);

							if (parseInt(enemy.getAttribute("dir")) == 1) {
								enemy.setAttribute("src", "img/enemigo1/caidal.png");
							} else {
								enemy.setAttribute("src", "img/enemigo1/caida.png");
							}
							ftnbajarene();


							if (parseInt(enemy.style.bottom) == juego.enemigo.floor) {

								if (parseInt(enemy.getAttribute("dir")) == 1) {
									enemy.setAttribute("src", "img/enemigo1/izquierda.gif");
								} else {
									enemy.setAttribute("src", "img/enemigo1/derecha.gif");
								}
								juego.enemigo.estado.saltando = false;
							}




						} else {

							juego.enemigo.estado.saltando = false;
							floor = 74;
							ftnbajarene();
						}


					} else {

					}


				});
			}
		}


		fntanimarene();


	}
}





function plataformas() {
	var player = document.getElementById("player");
	var plataforma = document.getElementById("plata");
	var plataforma1 = document.getElementById("plata1");
	var enemy = document.getElementById("enemigo");
	var i = 0;


	if (parseInt(player.style.left) + parseInt(player.style.width) > parseInt(plataforma.style.left) && parseInt(player.style.left) < parseInt(plataforma.style.left) + parseInt(plataforma.style.width)) {
		if (parseInt(player.style.bottom) > parseInt(plataforma.style.bottom) && parseInt(player.style.bottom) < parseInt(plataforma.style.bottom) + 100) {
			juego.personaje.estado.hit = true;
			juego.personaje.floor = (parseInt(plataforma.style.bottom) + 20);
		}
	} else {
		if (parseInt(player.style.left) + parseInt(player.style.width) > parseInt(plataforma1.style.left) && parseInt(player.style.left) < parseInt(plataforma1.style.left) + parseInt(plataforma1.style.width)) {
			if (parseInt(player.style.bottom) > parseInt(plataforma1.style.bottom) && parseInt(player.style.bottom) < parseInt(plataforma1.style.bottom) + 100) {
				juego.personaje.estado.hit = true;
				juego.personaje.floor = (parseInt(plataforma1.style.bottom) + 20);
			}
		} else {
			juego.personaje.estado.hit = false;
			juego.personaje.floor = 74;

		}
	}





	if (!juego.enemigo.muerto) {
		if (parseInt(enemy.style.left) + parseInt(enemy.style.width) > parseInt(plataforma.style.left) && parseInt(enemy.style.left) < parseInt(plataforma.style.left) + parseInt(plataforma.style.width)) {
			if (parseInt(enemy.style.bottom) > parseInt(plataforma.style.bottom) && parseInt(enemy.style.bottom) < parseInt(plataforma.style.bottom) + 100) {
				juego.enemigo.floor = (parseInt(plataforma.style.bottom) + 20);
			}
		} else {
			if (parseInt(enemy.style.left) + parseInt(enemy.style.width) > parseInt(plataforma1.style.left) && parseInt(enemy.style.left) < parseInt(plataforma1.style.left) + parseInt(plataforma1.style.width)) {
				if (parseInt(enemy.style.bottom) > parseInt(plataforma1.style.bottom) && parseInt(enemy.style.bottom) < parseInt(plataforma1.style.bottom) + 100) {
					juego.enemigo.floor = (parseInt(plataforma1.style.bottom) + 20);
				}
			} else {
				juego.enemigo.floor = 74;

			}
		}
	}
}


function moverplataformas() {
	var plataforma = document.getElementById("plata");
	var plataforma1 = document.getElementById("plata1");

	if (parseInt(plataforma.style.left) + parseInt(plataforma.style.width) > 0) {
		plataforma.style.left = (parseInt(plataforma.style.left) - 5);
	}

	if (parseInt(plataforma1.style.left) + parseInt(plataforma1.style.width) > 0) {
		plataforma1.style.left = (parseInt(plataforma1.style.left) - 5);
	}
}



function moverenemigo() {
	if (!juego.enemigo.muerto) {
		var enemy = document.getElementById("enemigo");

		enemy.style.left = (parseInt(enemy.style.left) - 10);
	}

}


function morirpj() {

	inicio=false;
	var plata1 = document.getElementById("plata1");
	plata1.parentNode.removeChild(plata1);

	var plata = document.getElementById("plata");
	plata.parentNode.removeChild(plata);

	var enemigo = document.getElementById("enemigo");
	enemigo.parentNode.removeChild(enemigo);

	var player = document.getElementById("player");
	player.parentNode.removeChild(player);

	var fondo2 = document.getElementById("fondo2");
	fondo2.parentNode.removeChild(fondo2);



	var fondo = document.createElement("div");
	fondo.setAttribute("id", "fondo3");
	var element = document.getElementById("body");
	element.appendChild(fondo);

	var p = document.createElement("img");
	p.setAttribute("id", "gameover");
	var element = document.getElementById("body");
	p.setAttribute("src","img/defeat.png")
	element.appendChild(p);

}