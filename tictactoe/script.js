const column=document.querySelectorAll('.column')
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
}

function UpdateBoard(){
      this.innerText=player;
      cellIndex=this.id;
      if(options[cellIndex]!==""){
            options[cellIndex]=player;
      }
      player=player=="X"?"O":"X";
      let winner=CheckWin();
      console.log(winner);
}
function CheckWin(){
      for(let i=0;i<winConditions.length;i++){
            condition=winConditions[i];
            cellA=condition[0];
            cellB=condition[1];
            cellC=condition[2];
            console.log(options[cellA],options[cellB],options[cellC])
            if(options[cellA]==" " && options[cellB]==" " && options[cellC]==" "){
                  continue;

            }
            else if(options[cellA]==options[cellB]==options[cellC]){
                  return player;
            }
      }
}
