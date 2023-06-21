const gameBoard=document.getElementById("gameBoard");
const snake=[{x:50,y:50},{x:40,y:50},{x:30,y:50}]
console.log(snake);
const ctx=gameBoard.getContext("2d");

main();

function main(){
      setInterval(
            function StartGame(){
                  Clearboard();
                  MoveSnake();
                  DrawSnake();
            },1000
      )
      }


function Clearboard(){
      ctx.fillStyle="white";
      ctx.fillRect(0,0,gameBoard.width,gameBoard.height);
}
function DrawSnake(){
      const snake_color="Red";
      const snake_width=10;
      const snake_height=5;
      ctx.fillStyle="Red";
      snake.forEach((s)=>{
            ctx.fillRect(s['x'],s['y'],snake_width,snake_height);
      })
}
function MoveSnake(){
      let dx=10;
      let dy=0;
      const head={x:snake[0].x+dx,y:snake[0].y+dy}
      snake.unshift(head);
      snake.pop();
}