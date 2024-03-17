const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
let currentImage = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block'
        } else {
            image.style.display = 'none'
        }
    });

}

function nextImage() {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    showImage(currentImage);
}

function prevImage() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    showImage(currentImage);
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

carousel.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

carousel.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
        nextImage();
    }, 5000);
});