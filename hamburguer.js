function menuHamburguer (){
    const toggleMenu = document.getElementById("toggle-menu");
    const navbarMenuLinks = document.getElementById("main-menu");
    const divLogo = document.querySelector('.logo')
    toggleMenu.addEventListener("click", () => {
      navbarMenuLinks.classList.toggle("main-menu--show");
      divLogo.style.display = "hidden";

      if (navbarMenuLinks.classList.contains("main-menu--show")) {
        divLogo.style.display = "none";
      }else{
        divLogo.style.display = 'flex'
      }
    });
}
menuHamburguer()

