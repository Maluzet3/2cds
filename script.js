// =========================================================
// FUNCIONALIDADE LER MAIS/LER MENOS
// =========================================================

// 1. Encontra os elementos que vamos manipular no HTML
const botaoLerMais = document.getElementById('btn-ler-mais');
const textoEscondido = document.getElementById('texto-escondido');

// 2. Cria a função que será executada ao clicar no botão
function toggleTexto() {
    // Se o texto escondido estiver oculto (pelo CSS inline 'display: none;')
    if (textoEscondido.style.display === 'none') {
        // Mostra o texto
        textoEscondido.style.display = 'inline'; 
        // Muda o texto do botão para "Ler Menos"
        botaoLerMais.textContent = 'Ler Menos';
    } else {
        // Esconde o texto
        textoEscondido.style.display = 'none';
        // Muda o texto do botão de volta para "Ler Mais"
        botaoLerMais.textContent = 'Ler Mais';
    }
}

// 3. Adiciona o "ouvinte de evento" ao botão "Ler Mais"
botaoLerMais.addEventListener('click', toggleTexto);

// NOTA: O código do carrossel foi removido pois não havia o HTML correspondente
// e ele não estava relacionado ao seu pedido principal (o "Ler Mais").