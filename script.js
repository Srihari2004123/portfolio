/* Modal functionality */
const modals = document.querySelectorAll('.modal');
const exploreButtons = document.querySelectorAll('.btn-explore');
const closeButtons = document.querySelectorAll('.close');

// Open modal
exploreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });
});

// Close modal
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
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

/* Fade-in animation on scroll */
const sections = document.querySelectorAll('.section');
const observerOptions = {
    threshold: 0.1
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);
sections.forEach(section => {
    observer.observe(section);
});


document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            // Change icon based on mode
            if (document.body.classList.contains('dark-mode')) {
                darkModeToggle.textContent = '☀️';
            } else {
                darkModeToggle.textContent = '🌙';
            }
        });
    }
});

/* Scroll progress bar */
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';

    // Show/hide back to top button
    if (scrollTop > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

/* Back to top button */
const backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Chatbot functionality */
const chatbot = document.getElementById('chatbot');
const chatbotHeader = document.getElementById('chatbot-header');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');

// Show chatbot when dark mode toggle is clicked (optional)
// Or you can add a separate button to toggle chatbot visibility
darkModeToggle.addEventListener('dblclick', () => {
    if (chatbot.style.display === 'flex') {
        chatbot.style.display = 'none';
    } else {
        chatbot.style.display = 'flex';
        chatbotInput.focus();
    }
});

// Close chatbot
chatbotClose.addEventListener('click', () => {
    chatbot.style.display = 'none';
});

// Simple chatbot responses
const botResponses = {
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! What can I do for you?",
    "who are you": "I am your interactive robot assistant.",
    "help": "Sure! You can ask me about the portfolio or projects.",
    "projects": "I have several projects including a College Chatbot, IoT Watering System, and more.",
    "default": "Sorry, I didn't understand that. Can you please rephrase?"
};

function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

chatbotInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && chatbotInput.value.trim() !== '') {
        const userMessage = chatbotInput.value.trim();
        addMessage(userMessage, 'user');
        chatbotInput.value = '';

        // Simple bot response logic
        const lowerMessage = userMessage.toLowerCase();
        let response = botResponses["default"];
        for (const key in botResponses) {
            if (lowerMessage.includes(key)) {
                response = botResponses[key];
                break;
            }
        }
        setTimeout(() => {
            addMessage(response, 'bot');
        }, 500);
    }
});
