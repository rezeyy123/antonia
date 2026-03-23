let currentSlide = -1;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index === currentSlide) return;

    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentSlide = index;
}

function changeSlide(direction) {
    let newIndex = currentSlide + direction;
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;
    showSlide(newIndex);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
});

// Click anywhere on screen to go to next slide (except navigation)
document.addEventListener('click', (e) => {
    if (!e.target.closest('#navigation')) {
        changeSlide(1);
    }
});

// Initialize first slide
showSlide(0);
