var playerImg;
var backgroundImg;
var hasStarted = false;

window.onload = loadImages();

function loadImages(){
    playerImg = document.createElement("img");
    playerImg.src = "Images/googe_dino.png";
    playerImg.classList.add('playerGame');


    backgroundImg = document.createElement("img");
    backgroundImg.src = "Images/dino_google_background.png";
    backgroundImg.classList.add('fullBoxSize');
    
    placePlayer();
    placeBackground();
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

function checkInput(){

    document.addEventListener("keyup", function(event) 
    {
        if(hasStarted) return;
        if (event.keyCode === 13) {
            movementPlayer();
        }
    });

    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 32) {
            jumpPlayer();
        }
    });
}

function movementPlayer(){
    var pos = 0;
    hasStarted = true;
    timer = setInterval(function() {
        pos++;
        playerImg.style.left = pos+"px";
        if( pos == 2000) clearInterval(timer);
    },25);
}

function jumpPlayer()
{
    
}

function changePage(){
    //location.replace("https://www.w3schools.com");
}