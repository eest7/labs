//Transicion de menu al juego
$btnStart.onclick = function(event) {
  $divMenu.style.display = "none";
  $("#game-container").fadeIn(1000);
  setTimeout(function() {
    $("#logo").fadeOut(500);
    $("#aviso").fadeOut(500);
  }, 5000);
  setTimeout(function() {
    $("#game-background").fadeIn(500);
    $gameBackground = document.getElementById("game-background");
    var score = 0;
    //div score
    $scoreDiv = document.createElement("div");
    $scoreDiv.classList.add("score");
    //propiedades del background
    $gameBackground.width = 600;
    $gameBackground.height = 550;
    //propiedades de la pelota
    $ball = document.createElement("div");
    $ball.classList.add("ball");
    $ball.width = 25;
    $ball.height = 25;
    $ball.x = $gameBackground.width / 2 - $ball.width / 2;
    $ball.y = $gameBackground.height - 500;
    $ball.dx = 10;
    $ball.dy = 10;
    //propiedades de la plataforma
    $platform = document.createElement("div");
    $platform.classList.add("platform");
    $platform.width = 125;
    $platform.height = 35;
    $platform.x = $gameBackground.width / 2 - $platform.width / 2;
    $platform.y = 0;
    $platform.dx = 30;
    //propiedades de los ladrillos
    const $bricks = [],
      brickColumnCount = 9,
      brickRowCount = 10;
    let rowCount = 0,
      numRow = 9;
    //matriz con los ladrillos
    for (let r = 0; r < brickRowCount; r++) {
      $bricks[r] = [];
      for (let c = 0; c < brickColumnCount; c++) {
        $bricks[r][c] = document.createElement("div");
        $bricks[r][c].classList.add("brick");
        switch (r) {
          case 0:
          case 9:
            {
              if (c == 0 || c == 8) {
                $bricks[r][c].classList.add("brickMagenta");
                $bricks[r][c].status = 2;
              } else {
                $bricks[r][c].classList.add("brickCyan");
                $bricks[r][c].status = 1;
              }
            }
            break;
          case 1:
            {
              if (c == 0 || c == 8 || c == 3 || c == 4 || c == 5) {
                $bricks[r][c].classList.add("brickMagenta");
                $bricks[r][c].status = 2;
              } else {
                $bricks[r][c].classList.add("brickCyan");
                $bricks[r][c].status = 1;
              }
            }
            break;
          case 2:
          case 5:
          case 6:
          case 7:
            {
              if (
                c == 0 ||
                c == 8 ||
                c == 3 ||
                c == 4 ||
                c == 5 ||
                c == 2 ||
                c == 6
              ) {
                $bricks[r][c].classList.add("brickMagenta");
                $bricks[r][c].status = 2;
              } else {
                $bricks[r][c].classList.add("brickCyan");
                $bricks[r][c].status = 1;
              }
            }
            break;
          case 3:
          case 4:
          case 8: {
            if (c == 0 || c == 2 || c == 4 || c == 6 || c == 8) {
              $bricks[r][c].classList.add("brickMagenta");
              $bricks[r][c].status = 2;
            } else {
              $bricks[r][c].classList.add("brickCyan");
              $bricks[r][c].status = 1;
            }
          }
        }
        $bricks[r][c].width = 62.5;
        $bricks[r][c].height = 25;
        $bricks[r][c].marginLeft = 3.5;
        $bricks[r][c].marginBottom = 5;
        $bricks[r][c].x = 5;
        $bricks[r][c].y =
          $gameBackground.height -
          $bricks[r][c].height -
          $bricks[r][c].marginBottom;
      }
    }
    //agregamos los elementos al background
    $gameBackground.appendChild($ball);
    $gameBackground.appendChild($platform);
    let brickX = 0,
      brickY = 0;
    for (let r = 0; r < brickRowCount; r++) {
      for (c = 0; c < brickColumnCount; c++) {
        $bricks[r][c].y += brickY;
        $bricks[r][c].x += brickX;
        $bricks[r][c].style.left = $bricks[r][c].x + "px";
        $bricks[r][c].style.bottom = $bricks[r][c].y + "px";
        $gameBackground.appendChild($bricks[r][c]);
        brickX += $bricks[r][c].width + $bricks[r][c].marginLeft;
      }
      brickY -= $bricks[r][c - 1].height + $bricks[r][c - 1].marginBottom;
      brickX = 0;
    }
    //posicion de inicio de los elementos
    $ball.style.bottom = $ball.y + "px";
    $ball.style.left = $ball.x + "px";
    $platform.style.bottom = $platform.y + "px";
    $platform.style.left = $platform.x + "px";
    //funcion de movimiento de la pelota
    function ballmove() {
      $ball.x += $ball.dx;
      $ball.y += $ball.dy;
      $ball.style.bottom = $ball.y + "px";
      $ball.style.left = $ball.x + "px";
      collisionDetection();
    }
    //colocacion div instrucciones y div score
    document.getElementById("instrucciones").style.display = "block";
    document.getElementById("divScore").style.display = "block";
    let pScore = document.createElement("p");
    document.getElementById("divScore").appendChild(pScore);
    pScore.innerHTML = "" + score;
    //añade el movimiento a la pelota cuando se presiona las flechas de movimiento de la plataforma
    document.addEventListener("keydown", addInterval);
    function addInterval(event) {
      document.getElementById("instrucciones").style.display = "none";
      if (event.keyCode === 37 || event.keyCode === 39) {
        $ball.move = setInterval(ballmove, 40);
        $bricks.move = setInterval(bricksmove, 40000);
        document.removeEventListener("keydown", addInterval);
      }
    }
    //funcion que detecta la colision de la pelota
    function collisionDetection() {
      //con los bordes derecho e izquierdo
      if (
        $ball.x + $ball.dx >= $gameBackground.width - $ball.width ||
        $ball.x + $ball.dx <= 0
      ) {
        $ball.dx *= -1;
        document.getElementById("audioHit").play();
      }
      //con la plataforma y el borde superior
      if (
        $ball.y + $ball.dy >= $gameBackground.height - $ball.height ||
        ($ball.y + $ball.dy - $ball.height <= $platform.y &&
          ($platform.x <= $ball.x && $ball.x <= $platform.x + $platform.width))
      ) {
        $ball.dy *= -1;
        document.getElementById("audioHit").play();
      }
      //con el borde inferior
      if ($ball.y <= 0) {
        loseGame();
      }
      //con los ladrillos
      let $bricksList = document.querySelectorAll(".brick");
      for (let i = 0; i < $bricksList.length; i++) {
        var b = $bricksList[i];
        if (
          (($ball.y <= b.y && $ball.y >= b.y - b.height) ||
            ($ball.y - $ball.height <= b.y &&
              $ball.y - $ball.height >= b.y - b.height)) &&
          $ball.x >= b.x &&
          $ball.x <= b.x + b.width
        ) {
          $ball.dy *= -1;
          document.getElementById("audioHit").play();
          //colision con los ladrillos magenta
          if (b.classList[1] == "brickMagenta") {
            b.classList.remove("brickMagenta");
            b.classList.add("brickMagenta-roto");
            score++;
          }
          b.status -= 1;
          if (b.status == 0) {
            score++;
            $gameBackground.removeChild(b);
            delete b.height;
            delete b.width;
            delete b.x;
            delete b.y;
          }
          pScore.innerHTML = score;
          $scoreDiv.innerHTML = "<span>" + score + "</span>";
        }
        //si los ladrillos llegan a la posicion de la plataforma
        if (b.y - b.height <= $platform.height) {
          loseGame();
        }
      }
      // console.log($ball.x+" "+b.x+" "+(b.x+b.width));
      // if($ball.x+$ball.dx+$ball.width==$platform.x&&($platform.y>=$ball.y&&$ball.y>=$platform.y+$platform.height)||
      // $ball.x+$ball.dx==$platform.x+$platform.width&&($platform.y>=$ball.y&&$ball.y>=$platform.y+$platform.height)){
      //     // $ball.dy*=-1;
      //     alert();
      // }
    }
    //funcion de movimiento de la plataforma
    $platform.move = document.addEventListener("keydown", event => {
      if (
        event.keyCode === 39 &&
        $platform.x <= $gameBackground.width - $platform.width
      ) {
        $platform.x += $platform.dx;
        if (
          $platform.x + $platform.dx >
          $gameBackground.width - $platform.width
        ) {
          $platform.x = $gameBackground.width - $platform.width;
        }
      }
      if (event.keyCode === 37 && $platform.x >= 0) {
        $platform.x += -$platform.dx;
        if ($platform.x - $platform.dx < 0) {
          $platform.x = 0;
        }
      }
      $platform.style.left = $platform.x + "px";
    });
    //funcion para agregar linea de ladrillos
    function addLine() {
      let newRow = 0;
      newRow = brickRowCount + rowCount;
      if (numRow < 0) {
        numRow = 9;
      }
      $bricks[newRow] = [];
      for (let c = 0; c < brickColumnCount; c++) {
        $bricks[newRow][c] = document.createElement("div");
        $bricks[newRow][c].classList.add("brick");
        switch (numRow) {
          case 0:
          case 9:
            {
              if (c == 0 || c == 8) {
                $bricks[newRow][c].classList.add("brickMagenta");
              } else {
                $bricks[newRow][c].classList.add("brickCyan");
              }
            }
            break;
          case 1:
            {
              if (c == 0 || c == 8 || c == 3 || c == 4 || c == 5) {
                $bricks[newRow][c].classList.add("brickMagenta");
              } else {
                $bricks[newRow][c].classList.add("brickCyan");
              }
            }
            break;
          case 2:
          case 5:
          case 6:
          case 7:
            {
              if (
                c == 0 ||
                c == 8 ||
                c == 3 ||
                c == 4 ||
                c == 5 ||
                c == 2 ||
                c == 6
              ) {
                $bricks[newRow][c].classList.add("brickMagenta");
              } else {
                $bricks[newRow][c].classList.add("brickCyan");
              }
            }
            break;
          case 3:
          case 4:
          case 8: {
            if (c == 0 || c == 2 || c == 4 || c == 6 || c == 8) {
              $bricks[newRow][c].classList.add("brickMagenta");
            } else {
              $bricks[newRow][c].classList.add("brickCyan");
            }
          }
        }
        $bricks[newRow][c].classList.add("brickCyan");
        $bricks[newRow][c].width = 62.5;
        $bricks[newRow][c].height = 25;
        $bricks[newRow][c].marginLeft = 3.5;
        $bricks[newRow][c].marginBottom = 5;
        $bricks[newRow][c].status = 1;
        $bricks[newRow][c].x = 5;
        $bricks[newRow][c].y =
          $gameBackground.height -
          $bricks[newRow][c].height -
          $bricks[newRow][c].marginBottom;
      }
      let brickX = 0;
      for (let c = 0; c < brickColumnCount; c++) {
        $bricks[newRow][c].x += brickX;
        $bricks[newRow][c].style.left = $bricks[newRow][c].x + "px";
        $bricks[newRow][c].style.bottom = 520 + "px";
        $gameBackground.appendChild($bricks[newRow][c]);
        brickX += $bricks[newRow][c].width + $bricks[newRow][c].marginLeft;
      }
      rowCount++;
      numRow--;
    }
    //funcion para desplazar los ladrillos
    function bricksmove() {
      let $bricksList = document.querySelectorAll(".brick");
      for (i = 0; i < $bricksList.length; i++) {
        $bricksList[i].y -= $bricksList[i].height + $bricksList[i].marginBottom;
        $bricksList[i].style.bottom = $bricksList[i].y + "px";
      }
      addLine();
    }
    //funcion para desplegar el pop up cuando se pierde el juego
    function loseGame() {
      clearInterval($ball.move);
      clearInterval($bricks.move);
      $menuAudio.muted = true;
      if (audio == true) {
        const $defeatAudio = document.createElement("audio");
        $defeatAudio.src = "../audio/defeat_audio.mp3";
        $defeatAudio.autoplay = true;
      }
      $("#lose-game-pop").slideDown();
      textScore = document.createTextNode(score);
      document.getElementById("span-score").appendChild(textScore);
      const $btnVolverLoseGame = document.getElementById("lose-game-volver");
      $btnVolverLoseGame.onclick = function() {
        window.location.reload();
      };
    }
  }, 6000);
};
