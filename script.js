// --- MENU BURGER ---
const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let current = 0;
  const slideCount = slides.length;
  const intervalTime = 5000;

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

  // Optionnel : initialiser la première slide
  goToSlide(current);
});



let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

document.getElementById("startBtn").addEventListener("click", () => {

  const loader = document.getElementById("loadingScreen");

  // afficher l'écran de transition
  loader.style.opacity = "1";
  loader.style.pointerEvents = "all";

  // après 1 seconde → redirection
  setTimeout(() => {
    window.location.href = "vitals.html";  // mets la page où tu veux aller
  }, 1000);
});

