var playerImg;
var backgroundImg;

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
}

function placePlayer(){
    var src = document.getElementById("player");
    src.appendChild(playerImg);
}

function placeBackground(){
    var src = document.getElementById("background");
    src.appendChild(backgroundImg);

}

function changePage(){
    //location.replace("https://www.w3schools.com");
}