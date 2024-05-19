window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var canvas, ctx;
var center = {};
export var dots = [];
export var density = 70;
export var colors = ['#eeb900', '#6DD0A5', '#f799db'];
export var baseSize = 3;
export var speed = 2;
export var enemy_position;

canvas = document.querySelector('#background');
canvas.setAttribute("width", canvas.parentElement.offsetWidth);
canvas.setAttribute("height", canvas.parentElement.offsetHeight);


var enemy_img = '/img/enemy.png';

function enemy(x, y, img) {
    const image = new Image();
    image.src = img;
    ctx.drawImage(image, x, y);
}

export function initBackground() {
    canvas = document.querySelector('#background');
    ctx = canvas.getContext('2d');

    canvas.setAttribute("width", canvas.parentElement.offsetWidth);
    canvas.setAttribute("height", canvas.parentElement.offsetHeight);

    center.x = canvas.width / 2;
    center.y = canvas.height / 2;

    dots = []; // Reset dots array
    for (var i = 0; i < density; i++) {
        dots.push(new Dot());
    }

    enemy_position = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
    };

    updateBackground();
}

function updateBackground() {
    requestAnimFrame(updateBackground);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (var i = 0; i < density; i++) {
        dots[i].update();
    }

    enemy(enemy_position.x, enemy_position.y, enemy_img);
}

function Dot() {
    this.size = Math.floor(Math.random() * 6) + baseSize;
    this.color = colors[~~(Math.random() * 3)];
    this.pos = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
    };
    this.vec = {
        x: 0,
        y: 0
    };
}

Dot.prototype.update = function() {
    this.draw();

    this.pos.x += this.vec.x;
    this.pos.y += this.vec.y;

    if (this.pos.x > canvas.width + 10) {
        this.pos.x = -5;
    } else if (this.pos.x < 0 - 10) {
        this.pos.x = canvas.width + 5;
    } else if (this.pos.y > canvas.height + 10) {
        this.pos.y = -5;
    } else if (this.pos.y < 0 - 10) {
        this.pos.y = canvas.height + 5;
    }
};

Dot.prototype.draw = function() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2 * Math.PI, false);
    ctx.fill();
};
