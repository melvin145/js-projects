const items=["🍊"," 🍌","🐶","🚑","🐷","🍔","🍊"," 🍌","🐶","🚑","🐷","🍔"]
const board=document.querySelector(".board__container");
items.sort(()=>0.5-Math.random());
console.log(board);

function Board(){
      for(let i=0;i<items.length;i++){
      board.insertAdjacentHTML("beforeend",`<div class="items">
      <h1>${items[i]}</h1></div>`);
      }
}

function gameChecker(){
      const item=document.querySelectorAll(".items");
      let count=0;
      items.forEach((e) => e.addEventListener("click",()=>{
            console.log(e);
      }))
}
Board();
gameChecker()