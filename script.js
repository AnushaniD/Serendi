
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const pageLinks = document.querySelector('.page-links');

    hamburgerIcon.addEventListener('click', function() {
        // Toggle 'active' class to show or hide the menu
        pageLinks.classList.toggle('active');
    });
});

// Get the button and the hidden content
const toggleButton = document.querySelector('.toggle-button');
const hiddenContent = document.querySelector('.hidden-content');

// Ensure hidden content is hidden initially on page load
document.addEventListener("DOMContentLoaded", function() {
const toggleButton = document.querySelector('.toggle-button');
const hiddenContent = document.querySelector('.hidden-content');

// Ensure hidden content is hidden on page load
hiddenContent.style.display = 'none'; 

// Add an event listener for the button click
toggleButton.addEventListener('click', function() {
    // Check if the hidden content is currently visible
    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block'; // Show the hidden content
        toggleButton.textContent = 'Read Less'; // Change the button text to "Read Less"
    } else {
        hiddenContent.style.display = 'none'; // Hide the hidden content again
        toggleButton.textContent = 'Read More'; // Change the button text to "Read More"
    }
});
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.client-btn');
    const bannerImage = document.getElementById('bannerImage');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            
            // Get the new image source from the data-src attribute
            const newImageSrc = this.getAttribute('data-src');
            // Change the banner image source
            bannerImage.src = newImageSrc;
        });
    });
});

function toggleHeart(element) {
    element.classList.toggle('fas'); // Switches between 'far' (outline) and 'fas' (filled)
    element.classList.toggle('clicked'); // Add or remove the 'clicked' class for styling
}


let currentIndex = 0;

function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Loop to last image
    } else if (currentIndex >= totalImages) {
        currentIndex = 0; // Loop to first image
    }

    const offset = -currentIndex * 663; // Image width
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}
