// Opção 3: Alternar a cor de fundo do rodapé

const rodape = document.querySelector('.escola'); // O rodapé usa a classe 'escola'

rodape.addEventListener('click', function() {
    // Se a cor atual for a cor de fundo 1, muda para a cor de fundo 2
    if (rodape.style.backgroundColor === 'rgb(66, 78, 97)') { // Cor do cabeçalho
        rodape.style.backgroundColor = '#faae43'; // Amarelo/Laranja
        console.log("Cor do rodapé alterada para Laranja.");
    } else {
        // Caso contrário, define uma cor padrão diferente da original (que é um gradiente)
        rodape.style.backgroundColor = 'rgb(66, 78, 97)'; // Cor do cabeçalho
        console.log("Cor do rodapé alterada para Cinza/Azul Escuro.");
    }
});