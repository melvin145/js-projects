function ShowMenu(toggleId,navbarId,bodyId){
      const toggle=document.getElementById(toggleId);
      const navbar=document.getElementById(navbarId);
      const bodypad=document.getElementById(bodyId)
      navbar.classList.toggle('expander');
      bodypad.classList.toggle('body-pad');
}