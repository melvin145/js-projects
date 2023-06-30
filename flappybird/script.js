const bird=document.querySelector(".bird");
const gameContainer=document.querySelector(".game__container");
const ground=document.querySelector(".ground");
let gravity=2;
let BirdBottom=200;

gameContainer.addEventListener('click',MoveBird);

function StartGame(){
      BirdBottom-=gravity;
      console.log(BirdBottom)
      bird.style.bottom=BirdBottom+"px";
}

setInterval(StartGame,100);
function MoveBird(){
      BirdBottom+=70;
      bird.style.bottom=BirdBottom+"px";
}


function CreateObstacle(){
      let obstacleTop=document.createElement;
      let obstaclebottom=document.createElement('div');


}

function GameOver(){
      console.log(BirdBottom);
      if(BirdBottom<50){
            console.log('gameover');
      }
}