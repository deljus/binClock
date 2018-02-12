import * as PIXI from 'pixi.js';

const {
    loader,
    Sprite,
    Application,
    TextureCache,
} = PIXI;


let app = new Application({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    antialias: true,
    transparent: false,
    resolution: 1
});

document.body.appendChild(app.view);

let clock = [];
let border = 50;

function intToBinArr(num, len = 5) {
    let binNum = num.toString(2)
        .split("")
        .map(e => Number(e));
    for(let i = binNum.length; i <= len; i++){ binNum.unshift(0) };
    return binNum;
};

function setup() {
    let backgroundTexture = TextureCache["background.jpg"];
    let background = new Sprite(backgroundTexture);
    app.stage.addChild(background);

    let bulbOnTexture = TextureCache["on.png"];
    let bulbOffTexture = TextureCache["off.png"];;

    for (let k = 0; k < 3; k++){
      clock[k] = [];
      for(let i = 0; i < 6; i++){

        let bulb = new Sprite(bulbOffTexture);

        bulb.x = border + i * 50;
        bulb.y = border + k * 50;
          bulb.width = 32;
          bulb.height = 32;

        clock[k].push(bulb);
        app.stage.addChild(bulb);
      }
    }


    app.ticker.add(() => {
        let date = new Date();
        let time = { hours:   intToBinArr(date.getHours()),
                     minutes: intToBinArr(date.getMinutes()),
                     seconds: intToBinArr(date.getSeconds()) };

        Object.keys(time).forEach((key, k) => {
            time[key].forEach((item, i) => {
                clock[k][i].texture = (item) ? bulbOnTexture: bulbOffTexture;
            });
        });
    });
}


loader
    .add("/static/texture.json")
    .load(setup);


