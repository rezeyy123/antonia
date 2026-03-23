let currentSlide = -1;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index === currentSlide) return;

    const current = slides[currentSlide];
    const next = slides[index];

    if (current) {
        // Add blurring to current slide
        current.classList.add('blurring');
    }

    // Set next slide initial state
    next.style.transform = 'scale(0.8)';
    next.style.opacity = '0';
    next.classList.add('active');

    setTimeout(() => {
        if (current) {
            current.classList.remove('active', 'blurring');
        }
        next.style.transform = 'scale(1)';
        next.style.opacity = '1';
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentSlide = index;
    }, 1000);
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