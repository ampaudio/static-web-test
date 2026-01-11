// Enhanced interactive functionality
document.addEventListener('DOMContentLoaded', () => {
    const testBtn = document.getElementById('testBtn');
    const message = document.getElementById('message');
    let clickCount = 0;

    testBtn.addEventListener('click', () => {
        clickCount++;

        const messages = [
            '🎉 Awesome! The magic is working!',
            '✨ You discovered the interaction!',
            '🚀 Smooth animations in action!',
            '💫 This is pure CSS & JavaScript!',
            '🌟 No frameworks needed!',
            '🎨 Beautiful glassmorphism effect!',
            '⚡ Lightning fast performance!',
            '🔮 Modern web design at its finest!',
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.textContent = `${randomMessage} (Click #${clickCount})`;

        // Enhanced animation
        message.style.animation = 'none';
        setTimeout(() => {
            message.style.animation = 'fadeIn 0.5s ease';
        }, 10);

        // Add ripple effect to button
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            width: 100px;
            height: 100px;
            margin-top: -50px;
            margin-left: -50px;
            animation: ripple 0.6s;
            pointer-events: none;
        `;
        testBtn.style.position = 'relative';
        testBtn.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
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

    // Add parallax effect to sections on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.content-section');

        parallaxElements.forEach((element, index) => {
            const speed = 0.5;
            const yPos = -(scrolled * speed * (index + 1) * 0.1);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Console messages
    console.log('✨ Static Web Test - Enhanced Design Loaded!');
    console.log('🎨 Featuring: Glassmorphism, Modern Typography, Smooth Animations');
    console.log('🚀 Ready for deployment!');
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
    
    @keyframes ripple {
        from {
            opacity: 1;
            transform: scale(0);
        }
        to {
            opacity: 0;
            transform: scale(4);
        }
    }
`;
document.head.appendChild(style);
