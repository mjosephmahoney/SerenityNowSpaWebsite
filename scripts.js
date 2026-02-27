// SERENITY NOW SPA - Interaction Script

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    // MOBILE MENU TOGGLE
    // This allows users on mobile to click the 'hamburger' icon to see the menu
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // CLOSE MENU ON LINK CLICK
    // This makes the menu disappear once a user clicks a section
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // FUTURE MODIFICATIONS:
    // You can add simple scroll-reveal effects here if you want 
    // more motion later, but for now, it is kept clean and static.
    console.log("Serenity Now Spa website loaded successfully.");
});