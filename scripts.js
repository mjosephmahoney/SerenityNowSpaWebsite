document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE MENU TOGGLE
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. FAQ ACCORDION logic
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.toggle-icon');

            // Toggle current answer
            answer.classList.toggle('open');
            
            // Update icon
            icon.textContent = answer.classList.contains('open') ? '−' : '+';
        });
    });

    // 3. CONTACT FORM SUBMISSION (Mockup)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formStatus.textContent = "Thank you! Your message has been sent. We will contact you shortly.";
            contactForm.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => { formStatus.textContent = ""; }, 5000);
        });
    }

    console.log("Serenity Now Spa site ready.");
});