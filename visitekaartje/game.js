var playerImg;
var backgroundImg;
var flagImg

var hasStarted = false;
var isJumping = false;
var doneJumping = false;

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
        pos++;
        playerImg.style.left = pos+"px";
        if( pos == 2000) clearInterval(timer);
    },25);
}

function jumpPlayer()
{
    let timerID = setInterval(function(){
        if(bottomPlayer > 290 && timeInAir < 19){
            timeInAir++;
            isJumping = true
            doneJumping = false;
            return;
        }
        
        if(timeInAir >= 10 && bottomPlayer >= 290){
            let timerDownID = setInterval(function(){
                bottomPlayer -= jumpHeight/3;
                },20)
            doneJumping = true;
        }
        
        if(bottomPlayer <= 240 && isJumping){
            doneJumping = true;
            isJumping = false;
            timeInAir = 0;
            console.log("ground")
        }

        if(!doneJumping) return;
        bottomPlayer += jumpHeight;
        playerImg.style.bottom = bottomPlayer + "px";
        isJumping = true;
    },20)
}

function changePage(){
    //location.replace("https://www.w3schools.com");
}