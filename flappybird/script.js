

let Board=document.getElementById("gameContainer");
console.log(Board.width);
console.log(Board.height);
let BirdWidth=14;
let BirdHeight=10;
let birdX=Board.width/8;
let birdY=Board.height/2;
let birdImage;


let TopPipeImg;
let BottomPipeImg;
let pipeWidth=20;
let pipeHeight=100;
let pipex=300;
let pipey=0;
let pipeArray=[];
let xVelcoity=-2;
let score=0;
let gameOver=false;

let gravity=0.5;
let ctx=gameContainer.getContext('2d');

let bird={
      'x':birdX,
      'y':birdY,
      'width':BirdWidth,
      'height':BirdHeight,
}



window.onload=()=>{
      birdImage=new Image();
      birdImage.src='./flappybird.png'
      birdImage.onload=()=>{
      ctx.drawImage(birdImage,bird.x,bird.y,bird.y,bird.height)}
      update();
      TopPipeImg=new Image()
      TopPipeImg.src='toppipe.png';
      BottomPipeImg=new Image();
      BottomPipeImg.src="bottompipe.png"
      setInterval(PlacePipe,1500);
      Board.addEventListener('click',MoveBird);

}

function update(){
      requestAnimationFrame(update)
      bird.y+=gravity; 
      ctx.clearRect(0,0,Board.width,Board.height);
      ctx.drawImage(birdImage,bird.x,bird.y,bird.width,bird.height);

      for(let i=0;i<pipeArray.length;i++){
            let pipe=pipeArray[i];
            pipe.x+=xVelcoity;
            ctx.drawImage(pipe.img,pipe.x,pipe.y,pipe.width,pipe.height);
      if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 0.5;
            pipe.passed = true;
            }
      
      if (detectCollision(bird, pipe)) {
            gameOver = true;
      }
      }
      while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
            pipeArray.shift(); 
        }
    

        ctx.fillStyle = "white";
        ctx.font="25px sans-serif";
        ctx.fillText(score, 5, 45);
    
        if (gameOver) {
            ctx.fillText("GAME OVER", 5, 90);
        }
}
function MoveBird(){
      bird.y-=20;
      if (gameOver) {
            bird.y = birdY;
            pipeArray = [];
            score = 0;
            gameOver = false;
        }
}


function PlacePipe(){
      if (gameOver) {
            return;
        }
      let randomPipeY = pipey - pipeHeight/4 - Math.random()*(pipeHeight/2);
      let openingspace=Board.height/4
      let toppipe={
            'img':TopPipeImg,
            'x':pipex,
            'y':randomPipeY,
            'width':pipeWidth,
            'height':pipeHeight,
            passed:false,
      }    
      let bottompipe={
            'img':BottomPipeImg,
            'x':pipex,
            'y':randomPipeY+pipeHeight+openingspace,
            'width':pipeWidth,
            'height':pipeHeight,
            passed:false,
      } 

      pipeArray.push(toppipe)
      pipeArray.push(bottompipe);

}
function detectCollision(a, b) {
      return a.x < b.x + b.width && 
             a.x + a.width > b.x &&  
             a.y < b.y + b.height && 
             a.y + a.height > b.y; 
  }