import { carregarComponente } from "./component-loader.js";
import { setLanguage } from "./i18n.js";

document.addEventListener("DOMContentLoaded", async () => {
    await carregarComponente("header", "../pages/header.html");
    await carregarComponente("footer", "../pages/footer.html");

    const lang = localStorage.getItem("lang") || "pt";
    setLanguage(lang);
});


document.addEventListener("change", e => {
    if (e.target.id === "idiomas-select") {
        setLanguage(e.target.value);
    }
});
