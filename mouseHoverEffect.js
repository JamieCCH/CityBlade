function definePath(c,p){
    c.beginPath();
    c.moveTo(p.x,p.y);
    for(var i=0;i<p.length;i++){
        c.lineTo(p[i].x,p[i].y);
    }
    c.closePath();
    //c.stroke();
}

function checkPos(mouseEvent){
    mouseX = Math.floor((mouseEvent.clientX)*(stageW/stage.offsetWidth));
    mouseY = Math.floor((mouseEvent.clientY)*(stageW/stage.offsetWidth));
    //console.log(mouseX,mouseY);
    var setCursor;
    var isHover;

    //close button
    if(isPause){
        definePath(pauseCtx,closeButton.points);
        definePath(invenCtx,closeButton.points);
        definePath(missionCtx,closeButton.points);
        if(pauseCtx.isPointInPath(mouseX,mouseY)||
            invenCtx.isPointInPath(mouseX,mouseY)||
            missionCtx.isPointInPath(mouseX,mouseY)){
                setCursor = "pointer";
                isHover = true;
        }else
                isHover = false;
    }

    //back button
    if(isBack){
        definePath(creditCtx,back.points);
        definePath(SettingCtx,back.points);
        definePath(stampCtx,back.points);
        if(creditCtx.isPointInPath(mouseX,mouseY)||
            SettingCtx.isPointInPath(mouseX,mouseY)||
            stampCtx.isPointInPath(mouseX,mouseY)){
                setCursor = "pointer";
                isHover = true;
        }else
                isHover = false;
    }

    //setting screen left tabs
    if(isSetting||isPause){
        for(i = 0; i < setTabs.length; i++){
            var setBtn = setTabs[i];
            var setBtnOver = setHovers[i];
            for(var j=0; j< setBtn.points.length; j++){
                definePath(SettingCtx,setBtn.points);
                definePath(pauseCtx,setBtn.points)
            }
            if(SettingCtx.isPointInPath(mouseX,mouseY)||(pauseCtx.isPointInPath(mouseX,mouseY))){
                setCursor = "pointer";
                isHover = true;
                stageCtx.drawImage(setTabImg,setBtnOver.sourceX, setBtnOver.sourceY, 
                    setBtnOver.sourceWidth, setBtnOver.sourceHeight,
                    setBtnOver.x, setBtnOver.y, setBtnOver.width, setBtnOver.height);
                
            }else
                isHover = false;
        }  
    }
    if(isPause){
        for(var i = 0; i < pauseTabs.length; i++){
            var pauseBtn = pauseTabs[i];
            var pauseHoverBtn = pauseHovers[i];
            for(var j=0; j< pauseBtn.points.length; j++){
                definePath(pauseCtx,pauseBtn.points)
            }
            if(pauseCtx.isPointInPath(mouseX,mouseY)){
                setCursor = "pointer";
                isHover = true;
                stageCtx.drawImage(pauseTabImg,pauseHoverBtn.sourceX, pauseHoverBtn.sourceY, 
                    pauseHoverBtn.sourceWidth, pauseHoverBtn.sourceHeight,
                    pauseHoverBtn.x, pauseHoverBtn.y, pauseHoverBtn.width, pauseHoverBtn.height);
            }else
                isHover = false;
        }
    }

    // manin menu buttons
    if(mainMenu){
        for(i = 0; i < menuBtHovers.length; i++){
            var menuBtn = menuBts[i];
            var menuBtnOver = menuBtHovers[i];
            for(var j=0; j< menuBtn.points.length; j++){
                definePath(startCtx,menuBtn.points); 
            }
            if(startCtx.isPointInPath(mouseX,mouseY)){
                setCursor = "pointer";
                isHover = true;
                stageCtx.drawImage(menuBtImg, menuBtnOver.sourceX, menuBtnOver.sourceY, 
                    menuBtnOver.sourceWidth, menuBtnOver.sourceHeight,
                    menuBtnOver.x, menuBtnOver.y,
                    menuBtnOver.width, menuBtnOver.height); 
            }else
                isHover = false;
        }
    }

    if(isDie){
        for(i = 0; i < dieBtns.length; i++){
            var tempHold = dieBtns[i];
            var temphover = dieBtnHovers[i];
            for(var j=0; j< tempHold.points.length; j++){
                definePath(dieCtx,tempHold.points); 
            }
            if(dieCtx.isPointInPath(mouseX,mouseY)){
                setCursor = "pointer";
                isHover = true;
                stageCtx.drawImage(gameEndBtn,temphover.sourceX, temphover.sourceY, 
                    temphover.sourceWidth, temphover.sourceHeight,
                    temphover.x, temphover.y, temphover.width, temphover.height);
            }else
                isHover = false;
        }
    }
    //pause icon button
    if(isInGame){
        definePath(hudCtx,pauseBt.points);
        if(hudCtx.isPointInPath(mouseX,mouseY)){
            setCursor = "pointer";
            isHover = true;
        }else
        isHover = false;
    }

    if(!isHover && !setCursor){
        stage.style.cursor = "default";  
        if(mainMenu){
            for(var i = 0; i < menuBts.length; i++){
                var menuBtn = menuBts[i];
                stageCtx.clearRect(menuBtn.x, menuBtn.y,menuBtn.width, menuBtn.height); 
            }  
        }
        if(isSetting||isPause){
            for(var i = 0; i < setTabs.length; i++){
                var setBtn = setHovers[i];
                stageCtx.clearRect(setBtn.x, setBtn.y, setBtn.width, setBtn.height);
            }
        }
        if(isPause){
            for(i = 0; i < pauseTabs.length; i++){
                var pauseBtn = pauseTabs[i];
                stageCtx.clearRect(pauseBtn.x, pauseBtn.y, pauseBtn.width, pauseBtn.height);
            }  
        }
        if(isDie){
            for(i = 0; i < dieBtns.length; i++){
                var temphover = dieBtnHovers[i];
                stageCtx.clearRect(temphover.x, temphover.y, temphover.width, temphover.height);
            }
        }         
    }else{
        stage.style.cursor = "pointer";              
    }
} 