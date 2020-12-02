//Controles de la serpiente

//Registra los eventos keydown(presionar una tecla) y controles (funcion con las teclas en especifico)
document.addEventListener("keydown", controles);
function controles(event) {
  let cod = event.keyCode; //registra la tecla presionada
  //controlando los ejes, osea no podemos retroceder en el mismo eje
  if (ejex) {
    //Arriba
    if (cod == 38) {
      //al subir desactivamos el eje"x" y activamos el eje"y"
      ydir = -tamano; // le restamos valor a la variable tamano
      xdir = 0;
      ejex = false;
      ejey = true;
      up.play();
    }
    //Abajo
    if (cod == 40) {
      //al bajar desactivamos el eje"x" y activamos el eje"y"
      ydir = +tamano; // le sumamos valor a la variable tamano
      xdir = 0;
      ejex = false;
      ejey = true;
      down.play();
    }
  }
  if (ejey) {
    //Izquierda
    if (cod == 37) {
      //al movernos de lado desactivamos el eje"y" y activamos el eje"x"
      ydir = 0;
      xdir = -tamano; // le restamos valor a la variable tamano
      ejey = false;
      ejex = true;
      left.play();
    }
    //Derecha
    if (cod == 39) {
      //al movernos de lado desactivamos el eje"y" y activamos el eje"x"
      ydir = 0;
      xdir = +tamano; // le sumamos valor a la variable tamano
      ejey = false;
      ejex = true;
      right.play();
    }
  }
}
