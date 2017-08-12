var whiteBoard = document.getElementById("whiteBoard");
var startCanvas = document.getElementById("Start");
var startCtx = startCanvas.getContext("2d");
var roleCanvas = document.getElementById("Character");
var roleCtx = roleCanvas.getContext("2d");
var creditCanvas = document.getElementById("Credits");
var creditCtx = creditCanvas.getContext("2d");
var pauseCanvas = document.getElementById("Pause");
var pauseCtx = pauseCanvas.getContext("2d");
var invenCanvas = document.getElementById("Inventory");
var invenCtx = invenCanvas.getContext("2d");
var missionCanvas = document.getElementById("Mission");
var missionCtx = missionCanvas.getContext("2d");
var SettingCanvas = document.getElementById("setting");
var SettingCtx = SettingCanvas.getContext("2d");
var SetGraphCanvas = document.getElementById("SetGraphic");
var SetGraphCtx = SetGraphCanvas.getContext("2d");
var SetAudioCanvas = document.getElementById("SetAudio");
var SetAudioCtx = SetAudioCanvas.getContext("2d");
var SetGameplayCanvas = document.getElementById("SetGameplay");
var SetGameplayCtx = SetGameplayCanvas.getContext("2d");
var SetAcesCanvas = document.getElementById("SetAces");
var SetAcesCtx = SetAcesCanvas.getContext("2d");
var keyMapCanvas = document.getElementById("KeyMap");
var keyMapCtx = keyMapCanvas.getContext("2d");
var hudCanvas = document.getElementById("HudDefault");
var hudCtx = hudCanvas.getContext("2d");
var swimCanvas = document.getElementById("HudSwim");
var swimCtx = swimCanvas.getContext("2d");
var mapCanvas = document.getElementById("FullMap");
var mapCtx = mapCanvas.getContext("2d");
var stampCanvas = document.getElementById("StampBook");
var stampCtx = stampCanvas.getContext("2d");
var dieCanvas = document.getElementById("Gameover");
var dieCtx = dieCanvas.getContext("2d");
var minimapCanvas = document.getElementById("minimap");
var minimapCtx = minimapCanvas.getContext("2d");
var gameCanvas = document.getElementById("game");
var gameCtx = gameCanvas.getContext("2d");
var miniPlayerCanvas = document.getElementById("miniPlayer");
var miniPlayerCtx = miniPlayerCanvas.getContext("2d");
var vehicleHudCanvas = document.getElementById("HudVehicle");
var vehicleCtx = vehicleHudCanvas.getContext("2d");

var assetsToLoad = [];
var assetsLoaded = 0;

//start screen--------
var menuBt =
{
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 378,
  sourceHeight: 87,
  x: 200,
  y: 300,
  width: 378,
  height: 87,
  
};
var menuBts = [];

var newGame = Object.create(menuBt);
newGame.x = 200;
newGame.y = 330;
menuBts.push(newGame);

var contGame = Object.create(menuBt);
contGame.sourceY = 109;
contGame.y = 430;
menuBts.push(contGame);

var setting = Object.create(menuBt);
setting.sourceY = 218;
setting.y = 530;
menuBts.push(setting);

var credits = Object.create(menuBt);
credits.sourceY = 327;
credits.y = 630;
menuBts.push(credits);

var menuBtImg = new Image();
menuBtImg.addEventListener("load", loadHandler, false);
menuBtImg.src = "img/bt_startBts.png";
assetsToLoad.push(menuBtImg);


//character Creation Screen----------
var role = 
{
    x:0,
    y:0,
    width: 0,
    height: 0,
    img: new Image(),
}
var roles = [];
var roleSelectBtn =
{
    x:0,
    y:0,
    width: 0,
    height: 0,
    img: new Image(),
}
var roleSelectBtns = [];
var ariel = Object.create(role);
ariel.x = 100;
ariel.y = 40;
ariel.width = 330;
ariel.height = 504;
ariel.img = new Image();
ariel.img.src = "img/char_ariel.png";
ariel.img.addEventListener("load", loadHandler, false);
roles.push(ariel);
assetsToLoad.push(ariel.img);

var jamie = Object.create(role);
jamie.x = 650;
jamie.y = 130;
jamie.width = 260;
jamie.height = 528;
jamie.img = new Image();
jamie.img.addEventListener("load", loadHandler, false);
jamie.img.src = "img/char_jamie.png";
roles.push(jamie);
assetsToLoad.push(jamie.img);

var liviu = Object.create(role);
liviu.x = 1100;
liviu.y = 40;
liviu.width = 356;
liviu.height = 503;
liviu.img = new Image();
liviu.img.addEventListener("load", loadHandler, false);
liviu.img.src = "img/char_liviu.png";
roles.push(liviu);
assetsToLoad.push(liviu.img);

//character profile
var roleProf = {
    x: 800,
    y: 350,
    width: 297,
    height: 357,
    image: null
}
var profiles = [];
var arielPro = Object.create(roleProf);
arielPro.image = new Image();
arielPro.image.addEventListener("load", loadHandler, false);
arielPro.image.src = "img/img_arielIntro.png";
profiles.push(arielPro);
assetsToLoad.push(arielPro.image);

var jamiePro = Object.create(roleProf);
jamiePro.image = new Image();
jamiePro.image.addEventListener("load", loadHandler, false);
jamiePro.image.src = "img/img_jamieIntro.png";
profiles.push(jamiePro);
assetsToLoad.push(jamiePro.image);

var liviuPro = Object.create(roleProf);
liviuPro.image = new Image();
liviuPro.image.addEventListener("load", loadHandler, false);
liviuPro.image.src = "img/img_liviuIntro.png";
profiles.push(liviuPro);
assetsToLoad.push(liviuPro.image);

//character screen btns
var nameInput = Object.create(roleSelectBtn);
nameInput.x = 630;
nameInput.y = 50;
nameInput.width = 386;
nameInput.height = 62;
nameInput.img = new Image();
nameInput.img.addEventListener("load", loadHandler, false);
nameInput.img.src = "img/bt_inputName.png";
roleSelectBtns.push(nameInput);
assetsToLoad.push(nameInput.img);

var arrowLeft = Object.create(roleSelectBtn);
arrowLeft.x = 530;
arrowLeft.y = 550;
arrowLeft.width = 103;
arrowLeft.height = 93;
arrowLeft.img = new Image();
arrowLeft.img.addEventListener("load", loadHandler, false);
arrowLeft.img.src = "img/bt_arrowL.png";
roleSelectBtns.push(arrowLeft);
assetsToLoad.push(arrowLeft.img);

var arrowRight = Object.create(roleSelectBtn);
arrowRight.x = 970;
arrowRight.y = 550;
arrowRight.width = 103;
arrowRight.height = 93;
arrowRight.img = new Image();
arrowRight.img.addEventListener("load", loadHandler, false);
arrowRight.img.src = "img/bt_arrowR.png";
roleSelectBtns.push(arrowRight);
assetsToLoad.push(arrowRight.img);

var confirm = Object.create(roleSelectBtn);
confirm.x = 650;
confirm.y = 640;
confirm.width = 312;
confirm.height = 100;
confirm.img = new Image();
confirm.img.addEventListener("load", loadHandler, false);
confirm.img.src = "img/bt_confirm.png";
roleSelectBtns.push(confirm);
assetsToLoad.push(confirm.img);

var back = Object.create(roleSelectBtn);
back.x = 1380;
back.y = 620;
back.width = 166;
back.height = 93;
back.img = new Image();
back.img.addEventListener("load", loadHandler, false);
back.img.src = "img/bt_back.png";
roleSelectBtns.push(back);
assetsToLoad.push(back.img);

//credit screen-----------
var creditTxt = {
    sourceX:0,
    sourceY:0,
    sourceWidth:532,
    sourceHeight:300,
    x: 200,
    y: 45,
    width:532,
    height:3038,
    image: null
}

creditTxt.image = new Image();
creditTxt.image.addEventListener("load", loadHandler, false);
creditTxt.image.src = "img/img_credit.png";
assetsToLoad.push(creditTxt.image);

//pause menu screen-----------
var board = new Image();
board.addEventListener("load", loadHandler, false);
board.src = "img/bg_board.png";
assetsToLoad.push(board);

var closeButton = {
    x:1455,
    y:55,
    width:78,
    height:78,
}
var closeBtn = new Image();
closeBtn.addEventListener("load", loadHandler, false);
closeBtn.src = "img/bt_close.png";
assetsToLoad.push(closeBtn);

//setting menu left tabs
var setTab = {
    sourceX: 0,
    sourceY: 0,
    sourceWidth: 235,
    sourceHeight: 110,
    x: 42,
    y: 95,
    width: 235,
    height: 110,
}
var setTabs =[];

var graphics = Object.create(setTab);
graphics.sourceHeight = 117;
graphics.height = 117;
setTabs.push(graphics);

var audio = Object.create(setTab);
audio.sourceY = 115;
audio.y = 205;
setTabs.push(audio);

var keyMap = Object.create(setTab);
keyMap.sourceY = 225;
keyMap.y = 315;
setTabs.push(keyMap);

var gameplay = Object.create(setTab);
gameplay.sourceY = 335;
gameplay.y = 425;
setTabs.push(gameplay);

var Accessibility = Object.create(setTab);
Accessibility.sourceY = 445;
Accessibility.y = 530;
Accessibility.sourceHeight = 115;
setTabs.push(Accessibility);

var setTabImg = new Image();
setTabImg.addEventListener("load", loadHandler, false);
setTabImg.src = "img/bt_settingTab.png";
assetsToLoad.push(setTabImg);

//pause screen tabs---
var pauseTab = {
    sourceX: 0,
    sourceY: 0,
    sourceWidth: 357,
    sourceHeight: 85,
    x: 340,
    y: 30,
    width: 360,
    height: 85,
    
}
var pauseTabs =[];
var setting = Object.create(pauseTab);
pauseTabs.push(setting);

var inventory = Object.create(pauseTab);
inventory.sourceX = 360;
inventory.x = 720;
pauseTabs.push(inventory);

var missions = Object.create(pauseTab);
missions.sourceX = 716;
missions.x = 1095;
pauseTabs.push(missions);

var pauseTabImg = new Image();
pauseTabImg.addEventListener("load", loadHandler, false);
pauseTabImg.src = "img/bt_pauseTab.png";
assetsToLoad.push(pauseTabImg);

//pause screen tab selected (white text)
var pauseHover = {
    sourceX: 0,
    sourceY: 105,
    sourceWidth: 357,
    sourceHeight: 85,
    x: 340,
    y: 30,
    width: 360,
    height: 85,
}
var pauseHovers = [];

var settingHover = Object.create(pauseHover);
pauseHovers.push(settingHover);

var invenHover = Object.create(pauseHover);
invenHover.sourceX = 360;
invenHover.x = 720;
pauseHovers.push(invenHover);

var missionHover = Object.create(pauseHover);
missionHover.sourceX = 716;
missionHover.x = 1095;
pauseHovers.push(missionHover);

//invertory screen-----
var inventImg = new Image();
inventImg.addEventListener("load", loadHandler, false);
inventImg.src = "img/img_inventoryScreen.png";
assetsToLoad.push(inventImg);

//mission screen------
var misImg = new Image();
misImg.addEventListener("load", loadHandler, false);
misImg.src = "img/img_missionScreen.png";
assetsToLoad.push(misImg);

//setting menu tab selected (white text)
var setHover = {
    sourceX: 283,
    sourceY: 0,
    sourceWidth: 260,
    sourceHeight: 110,
    x: 42,
    y: 95,
    width: 260,
    height: 110,
}
var setHovers =[];

var graphHover = Object.create(setHover);
graphHover.sourceHeight = 117;
graphHover.height = 117;
setHovers.push(graphHover);

var audioHover = Object.create(setHover);
audioHover.sourceY = 115;
audioHover.y = 205;
setHovers.push(audioHover);

var keyMapHover = Object.create(setHover);
keyMapHover.sourceY = 225;
keyMapHover.y = 315;
setHovers.push(keyMapHover);

var gameplayHover = Object.create(setHover);
gameplayHover.sourceY = 335;
gameplayHover.y = 425;
setHovers.push(gameplayHover);

var AccessHover = Object.create(setHover);
AccessHover.sourceY = 445;
AccessHover.y = 530;
AccessHover.sourceHeight = 115;
setHovers.push(AccessHover);

//graphics settings screen----------
var graphItems = ["Screen Mode", "Resolution", "Anti-Aliasing", "Brightness", "Contrast"];
var graphItemsY = [150, 250, 350, 450, 570];

var radioBt = [];
var rows = 4;
var cols = 3;
var xSpace = 290;
var ySpace = 110;
var initialPosX = 550;
var initialPosY = 160;
for (var i = 0; i < rows; i++) {
    radioBt[i] = [];
    for (var j = 0; j < cols; j++) {
        var tempRadio = {
            sourceX:0,
            sourceY:42,
            sourceWidth:39,
            sourceHeight:39,
            x: j * xSpace + initialPosX,
            y: i * ySpace + initialPosY,
            width:39,
            height:39,
            image: null}
        tempRadio.image = new Image();
        tempRadio.image.addEventListener("load", loadHandler, false);
        tempRadio.image.src = "img/bt_radio.png";
        assetsToLoad.push(tempRadio);
        radioBt[i][j] = tempRadio;
    }
}

var radioClick = {
    x:0,
    y:0,
    width:39,
    height:39
}


var slider = new Image();
slider.addEventListener("load", loadHandler, false);
slider.src = "img/bt_bar.png";
assetsToLoad.push(slider);

var muteBt = new Image();
muteBt.addEventListener("load", loadHandler, false);
muteBt.src = "img/bt_audio.png";
assetsToLoad.push(muteBt);

var dragBt = new Image();
dragBt.addEventListener("load", loadHandler, false);
dragBt.src = "img/bt_drag.png";
assetsToLoad.push(dragBt);

var options = [
    ["Windowed", "Full Screen", "Window Full Screen"],
    ["Low","Medium","High"],
    ["Low","Medium","High"]
];

// audio setting screen ------
var audioItems = ["BGM", "SFX", "Ambience", "UI Sound", "Voice"];
var audioItemsY = [150, 270, 390, 510, 630];

// key map screen ------
var keyMapItems = ["Movement", "Confirm/ Pick / Select / Fire", "Cancel / Back"];
var keyMapItemsY = [150, 350, 550];
var keyMapImg = new Image();
keyMapImg.addEventListener("load", loadHandler, false);
keyMapImg.src = "img/img_keymap.png";
assetsToLoad.push(keyMapImg);

// gameplay setting screen ------
var gameplayItems = ["Auto Save", "Showing Tips When Loading", "Tutorial", "Display Map", "HUD Opacity"];
var gameplayItemsY = [150, 250, 350, 450, 580];
var optionTaggles = [
    ["On","Off"],
    ["On","Off"],
    ["On","Off"],
    ["On","Off"]
]

// Accessibility setting screen ------
var accessItems = ["Text Size", "Cursor Size", "Subtitles", "Cursor Sensitivity"];
var accessItemsY = [150, 260, 370, 480];
var AcesOption = [
    ["Normal","Bigger","Biggest"],
    ["Normal","Bigger","Biggest"],
    ["On","Off"],
]

// game hud not implement yet

// Full screen map-----
var fullMap = new Image();
fullMap.addEventListener("load", loadHandler, false);
fullMap.src = "img/img_fullMap.png";
assetsToLoad.push(fullMap);

// stamp book screen-----
var stampBook  = new Image();
stampBook.addEventListener("load", loadHandler, false);
stampBook.src = "img/img_stampBook.png";
assetsToLoad.push(stampBook);

// game over screen------
var die = new Image();
die.addEventListener("load", loadHandler, false);
die.src = "img/img_die.png";
assetsToLoad.push(die);

var dieBtn = {
    sourceX: 0,
    sourceY: 0,
    sourceWidth: 512,
    sourceHeight: 94,
    x: 940,
    y: 180,
    width: 512,
    height: 94,
}
var dieBtns = [];

var fromSave = Object.create(dieBtn);
dieBtns.push(fromSave);

var reStart = Object.create(dieBtn);
reStart.sourceY = 108;
reStart.y = 300;
dieBtns.push(reStart);

var gameEndBtn = new Image();
gameEndBtn.addEventListener("load", loadHandler, false);
gameEndBtn.src = "img/bt_gameover.png";
assetsToLoad.push(gameEndBtn); 


function loadHandler()
{ 
    assetsLoaded++;
    //console.log(assetsLoaded);
    if(assetsLoaded === assetsToLoad.length)
    {
        render();
    }
}

//HUD ------------
//Player status
var hudObj ={
    sourceX: 0,
    sourceY: 0,
    sourceWidth: 320,
    sourceHeight: 130,
    x: 50,
    y: 50,
    width: 320,
    height: 130,
    image: null
}

var emptyMeter = Object.create(hudObj);
emptyMeter.image = new Image();
emptyMeter.image.addEventListener("load", loadHandler, false);
emptyMeter.image.src = "img/hud_emptyBar.png";
assetsToLoad.push(emptyMeter.image);

var meterBar = new Image();
meterBar.addEventListener("load", loadHandler, false);
meterBar.src = "img/hud_fullBar.png";
assetsToLoad.push(meterBar);

var vehicleFullThermo = new Image();
vehicleFullThermo.addEventListener("load", loadHandler, false);
vehicleFullThermo.src = "img/hud_vehicleFull.png";
assetsToLoad.push(vehicleFullThermo);

var vehicleFullBar = Object.create(hudObj);
vehicleFullBar.sourceX = 102;
vehicleFullBar.sourceY = 80;
vehicleFullBar.sourceWidth = 10;  //max=160
vehicleFullBar.sourceHeight = 30;
vehicleFullBar.x = 152;
vehicleFullBar.y = 130;
vehicleFullBar.width = 10;     //max=160
vehicleFullBar.height = 30;
vehicleFullBar.image = vehicleFullThermo;

var vehicleEmptyBar = Object.create(hudObj);
vehicleEmptyBar.sourceWidth = 320;
vehicleEmptyBar.width = 320;
vehicleEmptyBar.image = new Image();
vehicleEmptyBar.image.addEventListener("load", loadHandler, false);
vehicleEmptyBar.image.src = "img/hud_vehicleEmpty.png";
assetsToLoad.push(vehicleEmptyBar.image);

var meters = [];

var hpBar = Object.create(hudObj);
hpBar.sourceX = 93;
hpBar.sourceY = 17;
hpBar.sourceWidth = 130; //max=205
hpBar.sourceHeight = 25;
hpBar.x = 143;
hpBar.y = 67;
hpBar.width = 130;
hpBar.height = 25;
hpBar.image = meterBar;
meters.push(hpBar);

var epBar = Object.create(hudObj);
epBar.sourceX = 117;
epBar.sourceY = 49;
epBar.sourceWidth = 135; //max=162
epBar.sourceHeight = 25;
epBar.x = 167;
epBar.y = 99;
epBar.width = 135; //max=162
epBar.height = 25;
epBar.image = meterBar;
meters.push(epBar);

var expBar = Object.create(hudObj);
expBar.sourceX = 99;
expBar.sourceY = 81;
expBar.sourceWidth = 120; //max=162
expBar.sourceHeight = 25;
expBar.x = 149;
expBar.y = 131;
expBar.width = 120;    //max=162     
expBar.height = 25;
expBar.image = meterBar;
meters.push(expBar);

//weapon
var wpBig = {
    sourceX: 0,
    sourceY: 0,
    sourceWidth: 180,
    sourceHeight: 180,
    x: 0,
    y: 588,
    width: 180,
    height: 180,
    image : null,
}
var weaponOns = [];

var wpBig01 = Object.create(wpBig);
wpBig01.image = new Image();
wpBig01.image.addEventListener("load", loadHandler, false);
wpBig01.image.src = "img/wp_weaponBig1.png";
weaponOns.push(wpBig01);
assetsToLoad.push(wpBig01.image);

var wpBig02 = Object.create(wpBig);
wpBig02.image = new Image();
wpBig02.image.addEventListener("load", loadHandler, false);
wpBig02.image.src = "img/wp_weaponBig2.png";
weaponOns.push(wpBig02);
assetsToLoad.push(wpBig02.image);

var wpBig03 = Object.create(wpBig);
wpBig03.image = new Image();
wpBig03.image.addEventListener("load", loadHandler, false);
wpBig03.image.src = "img/wp_weaponBig3.png";
weaponOns.push(wpBig03);
assetsToLoad.push(wpBig03.image);

var wpBig04 = Object.create(wpBig);
wpBig04.image = new Image();
wpBig04.image.addEventListener("load", loadHandler, false);
wpBig04.image.src = "img/wp_weaponBig4.png";
weaponOns.push(wpBig04);
assetsToLoad.push(wpBig04.image);

var wpWheel = {
    sourceX: 0,
    sourceY: 0,
    sourceWidth: 333,
    sourceHeight: 324,
    x: 0,
    y: 444,
    width: 333,
    height: 324,
    image : null,
}
var wpWheels = [];

var wpWhell01 = Object.create(wpWheel);
wpWhell01.image = new Image();
wpWhell01.image.addEventListener("load", loadHandler, false);
wpWhell01.image.src = "img/wp_weaponWheel1.png";
wpWheels.push(wpWhell01);
assetsToLoad.push(wpWhell01.image);

var wpWhell02 = Object.create(wpWheel);
wpWhell02.image = new Image();
wpWhell02.image.addEventListener("load", loadHandler, false);
wpWhell02.image.src = "img/wp_weaponWheel2.png";
wpWheels.push(wpWhell02);
assetsToLoad.push(wpWhell02.image);

var wpWhell03 = Object.create(wpWheel);
wpWhell03.image = new Image();
wpWhell03.image.addEventListener("load", loadHandler, false);
wpWhell03.image.src = "img/wp_weaponWheel3.png";
wpWheels.push(wpWhell03);
assetsToLoad.push(wpWhell03.image);

var wpWhell04 = Object.create(wpWheel);
wpWhell04.image = new Image();
wpWhell04.image.addEventListener("load", loadHandler, false);
wpWhell04.image.src = "img/wp_weaponWheel4.png";
wpWheels.push(wpWhell04);
assetsToLoad.push(wpWhell04.image);

var wpSelected = {
    x:58,
    y:513,
    r:48,
}
var wpSelections = [];
var wpSmall1 = Object.create(wpSelected);
wpSelections.push(wpSmall1);

var wpSmall2 = Object.create(wpSelected);
wpSmall2.x = 166;
wpSmall2.y = 522;
wpSelections.push(wpSmall2);

var wpSmall3 = Object.create(wpSelected);
wpSmall3.x = 248;
wpSmall3.y = 597;
wpSelections.push(wpSmall3);

var wpSmall4 = Object.create(wpSelected);
wpSmall4.x = 258;
wpSmall4.y = 704;
wpSelections.push(wpSmall4);

//minimap---------
var minimapImg = new Image();
minimapImg.addEventListener("load", loadHandler, false);
minimapImg.src = "img/img_minimap.png";
assetsToLoad.push(minimapImg);

var minimap ={
    x:1178,
    y:512,
    width:455,
    height:257,
    image:minimapImg
}