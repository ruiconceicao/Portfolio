let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.querySelector("#theme-switch");
const html = document.querySelector("html");

const enableDarkmode = () => {
  html.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  html.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
