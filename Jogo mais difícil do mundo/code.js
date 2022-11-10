var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var vida =0;

var rect1 = createSprite(43,190,50,40);
rect1.shapeColor=("yellow");
var rect2 = createSprite(337,189,50,40);
rect2.shapeColor =("blue");
var player = createSprite(50,188,15,15);
player.shapeColor =("green");
var wall1 = createSprite(190,120,250,3);
var wall2 = createSprite(190,260,250,3);
var wall3 = createSprite(67,145,3,50);
var wall4 = createSprite(67,235,3,50);
var wall5 = createSprite(313,145,3,50);
var wall6 = createSprite(313,235,3,50);
var wall7 = createSprite(41,170,50,3);
var wall8 = createSprite(41,210,50,3);
var wall9 = createSprite(337,210,50,3);
var wall10 = createSprite(337,170,50,3);
var wall11 = createSprite(18,190,3,40);
var wall12 = createSprite(361,190,3,40);
var car1 = createSprite(100,148,15,15);
car1.shapeColor=("red");
var car2 = createSprite(156,248,15,15);
car2.shapeColor=("red");
var car3 = createSprite(207,148,15,15);
car3.shapeColor=("red");
var car4 = createSprite(256,248,15,15);
car4.shapeColor=("red");


car1.velocityY = 8;
car2.velocityY = 8;
car3.velocityY = -8;
car4.velocityY = -8;

function draw() {
  background("white");
  drawSprites();
  
  car1.bounceOff(wall1);
  car1.bounceOff(wall2);
  car2.bounceOff(wall1);
  car2.bounceOff(wall2);
  car3.bounceOff(wall1);
  car3.bounceOff(wall2);
  car4.bounceOff(wall1);
  car4.bounceOff(wall2);
  if(keyDown("right")){
    player.x = player.x + 2;
  }
  if(keyDown("left")){
    player.x = player.x - 2;
  }
 if(
     player.isTouching(car1)||
     player.isTouching(car2)||
     player.isTouching(car3)||
     player.isTouching(car4))
     {
  player.x = 50;
  player.y = 190;
  vida = vida + 1;}
  textSize(20); 
  text("Mortes: " + vida,200,100);
  strokeWeight(0);
    
  
  }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
