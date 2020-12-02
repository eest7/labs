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
  	this.x = 90;
    this.y = 20;
	}
  colocar1() {
    if(this.x == 90 && this.y == 20){
      this.x = 160;
      this.y = 160;
    }
  }
  colocar2(){
    if(this.x == 160 && this.y == 160){
      this.x = 230;
      this.y = 20;
    }
  }
  colocar3(){
    if(this.x == 230 && this.y == 20){
      this.x = 20;
      this.y = 230;
    }
  }
  colocar4(){
    if(this.x == 20 && this.y == 230){
      this.x = 100;
      this.y = 290;
    }
  }
  colocar5(){
    if(this.x == 100 && this.y == 290){
      this.x = 40;
      this.y = 110;
    }
  }
  dibujar(ctx) {
    ctx.fillStyle = "#FF0000"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  }
}

class Pared1 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 50;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared2 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 60;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared3 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 70;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared4 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 80;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared5 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 90;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared6 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 100;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
 	}
}
class Pared7 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 110;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared8 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 120;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared9 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 130;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared10 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 140;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared11 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 150;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared12 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 160;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared13 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 170;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared14 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 80;
      this.y = 180;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared15 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 80;
      this.y = 190;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared16 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 200;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared17 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 210;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared18 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 220;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared19 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 80;
      	this.y = 230;
    }
    dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared20 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 50;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared21 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 60;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared22 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 70;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared23 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 80;
  	}
  	dibujar(ctx) {
   		ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared24 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 90;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared25 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 100;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared26 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 110;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared27 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 120;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared28 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 130;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared29 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 140;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared30 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 150;
  	}
 	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared31 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 160;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared32 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 170;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared33 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 180;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared34 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 190;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared35 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 200;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared36 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 210;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared37 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 220;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}
class Pared38 extends objeto {
    constructor(x, y) {
      	super(); // llama al constructor de la clase padre.
      	this.x = 210;
      	this.y = 230;
  	}
  	dibujar(ctx) {
    	ctx.fillStyle = "#0000FF"; // color
    	ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  	}
}


var puntaje = 0;
var cabeza = new Cola(20, 20);
var comida = new Comida();

var pared1 = new Pared1();
var pared2 = new Pared2();
var pared3 = new Pared3();
var pared4 = new Pared4();
var pared5 = new Pared5();

var pared6 = new Pared6();
var pared7 = new Pared7();
var pared8 = new Pared8();
var pared9 = new Pared9();
var pared10 = new Pared10();


var pared11 = new Pared11();
var pared12 = new Pared12();
var pared13 = new Pared13();
var pared14 = new Pared14();
var pared15 = new Pared15();

var pared16 = new Pared16();
var pared17 = new Pared17();
var pared18 = new Pared18();
var pared19 = new Pared19();
var pared20 = new Pared20();

var pared21 = new Pared21();
var pared22 = new Pared22();
var pared23 = new Pared23();
var pared24 = new Pared24();
var pared25 = new Pared25();

var pared26 = new Pared26();
var pared27 = new Pared27();
var pared28 = new Pared28();
var pared29 = new Pared29();
var pared30 = new Pared30();

var pared31 = new Pared31();
var pared32 = new Pared32();
var pared33 = new Pared33();
var pared34 = new Pared34();
var pared35 = new Pared35();

var pared36 = new Pared36();
var pared37 = new Pared37();
var pared38 = new Pared38();


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

//Colision contra los bordes del mapa
function choquepared() {
  if (cabeza.x < 0 || cabeza.x > 290 || cabeza.y < 0 || cabeza.y > 290) {
    finDeJuego();
  }
}
//Colision contra las paredes del mapa
function snakepared(){
  if(cabeza.x == 80 && cabeza.y == 50){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 60){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 70){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 80){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 90){
    finDeJuego();
  }
  //5
  if(cabeza.x == 80 && cabeza.y == 100){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 110){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 120){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 130){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 140){
    finDeJuego();
  }
  //10
  if(cabeza.x == 80 && cabeza.y == 150){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 160){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 170){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 180){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 190){
    finDeJuego();
  }
  //15
  if(cabeza.x == 80 && cabeza.y == 200){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 210){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 220){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 230){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 50){
    finDeJuego();
  }
  //20
  if(cabeza.x == 210 && cabeza.y == 60){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 70){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 80){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 90){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 100){
    finDeJuego();
  }
  //25
  if(cabeza.x == 210 && cabeza.y == 110){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 120){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 130){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 140){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 150){
    finDeJuego();
  }
  //30
  if(cabeza.x == 210 && cabeza.y == 160){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 170){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 180){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 190){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 200){
    finDeJuego();
  }
  //35
  if(cabeza.x == 210 && cabeza.y == 210){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 220){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 230){
    finDeJuego();
  }
  //38
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
//Colision contra la comida
function choquecomida(){
	if (cabeza.choque(comida)){
    	comida.colocar1();
    	cabeza.meter();
    	puntaje++;
    	document.querySelector(".score").innerText = puntaje;
    	eat.play();
      if (cabeza.choque(comida)){
        comida.colocar2();
        document.querySelector(".score").innerText = puntaje;
        eat.play();
        if (cabeza.choque(comida)){
          comida.colocar3();
          document.querySelector(".score").innerText = puntaje;
          eat.play();
          if (cabeza.choque(comida)){
            comida.colocar4();
            document.querySelector(".score").innerText = puntaje;
            eat.play();
            if (cabeza.choque(comida)){
              comida.colocar5();
              document.querySelector(".score").innerText = puntaje;
              eat.play();
            }
          }
        }
      }
  	}
}
//Puntos
function subirNivel(){
	if(puntaje==6){
    	location.href="game3.html";
		  $divMarco.classList.remove("hide");
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

  pared1.dibujar(ctx);
  pared2.dibujar(ctx);
  pared3.dibujar(ctx);
  pared4.dibujar(ctx);
  pared5.dibujar(ctx);
  pared6.dibujar(ctx);
  pared7.dibujar(ctx);
  pared8.dibujar(ctx);
  pared9.dibujar(ctx);
  pared10.dibujar(ctx);

  pared11.dibujar(ctx);
  pared12.dibujar(ctx);
  pared13.dibujar(ctx);
  pared14.dibujar(ctx);
  pared15.dibujar(ctx);
  pared16.dibujar(ctx);
  pared17.dibujar(ctx);
  pared18.dibujar(ctx);
  pared19.dibujar(ctx);
  pared20.dibujar(ctx);

  pared21.dibujar(ctx);
  pared22.dibujar(ctx);
  pared23.dibujar(ctx);
  pared24.dibujar(ctx);
  pared25.dibujar(ctx);
  pared26.dibujar(ctx);
  pared27.dibujar(ctx);
  pared28.dibujar(ctx);
  pared29.dibujar(ctx);
  pared30.dibujar(ctx);

  pared31.dibujar(ctx);
  pared32.dibujar(ctx);
  pared33.dibujar(ctx);
  pared34.dibujar(ctx);
  pared35.dibujar(ctx);
  pared36.dibujar(ctx);
  pared37.dibujar(ctx);
  pared38.dibujar(ctx);
}

// Funcion Principal que llamara a las otras funciones, y tambien mostrarlas(animacion)
function main() {
  choquecuerpo();
  choquepared();
  choquecomida();
  snakepared();
  dibujar();
  movimiento();
  subirNivel();
}
setInterval("main()", velocidad);