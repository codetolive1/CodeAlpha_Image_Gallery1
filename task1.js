let currentIndex = 0;

function showImage(index) {
  const images = document.querySelectorAll('.gallery-item');
  if (index >= images.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex = index;
  }
  
  images.forEach((img, i) => {
    img.classList.toggle('active', i === currentIndex);
  });
}

function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}

// Initialize gallery
document.addEventListener('DOMContentLoaded', () => {
  showImage(currentIndex);
});