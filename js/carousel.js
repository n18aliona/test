const images = [
    "img/pinot-noir.jpg",
    "img/noir.jpg"
]
let currentSlide = 0;

function showSlide() {
    const carouselImage = document.querySelector('.products-carousel img');
    carouselImage.src = images[currentSlide];
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= images.length) currentSlide = 0;
    showSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = images.length - 1;
    showSlide();
}

setInterval(nextSlide, 3000);

document.querySelector('.carousel-prev').addEventListener('click', prevSlide);
document.querySelector('.carousel-next').addEventListener('click', nextSlide);