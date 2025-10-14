let slideIndex = 0;
const slides = document.querySelector("#slides");
const totalSlides = slides.children.length;
const dotsContainer = document.getElementById("dots");

// Cria as bolinhas dinamicamente//
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => mostrarSlide(i));
  dotsContainer.appendChild(dot);
}

function mostrarSlide(index) {
  slideIndex = (index + totalSlides) % totalSlides;
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === slideIndex);
  });
}

function mudarSlide(n) {
  mostrarSlide(slideIndex + n);
}

// Troca automática a cada 5 segundos//
setInterval(() => mudarSlide(1), 5000);

// Inicia no primeiro slide//
mostrarSlide(slideIndex);

