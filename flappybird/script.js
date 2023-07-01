const bird=document.querySelector(".bird");
const gameContainer=document.querySelector(".game__container");
const ground=document.querySelector(".ground");
let gravity=2;
let BirdBottom=200;
let gap=370;
let birdLeft=320;
let isGameOver=false;

gameContainer.addEventListener('click',MoveBird);
function StartGame(){
      BirdBottom-=gravity;
      bird.style.bottom=BirdBottom+"px";
      bird.style.left=birdLeft +'px';
}


let gameTimerId= setInterval(()=>{StartGame()},100);
function MoveBird(){
      BirdBottom+=70;
      bird.style.bottom=BirdBottom+"px";
}


function CreateObstacle(){
      let obstacleRight=0;
      let obstacleTop=document.createElement('div');
      obstacleTop.classList.add('obstacletop');
      let obstaclebottom=document.createElement('div');
      let randomHeight=Math.random() * 80;
      obstaclebottom.classList.add('obstaclebottom');
      obstacleTop.style.bottom=randomHeight +gap +'px'
      obstaclebottom.style.bottom=randomHeight + 'px';
      obstacleTop.style.right=obstacleRight + 'px';
      obstaclebottom.style.right=obstacleRight + 'px';
      gameContainer.appendChild(obstacleTop);
      gameContainer.appendChild(obstaclebottom);
      function MoveObstacle(){
            obstacleRight+=20;
            obstacleTop.style.right=obstacleRight + 'px';
            obstaclebottom.style.right=obstacleRight + 'px';
             if(obstacleRight>1000){
                  obstacleTop.remove()
                  obstaclebottom.remove();
            }
            if (
                  obstacleRight > 850 && obstacleRight < 920 && birdLeft === 320 &&
                  (BirdBottom < randomHeight + 153 || BirdBottom > randomHeight + gap -200)||
                     BirdBottom === 0
                  ) {
                        console.log('ddd');
                  GameOver()
                  clearInterval(timerId)
              }
      }
      timerId=setInterval(MoveObstacle,200)
      if(!isGameOver)setTimeout(CreateObstacle,3000);

}
CreateObstacle();
function GameOver(){
       clearInterval(gameTimerId)
        console.log('game over')
        isGameOver = true
        gameContainer.removeEventListener('click',MoveBird)
        //ground.classList.add('ground')
        //ground.classList.remove('ground-moving')
}