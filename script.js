let slideIndex = 0;
const slides = document.querySelector("#slides");
const totalSlides = slides.children.length;
const dotsContainer = document.getElementById("dots");

// Cria as bolinhas dinamicamente
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => mostrarSlide(i));
  dotsContainer.appendChild(dot);
}

function mostrarSlide(index) {
  // CORREÇÃO: Usa a fórmula para módulo positivo
  slideIndex = (index % totalSlides + totalSlides) % totalSlides; 
  
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === slideIndex);
  });
}

function mudarSlide(n) {
  mostrarSlide(slideIndex + n);
}

// Troca automática a cada 5 segundos
setInterval(() => mudarSlide(1), 5000);

// Inicia no primeiro slide
mostrarSlide(slideIndex);



// =========================================================
// EXEMPLO 3: LER MAIS SIMPLES
// =========================================================

// 1. Encontra os três elementos que vamos manipular no HTML
const botaoLerMais = document.getElementById('btn-ler-mais');
const textoEscondido = document.getElementById('texto-escondido');
const textoIntroducao = document.getElementById('texto-introducao'); // O parágrafo completo

// 2. Cria a função que será executada ao clicar no botão
function toggleTexto() {
    // Verifica qual é o estado atual do texto escondido
    
    // Se o texto escondido estiver oculto (display: none no HTML)
    if (textoEscondido.style.display === 'none') {
        // 3. Mostra o texto
        textoEscondido.style.display = 'inline'; // ou 'block', mas 'inline' fica melhor para texto corrido
        
        // 4. Muda o texto do botão para "Ler Menos"
        botaoLerMais.textContent = 'Ler Menos';
        
    } else {
        // Se o texto escondido estiver visível
        // 5. Esconde o texto
        textoEscondido.style.display = 'none';
        
        // 6. Muda o texto do botão de volta para "Ler Mais"
        botaoLerMais.textContent = 'Ler Mais';
    }
}

// 7. Adiciona o "ouvinte de evento" ao botão "Ler Mais"
botaoLerMais.addEventListener('click', toggleTexto);