
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xAAAAAA
});

document.body.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);

const sprite1 = PIXI.Sprite.from('image/player.png');
sprite1.x = 100;
sprite1.y = 100;
container.addChild(sprite1);
const sprite2 = PIXI.Sprite.from('image/player2.png');
sprite2.x = 200;
sprite2.y = 200;
container.addChild(sprite2);
const childContainer = new PIXI.Container();
container.addChild(childContainer);
const sprite3 = PIXI.Sprite.from('image/player3.png');
sprite3.x = 300;
sprite3.y = 300;
childContainer.addChild(sprite3);
