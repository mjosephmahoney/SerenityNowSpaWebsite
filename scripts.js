// SERENITY NOW SPA - Interaction Script

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    // Add this inside the DOMContentLoaded block from the previous step
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents the page from refreshing
            
            // This is where you would normally connect to an email service.
            // For now, it will show a success message.
            formStatus.textContent = "Thank you! Your message has been sent. We will contact you shortly.";
            contactForm.reset(); // Clears the form fields
        });
    }

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

    // FAQ ACCORDION LOGIC
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.toggle-icon');

            // Close other open FAQ items (optional, for a cleaner look)
            document.querySelectorAll('.faq-answer').forEach(el => {
                if (el !== answer) {
                    el.classList.remove('open');
                    el.previousElementSibling.querySelector('.toggle-icon').textContent = '+';
                }
            });

            // Toggle current item
            answer.classList.toggle('open');
            
            // Change icon from + to -
            if (answer.classList.contains('open')) {
                icon.textContent = '−';
            } else {
                icon.textContent = '+';
            }
        });
    });

    // FUTURE MODIFICATIONS:
    // You can add simple scroll-reveal effects here if you want 
    // more motion later, but for now, it is kept clean and static.
    console.log("Serenity Now Spa website loaded successfully.");
});

