import * as PIXI from 'pixi.js'

const windowSize = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
}

var app = new PIXI.Application(windowSize.width, windowSize.height);
document.body.appendChild(app.view);

// Create background image
var background = PIXI.Sprite.fromImage("/static/background.jpg");
background.width = app.screen.width;
background.height = app.screen.height;
app.stage.addChild(background);

let clock = [];

for (let k = 1; k <= 3; k++){
  clock[k-1] = new Array();
  for(let i = 1; i <= 6; i++){
    let graphics = new PIXI.Graphics();
    graphics.lineStyle(0);
    graphics.beginFill(0xFFFFFF, 0.5);
    graphics.drawCircle(i*300, k*200, 75);
    graphics.endFill();
    clock[k-1].push(graphics);
    app.stage.addChild(graphics);
  }
}

setInterval(() => {
  var msecs = new Date().getTime();
  console.log(msecs);
}, 1000);
