function toggleLightMode() {
  const html = document.querySelector("html");
  const buttonLightMode = document.querySelector("#toggleLightMode");
  const dataTheme = html.getAttribute("data-theme");
  if (dataTheme === "dark") {
    html.setAttribute("data-theme", "light");
    buttonLightMode.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
  } else {
    html.setAttribute("data-theme", "dark");
    buttonLightMode.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
  }
}

function toggleMenu() {
  const menuDrop = document.querySelector(".menuDrop");
  const dataState = menuDrop.getAttribute("data-visible");
  const buttonMenu = document.querySelector("button#toggleMenu");
  const menuState = menuDrop.style.display;
  if (dataState === "false") {
    menuDrop.style.display = "block";
    menuDrop.setAttribute("data-visible", "true");
    buttonMenu.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
  } else {
    /* 
    this will also toggle the animation dropUp triggered by the data-visible 
    and set display to none.
    */
    menuDrop.setAttribute("data-visible", "false");
    buttonMenu.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
  }
}
