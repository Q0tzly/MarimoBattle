import { initBackground, dots, speed, enemy_position } from './background.js';

window.onload = function() {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('resize', initBackground);
    initBackground();

    var move_range = 0;
    var killflag = 1;
    const PlayerImage = document.getElementById('player');
    const meter = document.getElementById('meter');

    function handleKeyDown(e) {
        var key = e.key;
        for (var i = 0; i < dots.length; i++) {
            switch (key) {
                case 'w':
                    dots[i].vec.y = speed;                   
                    enemy_position.y += speed;
                    break;
                case 's':
                    dots[i].vec.y = -speed;
                    enemy_position.y -= speed;
                    break;
                case 'a':
                    dots[i].vec.x = speed;
                    enemy_position.x += speed;
                    break;
                case 'd':
                    dots[i].vec.x = -speed;
                    enemy_position.x -= speed;
                    break;
            }
            move_range += speed;

            meter.max = killflag;
            meter.value = move_range;
        }
        if(killflag>0){
          PlayerImage.src="../../img/marimo1.png"
        }else if(killflag == 0){
          PlayerImage.src="../../img/damage1.png"
        }
        if(move_range > 2000 && killflag <= 0){
          PlayerImage.parentNode.removeChild(PlayerImage);
          console.log("died!");
          window.location.href="/result";
        }
        if(move_range > 2000){
          killflag -= 1;
          move_range = 0;
        }
    }

    function handleKeyUp(e) {
        var key = e.key;
        for (var i = 0; i < dots.length; i++) {
            switch (key) {
                case 'w':
                case 's':
                    dots[i].vec.y = 0;
                    break;
                case 'a':
                case 'd':
                    dots[i].vec.x = 0;
                    break;
            }
        }
    }
};
