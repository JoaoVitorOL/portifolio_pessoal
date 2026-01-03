const pageCache = {};
let paginaAtual = null;

function carregarPagina(caminhoPagina) {
    if (paginaAtual === caminhoPagina) {
        return; // evita reload da mesma página
    }

    if (pageCache[caminhoPagina]) {
        document.getElementById("conteudo").innerHTML = pageCache[caminhoPagina];
        paginaAtual = caminhoPagina;
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }

    fetch(`${caminhoPagina}.html`)
        .then(r => {
            if (!r.ok) throw new Error("Página não encontrada");
            return r.text();
        })
        .then(html => {
            pageCache[caminhoPagina] = html;
            document.getElementById("conteudo").innerHTML = html;
            paginaAtual = caminhoPagina;

            window.scrollTo({ top: 0, behavior: "smooth" });
        })
        .catch(err => {
            document.getElementById("conteudo").innerHTML =
                "<p>Erro ao carregar página.</p>";
            console.error(err);
        });
}
 
// Carrega a página inicial ao abrir o site
document.addEventListener("DOMContentLoaded", () => carregarPagina("../pages/habilidades"));
