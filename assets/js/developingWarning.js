function createPopup(container) {
  const exists = document.querySelector("#popup");
  if (exists) exists.remove();

  const popup = document.createElement("div");
  popup.id = "popup";

  popup.innerHTML = `
  <h2>Disponível brevemente! 🫡</h2>
  <h3>Em desenvolvimento... 👨🏻‍💻</h3>
  <br>
  <p>Clique fora do popup para sair</p>
  `;
  popup.addEventListener("click", (event) => event.stopPropagation());

  const closePopup = () => {
    popup.remove();
    document.removeEventListener("keypress", closePopup);
    document.removeEventListener("click", closePopup);

  };

  document.addEventListener("click", closePopup, { once: true });
  document.addEventListener("keypress", closePopup, { once: true });

  popup.style.zIndex = "10";
  popup.style.background = "var(--background)";
  popup.style.position = "fixed";
  popup.style.padding = "2.5%";
  popup.style.borderRadius = "1rem";
  popup.style.boxShadow = "rgba(0, 0, 0, 0.7) 0px 0px 0px 100vw";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.animation = "pop-in 0.3s ease-in-out";
  popup.style.whiteSpace = "nowrap";

  container.appendChild(popup);
}

document.addEventListener("DOMContentLoaded", () => {
  const targetElements = document.querySelectorAll('a[href=""]');
  const placement = document.querySelector(".container");

  targetElements.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      createPopup(placement);
    });
  });
});
