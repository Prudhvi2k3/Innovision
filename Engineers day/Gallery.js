const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// List of image files in the assets folder
const imageFiles = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image1 copy.jpg', , 'image1 copy 2.jpg', 'image1 copy 3.jpg', 'image1 copy 4.jpg'];

// Create gallery items
imageFiles.forEach((file, index) => {
    const item = document.createElement('div');
    item.classList.add('gallery-item');
    const fileName = file.split('.')[0]; // Remove file extension
    item.innerHTML = `
        <img src="assets/${file}" alt="${fileName}">
    `;
    item.addEventListener('click', () => showLightbox(index));
    gallery.appendChild(item);
});

function showLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function updateLightboxImage() {
    lightboxImage.src = `assets/${imageFiles[currentImageIndex]}`;
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageFiles.length;
    updateLightboxImage();
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageFiles.length) % imageFiles.length;
    updateLightboxImage();
}

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Prevent closing when clicking on the image
lightboxImage.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'Escape') closeLightbox();
    }
});