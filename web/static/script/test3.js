const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");


var imageWidth = 30; 
var imageHeight = 30;
var imageX=canvas.width / 2;
var imageY=canvas.height/ 2;
var speed = 5;

//marimoの座標
var x =0;
var y =0;





document.addEventListener('keydown', onkeydown);
document.addEventListener('keyup', onkeyup);

//キー入力
var keys = [];

function onkeydown(e) {
    keys[e.key] = true;
}

function onkeyup(e) {
    keys[e.key] = false;
}

function update() {

    console.info(x,y);
    if (keys['w'] || keys['ArrowUp']) {
        y += speed;
    }
    if (keys['s'] || keys['ArrowDown']) {
        y -= speed;
    }
    if (keys['a'] || keys['ArrowLeft']) {
        x -= speed;
    }
    if (keys['d'] || keys['ArrowRight']) {
        x += speed;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var image = new Image();
    image.src = "marimo1.png";
    ctx.drawImage(image,imageX,imageY,imageWidth, imageHeight);
    window.requestAnimationFrame(update);
}

window.addEventListener("load", update);

