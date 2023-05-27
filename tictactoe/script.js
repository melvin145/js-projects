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
let player="X";
function UpdateBoard(){
      this.innerText=player;
      player=player=="X"?"O":"X";
}
column.forEach(col=>col.addEventListener("click",UpdateBoard,{once:true}))
