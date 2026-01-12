/**
 * Insere componentes HTML externos em elementos da página.
 * Retorna uma Promise para permitir await.
 *
 * @param {string} targetId - ID do elemento alvo
 * @param {string} path - Caminho do arquivo HTML
 * @returns {Promise<void>}
 */
export function carregarComponente(targetId, path) {
    return fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${path}`);
            }
            return response.text();
        })
        .then(html => {
            const target = document.getElementById(targetId);
            if (!target) {
                throw new Error(`Elemento #${targetId} não encontrado`);
            }
            target.innerHTML = html;
        });
}
