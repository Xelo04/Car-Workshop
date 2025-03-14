// Retrieve all slide elements and initialize index
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Function to show the slide at the specified index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

// Previous arrow event listener
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
});

// Next arrow event listener
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
});

// Optional keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  } else if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  }
});

// Form submission alert
document.querySelector(".form").addEventListener("submit", (event) => {
  alert("The problem report was sent successfully");
});