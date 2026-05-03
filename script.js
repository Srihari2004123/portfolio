/* Modal functionality */
const modals = document.querySelectorAll('.modal');
const exploreButtons = document.querySelectorAll('.btn-explore');
const closeButtons = document.querySelectorAll('.close');

// Open modal
exploreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        const modalContainer = document.getElementById('modal-container');
        
        // Hide all other modals
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
        
        if (modal) modal.classList.add('active');
        if (modalContainer) modalContainer.classList.add('active');
    });
});

// Close modal
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        const modalContainer = document.getElementById('modal-container');
        if (modal) modal.classList.remove('active');
        if (modalContainer) modalContainer.classList.remove('active');
    });
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modalContainer = document.getElementById('modal-container');
    if (event.target === modalContainer || event.target.classList.contains('modal')) {
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
        if (modalContainer) modalContainer.classList.remove('active');
    }
});

/* Smooth scrolling for nav links */
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* Automatically add reveal class to cards and sections */
document.querySelectorAll('.education-card, .project-card, .skill-category, .achievement-card, .internship-card, .section h2').forEach(el => {
    el.classList.add('reveal');
});

/* Fade-in animation on scroll */
const revealElements = document.querySelectorAll('.reveal');
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

revealElements.forEach(el => {
    observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
    // VanillaTilt Initialization for Glass Cards
    VanillaTilt.init(document.querySelectorAll(".education-card, .project-card, .skill-category, .internship-card, .achievement-card"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    });

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            // Change icon based on mode
            if (document.body.classList.contains('light-mode')) {
                darkModeToggle.textContent = '🌙';
            } else {
                darkModeToggle.textContent = '☀️';
            }
        });
    }
});

/* Scroll progress bar */
const scrollProgress = document.getElementById('scroll-progress');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    if (scrollProgress) scrollProgress.style.width = scrollPercent + '%';

    // Show/hide back to top button
    if (backToTop) {
        if (scrollTop > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    }
});

/* Back to top button */
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
