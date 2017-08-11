/*
to do:
@ hp < 0 -> gameOver();
@ add pause button
@ buttons hover effect
*/ 


//player control & swimming & vehicle
var gameCanvas = document.getElementById("game");
var gameCtx = gameCanvas.getContext("2d");
var miniPlayerCanvas = document.getElementById("miniPlayer");
var miniPlayerCtx = miniPlayerCanvas.getContext("2d");

var playerObj={
    x: 0,
    y: 0,
    width: 76,
    height: 143,
    vx: 0,
    vy:0,
    speed:10,
    image:playerImg,
}

var player = Object.create(playerObj);
player.x = stageW/3;
player.y = stageH/2;
var playerImg = new Image();
playerImg.addEventListener("load", loadHandler, false);
playerImg.src = "img/img_player.png";
assetsToLoad.push(playerImg);

var miniPlayer ={
    x: minimap.x + minimap.width/3,
    y: minimap.y + minimap.height/2,
    width: 21,
    height: 18,
    vx: 0,
    vy:0,
    image:miniplayerImg,
}
var miniplayerImg = new Image();
miniplayerImg.addEventListener("load", loadHandler, false);
miniplayerImg.src = "img/img_miniPlayer.png";
assetsToLoad.push(miniplayerImg);


function movePlayer(){
    if(event.keyCode==74){
        player.vx -= player.speed;
        miniPlayer.vx -= player.speed * (minimap.width/stageW);
    }
    if(event.keyCode==76){
        player.vx += player.speed;
        miniPlayer.vx += player.speed * (minimap.width/stageW);
    }
    if(event.keyCode==73){
        player.vy -= player.speed;
        miniPlayer.vy -= player.speed * (minimap.width/stageW);
    }
    if(event.keyCode==75){
        player.vy += player.speed;
        miniPlayer.vy += player.speed * (minimap.width/stageW);
    }
    player.x += player.vx;
    player.y += player.vy;
    miniPlayer.x += miniPlayer.vx;
    miniPlayer.y += miniPlayer.vy;
    renderPlayer();     
}

function resetPlayer(){
    player.vx = 0;
    player.vy = 0;
    miniPlayer.vx = 0;
    miniPlayer.vy = 0;
}

function renderPlayer(){
   
    gameCtx.clearRect(0, 0, stageW, stageH);
    gameCtx.drawImage(playerImg,player.x,player.y,player.width,player.height);
    miniPlayerCtx.clearRect(minimap.x,minimap.y,minimap.width,minimap.height);
    miniPlayerCtx.drawImage(miniplayerImg, miniPlayer.x, miniPlayer.y, miniPlayer.width, miniPlayer.height);
    
    if(miniPlayer.x <= minimap.x || miniPlayer.y <= minimap.y){;
        miniPlayerCtx.clearRect(0, 0, stageW, stageH);
    }

}