/*
to do:
@ hp < 0 -> gameOver();
v @ add pause button
@ buttons hover effect
*/ 

var isInCar = false;
var vehicleID;
var isSwim = false;
var swimID;


//player control & swimming & vehicle
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

//vehicle image---------
var vehicleObj = {
    x: 0,
    y: 0,
    width: 185,
    height: 64,
    vx: 0,
    vy: 0,
    speed:10,
    image:carImg,
}

var vehicle = Object.create(vehicleObj);
vehicle.x = stageW/2;
vehicle.y = stageH/2;
var carImg = new Image();
carImg.addEventListener("load", loadHandler, false);
carImg.src = "img/img_vehicle.png";
assetsToLoad.push(carImg);

//swimming (goggle image)
var goggle = new Image();
goggle.addEventListener("load", loadHandler, false);
goggle.src = "img/img_goggle.png";
assetsToLoad.push(goggle);

var swimObj ={
    x : stageW/3,
    y : stageH/2,
    width: 83,
    height: 89,
    vx: 0,
    vy: 0,
    speed:10,
    image:goggle,
}

function movePlayer(){
if(!isInCar && !isSwim){
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

    if((player.x > vehicle.x && player.x < vehicle.x+vehicle.width)&&
        (vehicle.y > player.y & player.y + player.height > vehicle.y+vehicle.height)){
            isInCar = true;
            vehicleID = setInterval("showVehicleHUD()", 500);
    }
    if((player.x > 600 && player.x < 600+goggle.width)&&
        (150 > player.y & player.y + player.height > 150+vehicle.height)){
            isSwim = true;
            swimID = setInterval("swimHud()", 200);
            miniPlayer.x = minimap.x + minimap.width/3;
            miniPlayer.y = minimap.y + minimap.height/2;
    }
    renderPlayer();  
}   
}

function moveVehicle(){
    if(isInCar && !isSwim){
        if(event.keyCode==74){
            vehicle.vx -= vehicle.speed;
            miniPlayer.vx -= vehicle.speed * (minimap.width/stageW);
        }
        if(event.keyCode==76){
            vehicle.vx += vehicle.speed;
            miniPlayer.vx += vehicle.speed * (minimap.width/stageW);
        }
        if(event.keyCode==73){
            vehicle.vy -= vehicle.speed;
            miniPlayer.vy -= vehicle.speed * (minimap.width/stageW);
        }
        if(event.keyCode==75){
            vehicle.vy += vehicle.speed;
            miniPlayer.vy += vehicle.speed * (minimap.width/stageW);
        }
        vehicle.x += vehicle.vx;
        vehicle.y += vehicle.vy;
        miniPlayer.x += miniPlayer.vx;
        miniPlayer.y += miniPlayer.vy;
        renderPlayer();  
    }
}

function swim(){
    if(isSwim){
        if(event.keyCode==74){
            swimObj.vx -= swimObj.speed;
            miniPlayer.vx -= swimObj.speed * (minimap.width/stageW);
        }
        if(event.keyCode==76){
            swimObj.vx += swimObj.speed;
            miniPlayer.vx += swimObj.speed * (minimap.width/stageW);
        }
        if(event.keyCode==73){
            swimObj.vy -= swimObj.speed;
            miniPlayer.vy -= swimObj.speed * (minimap.width/stageW);
        }
        if(event.keyCode==75){
            swimObj.vy += swimObj.speed;
            miniPlayer.vy += swimObj.speed * (minimap.width/stageW);
        }
        swimObj.x += swimObj.vx;
        swimObj.y += swimObj.vy;
        miniPlayer.x += miniPlayer.vx;
        miniPlayer.y += miniPlayer.vy;
        renderPlayer();  
    }
}

function resetPlayer(){
    player.vx = 0;
    player.vy = 0;
    miniPlayer.vx = 0;
    miniPlayer.vy = 0;
    vehicle.vx = 0;
    vehicle.vy = 0;
    swimObj.vx = 0;
    swimObj.vy = 0;
}

function renderPlayer(){
    gameCtx.clearRect(0, 0, stageW, stageH);
    if(!isInCar && !isSwim){
        gameCtx.drawImage(goggle,600,150,swimObj.width,swimObj.height);
        gameCtx.drawImage(carImg,vehicle.x,vehicle.y,vehicle.width,vehicle.height);
        gameCtx.drawImage(playerImg,player.x,player.y,player.width,player.height);
        miniPlayerCtx.clearRect(minimap.x,minimap.y,minimap.width,minimap.height);
        miniPlayerCtx.drawImage(miniplayerImg, miniPlayer.x, miniPlayer.y, miniPlayer.width, miniPlayer.height);
    }
    if(isInCar){
        gameCtx.drawImage(goggle,600,150,swimObj.width,swimObj.height);
        gameCtx.drawImage(carImg,vehicle.x,vehicle.y,vehicle.width,vehicle.height);
        miniPlayerCtx.clearRect(minimap.x,minimap.y,minimap.width,minimap.height);
        miniPlayerCtx.drawImage(miniplayerImg, miniPlayer.x, miniPlayer.y, miniPlayer.width, miniPlayer.height);
    }
    if(isSwim){
        playerSwimCtx.clearRect(0, 0, stageW, stageH);
        playerSwimCtx.drawImage(swimObj.image,swimObj.x,swimObj.y,swimObj.width,swimObj.height );
        miniPlayerCtx.clearRect(minimap.x,minimap.y,minimap.width,minimap.height);
        miniPlayerCtx.drawImage(miniplayerImg, miniPlayer.x, miniPlayer.y, miniPlayer.width, miniPlayer.height);        
    } 
    if(miniPlayer.x <= minimap.x || miniPlayer.y <= minimap.y){;
        miniPlayerCtx.clearRect(0, 0, stageW, stageH);
    }
}

function resetVehicleHUD(){
    vehicleCtx.clearRect(vehicleFullBar.x, vehicleFullBar.y, vehicleFullBar.width, vehicleFullBar.height);
    vehicleFullBar.width = 10;
    vehicleFullBar.sourceWidth = 10;
    vehicleCtx.drawImage(vehicleFullThermo,vehicleFullBar.sourceX, vehicleFullBar.sourceY, 
        vehicleFullBar.sourceWidth, vehicleFullBar.sourceHeight,
        vehicleFullBar.x, vehicleFullBar.y, vehicleFullBar.width, vehicleFullBar.height);
    vehicleCtx.drawImage(vehicleEmptyBar.image, vehicleEmptyBar.x, vehicleEmptyBar.y, 
        vehicleEmptyBar.width, vehicleEmptyBar.height);
    vehicleCtx.drawImage(pauseBtImg,pauseBt.x,pauseBt.y,pauseBt.width,pauseBt.height);    
    showVehicleHUD();
}

//vehicle HUD
function showVehicleHUD(){
    if(vehicleFullBar.width >= 165 && isInCar ){
        resetVehicleHUD();
    }
    if(vehicleFullBar.width < 165){
        vehicleHudCanvas.style.display = "block";
        vehicleFullBar.width += 10;
        vehicleFullBar.sourceWidth += 10;
        vehicleCtx.drawImage(vehicleFullThermo,vehicleFullBar.sourceX, vehicleFullBar.sourceY, 
        vehicleFullBar.sourceWidth, vehicleFullBar.sourceHeight,
        vehicleFullBar.x, vehicleFullBar.y, vehicleFullBar.width, vehicleFullBar.height);
    }
    if(vehicleFullBar.width >= 165){
        clearInterval(vehicleID);
        resetObjects();
    }
}

function resetObjects(){
    vehicle.x = stageW/2;
    vehicle.y = stageH/2;
    player.x = stageW/3;
    player.y = stageH/2;
    miniPlayer.x = minimap.x + minimap.width/3;
    miniPlayer.y = minimap.y + minimap.height/2;
    swimObj.x = stageW/3; 
    swimObj.y = stageH/2;
    isInCar = false;
    vehicleHudCanvas.style.display = "none";
    renderPlayer();
}

//swim HUD
function swimHud(){
    swimCanvas.style.display = "block";
    playerSwimCanvas.style.display = "block";
    swimCtx.clearRect(swimHudFull.x, swimHudFull.y, swimHudFull.width, swimHudFull.height);
    swimCtx.drawImage(swimHudEmpty.image, swimHudEmpty.x, swimHudEmpty.y, swimHudEmpty.width, swimHudEmpty.height);     
    
    if(isSwim == true  && swimHudFull.width <= 20){
        resetSwimHUD();
    }
    if(swimHudFull.width <= 518){
        swimHudFull.width -= 10;
        swimHudFull.sourceWidth -= 10;
        swimCtx.drawImage(swimHudFull.image, swimHudFull.sourceX, swimHudFull.sourceY, 
            swimHudFull.sourceWidth, swimHudFull.sourceHeight,
            swimHudFull.x, swimHudFull.y, swimHudFull.width, swimHudFull.height);
    }
    if(swimHudFull.width <= 20){
        isSwim = false;
        playerSwimCanvas.style.display = "none";
        swimCanvas.style.display = "none";
        clearInterval(swimID);
        resetObjects();
        renderPlayer();
    }
}

function resetSwimHUD(){
    swimHudFull.width = 518;
    swimHudFull.sourceWidth = 518;
    swimCtx.drawImage(swimHudFull.image, swimHudFull.sourceX, swimHudFull.sourceY, 
        swimHudFull.sourceWidth, swimHudFull.sourceHeight,
        swimHudFull.x, swimHudFull.y, swimHudFull.width, swimHudFull.height);
    
    swimHud();
}