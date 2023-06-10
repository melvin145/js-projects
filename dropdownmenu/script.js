const dropdownMenu=document.getElementById("dropdownmenu");
const arrowIcon=document.getElementById("arrow");
const close=document.getElementById("close");
console.log(arrowIcon);
function ToggleIcon(){
      console.log("hi")
      arrowIcon.addEventListener("click",()=>{
            arrowIcon.classList.add("hidden");
            close.classList.add("active");
      })
}
ToggleIcon()