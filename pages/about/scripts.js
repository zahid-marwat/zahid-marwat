// Enhanced About Page with Mobile Touch Effects

class AboutManager {
    constructor() {
        this.isMobile = this.detectMobile();
        this.init();
    }

    detectMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
    }

    init() {
        this.setupEventListeners();
        this.setupMobileEffects();
        this.setupScrollAnimations();
        this.initTypewriterEffect();
    }

    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileMenu) {
            mobileMenu.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu?.contains(e.target) && !navMenu?.contains(e.target)) {
                mobileMenu?.classList.remove('active');
                navMenu?.classList.remove('active');
            }
        });

        // Smooth scrolling for anchor links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }

    setupMobileEffects() {
        if (!this.isMobile) return;

        const effectsContainer = document.getElementById('mobileEffects');
        
        // Add touch effect on touch/click
        document.addEventListener('touchstart', (e) => {
            this.createTouchRipple(e.touches[0].clientX, e.touches[0].clientY);
        });

        // Also handle mouse clicks for hybrid devices
        document.addEventListener('click', (e) => {
            if (e.isTrusted) { // Only real user clicks
                this.createTouchRipple(e.clientX, e.clientY);
            }
        });
    }

    createTouchRipple(x, y) {
        const effectsContainer = document.getElementById('mobileEffects');
        const ripple = document.createElement('div');
        
        ripple.className = 'touch-ripple';
        ripple.style.left = (x - 150) + 'px'; // Center the 300px ripple
        ripple.style.top = (y - 150) + 'px';
        
        effectsContainer.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 1000);
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Add stagger effect for highlight items
                    if (entry.target.classList.contains('highlight-item')) {
                        const items = document.querySelectorAll('.highlight-item');
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('visible');
                            }, index * 200);
                        });
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    initTypewriterEffect() {
        const typewriterElements = document.querySelectorAll('.typing-animation');
        
        typewriterElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            // Start typewriter effect when element becomes visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(typeWriter, 500);
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(element);
        });
    }

    // Add parallax effect for desktop
    setupParallaxEffect() {
        if (this.isMobile) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // Add hover effects for interactive elements
    addInteractiveEffects() {
        const interactiveElements = document.querySelectorAll('.glass-card, .university-logo');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                if (!this.isMobile) {
                    e.target.style.transform = 'translateY(-10px) scale(1.02)';
                }
            });
            
            element.addEventListener('mouseleave', (e) => {
                if (!this.isMobile) {
                    e.target.style.transform = '';
                }
            });
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const aboutManager = new AboutManager();
    aboutManager.setupParallaxEffect();
    aboutManager.addInteractiveEffects();
    
    // Store reference for potential external access
    window.aboutManagerInstance = aboutManager;
});

// Handle window resize
window.addEventListener('resize', () => {
    const aboutManager = window.aboutManagerInstance;
    if (aboutManager) {
        aboutManager.isMobile = aboutManager.detectMobile();
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AboutManager;
}

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});
