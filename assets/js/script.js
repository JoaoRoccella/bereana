// Função para carregar e inserir HTML parcial
async function loadPartial(url, containerId) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Erro ao carregar ' + url);
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

// Carregar navbar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    loadPartial('./navbar.html', 'navbar-container');
    // Aqui você pode adicionar mais carregamentos, ex.: footer
});
