function initCanvas() {
  var ctx = document.getElementById("my_canvas").getContext("2d");
  var backgroundImage = new Image();
  var naveImage = new Image(); // nave
  var enemiespic1 = new Image(); // enemigo 1
  var enemiespic2 = new Image(); // enemigo 2

  // Fondo e imagen de nave
  backgroundImage.src = "images/background-pic.jpg"; // Fondo
  naveImage.src = "images/spaceship-pic.png"; // Imagen nave
  // Enemigos imagen
  enemiespic1.src = "images/enemigo1.png";
  enemiespic2.src = "images/enemigo2.png"; //Naves enemigas

  // Ancho y alto de etiqueta canvas
  var cW = ctx.canvas.width; // 700px
  var cH = ctx.canvas.height; // 600px

  // Plantilla para naves
  var enemyTemplate = function (options) {
    return {
      id: options.id || "",
      x: options.x || "",
      y: options.y || "",
      w: options.w || "",
      h: options.h || "",
      image: options.image || enemiespic1
    };
  };

  // Mismo codigo que indica donde estan cada uno de los enemigos
  var enemies = [
    new enemyTemplate({ id: "enemy1", x: 100, y: -10, w: 60, h: 60 }),
    new enemyTemplate({ id: "enemy2", x: 225, y: -10, w: 60, h: 60 }),
    new enemyTemplate({ id: "enemy3", x: 350, y: -10, w: 60, h: 60 }),
    new enemyTemplate({ id: "enemy4", x: 100, y: -80, w: 60, h: 60 }),
    new enemyTemplate({ id: "enemy5", x: 225, y: -80, w: 60, h: 60 }),
    new enemyTemplate({ id: "enemy6", x: 350, y: -80, w: 60, h: 60 }),
    new enemyTemplate({ id: "enemy7", x: 475, y: -80, w: 60, h: 60 }),
    new enemyTemplate({ id: "enemy8", x: 600, y: -80, w: 60, h: 60 }),
    new enemyTemplate({ id: "enemy9", x: 475, y: -10, w: 60, h: 60 }),
    new enemyTemplate({ id: "enemy10", x: 600, y: -10, w: 60, h: 60 }),

    // Segundo grupo de enemigos
    new enemyTemplate({
      id: "enemy11",
      x: 100,
      y: -220,
      w: 60,
      h: 60,
      image: enemiespic2
    }),
    new enemyTemplate({
      id: "enemy12",
      x: 225,
      y: -220,
      w: 60,
      h: 60,
      image: enemiespic2
    }),
    new enemyTemplate({
      id: "enemy13",
      x: 350,
      y: -220,
      w: 60,
      h: 60,
      image: enemiespic2
    }),
    new enemyTemplate({
      id: "enemy14",
      x: 100,
      y: -270,
      w: 60,
      h: 60,
      image: enemiespic2
    }),
    new enemyTemplate({
      id: "enemy15",
      x: 225,
      y: -270,
      w: 60,
      h: 60,
      image: enemiespic2
    }),
    new enemyTemplate({
      id: "enemy16",
      x: 350,
      y: -270,
      w: 60,
      h: 60,
      image: enemiespic2
    }),
    new enemyTemplate({
      id: "enemy17",
      x: 475,
      y: -270,
      w: 60,
      h: 60,
      image: enemiespic2
    }),
    new enemyTemplate({
      id: "enemy18",
      x: 600,
      y: -270,
      w: 60,
      h: 60,
      image: enemiespic2
    }),
    new enemyTemplate({
      id: "enemy19",
      x: 475,
      y: -200,
      w: 60,
      h: 60,
      image: enemiespic2
    }),
    new enemyTemplate({
      id: "enemy20",
      x: 600,
      y: -200,
      w: 60,
      h: 60,
      image: enemiespic2
    })
  ];

  // Esto permite renderizar más enemigos sin necesidad de una función por conjunto de enemigos.
  // Esto también obliga a los enemigos a comprobar si están golpeando al jugador.
  var renderEnemies = function (enemyList) {
    for (var i = 0; i < enemyList.length; i++) {
      console.log(enemyList[i]);
      ctx.drawImage(
        enemyList[i].image,
        enemyList[i].x,
        (enemyList[i].y += 0.5),
        enemyList[i].w,
        enemyList[i].h
      );
      // Detecta cuando los barcos alcanzan un nivel inferior
      launcher.hitDetectLowerLevel(enemyList[i]);
    }
  };

  function Launcher() {
    // ubicación de las balas
    (this.y = 500),
      (this.x = cW * 0.5 - 25),
      (this.w = 100),
      (this.h = 100),
      this.direccion,
      (this.bg = "white"), // color de bala
      (this.misiles = []);

    // Si desea utilizar diferentes fuentes o mensajes para el jugador que pierde, puede cambiarlo en consecuencia.
    this.gameStatus = {
      over: false,
      message: "",
      fillStyle: "red",
      font: "italic bold 36px Arial, sans-serif"
    };

    this.render = function () {
      if (this.direccion === "left") {
        this.x -= 5;
      } else if (this.direccion === "right") {
        this.x += 5;
      } else if (this.direccion === "downArrow") {
        this.y += 5;
      } else if (this.direccion === "upArrow") {
        this.y -= 5;
      }
      ctx.fillStyle = this.bg;
      ctx.drawImage(backgroundImage, 10, 10); // imagen de fondo
      ctx.drawImage(naveImage, this.x, this.y, 100, 90); // Necesitamos asegurarnos de que la nave espacial esté en la misma ubicación que las balas.

      for (var i = 0; i < this.misiles.length; i++) {
        var m = this.misiles[i];
        ctx.fillRect(m.x, (m.y -= 5), m.w, m.h); // dirección de la bala
        this.hitDetect(this.misiles[i], i);
        if (m.y <= 0) {
          // Si un misil sobrepasa los límites del lienzo, retírelo.
          this.misiles.splice(i, 1); // empalme ese misil de la matriz de misiles
        }
      }
      // Esto pasa si ganas
      if (enemies.length === 0) {
        clearInterval(animateInterval); // Detener el bucle de animación del juego
        ctx.fillStyle = "yellow";
        ctx.font = this.gameStatus.font;
        ctx.fillText("You win!", cW * 0.5 - 80, 50);
      }
    };
    // Detectar impacto de bullet (bala)
    this.hitDetect = function (m, mi) {
      console.log("crush");
      for (var i = 0; i < enemies.length; i++) {
        var e = enemies[i];
        if (
          m.x + m.w >= e.x &&
          m.x <= e.x + e.w &&
          m.y >= e.y &&
          m.y <= e.y + e.h
        ) {
          this.misiles.splice(this.misiles[mi], 1); // Retire el misil
          enemies.splice(i, 1); // Eliminar al enemigo que el misil golpeo
          document.querySelector(".barra").innerHTML =
            "Destroyed " + e.id + " ";
        }
      }
    };
    // Preguntar a la nave del jugador si un enemigo ha pasado o ha golpeado la nave del jugador
    this.hitDetectLowerLevel = function (enemy) {
      // Si la ubicación del barco es superior a 550, sabemos que pasó el nivel inferior
      if (enemy.y > 550) {
        this.gameStatus.over = true;
        this.gameStatus.message = "Enemy(s) have passed!";
      }
      // Esto detecta un choque de la nave con enemigos
      //console.log(this);
      // this.y -> dónde está la ubicación de la nave espacial
      if (enemy.id === "enemy3") {
        //console.log(this.y);
        console.log(this.x);
      }
      // a) If enemy y is greater than this.y - 25 => then we know there's a collision
      // b) If enemy x is gless than this.x + 45 && enemy x > this.x - 45 then we know theres a collision
      if (
        enemy.y < this.y + 25 &&
        enemy.y > this.y - 25 &&
        enemy.x < this.x + 45 &&
        enemy.x > this.x - 45
      ) {
        // Comprobando si el enemigo está a la izquierda o derecha de la nave espacial
        this.gameStatus.over = true;
        this.gameStatus.message = "You Died!";
      }

      if (this.gameStatus.over === true) {
        clearInterval(animateInterval); // Detener el bucle de animación del juego
        ctx.fillStyle = this.gameStatus.fillStyle; // establecer el color del texto
        ctx.font = this.gameStatus.font;
        // Para mostrar texto en lienzo
        ctx.fillText(this.gameStatus.message, cW * 0.5 - 80, 50); // text x , y
      }
    };
  }

  var launcher = new Launcher();
  function animate() {
    ctx.clearRect(0, 0, cW, cH);
    launcher.render();
    renderEnemies(enemies);
  }
  var animateInterval = setInterval(animate, 6);

  var left_btn = document.getElementById("left_btn");
  var right_btn = document.getElementById("right_btn");
  var fire_btn = document.getElementById("fire_btn");

  document.addEventListener("keydown", function (event) {
    if (event.keyCode == 37) {
      // flecha izquierda
      launcher.direccion = "left";
      if (launcher.x < cW * 0.2 - 130) {
        launcher.x += 0;
        launcher.direccion = "";
      }
    }
  });

  document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {
      launcher.x += 0;
      launcher.direccion = "";
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.keyCode == 39) {
      // flecha correcta
      launcher.direccion = "right";
      if (launcher.x > cW - 110) {
        launcher.x -= 0;
        launcher.direccion = "";
      }
    }
  });

  document.addEventListener("keyup", function (event) {
    if (event.keyCode == 39) {
      // flecha correcta
      launcher.x -= 0;
      launcher.direccion = "";
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.keyCode == 80) {
      // reinicia el juego
      location.reload();
    }
  });

  // botones de control
  left_btn.addEventListener("mousedown", function (event) {
    launcher.direccion = "left";
  });

  left_btn.addEventListener("mouseup", function (event) {
    launcher.direccion = "";
  });

  right_btn.addEventListener("mousedown", function (event) {
    launcher.direccion = "right";
  });

  right_btn.addEventListener("mouseup", function (event) {
    launcher.direccion = "";
  });
  // Código a continuación dispara balas (balas)
  fire_btn.addEventListener("mousedown", function (event) {
    launcher.misiles.push({
      x: launcher.x + launcher.w * 0.5,
      y: launcher.y,
      w: 3,
      h: 10
    });
  });
  // Disparo al hacer clic en el botón del espacio
  document.addEventListener("keydown", function (event) {
    if (event.keyCode == 32) {
      launcher.misiles.push({
        x: launcher.x + launcher.w * 0.5,
        y: launcher.y,
        w: 3,
        h: 10
      });
    }
  });
}

window.addEventListener("load", function (event) {
  initCanvas();
});
