const gameBoard=document.getElementById("gameBoard");
const snake=[{x:60,y:50},{x:55,y:50},{x:50,y:50},{x:45,y:50}]
let foodx;
let foody;
let dx=5;
let dy=0;
const ctx=gameBoard.getContext("2d");
document.addEventListener("keydown",change__direction);

main();
function main(){
      setInterval(
            function StartGame(){
                  Clearboard();
                  MoveSnake();
                  DrawSnake();
                  checkGame();
                  DrawFood();
            },1000,
      )}
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
      snake.pop();
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
            return Math.round((Math.random() * (max-min)+min)/5)*5;
      }
      foodx=randomFood(0,gameBoard.width);
      foody=randomFood(0,gameBoard.width);
}

function checkGame(){
      console.log(gameBoard.width)
      if(snake[0].x>=gameBoard.width){
            console.log("helo");
      }
}