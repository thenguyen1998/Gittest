
        const app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0xAAAAAA
        });

        document.body.appendChild(app.view);
        const container = new PIXI.Container();
        app.stage.addChild(container);
        for (let i = 0; i < 3; i++) {
            const sprite = PIXI.Sprite.from('image/player.png');
            sprite.x = i * 200;
            sprite.y = 200;
            container.addChild(sprite);
        }
        let elapsed = 0;

        app.ticker.add((delta) => {
            elapsed += delta;
            
            for (let i = 0; i < container.children.length; i++) {
                const sprite = container.children[i];
                sprite.y = 300 + Math.sin(elapsed * 0.01 + i * 0.5) * 100;
            }
        });

