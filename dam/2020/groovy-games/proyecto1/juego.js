if (parseInt(player.style.bottom,10)>parseInt(plata.style.bottom)+parseInt(plata.style.height)) {
							
								player.style.bottom=(parseInt(player.style.bottom,10)-2);

								if (parseInt(player.getAttribute("dir"))==1) {
									player.setAttribute("src","img/bajarl.png");
								}
								else{
									player.setAttribute("src","img/bajar.png");
								}
								ftnbajar();
							}
							
							
							else{
								juego.personaje.estado.saltando=false;

								if (parseInt(player.getAttribute("dir"))==1) {
									player.setAttribute("src","img/quietol.gif");
								}
								else{
									player.setAttribute("src","img/quieto.gif");
								}
								ftnbajar();

							}