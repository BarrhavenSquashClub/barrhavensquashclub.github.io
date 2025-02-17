// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("toggle");
});

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("toggle");
    });
});

function initExpandableCards() {
    const cards = document.querySelectorAll('.expandable-card');

    cards.forEach(card => {
        const header = card.querySelector('.card-header');
        header.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', initExpandableCards);