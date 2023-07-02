

let Board=document.getElementById("gameContainer");
console.log(Board.width);
console.log(Board.height);
let BirdWidth=14;
let BirdHeight=10;
let birdX=Board.width/8;
let birdY=Board.height/2;
let birdImage;
let gravity=3;
let ctx=gameContainer.getContext('2d');



window.onload=()=>{
      birdImage=new Image();
      birdImage.src='./flappybird.png'
      birdImage.onload=()=>{
      ctx.drawImage(birdImage,birdX,birdY,BirdWidth,BirdHeight)}
      update();

}

function update(){
      requestAnimationFrame(update)
      ctx.clearRect(0,0,Board.width,Board.height);
      ctx.drawImage(birdImage,birdX,birdY,BirdWidth,BirdHeight)

}