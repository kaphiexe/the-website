document.querySelectorAll('.blinkies-carousel').forEach(carousel => {
  const imgs = carousel.innerHTML;
  carousel.innerHTML += imgs; // Duplicate images for seamless scroll
}); 