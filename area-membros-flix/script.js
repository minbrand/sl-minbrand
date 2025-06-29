
// Initialize page when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');
    
    // Add smooth scrolling for any internal links (if needed in future)
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
    
    // Add button click animations
    const buttons = document.querySelectorAll('.btn-primary, .btn-pricing, .btn-final');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add hover effects for cards
    const cards = document.querySelectorAll('.benefit-card, .product-card, .faq-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Function to handle CTA button clicks (can be expanded for tracking)
function handleCTAClick(buttonName) {
    console.log(`CTA clicked: ${buttonName}`);
    // Add your tracking code here if needed
    // Example: gtag('event', 'click', { event_category: 'CTA', event_label: buttonName });
}

// Add loading animation for video
function handleVideoLoad() {
    const videoFrame = document.querySelector('.video-frame');
    if (videoFrame) {
        videoFrame.style.opacity = '0';
        videoFrame.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => {
            videoFrame.style.opacity = '1';
        }, 100);
    }
}

// Call video load handler when page is ready
document.addEventListener('DOMContentLoaded', handleVideoLoad);
