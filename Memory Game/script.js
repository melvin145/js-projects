const items=["🍊"," 🍌","🐶","🚑","🐷","🍔","🍊"," 🍌","🐶","🚑","🐷","🍔"]
const board=document.querySelector(".board__container");
items.sort(()=>0.5-Math.random());
console.log(board);

function Board(){
      for(let i=0;i<items.length;i++){
      board.insertAdjacentHTML("beforeend",`<div class="items">
      <h1>${items[i]}</h1></div>`);
      }
      gameChecker();
}

function gameChecker(){
     let SelectedItem=[];
     const item=document.querySelectorAll(".items")
     item.forEach((e)=>e.addEventListener("click",()=>{
            e.classList.add("active")
            SelectedItem.push(e);
            if(SelectedItem.length==2){
                  Score(SelectedItem[0],SelectedItem[1]);
                  SelectedItem=[]
            }
            console.log(SelectedItem)
     }))

}
Board();

function Score(value1,value2){
      if(value1.innerText==value2.innerText){
            console.log("helloo",value1);
            value1.classList.add("item-remove")
            value2.classList.add("item-remove");
      }
      else{
            setTimeout(()=>{
                  value1.classList.remove("active");
                  value2.classList.remove("active");
                  console.log("not equal");
            },500);
            
      }

}