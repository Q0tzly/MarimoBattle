'use strict';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var center.x = canvas.width / 2;
var center.y = canvas.height / 2;

/*
document.addEventListener('onmousemove', onmousemove);
onmousemove = function(e) {
  mx = e.pageX; my = e.pageY;
}

document.addEventListener('onmouseout', onmouseout);
onmouseout = function(e) {
  mx = center.x; my = center.y;
}
*/

window.addEventListener("load", update);

function update() {  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var image = new Image();
  image.src = "/img/marimo1.png";
  ctx.drawImage(image, center.x, center.y, imageWidth, imageHeight);

  window.requestAnimationFrame(update);
}
