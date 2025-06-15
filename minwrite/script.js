
// Countdown Timer
function initCountdown() {
    const countdownElement = document.getElementById('countdown');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Set initial time to 24 hours (in seconds)
    let timeLeft = 24 * 60 * 60;
    
    function updateCountdown() {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            timeLeft = 24 * 60 * 60; // Reset to 24 hours
        }
    }
    
    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Scroll to offer function
function scrollToOffer() {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
        offerSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// FAQ Toggle
function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('.faq-icon');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer) {
            item.classList.remove('open');
            item.previousElementSibling.querySelector('.faq-icon').textContent = '+';
        }
    });
    
    // Toggle current FAQ
    answer.classList.toggle('open');
    icon.textContent = answer.classList.contains('open') ? '−' : '+';
}

// Spots left animation
function animateSpotsLeft() {
    const spotsElement = document.getElementById('spots-left');
    let currentSpots = 47;
    
    setInterval(() => {
        // Randomly decrease spots (simulate scarcity)
        if (Math.random() < 0.1 && currentSpots > 5) { // 10% chance every interval
            currentSpots -= Math.floor(Math.random() * 3) + 1; // Decrease by 1-3
            spotsElement.textContent = currentSpots;
            
            // Add flash effect
            spotsElement.style.color = '#dc2626';
            spotsElement.style.transform = 'scale(1.2)';
            
            setTimeout(() => {
                spotsElement.style.color = '';
                spotsElement.style.transform = 'scale(1)';
            }, 300);
        }
    }, 15000); // Check every 15 seconds
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
}

// Add scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.benefit-item, .testimonial-item, .offer-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add floating elements animation
function addFloatingAnimation() {
    const createFloatingElement = (emoji, delay = 0) => {
        const element = document.createElement('div');
        element.textContent = emoji;
        element.style.cssText = `
            position: fixed;
            font-size: 20px;
            pointer-events: none;
            z-index: 1000;
            opacity: 0;
            animation: float 8s infinite linear;
            animation-delay: ${delay}s;
        `;
        
        // Random start position
        element.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(element);
        
        // Remove after animation
        setTimeout(() => {
            element.remove();
        }, 8000 + delay * 1000);
    };
    
    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Create floating elements periodically
    const emojis = ['🔥', '💰', '⚡', '🎯', '✨', '🚀'];
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];
            createFloatingElement(emoji);
        }
    }, 3000);
}

// Add urgency notifications
function showUrgencyNotifications() {
    const notifications = [
        "🔥 João acabou de adquirir o MINWRITE!",
        "⚡ Maria está assistindo a aula agora!",
        "💰 Pedro já aplicou o método e aumentou suas vendas!",
        "🎯 Ana descobriu o segredo das copies que vendem!",
        "✨ Carlos dominou o Método C.R.I.A.R!"
    ];
    
    function showNotification() {
        const notification = document.createElement('div');
        const message = notifications[Math.floor(Math.random() * notifications.length)];
        
        notification.innerHTML = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: linear-gradient(45deg, #22c55e, #16a34a);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            z-index: 1001;
            box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
            transform: translateX(-100%);
            transition: transform 0.5s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Slide in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Slide out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(-100%)';
            setTimeout(() => notification.remove(), 500);
        }, 4000);
    }
    
    // Show first notification after 5 seconds, then randomly
    setTimeout(() => {
        showNotification();
        setInterval(() => {
            if (Math.random() < 0.2) { // 20% chance every 10 seconds
                showNotification();
            }
        }, 10000);
    }, 5000);
}

// Add mouse cursor trail effect
function addCursorTrail() {
    const trail = [];
    const trailLength = 5;
    
    document.addEventListener('mousemove', (e) => {
        // Only add trail on CTA buttons
        if (e.target.classList.contains('cta-button')) {
            const spark = document.createElement('div');
            spark.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #fbbf24;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                animation: sparkle 0.5s ease-out forwards;
            `;
            
            document.body.appendChild(spark);
            setTimeout(() => spark.remove(), 500);
        }
    });
    
    // Add sparkle animation
    const style = document.createElement('style');
    style.textContent += `
        @keyframes sparkle {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    animateSpotsLeft();
    initSmoothScroll();
    initScrollAnimations();
    addFloatingAnimation();
    showUrgencyNotifications();
    addCursorTrail();
    
    // Add click tracking for analytics (optional)
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            console.log('CTA clicked:', this.textContent.trim());
        });
    });
    
    // Add exit-intent popup (optional)
    let exitIntentShown = false;
    document.addEventListener('mouseout', function(e) {
        if (!exitIntentShown && e.clientY <= 0) {
            exitIntentShown = true;
            // You could show a popup here
            console.log('Exit intent detected');
        }
    });
});

// Add scroll progress indicator
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #dc2626, #fbbf24);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', addScrollProgress);