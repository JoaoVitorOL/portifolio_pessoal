/**
 * Insere componentes HTML externos em elementos da página.
 * @param {string} targetId - ID do elemento alvo.
 * @param {string} path - Caminho do arquivo HTML parcial.
 */
function carregarComponente(targetId, path) {
    fetch(path)
        .then(r => r.text())
        .then(html => document.getElementById(targetId).innerHTML = html)
        .catch(err => console.error("Erro ao carregar componente:", err));
}

document.addEventListener("DOMContentLoaded", () => {
    carregarComponente("header", "../pages/header.html");
    carregarComponente("footer", "../pages/footer.html"); 
});