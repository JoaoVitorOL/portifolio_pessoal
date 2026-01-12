/**
 * Insere componentes HTML externos em elementos da página.
 * Retorna uma Promise para permitir await.
 *
 * @param {string} targetId - ID do elemento alvo
 * @param {string} path - Caminho do arquivo HTML
 * @returns {Promise<void>}
 */

import { applySavedLanguage } from "./i18n.js";

export async function carregarComponente(targetId, path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Erro ao carregar ${path}`);
  }

  const html = await response.text();
  const target = document.getElementById(targetId);
  if (!target) {
    throw new Error(`Elemento #${targetId} não encontrado`);
  }

  target.innerHTML = html;
  applySavedLanguage();
}

