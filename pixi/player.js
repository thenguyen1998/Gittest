let app, player;

       window.onload = function() {
           app = new PIXI.Application({
               width: 800,
               height: 600,
               backgroundColor: 0xAAAAAA
           });

           document.body.appendChild(app.view);
           
           // Play object
           player = PIXI.Sprite.from("image/player.png"); // Chỉnh sửa đường dẫn tới hình ảnh
           player.anchor.set(0.5);
           player.x = app.view.width / 2;
           player.y = app.view.height / 2;
           app.stage.addChild(player);

           // Mouse interactions
           app.stage.interactive = true;
           app.stage.on("pointermove", movePlayer);
       }

       function movePlayer(e) {
           let pos = e.data.global;
           player.x = pos.x;
           player.y = pos.y;
       }
       function keysDown(e){
        console.log(e.keycode);

       }