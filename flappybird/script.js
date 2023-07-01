const bird=document.querySelector(".bird");
const gameContainer=document.querySelector(".game__container");
const ground=document.querySelector(".ground");
let gravity=2;
let BirdBottom=200;

gameContainer.addEventListener('click',MoveBird);
CreateObstacle();
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
      let obstacleTop='<div class="obstacletop"></div';
      let obstaclebottom='<div class="obstaclebottom></div>';
      console.log(obstacleTop)
      gameContainer.insertAdjacentHTML("afterbegin",obstacleTop);
      gameContainer.insertAdjacentHTML("afterbegin",obstaclebottom);
}

function GameOver(){
      console.log(BirdBottom);
      if(BirdBottom<50){
            console.log('gameover');
      }
}