import { initBackground, dots, speed } from './background.js';

window.onload = function() {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('resize', initBackground);
    initBackground();

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
};
