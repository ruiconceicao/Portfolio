const themeSwitch = document.querySelector("#theme-switch");
const localStorageTheme = sessionStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

function calculateSettingTheme(localStorageTheme, systemSettingDark) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }
  if (systemSettingDark.matches) {
    return "dark";
  }
  return "light";
}

function updateThemeOnHtml(theme) {
  document.querySelector("html").setAttribute("data-theme", theme);
}
let currentThemeSetting = calculateSettingTheme(
  localStorageTheme,
  systemSettingDark
);

updateThemeOnHtml(currentThemeSetting);

themeSwitch.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  sessionStorage.setItem("theme", newTheme);

  updateThemeOnHtml(newTheme);
  currentThemeSetting = newTheme;
});
