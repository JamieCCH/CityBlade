
function render() {
    //start screen btns
     if(menuBts.length > 0){
         for(var i = 0; i < menuBts.length; i++){
            var menuBtn = menuBts[i];
            startCtx.drawImage(menuBtImg, menuBtn.sourceX, menuBtn.sourceY, 
            menuBtn.sourceWidth, menuBtn.sourceHeight,
            menuBtn.x, menuBtn.y,
            menuBtn.width, menuBtn.height); 
            //console.log(menuBtImg);
        }
     }
    //draw characters
    if(roles.length >0){
        for(var i = 0; i< roles.length; i++){
            var char = roles[i];
            roleCtx.drawImage(char.img,char.x,char.y,char.width,char.height);
        }
    }
    //draw character selected btns
    if(roleSelectBtns.length >0){
        for(var i = 0; i< roleSelectBtns.length; i++){
            var item = roleSelectBtns[i];
            roleCtx.drawImage(item.img,item.x,item.y,item.width,item.height);  
        }
    }
    //credit screen
    /*
    if(roles.length >0){
        for(var i = 0; i< roles.length; i++){
            var char = roles[i];
            creditCtx.drawImage(char.img,1000,130,char.width,char.height);
        }
    }
    */
    creditCtx.drawImage(creditTxt.image,creditTxt.x,creditTxt.y,creditTxt.width,creditTxt.height);
    creditCtx.drawImage(back.img,1380,620,item.width,item.height);
    creditCtx.drawImage(roles[1].img,950,100,roles[1].width*1.1,roles[1].height*1.1);
    creditCtx.drawImage(profiles[1].image,1230,300,profiles[1].width*0.9,profiles[1].height*0.9);
    

    //pause menu
    pauseCtx.drawImage(board,250,50,1300,675);
    pauseCtx.drawImage(closeBtn, closeButton.x, closeButton.y, closeButton.width, closeButton.height);
    if(setTabs.length > 0){
        for(var i = 0; i < setTabs.length; i++){
           var setBtn = setTabs[i];
           pauseCtx.drawImage(setTabImg,setBtn.sourceX, setBtn.sourceY, 
            setBtn.sourceWidth, setBtn.sourceHeight,
            setBtn.x, setBtn.y, setBtn.width, setBtn.height); 
       }
    }
    if(pauseTabs.length > 0){
        for(var i=0; i<pauseTabs.length; i++){
            var pauseBtn = pauseTabs[i];
            pauseCtx.drawImage(pauseTabImg, pauseBtn.sourceX, pauseBtn.sourceY, 
                pauseBtn.sourceWidth, pauseBtn.sourceHeight,
                pauseBtn.x, pauseBtn.y, pauseBtn.width, pauseBtn.height)
        }
    }
    pauseCtx.drawImage(pauseTabImg,settingHover.sourceX,settingHover.sourceY,
        settingHover.sourceWidth,settingHover.sourceHeight,
        settingHover.x,settingHover.y,settingHover.width,settingHover.height);

    //invertory screen---
    invenCtx.drawImage(board,40,50,1510,675);
    invenCtx.drawImage(closeBtn, closeButton.x, closeButton.y, closeButton.width, closeButton.height);
    for(var i=0; i<pauseTabs.length; i++){
        var pauseBtn = pauseTabs[i];
        invenCtx.drawImage(pauseTabImg, pauseBtn.sourceX, pauseBtn.sourceY, 
            pauseBtn.sourceWidth, pauseBtn.sourceHeight,
            pauseBtn.x, pauseBtn.y, pauseBtn.width, pauseBtn.height)
    } 
    invenCtx.drawImage(pauseTabImg,invenHover.sourceX,invenHover.sourceY,
        invenHover.sourceWidth,invenHover.sourceHeight,
        invenHover.x,settingHover.y,invenHover.width,invenHover.height);
    invenCtx.drawImage(inventImg, 250, 115, 1145, 560)

    //mission screen---
    missionCtx.drawImage(board,40,50,1510,675);
    missionCtx.drawImage(closeBtn, closeButton.x, closeButton.y, closeButton.width, closeButton.height);
    for(var i=0; i<pauseTabs.length; i++){
        var pauseBtn = pauseTabs[i];
        missionCtx.drawImage(pauseTabImg, pauseBtn.sourceX, pauseBtn.sourceY, 
            pauseBtn.sourceWidth, pauseBtn.sourceHeight,
            pauseBtn.x, pauseBtn.y, pauseBtn.width, pauseBtn.height)
    } 
    missionCtx.drawImage(pauseTabImg,missionHover.sourceX,missionHover.sourceY,
        missionHover.sourceWidth,missionHover.sourceHeight,
        missionHover.x,settingHover.y,missionHover.width,missionHover.height);
        missionCtx.drawImage(misImg, 250, 115, 1145, 560)

    //setting screen board and tabs---
    SettingCtx.drawImage(board,250,50,1300,675);
    SettingCtx.drawImage(back.img,1380,620,item.width,item.height);
    if(setTabs.length > 0){
            for(var i = 0; i < setTabs.length; i++){
            var setBtn = setTabs[i];
            SettingCtx.drawImage(setTabImg,setBtn.sourceX, setBtn.sourceY, 
                setBtn.sourceWidth, setBtn.sourceHeight,
                setBtn.x, setBtn.y, setBtn.width, setBtn.height); 
        }
        }
    //graphics setting screen---
    SetGraphCtx.drawImage(setTabImg,graphHover.sourceX, graphHover.sourceY, 
        graphHover.sourceWidth, graphHover.sourceHeight,
        graphHover.x, graphHover.y, graphHover.width, graphHover.height)
    SetGraphCtx.font = "30px Aldrich";
    for(var i = 0; i < graphItems.length; i++){
        SetGraphCtx.fillText(graphItems[i],350,graphItemsY[i]);
    }
    for (var i = 0; i < rows-1; i++) {
        for (var j = 0; j < radioBt[0].length; j++) {
            if (radioBt[i][j].image !== null) {
                SetGraphCtx.drawImage(radioBt[i][j].image, radioBt[i][j].sourceX, radioBt[i][j].sourceY,
                    radioBt[i][j].sourceWidth, radioBt[i][j].sourceHeight,
                    radioBt[i][j].x, radioBt[i][j].y,radioBt[i][j].width,radioBt[i][j].height);
            }
        }
    }

    SetGraphCtx.drawImage(muteBt,550,472,39,39);
    SetGraphCtx.drawImage(slider,600,480,725,22);
    SetGraphCtx.drawImage(dragBt,700,472,39,39);
    SetGraphCtx.drawImage(muteBt,550,582,39,39);
    SetGraphCtx.drawImage(slider,600,590,725,22);
    SetGraphCtx.drawImage(dragBt,670,582,39,39);
    for (var i = 0; i < rows-1; i++) {
        for (var j = 0; j < radioBt[0].length; j++) {
            SetGraphCtx.fillText(options[i][j],radioBt[i][j].x + 45,radioBt[i][j].y + 30);
        }
    }

    // audio setting---
    SetAudioCtx.drawImage(setTabImg,audioHover.sourceX, audioHover.sourceY, 
        audioHover.sourceWidth, audioHover.sourceHeight,
        audioHover.x, audioHover.y, audioHover.width, audioHover.height)
    SetAudioCtx.font = "30px Aldrich";
    for(var i = 0; i < audioItems.length; i++){
        SetAudioCtx.fillText(audioItems[i],390,audioItemsY[i]);
    }
    for(var i = 0 ; i < audioItems.length; i++){
        var adjust = 8;
        SetAudioCtx.drawImage(muteBt,550,audioItemsY[i]-adjust,39,39);
        SetAudioCtx.drawImage(slider,600,audioItemsY[i],725,22);
        SetAudioCtx.drawImage(dragBt,890,audioItemsY[i]-adjust,39,39);
    }
    // key map screen ------
    keyMapCtx.drawImage(keyMapImg,640,150)
    keyMapCtx.font = "30px Aldrich";
    for(var i = 0; i < keyMapItems.length; i++){
        keyMapCtx.fillText(keyMapItems[i],400,keyMapItemsY[i]);
    }
    keyMapCtx.drawImage(setTabImg,keyMapHover.sourceX, keyMapHover.sourceY, 
        keyMapHover.sourceWidth, keyMapHover.sourceHeight,
        keyMapHover.x, keyMapHover.y, keyMapHover.width, keyMapHover.height)
    // gameplay setting
    SetGameplayCtx.font = "30px Aldrich";
    for(var i = 0; i < gameplayItems.length; i++){
        SetGameplayCtx.fillText(gameplayItems[i],390,gameplayItemsY[i]);
    }
    SetGameplayCtx.drawImage(setTabImg,gameplayHover.sourceX, gameplayHover.sourceY, 
        gameplayHover.sourceWidth, gameplayHover.sourceHeight,
        gameplayHover.x, gameplayHover.y, gameplayHover.width, gameplayHover.height)
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols-1; j++) {
            if (radioBt[i][j].image !== null) {
                SetGameplayCtx.drawImage(radioBt[i][j].image, radioBt[i][j].sourceX, radioBt[i][j].sourceY,
                    radioBt[i][j].sourceWidth, radioBt[i][j].sourceHeight,
                    radioBt[i][j].x, radioBt[i][j].y,radioBt[i][j].width,radioBt[i][j].height);
            }
        }
    }
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols-1; j++) {
            SetGameplayCtx.fillText(optionTaggles[i][j],radioBt[i][j].x + 45,radioBt[i][j].y + 30);
        }
    }
    SetGameplayCtx.drawImage(muteBt,550,602,39,39);
    SetGameplayCtx.drawImage(slider,600,610,725,22);
    SetGameplayCtx.drawImage(dragBt,1260,602,39,39);

    // Accessibility setting screen ------
    SetAcesCtx.drawImage(setTabImg,AccessHover.sourceX, AccessHover.sourceY, 
        AccessHover.sourceWidth, AccessHover.sourceHeight,
        AccessHover.x, AccessHover.y, AccessHover.width, AccessHover.height)
    SetAcesCtx.font = "30px Aldrich";
    for(var i = 0; i < accessItems.length; i++){
            SetAcesCtx.fillText(accessItems[i],390,accessItemsY[i]);
        }
    for (var i = 0; i < rows-1; i++) {
            for (var j = 0; j < cols; j++) {
                SetAcesCtx.fillText(AcesOption[i][j],radioBt[i][j].x + 45,radioBt[i][j].y + 30);
            }
        }
        SetAcesCtx.drawImage(muteBt,550,502,39,39);
        SetAcesCtx.drawImage(slider,600,510,725,22);
        SetAcesCtx.drawImage(dragBt,800,502,39,39);
    for (var i = 0; i < rows-1; i++) {
        for (var j = 0; j < cols; j++) {
            if (radioBt[i][j].image !== null) {
                SetAcesCtx.drawImage(radioBt[i][j].image, radioBt[i][j].sourceX, radioBt[i][j].sourceY,
                    radioBt[i][j].sourceWidth, radioBt[i][j].sourceHeight,
                    radioBt[i][j].x, radioBt[i][j].y,radioBt[i][j].width,radioBt[i][j].height);
            }
        }
    }

    // game HUD default
    hudCtx.drawImage(emptyMeter.image,emptyMeter.x,emptyMeter.y,emptyMeter.width,emptyMeter.height);
    for(var i = 0 ; i < meters.length ; i++){
        var hud = meters[i];
        hudCtx.drawImage(hud.image, hud.sourceX, hud.sourceY, 
            hud.sourceWidth, hud.sourceHeight,
            hud.x, hud.y, hud.width, hud.height)
    }
    //weapon
    hudCtx.drawImage(wpBig01.image,wpBig01.sourceX, wpBig01.sourceY, wpBig01.sourceWidth, wpBig01.sourceHeight,
        wpBig01.x,wpBig01.y,wpBig01.width,wpBig01.height);


    
    //fullMap screen
    //mapCtx.drawImage(fullMap,0,0,stageW,stageH);

    //Stamp Book screen
    stampCtx.drawImage(stampBook,0,0,stageW,stageH);
    stampCtx.drawImage(back.img,1380,620,item.width,item.height);

    //game over
    dieCtx.drawImage(die,0,0,stageW,stageH);
    for(var i = 0; i < dieBtns.length; i++){
        var tempHold = dieBtns[i];
        dieCtx.drawImage(gameEndBtn,tempHold.sourceX, tempHold.sourceY, 
            tempHold.sourceWidth, tempHold.sourceHeight,
            tempHold.x, tempHold.y, tempHold.width, tempHold.height); 
    }

    //minimap
    minimapCtx.drawImage(minimapImg, minimap.x,minimap.y,minimap.width,minimap.height);
    
    //player
    gameCtx.drawImage(playerImg,player.x,player.y,player.width,player.height);
    miniPlayerCtx.drawImage(miniplayerImg, miniPlayer.x, miniPlayer.y, miniPlayer.width, miniPlayer.height);

    //vehicle
    gameCtx.drawImage(carImg,vehicle.x,vehicle.y,vehicle.width,vehicle.height);

    //vehicle HUD meter
    vehicleCtx.drawImage(vehicleEmptyBar.image, vehicleEmptyBar.x, vehicleEmptyBar.y, vehicleEmptyBar.width, vehicleEmptyBar.height);
    vehicleCtx.drawImage(vehicleFullThermo, vehicleFullBar.sourceX, vehicleFullBar.sourceY, 
        vehicleFullBar.sourceWidth, vehicleFullBar.sourceHeight,
        vehicleFullBar.x, vehicleFullBar.y, vehicleFullBar.width, vehicleFullBar.height);
    
    //swim HUD meter
    swimCtx.drawImage(swimHudEmpty.image, swimHudEmpty.x, swimHudEmpty.y, swimHudEmpty.width, swimHudEmpty.height);
    swimCtx.drawImage(swimHudFull.image, swimHudFull.sourceX, swimHudFull.sourceY, 
        swimHudFull.sourceWidth, swimHudFull.sourceHeight,
        swimHudFull.x, swimHudFull.y, swimHudFull.width, swimHudFull.height);
    //goggle
    gameCtx.drawImage(goggle,600,150,swimObj.width,swimObj.height);
    playerSwimCtx.drawImage(swimObj.image,swimObj.x,swimObj.y,swimObj.width,swimObj.height );
}   