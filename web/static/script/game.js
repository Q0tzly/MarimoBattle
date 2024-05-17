'use strict';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var mx = 0;
var my = 0;

var wx = window.innerWidth;
var wy = window.innerHeight;

var x = 30;
var y = 30;

document.addEventListener('onmousemove', onmousemove);
onmousemove = function(e) {
  mx = e.pageX; my = e.pageY;
}

document.addEventListener('onmouseout', onmouseout);
onmouseout = function(e) {
  mx = wx/2; my = wy;
}

window.addEventListener("load", update);

function update() {  
  ctx.clearRect(0, 0, 9999, 9999);

  if (mx > wx/2) {
    x += 2;
  } else if (mx < wx/2) {
    x -= 2;
  }
  if (my > wy/2) {
    y += 2;
  } else if (my < wy/2) {
    y -=2;
  }

  var image = new Image();
  image.src = "/img/marimo1.png";
  ctx.drawImage(image, x, y, 30, 30);

  window.requestAnimationFrame(update);
}
