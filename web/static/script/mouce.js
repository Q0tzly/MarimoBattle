var cavas = document.getElementById("mycanvas");
var ctx = cavas.getContext("2d");

//後々imgxはランダムに
var imgX = 50;
var imgY = 50;
var imgWidth = 30;
var imgHeight = 30;
const EnemyImage = document.getElementById('Enemy');

//imgがclickされたら
funciton updateImgPosition(mouseX,mouseY){
  imgX = mouseX - imgWidth / 2;
  imgY = mouseY - imgHeight / 2;
  //if(imgX > (playerX - 10) && imgX < (playerX + 10)){
  //}elif(imgY > (playerY - 10) && imgY < (playerY + 10)){
  //killflug +=1;
  EnemyImage.parentNode.removeChild(EnemyImage);
}


if(imgX == enemyX && imgY = enemyY){
  var photoElement = document.getElementById('ememy');
  photoElement.parentNode.removeChild(photoElemnt);
  console.log("killed!");
  //内臓出す
  //display
  //eye1.png = playerX -5
  //eye.png = playerX +5
  //heart.png playerY +=5

}

