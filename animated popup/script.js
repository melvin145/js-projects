const card=document.getElementById("cardId");
function ShowModal(){
      card.classList.add("showcard");
}
function CloseModal(){
      card.classListr.remove("showcard");
}
const closebtn=document.querySelectorAll(".close");

closebtn.forEach(c => c.addEventListener("click",CloseModal));