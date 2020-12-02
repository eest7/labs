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
    this.x = 200;
    this.y = 200;
  }
  colocar1() { 
    if(this.x == 200 && this.y == 200){
      this.x = 60;
      this.y = 60;
    }
  }
  colocar2(){
    if(this.x == 60 && this.y == 60){
      this.x = 230;
      this.y = 20;
    }
  }
  colocar3(){
    if(this.x == 230 && this.y == 20){
      this.x = 80;
      this.y = 150;
    }
  }
  colocar4(){
    if(this.x == 80 && this.y == 150){
      this.x = 40;
      this.y = 130;
    }
  }
  colocar5(){
    if(this.x == 40 && this.y == 130){
      this.x = 90;
      this.y = 200;
    }
  }
  colocar6(){
    if(this.x == 90 && this.y == 200){
      this.x = 80;
      this.y = 120;
    }
  }
  colocar7(){
    if(this.x == 80 && this.y == 120){
      this.x = 30;
      this.y = 10;
    }
  }
  colocar8(){
    if(this.x == 30 && this.y == 10){
      this.x = 290;
      this.y = 290;
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
    this.x = 40;
    this.y = 40;
  }
  dibujar(ctx) {
    ctx.fillStyle = "#0000FF"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  }
}
class Pared2 extends objeto {
  constructor(x, y) {
    super(); // llama al constructor de la clase padre.
    this.x = 40;
    this.y = 50;
  }
  dibujar(ctx) {
    ctx.fillStyle = "#0000FF"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  }
}
class Pared3 extends objeto {
  constructor(x, y) {
    super(); // llama al constructor de la clase padre.
    this.x = 40;
    this.y = 60;
  }
  dibujar(ctx) {
    ctx.fillStyle = "#0000FF"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  }
}
class Pared4 extends objeto {
  constructor(x, y) {
    super(); // llama al constructor de la clase padre.
    this.x = 40;
    this.y = 70;
  }
  dibujar(ctx) {
    ctx.fillStyle = "#0000FF"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  }
}
class Pared5 extends objeto {
  constructor(x, y) {
    super(); // llama al constructor de la clase padre.
    this.x = 40;
    this.y = 80;
  }
  dibujar(ctx) {
    ctx.fillStyle = "#0000FF"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  }
}
class Pared6 extends objeto {
  constructor(x, y) {
    super(); // llama al constructor de la clase padre.
    this.x = 40;
    this.y = 90;
  }
  dibujar(ctx) {
    ctx.fillStyle = "#0000FF"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  }
}
class Pared7 extends objeto {
  constructor(x, y) {
    super(); // llama al constructor de la clase padre.
    this.x = 40;
    this.y = 100;
  }
  dibujar(ctx) {
    ctx.fillStyle = "#0000FF"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  }
}
class Pared8 extends objeto {
  constructor(x, y) {
    super(); // llama al constructor de la clase padre.
    this.x = 40;
    this.y = 110;
  }
  dibujar(ctx) {
    ctx.fillStyle = "#0000FF"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  }
}
class Pared9 extends objeto {
  constructor(x, y) {
    super(); // llama al constructor de la clase padre.
    this.x = 40;
    this.y = 120;
  }
  dibujar(ctx) {
    ctx.fillStyle = "#0000FF"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  }
}
class Pared10 extends objeto {
  constructor(x, y) {
    super(); // llama al constructor de la clase padre.
    this.x = 50;
    this.y = 80;
  }
  dibujar(ctx) {
    ctx.fillStyle = "#0000FF"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  }
}

class Pared11 extends objeto {
  constructor(x, y) {
    super(); // llama al constructor de la clase padre.
    this.x = 60;
    this.y = 80;
  }
  dibujar(ctx) {
    ctx.fillStyle = "#0000FF"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  }
}
class Pared12 extends objeto {
  constructor(x, y) {
    super(); // llama al constructor de la clase padre.
    this.x = 70;
    this.y = 80;
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
    this.y = 80;
  }
  dibujar(ctx) {
    ctx.fillStyle = "#0000FF"; // color
    ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
  }
}
  class Pared14 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 200;
      this.y = 80;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared15 extends objeto {
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
  class Pared16 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 220;
      this.y = 80;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared17 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 230;
      this.y = 80;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared18 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 240;
      this.y = 80;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
class Pared19 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 80;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared20 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 70;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
class Pared21 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
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
      this.x = 250;
      this.y = 50;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared23 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 40;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
class Pared24 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 90;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }class Pared25 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 100;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }class Pared26 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 110;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }class Pared27 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
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
      this.x = 90;
      this.y = 80;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
class Pared29 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 40;
      this.y = 200;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared30 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 40;
      this.y = 210;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared31 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 40;
      this.y = 220;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared32 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 40;
      this.y = 230;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared33 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 40;
      this.y = 240;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
class Pared34 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 40;
      this.y = 250;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared35 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 40;
      this.y = 260;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared36 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 40;
      this.y = 190;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared37 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 40;
      this.y = 180;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared38 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 200;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared39 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 210;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared40 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 220;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared41 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 230;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared42 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 240;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
class Pared43 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 250;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared44 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 260;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared45 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 190;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared46 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 250;
      this.y = 180;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared47 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 50;
      this.y = 220;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
class Pared48 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 60;
      this.y = 220;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared49 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 70;
      this.y = 220;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared50 extends objeto {
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
  class Pared51 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 90;
      this.y = 220;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  
  
  class Pared52 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 200;
      this.y = 220;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared53 extends objeto {
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
class Pared54 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 220;
      this.y = 220;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared55 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 230;
      this.y = 220;
    }
    dibujar(ctx) {
      ctx.fillStyle = "#0000FF"; // color
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano); // cuadro que va a formar la comida
    }
  }
  class Pared56 extends objeto {
    constructor(x, y) {
      super(); // llama al constructor de la clase padre.
      this.x = 240;
      this.y = 220;
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
var pared39 = new Pared39();
var pared40 = new Pared40();

var pared41 = new Pared41();
var pared42 = new Pared42();
var pared43 = new Pared43();
var pared44 = new Pared44();
var pared45 = new Pared45();

var pared46 = new Pared46();
var pared47 = new Pared47();
var pared48 = new Pared48();
var pared49 = new Pared49();
var pared50 = new Pared50();

var pared51 = new Pared51();
var pared52 = new Pared52();
var pared53 = new Pared53();
var pared54 = new Pared54();
var pared55 = new Pared55();

var pared56 = new Pared56();
/*var pared57 = new Pared57();
var pared58 = new Pared58();
var pared59 = new Pared59();
var pared60 = new Pared60();*/

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
//Fin del juego
function finDeJuego2() {
  xdir = 0;
  ydir = 0;
  ejex = true;
  ejey = true;
  cabeza = new Cola(20, 20);
  comida = new Comida();
  puntaje = 0;
  dead.play();
  alert("YOU WIN!");
}

//Colision contra la pared
function choquepared() {
  if (cabeza.x < 0 || cabeza.x > 290 || cabeza.y < 0 || cabeza.y > 290) {
    finDeJuego();
  }
}
function snakepared(){
  if(cabeza.x == 40 && cabeza.y == 40){
    finDeJuego();
  }
  if(cabeza.x == 40 && cabeza.y == 50){
    finDeJuego();
  }
  if(cabeza.x == 40 && cabeza.y == 60){
    finDeJuego();
  }
  if(cabeza.x == 40 && cabeza.y == 70){
    finDeJuego();
  }
  if(cabeza.x == 40 && cabeza.y == 80){
    finDeJuego();
  }
  //5
  if(cabeza.x == 40 && cabeza.y == 90){
    finDeJuego();
  }
  if(cabeza.x == 40 && cabeza.y == 100){
    finDeJuego();
  }
  if(cabeza.x == 40 && cabeza.y == 110){
    finDeJuego();
  }
  if(cabeza.x == 40 && cabeza.y == 120){
    finDeJuego();
  }
  if(cabeza.x == 50 && cabeza.y == 80){
    finDeJuego();
  }
  //10
  if(cabeza.x == 60 && cabeza.y == 80){
    finDeJuego();
  }
  if(cabeza.x == 70 && cabeza.y == 80){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 80){
    finDeJuego();
  }
  if(cabeza.x == 200 && cabeza.y == 80){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 80){
    finDeJuego();
  }
  //15
  if(cabeza.x == 220 && cabeza.y == 80){
    finDeJuego();
  }
  if(cabeza.x == 230 && cabeza.y == 80){
    finDeJuego();
  }
  if(cabeza.x == 240 && cabeza.y == 80){
    finDeJuego();
  }
  if(cabeza.x == 250 && cabeza.y == 80){
    finDeJuego();
  }
  if(cabeza.x == 250 && cabeza.y == 70){
    finDeJuego();
  }
  //20
  if(cabeza.x == 250 && cabeza.y == 60){
    finDeJuego();
  }
  if(cabeza.x == 250 && cabeza.y == 50){
    finDeJuego();
  }
  if(cabeza.x == 250 && cabeza.y == 40){
    finDeJuego();
  }
  if(cabeza.x == 250 && cabeza.y == 90){
    finDeJuego();
  }
  if(cabeza.x == 250 && cabeza.y == 100){
    finDeJuego();
  }
  //25
  if(cabeza.x == 250 && cabeza.y == 110){
    finDeJuego();
  }
  if(cabeza.x == 250 && cabeza.y == 120){
    finDeJuego();
  }
  if(cabeza.x == 90 && cabeza.y == 80){
    finDeJuego();
  }
  if(cabeza.x == 40 && cabeza.y == 200){
    finDeJuego();
  }
  if(cabeza.x == 40 && cabeza.y == 210){
    finDeJuego();
  }
  //30
  if(cabeza.x == 40 && cabeza.y == 220){
    finDeJuego();
  }
  if(cabeza.x == 40 && cabeza.y == 230){
    finDeJuego();
  }
  if(cabeza.x == 40 && cabeza.y == 240){
    finDeJuego();
  }
  if(cabeza.x == 40 && cabeza.y ==250){
    finDeJuego();
  }
  if(cabeza.x == 40 && cabeza.y ==260){
    finDeJuego();
  } 
  //35
  if(cabeza.x == 40 && cabeza.y ==190){
    finDeJuego();
  } 
  if(cabeza.x == 40 && cabeza.y == 180){
    finDeJuego();
  }  

  if(cabeza.x == 250 && cabeza.y == 200){
    finDeJuego();
  }
  if(cabeza.x == 250 && cabeza.y == 210){
    finDeJuego();
  }
  if(cabeza.x == 250 && cabeza.y == 220){
    finDeJuego();
  }
  //40
  if(cabeza.x == 250 && cabeza.y == 230){
    finDeJuego();
  }
  if(cabeza.x == 250 && cabeza.y == 240){
    finDeJuego();
  }
  if(cabeza.x == 250 && cabeza.y == 250){
    finDeJuego();
  }
  if(cabeza.x == 250 && cabeza.y == 260){
    finDeJuego();
  }
  if(cabeza.x == 250 && cabeza.y == 180){
    finDeJuego();
  }
  //45
  if(cabeza.x == 250 && cabeza.y == 190){
    finDeJuego();
  }

  if(cabeza.x == 50 && cabeza.y == 220){
    finDeJuego();
  }
  if(cabeza.x == 60 && cabeza.y == 220){
    finDeJuego();
  }
  if(cabeza.x == 70 && cabeza.y == 220){
    finDeJuego();
  }
  if(cabeza.x == 80 && cabeza.y == 220){
    finDeJuego();
  }
  //50
  if(cabeza.x == 90 && cabeza.y == 220){
    finDeJuego();
  }

  if(cabeza.x == 200 && cabeza.y == 220){
    finDeJuego();
  }
  if(cabeza.x == 210 && cabeza.y == 220){
    finDeJuego();
  }
  if(cabeza.x == 220 && cabeza.y == 220){
    finDeJuego();
  }
  if(cabeza.x == 230 && cabeza.y == 220){
    finDeJuego();
  }
  //55
  if(cabeza.x == 240 && cabeza.y == 220){
    finDeJuego();
  }
  if(cabeza.x == 250 && cabeza.y == 220){
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
        cabeza.meter();
        document.querySelector(".score").innerText = puntaje;
        eat.play();
        if (cabeza.choque(comida)){
          comida.colocar3();
          cabeza.meter();
          document.querySelector(".score").innerText = puntaje;
          eat.play();
          if (cabeza.choque(comida)){
            comida.colocar4();
            cabeza.meter();
            document.querySelector(".score").innerText = puntaje;
            eat.play();
            if (cabeza.choque(comida)){
              comida.colocar5();
              cabeza.meter();
              document.querySelector(".score").innerText = puntaje;
              eat.play();
              if (cabeza.choque(comida)){
                comida.colocar6();
                cabeza.meter();
                document.querySelector(".score").innerText = puntaje;
                eat.play();
                if (cabeza.choque(comida)){
                  comida.colocar7();
                  cabeza.meter();
                  document.querySelector(".score").innerText = puntaje;
                  eat.play();
                  if (cabeza.choque(comida)){
                    comida.colocar8();
                    cabeza.meter();
                    document.querySelector(".score").innerText = puntaje;
                    eat.play();
                  }
                }
              }
            }
          }
        }
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
  pared39.dibujar(ctx);
  pared40.dibujar(ctx);

  pared41.dibujar(ctx);
  pared42.dibujar(ctx);
  pared43.dibujar(ctx);
  pared44.dibujar(ctx);
  pared45.dibujar(ctx);

  pared46.dibujar(ctx);
  pared47.dibujar(ctx);
  pared48.dibujar(ctx);
  pared49.dibujar(ctx);
  pared50.dibujar(ctx);

  pared51.dibujar(ctx);
  pared52.dibujar(ctx);
  pared53.dibujar(ctx);
  pared54.dibujar(ctx);
  pared55.dibujar(ctx);

  pared56.dibujar(ctx);
}

// Funcion Principal que llamara a las otras funciones, y tambien mostrarlas(animacion)
function main() {
  choquecuerpo();
  choquepared();
  choquecomida();
  snakepared();
  dibujar();
  movimiento();
  if(puntaje==9){
  	finDeJuego2();
    location.href="game.html";
  }
}
setInterval("main()", velocidad);