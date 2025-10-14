let currentIndex = 0;

function moveSlide(direction) {
  const images = document.querySelectorAll(".carousel-images img");
  const totalImages = images.length;
  currentIndex = (currentIndex + direction + totalImages) % totalImages;
}document.querySelector(".carousel-images").style.transform = `translateX(-${currentIndex * 100}%)`;

