import { pt } from "./languages/pt.js";
import { en } from "./languages/en.js";

const languages = { pt, en };

export function setLanguage(lang) {
  const dict = languages[lang];
  if (!dict) return;

  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

export function applySavedLanguage() {
  const lang = localStorage.getItem("lang") || "pt";
  setLanguage(lang);
}

export function syncLanguageSelect() {
  const select = document.getElementById("idiomas-select");
  if (!select) return;

  const lang = localStorage.getItem("lang") || "pt";
  select.value = lang;
}
