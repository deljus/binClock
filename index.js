import * as PIXI from 'pixi.js';

const windowSize = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
};

var app = new PIXI.Application(windowSize.width, windowSize.height);
document.body.appendChild(app.view);

// Create background image
var background = PIXI.Sprite.fromImage("/static/background.jpg");
background.width = app.screen.width;
background.height = app.screen.height;
app.stage.addChild(background);

let clock = [];
let positions = [];

for (let k = 1; k <= 3; k++){
  clock[k-1] = [];
  positions[k-1] = [];
  for(let i = 1; i <= 6; i++){
    let graphics = new PIXI.Graphics();
    //graphics.lineStyle(0);
    graphics.beginFill(0x000000, 0.5);
    graphics.drawCircle(i*300, k*200, 75);
    graphics.endFill();
    clock[k-1].push(graphics);
    positions[k-1].push([i*300, k*200, 75]);
    app.stage.addChild(graphics);
  }
}

const intToBinArr = (num) => {
    let binNum = num.toString(2)
                    .split("")
                    .map(e => Number(e));
    const delta = 6 - binNum.length;



    return binNum;
    //return arr.map((e,i) => binNum[i]? Number(binNum[i]): 0);
};

setInterval(() => {
  let date = new Date();
  let seconds = intToBinArr(date.getSeconds());
  console.log(seconds)
  // seconds.forEach((item, i) => {
  //     if(item){
  //         clock[0][i].clear();
  //         clock[0][i].beginFill(0xFFFFFF, 0.5);
  //         clock[0][i].drawCircle(...positions[0][i]);
  //     } else {
  //         clock[0][i].clear();
  //         clock[0][i].beginFill(0x000000, 0.5);
  //         clock[0][i].drawCircle(...positions[0][i]);
  //     }
  // });
}, 1000);
