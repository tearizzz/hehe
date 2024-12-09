// Create a "Back to Top" button dynamically
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = 'Back to Top';
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.bottom = '20px';
    backToTopBtn.style.right = '20px';
    backToTopBtn.style.backgroundColor = '#4caf50';
    backToTopBtn.style.color = 'white';
    backToTopBtn.style.padding = '10px';
    backToTopBtn.style.border = 'none';
    backToTopBtn.style.borderRadius = '5px';
    backToTopBtn.style.cursor = 'pointer';
    backToTopBtn.style.display = 'none'; // Initially hidden

    document.body.appendChild(backToTopBtn);

    // Show button when scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Scroll back to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
