function xoay() {
    const ctx = document.getElementById("canvas").getContext("2d");
  

    ctx.save();
  
    ctx.fillStyle = "#0095DD";
    ctx.fillRect(30, 30, 100, 100);
    ctx.rotate((Math.PI / 180) * 25);
    
    ctx.fillStyle = "#4D4E53";
    ctx.fillRect(30, 30, 100, 100);
    ctx.restore();
  
    
    ctx.fillStyle = "#0095DD";
    ctx.fillRect(150, 30, 100, 100);
  
    ctx.translate(100, 300); 
   
    ctx.rotate((Math.PI / 180) * 25); 
    ctx.translate(-200, -80); 
  
    ctx.fillStyle = "#4D4E53";
    ctx.fillRect(150, 30, 100, 100);
  }
  

  
  function chuyển_đổi() {
    const ctx = document.getElementById("canvas").getContext("2d");
  
    const sin = Math.sin(Math.PI / 6);
    const cos = Math.cos(Math.PI / 6);
    ctx.translate(350, 350);
    let c = 0;
    for (let i = 0; i <= 12; i++) {
      c = Math.floor((255 / 12) * i);
      ctx.fillStyle = `rgb(${c} ${c} ${c})`;
      ctx.fillRect(0, 100, 100, 10);
      ctx.transform(cos, sin, -sin, cos, 0, 0);
    }
  
    ctx.setTransform(-1, 0, 0, 1, 100, 100);
    ctx.fillStyle = "rgb(255 128 255 / 50%)";
    ctx.fillRect(0, 50, 100, 100);
  }