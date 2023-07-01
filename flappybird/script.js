const bird=document.querySelector(".bird");
const gameContainer=document.querySelector(".game__container");
const ground=document.querySelector(".ground");
let gravity=2;
let BirdBottom=200;

gameContainer.addEventListener('click',MoveBird);
function StartGame(){
      BirdBottom-=gravity;
      bird.style.bottom=BirdBottom+"px";
}

setInterval(StartGame,100);
function MoveBird(){
      BirdBottom+=70;
      bird.style.bottom=BirdBottom+"px";
}


function CreateObstacle(){
      let obstacleLeft=300;
      let obstacleTop=document.createElement('div');
      obstacleTop.classList.add('obstacletop');
      let obstaclebottom=document.createElement('div');
      obstaclebottom.classList.add('obstaclebottom');
      obstacleTop.style.height=Math.random()*300 +'px'
      obstacleTop.style.left=obstacleLeft + 'px';
      obstaclebottom.style.left=obstacleLeft + 'px';
      gameContainer.appendChild(obstacleTop);
      gameContainer.appendChild(obstaclebottom);
      setInterval(MoveObstacle,1000);
      function MoveObstacle(){
            obstacleLeft-=20;
            obstacleTop.style.left=obstacleLeft + 'px';
            obstaclebottom.style.left=obstacleLeft + 'px'
             if(obstacleLeft==-50){
                  clearInterval(timerId);
                  gameContainer.removeChild(obstacleTop);
                  gameContainer.removeChild(obstaclebottom);
            }
      }
}
function GameOver(){
      console.log(BirdBottom);
      if(BirdBottom<50){
            console.log('gameover');
      }
}