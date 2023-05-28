const column=document.querySelectorAll('.column')
let statusScreen=document.getElementById("status");
let restartbtn=document.getElementById("restart")
let winConditions=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
      ];
let options= new Array(9).fill(" ");
let player="X";

CheckClick()
function CheckClick(){
      column.forEach(col=>col.addEventListener("click",
      UpdateBoard,{once:true}))
      restartbtn.addEventListener("click",RestartGame);
}

function UpdateBoard(){
      this.innerText=player;
      cellIndex=this.id;
      if(options[cellIndex]!==""){
            options[cellIndex]=player;
      }
      player=player=="X"?"O":"X";
      statusScreen.innerText=`${player}'s turn`;
      let winner=CheckWin();
      console.log(winner);
}
function CheckWin(){
      let roundwon=false;
      for(let i=0;i<winConditions.length;i++){
            condition=winConditions[i];
            cellA=options[condition[0]];
            cellB=options[condition[1]];
            cellC=options[condition[2]];
            console.log(cellA,cellB,cellC)
            if(cellA==" " || cellB ==" " || cellC==" "){
                  continue;

            }
            else if(cellA==cellB && cellB==cellC){
                  roundwon=true
                  break;
            }
      }
      if(roundwon){
            statusScreen.innerText=`${cellA} won`;
            roundwon=false;
      }
      else if(!player.includes("")){
            statusScreen.innerText="Draw"
      }
}

function RestartGame(){
      player="X";
      options=[" "," "," "," "," "," "," "," "," "];
      statusScreen.innerText="X's turn";
      column.forEach((col)=>{
            col.innerText="";
      })
}
