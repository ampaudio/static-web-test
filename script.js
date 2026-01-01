// Simple interactive functionality
document.addEventListener('DOMContentLoaded', () => {
    const testBtn = document.getElementById('testBtn');
    const message = document.getElementById('message');
    let clickCount = 0;

    testBtn.addEventListener('click', () => {
        clickCount++;
        
        const messages = [
            '🎉 Great! The JavaScript is working!',
            '✨ You clicked again!',
            '🚀 Still working perfectly!',
            '💫 This is a static website!',
            '🌟 Deployed on GitHub Pages!',
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.textContent = `${randomMessage} (Click #${clickCount})`;
        
        // Add animation
        message.style.animation = 'none';
        setTimeout(() => {
            message.style.animation = 'fadeIn 0.5s ease';
        }, 10);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Console message
    console.log('🎯 Static Web Test - JavaScript loaded successfully!');
    console.log('📦 Project ready for GitHub deployment');
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
