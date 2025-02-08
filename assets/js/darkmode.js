const StorageTheme = sessionStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

function calculateSettingTheme(StorageTheme, systemSettingDark) {
  if (StorageTheme !== null) {
    return StorageTheme;
  }
  if (systemSettingDark.matches) {
    return "dark";
  }
  return "light";
}

function updateThemeOnHtml(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

let currentThemeSetting = calculateSettingTheme(
  StorageTheme,
  systemSettingDark
);

updateThemeOnHtml(currentThemeSetting);

document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.querySelector("#theme-switch");
  themeSwitch.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    sessionStorage.setItem("theme", newTheme);

    updateThemeOnHtml(newTheme);
    currentThemeSetting = newTheme;
  });
});
