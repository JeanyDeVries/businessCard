var playerImg, backgroundImg, flagImg;
var obstacle1Img, obstacle2Img, obstacle3Img, obstacle4Img

var hasStarted = false;
let isJumping = false

var jumpHeight = 1;
let bottomPlayer = 240;
let timeInAir = 0;

let collisionDistance = 20;

window.onload = start();

function start(){
    loadImages();

    placePlayer();
    placeBackground();
    placeFinishFlag();
    placeObstacles();
    
    checkInput();
    setInterval(function(){   
        //Check collision every second  
        if(hasStarted)
            checkCollision();
    }, 100);
    }

function loadImages(){
    playerImg = document.createElement("img");
    playerImg.src = "Images/googe_dino.png";
    playerImg.classList.add('playerGame');


    backgroundImg = document.createElement("img");
    backgroundImg.src = "Images/dino_google_background.png";
    backgroundImg.classList.add('fullBoxSize');


    flagImg = document.createElement("img");
    flagImg.src = "Images/finishFlag.png";
    flagImg.classList.add('finishFlag');


    obstacle1Img = document.createElement("img");
    obstacle1Img.src = "Images/cacti.png";
    obstacle1Img.classList.add('obstacle1');

    obstacle2Img = document.createElement("img");
    obstacle2Img.src = "Images/cacti.png";
    obstacle2Img.classList.add('obstacle2');

    obstacle3Img = document.createElement("img");
    obstacle3Img.src = "Images/cacti.png";
    obstacle3Img.classList.add('obstacle3');

    obstacle4Img = document.createElement("img");
    obstacle4Img.src = "Images/cacti.png";
    obstacle4Img.classList.add('obstacle4');
}

function placePlayer(){
    var src = document.getElementById("player");
    src.appendChild(playerImg);
}

function placeBackground(){
    var src = document.getElementById("background");
    src.appendChild(backgroundImg);
}

function placeFinishFlag(){
    var src = document.getElementById("finish");
    src.appendChild(flagImg);
}

function placeObstacles(){
    var src1 = document.getElementById("obstacle1");
    src1.appendChild(obstacle1Img);

    var src2 = document.getElementById("obstacle2");
    src2.appendChild(obstacle2Img);

    var src3 = document.getElementById("obstacle3");
    src3.appendChild(obstacle3Img);

    var src4 = document.getElementById("obstacle4");
    src4.appendChild(obstacle4Img);
}

function checkInput(){
    document.addEventListener("keyup", function(event) 
    {
        if(hasStarted) return;
            movementPlayer();
    });

    document.addEventListener("keydown", function(event) {
        if(isJumping || !hasStarted) return;
        if (event.keyCode === 32) {
            jumpPlayer();
        }
    });
}

function movementPlayer(){
    var pos = 0;
    hasStarted = true;
    timer = setInterval(function() {
        pos += 2.6;
        playerImg.style.left = pos+"px";
        if( pos == 2000) clearInterval(timer);
    },25);
}

let startPos = vhtopx(34);
function jumpPlayer()
{
    let count = 0
    let position = startPos;
    isJumping = true

    let timerId = setInterval(function () {
      //move down
      if (count === 20) {
        clearInterval(timerId)
        let downTimerId = setInterval(function () {
          if (count === 0) {
            clearInterval(downTimerId)
            isJumping = false
          }
          position -= 5
          count--
          playerImg.style.bottom = position + 'px'
        },20)
  
      }
      //move up
      position +=5
      count++
      playerImg.style.bottom = position + 'px'
    },20)
}

function checkCollision(){
    const distanceObstacle1 = getDistanceBetweenElements(
        obstacle1Img,
        playerImg
    );
    const distanceObstacle2 = getDistanceBetweenElements(
        obstacle2Img,
        playerImg
    );
    const distanceObstacle3 = getDistanceBetweenElements(
        obstacle3Img,
        playerImg
    );
    const distanceObstacle4 = getDistanceBetweenElements(
        obstacle4Img,
        playerImg
    );
      
    if(distanceObstacle1 < collisionDistance || distanceObstacle2 < collisionDistance
        || distanceObstacle3 < collisionDistance || distanceObstacle4 < collisionDistance){
            console.log("game over")
    }
}

function getPositionAtCenter(element) {
    const {top, left, width, height} = element.getBoundingClientRect();
    return {
      x: left + width / 2,
      y: top + height / 2
    };
  }
 
 function getDistanceBetweenElements(a, b) {
   const aPosition = getPositionAtCenter(a);
   const bPosition = getPositionAtCenter(b);

   return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);  
 }

function vhtopx(vh) {
    return document.documentElement.clientHeight * (vh/100)
  }

function changePage(){
    //location.replace("https://www.w3schools.com");
}