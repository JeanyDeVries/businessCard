var playerImg;
var backgroundImg;
var flagImg

var hasStarted = false;
let isJumping = false
let gravity = 0.9

var jumpHeight = 1;
let bottomPlayer = 240;
let timeInAir = 0;

window.onload = loadImages();

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
    

    placePlayer();
    placeBackground();
    placeFinishFlag();

    
    checkInput();
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
        pos += 1.5;
        playerImg.style.left = pos+"px";
        if( pos == 2000) clearInterval(timer);
    },25);
}

let position = playerImg.style.bottom
function jumpPlayer()
{
    let count = 0
    console.log(position)
    let timerId = setInterval(function () {
      //move down
      if (count === 20) {
        clearInterval(timerId)
        let downTimerId = setInterval(function () {
          if (count === 0) {
            clearInterval(downTimerId)
            isJumping = false
          }
          position -= 2.5
          count--
          position = position * gravity
          playerImg.style.bottom = position + 'px'
        },20)
  
      }
      //move up
      position +=5
      count++
      position = position * gravity
      playerImg.style.bottom = position + 'px'
    },20)
}

function changePage(){
    //location.replace("https://www.w3schools.com");
}