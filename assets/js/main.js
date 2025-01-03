function toggleMenu() {
  const menuDrop = document.querySelector(".menuDrop");
  const dataState = menuDrop.getAttribute("data-visible");
  const buttonMenu = document.querySelector("button#toggleMenu");
  const menuState = menuDrop.style.display;
  if (dataState === "false") {
    menuDrop.style.display = "block";
    menuDrop.setAttribute("data-visible", "true");
    buttonMenu.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
  } else {
    /* 
    this will also toggle the animation dropUp triggered by the data-visible 
    and set display to none.
    */
    menuDrop.setAttribute("data-visible", "false");
    buttonMenu.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
  }
}
