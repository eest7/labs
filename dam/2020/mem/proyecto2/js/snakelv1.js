var velocidad = 80;
var tamano = 10;

//Objetos del juego
class objeto {
  //metodos de detección de colisiones
  //metodo constructor
  constructor() {
    // Crea e inicializa la variable
    // le damos valor a la variable
    this.tamano = tamano;
  }
  //las colisiones las vamos a detectar diferenciando las posiciones "x" e "y"
  choque(obj) {
    // Usamos Math.abs para calcular el valor absoluto(para que no de negativo)
    var difx = Math.abs(this.x - obj.x);
    var dify = Math.abs(this.y - obj.y);
    //evaluamos la diferencia
    if (difx >= 0 && difx < tamano && dify >= 0 && dify < tamano) {
      return true;
    } else {
      return false;
    }
  }
}

class Cola extends objeto {
  //objeto de la serpiente
  //metodo constructor
  constructor(x, y) {
    super(); // llama al constructor de la clase padre.
    // Almacena el valor a las variables "x" e "y"
    this.x = x;
    this.y = y;
    this.siguiente = null; //inicializa nulo
  }
  //dibujamos la serpiente
  dibujar(ctx) {
    if (this.siguiente != null) {
      //se vuelve a dibujar, la funcion se esta llamando a si misma
      this.siguiente.dibujar(ctx);
    }
    ctx.fillStyle = "#fff"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la serpiente
  }
  setxy(x, y) {
    if (this.siguiente != null) {
      //crea cuadritos que se van siguiendo
      //la posicion anterior se va a almacenar al siguiente cuadrito
      this.siguiente.setxy(this.x, this.y);
    }
    //y despues le damos una nueva posicion
    this.x = x;
    this.y = y;
  }
  meter() {
    if (this.siguiente == null) {
      this.siguiente = new Cola(this.x, this.y);
    } else {
      this.siguiente.meter();
    }
  }
  verSiguiente() {
    return this.siguiente;
  }
}
class Comida extends objeto {
  constructor(x, y) {
    super(); // llama al constructor de la clase padre.
    this.x = x;
    this.y = y;
    this.x = this.generar();
    this.y = this.generar();
  }
  //genera posicion aleatoria de la comida
  generar() {
    var num = Math.floor(Math.random() * 29) * 10; //genera numeros randoms entre 0 y 290 (en 10 en 10)
    return num;
  }
  colocar() {
    //lo re ubica en otro lado aletoriamente
    //dar nueva posicion
    this.x = this.generar();
    this.y = this.generar();
  }
  dibujar(ctx) {
    ctx.fillStyle = "#FF0000"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  }
}

var puntaje = 0;
var cabeza = new Cola(20, 20);
var comida = new Comida();

//Con los variables boleanas permitimos habilitar o bloquear los ejes
var ejex = true;
var ejey = true;

//Estas variables son para darles direccion de movimiento
var xdir = 0;
var ydir = 0;

//Movimiento de la serpiente
function movimiento() {
  //Damos nuevos valores a la variable cabeza (x, y)
  //Obtenemos la posicion y le suma el valor de dereccion (x, y)
  var nx = cabeza.x + xdir;
  var ny = cabeza.y + ydir;
  cabeza.setxy(nx, ny);
}

//Fin del juego, reseteamos los valores
function finDeJuego() {
  xdir = 0;
  ydir = 0;
  ejex = true;
  ejey = true;
  cabeza = new Cola(20, 20);
  comida = new Comida();
  puntaje = 0;
  dead.play();
  alert("YOU LOSE.");
}
//Colision contra la pared
function choquepared() {
  if (cabeza.x < 0 || cabeza.x > 290 || cabeza.y < 0 || cabeza.y > 290) {
    finDeJuego();
  }
}

//Colision contra el cuerpo
function choquecuerpo() {
  var temp = null;
  //try catch nos permite evaluar errores
  try {
    temp = cabeza.verSiguiente().verSiguiente();
  } catch (err) {
    temp = null;
  }
  while (temp != null) {
    if (cabeza.choque(temp)) {
      //fin de juego
      finDeJuego();
    } else {
      temp = temp.verSiguiente();
    }
  }
}

// Funcion para renderizar los graficos
function dibujar() {
  // Accedemos al elemento canvas
  var canvas = document.getElementById("canvas");
  // Accedemos al contexto grafico del canvas
  var ctx = canvas.getContext("2d"); //Manipulacion del documento canvas para dibujar en el
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Cuadro de limpieza para dar el efecto de animacion(movimiento)
  // El dibujo
  cabeza.dibujar(ctx);
  comida.dibujar(ctx);
}
// Funcion Principal que llamara a las otras funciones, y tambien mostrarlas(animacion)
function main() {
  choquecuerpo();
  choquepared();
  dibujar();
  movimiento();
  if (cabeza.choque(comida)) {
    comida.colocar();
    cabeza.meter();
    puntaje++;
    document.querySelector(".score").innerText = puntaje;
    eat.play();
  }
  if(puntaje==3){
    location.href="game2.html";

    $divMarco.classList.remove("hide");
  }
}
setInterval("main()", velocidad);
