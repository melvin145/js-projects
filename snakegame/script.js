const gameBoard=document.getElementById("gameBoard");
const scoreboard=document.getElementById("score");
const snake=[{x:60,y:50},{x:55,y:50},{x:50,y:50},{x:45,y:50}]
let score=0;
let foodx;
let foody;
let running=true;
let dx=5;
let dy=0;
const ctx=gameBoard.getContext("2d");
document.addEventListener("keydown",change__direction);

main();
function main(){
      if(running==true){
      setInterval(
            function StartGame(){
                  Clearboard();
                  MoveSnake();
                  DrawSnake();
                  checkGame();
                  DrawFood();
                  CheckGameOver();
            },1000/7,
      )}
      }
      CreateFood();

function Clearboard(){
      ctx.fillStyle="white";
      ctx.fillRect(0,0,gameBoard.width,gameBoard.height);
}
function DrawSnake(){
      const snake_color="green";
      const snake_width=6;
      const snake_height=6;
      ctx.fillStyle=snake_color;
      snake.forEach((s)=>{
            ctx.fillRect(s['x'],s['y'],snake_width,snake_height);
      })
}
function MoveSnake(){
      const head={x:snake[0].x+dx,y:snake[0].y+dy}
      snake.unshift(head);
      if(snake[0].x==foodx && snake[0].y==foody){
            score+=1;
            scoreboard.innerText=score
            CreateFood();
      }
      else{
      snake.pop();
      }
}
function change__direction(event){
      const LEFT_KEY=37;
      const RIGHT_KEY=39;
      const UP_KEY=38;
      const DOWN_KEY=40;
      const keypressed=event.keyCode;
      let goingright=dx===10;
      let goingleft=dx===-10;
      let goingup=dy==-5;
      let goingdown=dy===5;

      if(keypressed==LEFT_KEY && !goingright){
            dx=-5;
            dy=0;
      }
      if(keypressed==UP_KEY && !goingdown){
            dx=0;
            dy=-5;
      }
      if (keypressed === DOWN_KEY && !goingup)
      {    
           dx = 0;
           dy = 5;
      }
      if( keypressed==RIGHT_KEY && !goingleft){
            dx=5;
            dy=0;
      }
}

function DrawFood(){
      ctx.fillStyle="Red";
      ctx.fillRect(foodx,foody,6,6);
}
function CreateFood(){
      function randomFood(min,max){
            return Math.round((Math.random() * (max-min)+min)/10)*10;
      }
      foodx=randomFood(0,gameBoard.width-40);
      foody=randomFood(0,gameBoard.height-40);
      console.log(foodx)
      console.log(foody)
}

function checkGame(){
      if(snake[0].x>=gameBoard.width){
            console.log("helo");
      }
}
function CheckGameOver(){
      switch(true){
            case (snake[0].x>gameBoard.width):
                  console.log("heloo");
                  running=false;
                  break;
            case(snake[0].x<0):
                  running=false;
                  break;
            case(snake[0].y>gameBoard.height):
                  running=false;
                  break;
            case(snake[0].y<0):
                  running=false;
                  break;
      }
      for(let i=1;i<snake.length;i++){
            if(snake[0].x==snake[i].x && snake[0].y==snake[i].y){
                  running=false;
                  break;
            }
      }
}