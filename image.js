function image() {
   
    var c = document.getElementById("mycanvas");
    var ctx = c.getContext("2d");
 
    var image = new Image();
    image.src = "https://th.bing.com/th/id/OIP.lJdHfJhQ0nAIi1q3BxisugHaEK?pid=ImgDet&w=206&h=116&c=7&dpr=1.3";
  
  
        // ctx.drawImage(image, 100, 10, 100, 100, 100, 100, 10,10);
        ctx.drawImage(image, 150, 150, 200, 200);

}
function khoiphuctrangthai(){
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();

ctx.save();
ctx.beginPath();
ctx.arc(300, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

ctx.restore();
ctx.beginPath();
ctx.arc(500, 100, 50, 0, 2 * Math.PI);
ctx.fill();
}


