function Momentum1(){
var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

var rect = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    speedY: 1 // Tốc độ di chuyển theo trục y
};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

    rect.y += rect.speedY;

    requestAnimationFrame(draw);
}

draw();
}






function Momentum2(){
var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

var circle = {
    x: 50,
    y: 50,
    radius: 20,
    speedX: 1, // Tốc độ di chuyển theo trục x
    speedY: 1  // Tốc độ di chuyển theo trục y
};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fill();

    circle.x += circle.speedX;
    circle.y += circle.speedY;

    requestAnimationFrame(draw);
}

draw();
}




