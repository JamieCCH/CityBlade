var transCanvas = document.getElementById("transition");
var transCtx = transCanvas.getContext("2d");
var stage = document.getElementById("stage");
var stageCtx = stage.getContext("2d");
var stageW = 1633;
var stageH = 768;
var mouseX;
var mouseY;
var confirm = false;
var wipePoint = 0
var fadeId = 0;
var wipeId = 0;
var showMap = false;
var isPause = false;
var attachedOn = false;
var isDie = false;
var mainMenu = false;
var isInGame = false;
var isSetting = false;
var keyPressed =[]; //for weapon selecting
var isTHeld = false;
var maxWeaponNum = weaponOns.length;
var currentSelectedWP = 0;
var isBack = false;

initGame();

function initGame() {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("mousemove", checkPos);
    window.addEventListener("click", checkClick);
    mainMenu = true;
}

function checkClick(mouseEvent){
    //start menu button detect-----
    for(i = 0; i < menuBts.length; i++){
        var menuBtn = menuBts[i];
        if(mouseX > menuBtn.x && mouseX < menuBtn.x + menuBtn.width){
            if(mouseY > menuBtn.y && mouseY < menuBtn.y + menuBtn.height){
                if(mainMenu === true && startCanvas.style.display === "block"){ 
                    switch(i){
                        case 0:
                            newGame();
                            stageCtx.clearRect(0,0,stageW,stageH); 
                            mainMenu = false;
                        break;
                        case 1:
                            game();
                        break;
                        case 2:
                            setting();
                        break;
                        case 3:
                            credit();
                            stageCtx.clearRect(0,0,stageW,stageH); 
                        break;
                    }
                }
            }
        }
    }
    //pause screen tab detect-----
    if(pauseCanvas.style.display === "block" || invenCanvas.style.display === "block"
        || missionCanvas.style.display === "block"){ 
        //tabs    
        for(var i = 0; i < pauseTabs.length; i++){
            var pauseBtn = pauseTabs[i];
            if(mouseX > pauseBtn.x && mouseX < pauseBtn.x + pauseBtn.width){
                if(mouseY > pauseBtn.y && mouseY < pauseBtn.y + pauseBtn.height){
                    switch(i){
                        case 0:
                            pause();
                        break;
                        case 1:
                            inventory();
                        break;
                        case 2:
                            mission();
                        break;
                    }
                }
            }
        }
        //close btn invoked
        if(mouseX > closeButton.x && mouseX < closeButton.x + closeButton.width){
            if(mouseY > closeButton.y && mouseY < closeButton.y+ closeButton.height){
                game();
            }
        }
            
    }   
    //back btn invoked
    if(mouseX > back.x && mouseX < back.x + back.width){
        if(mouseY > back.y && mouseY < back.y+ back.height){
            isBack = false;
            if(roleCanvas.style.display === "block" || SettingCanvas.style.display === "block" 
                ||creditCanvas.style.display === "block"){
                    startCanvas.style.display = "block";
                    roleCanvas.style.display = "none";
                    creditCanvas.style.display = "none"
                    SettingCanvas.style.display = "none";
                    SettingCanvas.style.display = "none";
                    SetGraphCanvas.style.display = "none";
                    SetAudioCanvas.style.display = "none";
                    SetGameplayCanvas.style.display = "none";
                    SetAcesCanvas.style.display = "none";
                    keyMapCanvas.style.display = "none";
                    stageCtx.clearRect(0,0,stageW,stageH);
                    mainMenu = true;
                    isSetting = false;
                }
                if(stampCanvas.style.display === "block")
                    stampCanvas.style.display = "none";
        }
    }    
    //input name space
    if(mouseX > nameInput.x && mouseX < nameInput.x + nameInput.width){
        if(mouseY > nameInput.y && mouseY < nameInput.y+ nameInput.height){
            //
        }
    }
    //setting screen left side tab
    if(SettingCanvas.style.display === "block" || pauseCanvas.style.display === "block"){
    for(i = 0; i < setTabs.length; i++){
        var setBtn = setTabs[i];
           if(mouseX > setBtn.x && mouseX < setBtn.x + setBtn.width){
           if(mouseY > setBtn.y && mouseY < setBtn.y + setBtn.height)
               {
                   switch(i){
                       case 0:
                        setGraph();
                       break;
                       case 1:
                        setAudio();
                       break;
                       case 2:
                        setKeymap();
                       break;
                       case 3:
                        setGameplay();
                       break;
                       case 4:
                        setAccess();
                       break;
               }
           }
           }
    }
    }
    //game over screen buttons
    if(isDie){
        for(var i = 0; i < dieBtns.length; i++){
            var tempHold = dieBtns[i];
            if(mouseX > tempHold.x && mouseX < tempHold.x + tempHold.width){
            if(mouseY > tempHold.y && mouseY < tempHold.y + tempHold.height){
                switch(i){
                    case 0:
                        game(); 
                        dieCanvas.style.display = "none";
                    break;
                    case 1:
                        location.reload();
                        //newGame();
                        //dieCanvas.style.display = "none";
                    break;
                }
            }
            }
        }
    }

//radio buttons selected involk
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if(SetGraphCanvas.style.display === "block" || SetGameplayCanvas.style.display === "block"
            || SetAcesCanvas.style.display === "block" ){
                if(mouseX > radioBt[i][j].x && mouseX < radioBt[i][j].x + radioBt[i][j].width){
                    if(mouseY > radioBt[i][j].y && mouseY < radioBt[i][j].y + radioBt[i][j].height){
                        stageCtx.clearRect(radioBt[i][0].x,radioBt[i][0].y,stageW,radioClick.height);
                        stageCtx.drawImage(tempRadio.image,radioClick.x,radioClick.y,radioClick.width,radioClick.height,
                            radioBt[i][j].x,radioBt[i][j].y,radioClick.width,radioClick.height)
                        console.log("hit");
                    }
                }
            }
        }
    }  
//in game pasuse button 
    if(mouseX > pauseBt.x && mouseX < pauseBt.x + pauseBt.width){
        if(mouseY > pauseBt.y && mouseY < pauseBt.y+ pauseBt.height){
            if(hudCanvas.style.display === "block" && dieCanvas.style.display !== "block"
                && isPause === false && mapCanvas.style.display !== "block"){
                pause();
                    isPause = true;
            }else{
                    isPause = false;
                }
        }
    } 
}

if(mainMenu === true){
    startCanvas.style.display = "block";
}else{
    mainMenu = false;
}

if(isPause === false){
    pauseCanvas.style.display = "none";
    invenCanvas.style.display = "none";
    missionCanvas.style.display = "none";
    SettingCanvas.style.display = "none";
    SetGraphCanvas.style.display = "none";
    SetAudioCanvas.style.display = "none";
    SetGameplayCanvas.style.display = "none";
    SetAcesCanvas.style.display = "none";
    keyMapCanvas.style.display = "none";
}

function newGame(){
    //wipeId = setInterval("wipeOut(startCanvas,roleCanvas)", 5);
    roleCanvas.style.display = "block";
    startCanvas.style.display = "none";
    hudCanvas.style.display = "none";
    isDie = false;
    isBack = true;
}

function game(){
    mainMenu = false;
    isPause = false;
    isInGame = true;
    isDie = false;
    showMap = true;
    gameCanvas.style.display = "block";
    miniPlayerCanvas.style.display = "block";
    hudCanvas.style.display = "block";
    minimapCanvas.style.display = "block";
    gameBG.style.display = "block";
    startCanvas.style.display = "none";
    pauseCanvas.style.display = "none";
    missionCanvas.style.display = "none";
    invenCanvas.style.display = "none";
    missionCanvas.style.display = "none";
    SetGraphCanvas.style.display = "none";
    SetAudioCanvas.style.display = "none";
    SetGameplayCanvas.style.display = "none";
    SetAcesCanvas.style.display = "none";
    keyMapCanvas.style.display = "none";
    creditCanvas.style.display = "none";
    stageCtx.clearRect(0,0,stageW,stageH);
}

function gameOver(){
    dieCanvas.style.display = "block";
    isDie = true;
    hpBar.width = 130;
    hpBar.sourceWidth = 130;
    hudCtx.drawImage(meterBar,hpBar.sourceX, hpBar.sourceY, 
        hpBar.sourceWidth, hpBar.sourceHeight,
        hpBar.x, hpBar.y, hpBar.width, hpBar.height);
}

function pause(){
    pauseCanvas.style.display = "block";
    setGraph();
    invenCanvas.style.display = "none";
    missionCanvas.style.display = "none";
    showMap = false;
}

function inventory(){
    invenCanvas.style.display = "block";
    pauseCanvas.style.display = "none";
    missionCanvas.style.display = "none";
    SetGraphCanvas.style.display = "none";
    stageCtx.clearRect(0,0,stageW,stageH);
    attachedOn = true;
}

function mission(){
    missionCanvas.style.display = "block";
    invenCanvas.style.display = "none";
    pauseCanvas.style.display = "none";
    SetGraphCanvas.style.display = "none";
    stageCtx.clearRect(0,0,stageW,stageH);
}

function setting(){
    isBack = true;
    isSetting = true;
    mainMenu = false;
    SettingCanvas.style.display = "block";
    stageCtx.clearRect(0,0,stageW,stageH);
    setGraph();
}

function setGraph(){
    startCanvas.style.display = "none"; 
    SetGraphCanvas.style.display = "block";
    SetGameplayCanvas.style.display = "none";
    SetAcesCanvas.style.display = "none";
    keyMapCanvas.style.display = "none";
    SetAudioCanvas.style.display = "none";
    //default selected on graphics setting screen
    stageCtx.drawImage(radioBt[0][0].image, radioBt[0][0].sourceX, radioClick.y,
        radioBt[0][0].sourceWidth, radioBt[0][0].sourceHeight,
        radioBt[0][0].x, radioBt[0][0].y,radioBt[0][0].width,radioBt[0][0].height);
    stageCtx.drawImage(radioBt[1][1].image, radioBt[1][1].sourceX, radioClick.y,
            radioBt[1][1].sourceWidth, radioBt[1][1].sourceHeight,
            radioBt[1][1].x, radioBt[1][1].y,radioBt[1][1].width,radioBt[1][1].height);
    stageCtx.drawImage(radioBt[2][1].image, radioBt[2][1].sourceX, radioClick.y,
                radioBt[2][1].sourceWidth, radioBt[1][1].sourceHeight,
                radioBt[2][1].x, radioBt[2][1].y,radioBt[2][1].width,radioBt[2][1].height);
    
}

function setAudio(){
    SetAudioCanvas.style.display = "block";
    SetGraphCanvas.style.display = "none";
    SetGameplayCanvas.style.display = "none";
    SetAcesCanvas.style.display = "none";
    keyMapCanvas.style.display = "none";
    stageCtx.clearRect(0,0,stageW,stageH);
}

function setGameplay(){
    SetGameplayCanvas.style.display = "block";
    SetAudioCanvas.style.display = "none";
    SetGraphCanvas.style.display = "none";
    keyMapCanvas.style.display = "none";
    SetAcesCanvas.style.display = "none";
    stageCtx.clearRect(0,0,stageW,stageH);

    //default selected
    stageCtx.drawImage(radioBt[0][0].image, radioBt[0][0].sourceX, radioClick.y,
        radioBt[0][0].sourceWidth, radioBt[0][0].sourceHeight,
        radioBt[0][0].x, radioBt[0][0].y,radioBt[0][0].width,radioBt[0][0].height);
    stageCtx.drawImage(radioBt[1][1].image, radioBt[1][1].sourceX, radioClick.y,
            radioBt[1][1].sourceWidth, radioBt[1][1].sourceHeight,
            radioBt[1][1].x, radioBt[1][1].y,radioBt[1][1].width,radioBt[1][1].height);
    stageCtx.drawImage(radioBt[2][1].image, radioBt[2][1].sourceX, radioClick.y,
            radioBt[2][1].sourceWidth, radioBt[1][1].sourceHeight,
            radioBt[2][1].x, radioBt[2][1].y,radioBt[2][1].width,radioBt[2][1].height);
    stageCtx.drawImage(radioBt[3][1].image, radioBt[3][1].sourceX, radioClick.y,
                radioBt[3][1].sourceWidth, radioBt[3][1].sourceHeight,
                radioBt[3][1].x, radioBt[3][1].y,radioBt[3][1].width,radioBt[3][1].height);
}

function setKeymap(){
    keyMapCanvas.style.display = "block";
    SetAudioCanvas.style.display = "none";
    SetGraphCanvas.style.display = "none";
    SetGameplayCanvas.style.display = "none";
    SetAcesCanvas.style.display = "none";
    stageCtx.clearRect(0,0,stageW,stageH);
}
function setAccess(){
    SetAcesCanvas.style.display = "block";
    SetAudioCanvas.style.display = "none";
    SetGraphCanvas.style.display = "none";
    SetGameplayCanvas.style.display = "none";
    keyMapCanvas.style.display = "none";
    stageCtx.clearRect(0,0,stageW,stageH);

    //default selected
    stageCtx.drawImage(radioBt[0][0].image, radioBt[0][0].sourceX, radioClick.y,
        radioBt[0][0].sourceWidth, radioBt[0][0].sourceHeight,
        radioBt[0][0].x, radioBt[0][0].y,radioBt[0][0].width,radioBt[0][0].height);
    stageCtx.drawImage(radioBt[1][1].image, radioBt[1][1].sourceX, radioClick.y,
            radioBt[1][1].sourceWidth, radioBt[1][1].sourceHeight,
            radioBt[1][1].x, radioBt[1][1].y,radioBt[1][1].width,radioBt[1][1].height);
    stageCtx.drawImage(radioBt[2][1].image, radioBt[2][1].sourceX, radioClick.y,
                radioBt[2][1].sourceWidth, radioBt[1][1].sourceHeight,
                radioBt[2][1].x, radioBt[2][1].y,radioBt[2][1].width,radioBt[2][1].height);
}

function credit(){
    creditCanvas.style.display = "block";
    startCanvas.style.display = "none";
    isBack = true;
    mainMenu = false;
}

function fadeOut(){
    transCtx.fillStyle = "rgba(255,255,255, 0.2)";
    transCtx.fillRect (0, 0, stageW, stageH);
}

function wipeOut(scene,next){
    if(wipePoint < stageW){
        wipePoint += 20;
      transCtx.fillStyle = "rgba(118,196,226, 0.2)";
      transCtx.fillRect(0, 0, wipePoint, stageH);  
    } else if(wipePoint > stageW){
        clearInterval(wipeId);
        wipeId = setInterval("wipeIn(next)", 5);
        wipeIn(next);
    }
    if(scene.style.display === "block"){
        scene.style.display = "none";
    }
        
}

function wipeIn(next){
    if(stageW >= 0){
        stageW -= 10;
        transCtx.clearRect (stageW,0, stageW, stageH);
    }else{
        transCtx.clearRect(0,0, stageH, stageH);
        clearInterval(wipeId);
    }
    if(next.style.display !== "block")
        next.style.display = "block"
}

function weaponSelect(){
    if (isTHeld){
        for (var i = currentSelectedWP; i < maxWeaponNum; i++){
            if ( i == currentSelectedWP ){
                drawSelectedCircle(i); // index is used to determine the position on screen
            }
        }
    } else
    {
        for (var i = currentSelectedWP; i < maxWeaponNum; i++){
            if ( i == currentSelectedWP ){
                clearCircle(i);
            }
        }
        
    }
}

function drawSelectedCircle(i){
        hudCtx.beginPath();
        hudCtx.strokeStyle="#E44149";
        hudCtx.lineWidth=6;
        hudCtx.arc(wpSelections[i].x,wpSelections[i].y,wpSelections[i].r,0,2*Math.PI);
        hudCtx.stroke();
}

function clearCircle(i){
    hudCtx.clearRect(wpWhell01.x, wpWhell01.y, wpWhell01.width, wpWhell01.height);
    hudCtx.drawImage(weaponOns[i].image,wpBig01.sourceX, wpBig01.sourceY, wpBig01.sourceWidth, wpBig01.sourceHeight,
        wpBig01.x,wpBig01.y,wpBig01.width,wpBig01.height);
}

function onKeyDown(event) {

    keyPressed[event.keyCode] = true;   //key's toggle
 
    if(keyPressed[84] && keyPressed[69])//73=I, 69=E   
    {
        weaponSelect();
    }
    switch (event.keyCode) {
        case 80: //p
            if(hudCanvas.style.display === "block" && dieCanvas.style.display !== "block"
                && isPause === false && mapCanvas.style.display !== "block"){
                pause();
                    isPause = true;
                }else{
                    isPause = false;
                }
        break;
        case 77: //m
            if(hudCanvas.style.display === "block" && showMap === true && dieCanvas.style.display !== "block"){
                showMap === false;
                mapCanvas.style.display = "block";
            }
        break;
        case 27: //esc
            if(mapCanvas.style.display === "block")
                mapCanvas.style.display = "none";  
        break;
        /* 
        case 82: //r
            if(isInGame === true && hudCanvas.style.display === "block" && 
                mapCanvas.style.display !== "block" && isPause !== true){
                    location.reload();
              
                hudCanvas.style.display = "none";
                startCanvas.style.display = "block";
                isInGame = false;
                gameCanvas.style.display = "none";
                miniPlayerCanvas.style.display = "none";
                hudCanvas.style.display = "none";
                minimapCanvas.style.display = "none";
                gameBG.style.display = "none";
            
            }  
        break;
        */
        case 79: //o
            if(hudCanvas.style.display === "block" && mapCanvas.style.display !== "block" &&
                isInGame === true && isPause === false && showMap === true){
                gameOver();
            }
        break;
        case 83: //s
            if(attachedOn === true && invenCanvas.style.display === "block"){
                stampCanvas.style.display = "block";
            }
        break;
        case 9: //tab
        break;
        //currentItem = menuBts[initialItem];
        //console.log(currentItem);
        case 32:    //spacebar
            if (confirm === false) {
                confirm = true;
                //fadeId = setInterval("fadeOut()", 60);
                //wipeId = setInterval("wipeOut()", 5);
            }
            break;
        //case 73: //I
            //wipeId = setInterval("wipeIn()", 8);
        //break;

        case 38:    // Up , increase health   
            if(hpBar.width < 205 )
                {
                hpBar.width +=10;
                hpBar.sourceWidth +=10;
                hudCtx.drawImage(meterBar,hpBar.sourceX, hpBar.sourceY, 
                    hpBar.sourceWidth, hpBar.sourceHeight,
                    hpBar.x, hpBar.y, hpBar.width, hpBar.height);
                }
            break;
        case 40:    // Down, decrease health    
            if(hpBar.width > 12 )
            {
                hudCtx.clearRect(hpBar.x,hpBar.y,hpBar.width,hpBar.height); //clear range
                //redraw empty bar                
                hudCtx.drawImage(emptyMeter.image,hpBar.sourceX, hpBar.sourceY, 
                    hpBar.sourceWidth, hpBar.sourceHeight,
                    hpBar.x, hpBar.y, hpBar.width, hpBar.height);
                hpBar.width -=10;
                hpBar.sourceWidth -=10;
                //draw hp
                hudCtx.drawImage(meterBar,hpBar.sourceX, hpBar.sourceY, 
                    hpBar.sourceWidth, hpBar.sourceHeight,
                    hpBar.x, hpBar.y, hpBar.width, hpBar.height);
            }
            if(hpBar.width <=12)
            {
                if(hudCanvas.style.display === "block" && mapCanvas.style.display !== "block" &&
                    isInGame === true && isPause === false && showMap === true){
                    gameOver();
                }
            }
            break;
        case 37:    // Left, decrease EP
            if(hpBar.width > 12 )
                {
                hudCtx.clearRect(epBar.x,epBar.y,epBar.width,epBar.height); //clear range
                //redraw empty bar                
                hudCtx.drawImage(emptyMeter.image,epBar.sourceX, epBar.sourceY, 
                    epBar.sourceWidth, epBar.sourceHeight,
                    epBar.x, epBar.y, epBar.width, epBar.height);
                epBar.width -=10;
                epBar.sourceWidth -=10;
                //draw EP
                hudCtx.drawImage(meterBar,epBar.sourceX, epBar.sourceY, 
                    epBar.sourceWidth, epBar.sourceHeight,
                    epBar.x, epBar.y, epBar.width, epBar.height);
                }
            break;
        case 39:    // Right, increase EP
            if(epBar.width < 162 )
                {
                epBar.width +=10;
                epBar.sourceWidth +=10;
                hudCtx.drawImage(meterBar,epBar.sourceX, epBar.sourceY, 
                    epBar.sourceWidth, epBar.sourceHeight,
                    epBar.x, epBar.y, epBar.width, epBar.height);
                }
            break;
        
        case 188: //, comma key, decrease Exp
            if(expBar.width > 10 )
                {
                hudCtx.clearRect(expBar.x,expBar.y,expBar.width,expBar.height); //clear range
                //redraw empty bar                
                hudCtx.drawImage(emptyMeter.image,expBar.sourceX, expBar.sourceY, 
                    expBar.sourceWidth, expBar.sourceHeight,
                    expBar.x, expBar.y, expBar.width, expBar.height);
                expBar.width -=10;
                expBar.sourceWidth -=10;
                //draw EP
                hudCtx.drawImage(meterBar,expBar.sourceX, expBar.sourceY, 
                    expBar.sourceWidth, expBar.sourceHeight,
                    expBar.x, expBar.y, expBar.width, expBar.height);
                }
            break;
        case 190: //. dot key, increase Exp
            if(expBar.width < 162 )
            {
                expBar.width +=10;
                expBar.sourceWidth +=10;
                hudCtx.drawImage(meterBar,expBar.sourceX, expBar.sourceY, 
                    expBar.sourceWidth, expBar.sourceHeight,
                    expBar.x, expBar.y, expBar.width, expBar.height);
            }
        break;

        case 84: //T, show weapon wheel
        isTHeld = true;
        hudCtx.clearRect(wpWhell01.x, wpWhell01.y, wpWhell01.width, wpWhell01.height);
        hudCtx.drawImage(wpWheels[currentSelectedWP].image,wpWhell01.sourceX, wpWhell01.sourceY, 
            wpWhell01.sourceWidth, wpWhell01.sourceHeight,
            wpWhell01.x, wpWhell01.y, wpWhell01.width, wpWhell01.height);     
        drawSelectedCircle(currentSelectedWP);
        break;

        //move player
        case 74: // J
        case 76: // L
        case 73: // I
        case 75: // K
            movePlayer();
            moveVehicle();
            swim();
        break;
    }
}

function onKeyUp(event) {
    keyPressed[event.keyCode] = false; 
    switch (event.keyCode) {
        case 84: //T, show weapon wheel
            isTHeld = false;
            weaponSelect();
        break;
        
        case 69: //E, to select weapon
            if(isTHeld){
                currentSelectedWP++;
                if (currentSelectedWP >= maxWeaponNum){
                    currentSelectedWP = 0;
                }
                hudCtx.clearRect(wpWhell01.x, wpWhell01.y, wpWhell01.width, wpWhell01.height);
                hudCtx.drawImage(wpWheels[currentSelectedWP].image,wpWhell01.sourceX, wpWhell01.sourceY, 
                    wpWhell01.sourceWidth, wpWhell01.sourceHeight,
                    wpWhell01.x, wpWhell01.y, wpWhell01.width, wpWhell01.height);
                drawSelectedCircle(currentSelectedWP);
            }
        break;

         //move player
         case 74: // J
         case 76: // L
         case 73: // I
         case 75: // K
             resetPlayer();
         break;
    }
}

