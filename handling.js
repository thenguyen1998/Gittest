function handling_key(){

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let rect = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    speed: 5
};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
}

function moveRect(event) {
    switch(event.key) {
        case 'ArrowUp':
            rect.y -= rect.speed;
            break;
        case 'ArrowDown':
            rect.y += rect.speed;
            break;
        case 'ArrowLeft':
            rect.x -= rect.speed;
            break;
        case 'ArrowRight':
            rect.x += rect.speed;
            break;
    }
    draw();
}

window.addEventListener('keydown', moveRect);
draw();
}



 function handling_mouse(){
    let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let rect = {
    x: 50,
    y: 50,
    width: 50,
    height: 50
};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
}

function moveRect(event) {
    let rectLeft = canvas.offsetLeft;
    let rectTop = canvas.offsetTop;

    let mouseX = event.clientX - rectLeft;
    let mouseY = event.clientY - rectTop;

    rect.x = mouseX;
    rect.y = mouseY;

    draw();
}

canvas.addEventListener('mousemove', moveRect);
draw();

 }