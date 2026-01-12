import { pt } from "./languages/pt.js";
import { en } from "./languages/en.js";

const languages = {
  pt,
  en
};

export function setLanguage(lang) {
  const dict = languages[lang];
  if (!dict) return;

    // Texto simples
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // HTML embutido(ex: <mark>, <strong>, etc.)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  localStorage.setItem("lang", lang);
}

