const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// List of image files in the assets folder
const imageFiles = ['DSC_0022.JPG', 'DSC_0034.JPG', 'DSC_0035.JPG', 'DSC_0070.JPG', 'DSC_0129.JPG', 'DSC_0188.JPG', 'DSC_0712.JPG', 'DSC_0826.JPG', 'DSC_0945.JPG', 'DSC_0969.JPG', 'DSC_1021.JPG', 'DSC_1034.JPG'];

// Create gallery items
imageFiles.forEach((file, index) => {
    const item = document.createElement('div');
    item.classList.add('gallery-item');
    const fileName = file.split('.')[0]; // Remove file extension
    item.innerHTML = `
        <img src="./assets/${file}" alt="${fileName}">
        <!--<div class="title">${fileName}</div>-->
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