function ShowMenu(toggleId,navbarId,bodyId){
      const toggle=document.getElementById(toggleId);
      const navbar=document.getElementById(navbarId);
      const bodypad=document.getElementById(bodyId)
      navbar.classList.toggle('expander');
      console.log(bodypad)
      bodypad.classList.toggle('body-pad');
}
const link=document.querySelectorAll(".nav__link");
function colorLink(){
      link.forEach(e=>e.classList.remove("active"))
      this.classList.add("active");
}

link.forEach((e)=>{
      e.addEventListener("click",colorLink)
})
const dropIcon=document.querySelectorAll(".collapse__link")
dropIcon.forEach((e)=>{
      
      e.addEventListener("click",()=>{
            const menu=e.nextElementSibling;
            console.log(menu);
            menu.classList.toggle('showcollapse')
      })
})

