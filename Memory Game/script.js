const items=["🍊"," 🍌","🐶","🚑","🐷","🍔","🍊"," 🍌","🐶","🚑","🐷","🍔"]
const board=document.querySelector(".board__container");
items.sort(()=>0.5-Math.random());
console.log(board);

function Board(){
      for(let i=0;i<items.length;i++){
      board.insertAdjacentHTML("beforeend",`<div class="items">
      <h1>${items[i]}</h1></div>`);
      
      gameChecker();}
}

function gameChecker(){
     const SelectedItem=[];
     const item=document.querySelectorAll(".items")
     /*item.forEach((e)=>e.addEventListener("click",()=>{
            e.classList.add("active")
            SelectedItem.push(e);
            if(SelectedItem.length==2){
                  
            }
     }))*/
}
Board();