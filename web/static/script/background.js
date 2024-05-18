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

window.onload = function() {
    var background = document.querySelector('#background');
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');

    var center = {};
    var dots = [];
    var density = 70;
    var colors = ['#eeb900', '#6DD0A5', '#f799db'];
    var baseSize = 3;
    var speed = 2;

    var Dot = function () {
        this.size = Math.floor( Math.random() * 6 ) + baseSize;
        this.color = colors[~~(Math.random() * 3)];
        this.pos = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height
        };
        this.vec = {
            x: 0,
            y: 0
        };
    };
    Dot.prototype = {
        update: function() {
            this.draw();

            this.pos.x += this.vec.x;
            this.pos.y += this.vec.y;

            if(this.pos.x > canvas.width + 10) {
                this.pos.x = -5;
            } else if(this.pos.x < 0 - 10) {
                this.pos.x = canvas.width + 5;
            } else if(this.pos.y > canvas.height + 10) {
                this.pos.y = -5;
            } else if(this.pos.y < 0 - 10) {
                this.pos.y = canvas.height + 5;
            }
        },

        draw: function() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2 * Math.PI, false);
            ctx.fill();
        }
    };

    function update() {
        requestAnimFrame(update);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        for (var i = 0; i < density; i++) {
            dots[i].update();
        }
    }

    function init() {
        canvas.setAttribute("width", background.offsetWidth);
        canvas.setAttribute("height", background.offsetHeight);

        center.x = canvas.width / 2;
        center.y = canvas.height / 2;

        for (var i = 0; i < density; i++) {
            dots.push(new Dot());
        }
        update();
    }

    function handleKeyDown(e) {
        var key = e.key;
        for (var i = 0; i < dots.length; i++) {
            switch (key) {
                case 'ArrowUp':
                case 'w':
                    dots[i].vec.y = speed;
                    break;
                case 'ArrowDown':
                case 's':
                    dots[i].vec.y = -speed;
                    break;
                case 'ArrowLeft':
                case 'a':
                    dots[i].vec.x = speed;
                    break;
                case 'ArrowRight':
                case 'd':
                    dots[i].vec.x = -speed;
                    break;
            }
        }
    }

    function handleKeyUp(e) {
        var key = e.key;
        for (var i = 0; i < dots.length; i++) {
            switch (key) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'w':
                case 's':
                    dots[i].vec.y = 0;
                    break;
                case 'ArrowLeft':
                case 'ArrowRight':
                case 'a':
                case 'd':
                    dots[i].vec.x = 0;
                    break;
            }
        }
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    window.addEventListener('resize', init);
    init();
}
