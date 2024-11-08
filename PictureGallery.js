document.addEventListener('DOMContentLoaded', () => {
    const featuredImage = document.querySelector('#gallery figure img');
    const caption = document.querySelector('#gallery figure figcaption');
    const thumbnails = document.querySelectorAll('#gallery ul li img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Update featured image source and alt text
            featuredImage.src = thumbnail.src.replace('-small', '-large');
            featuredImage.alt = thumbnail.alt;
            // Update caption text
            caption.textContent = thumbnail.alt;
            
            // Apply grayscale filter to all thumbnails, remove from active
            thumbnails.forEach(img => img.style.filter = 'grayscale(100%)');
            thumbnail.style.filter = 'none';
        });
    });
});
