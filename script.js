document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const menu = document.querySelector(".mobile-menu");
  const overlay = document.getElementById("overlay");
  const links = document.querySelectorAll(".mobile-menu a");

  function toggleMenu() {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  // ouverture/fermeture burger
  burger.addEventListener("click", toggleMenu);

  // fermeture en cliquant sur l'overlay
  overlay.addEventListener("click", toggleMenu);

  // fermeture en cliquant sur un lien
  links.forEach(link => {
    link.addEventListener("click", toggleMenu);
  });
});




/* -------------------- HERO SLIDER -------------------- */
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let current = 0;
  const slideCount = slides.length;
  const intervalTime = 5000; // 5s

  function goToSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    current = (current + 1) % slideCount;
    goToSlide(current);
  }

  // Lancer automatiquement
  setInterval(nextSlide, intervalTime);

  // Initialiser la première slide
  goToSlide(current);
});

const startBtn = document.querySelector('.btn-primary');
const loadingScreen = document.getElementById('loadingScreen');

startBtn.addEventListener('click', () => {
  loadingScreen.classList.add('active');

  setTimeout(() => {
    window.location.href = "vitals.html";
  }, 2000); // redirection après 2 secondes
});
