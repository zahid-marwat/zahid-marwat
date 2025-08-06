// Enhanced Skills Page with Mobile Touch Effects and Skill Progress Animations

class SkillsManager {
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
        this.setupSkillProgressAnimations();
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
                    
                    // Trigger skill progress animations when skill categories become visible
                    if (entry.target.classList.contains('skill-category')) {
                        this.animateSkillProgress(entry.target);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    setupSkillProgressAnimations() {
        // Set up progress bar widths from data attributes
        const skillProgressBars = document.querySelectorAll('.skill-progress');
        
        skillProgressBars.forEach(progressBar => {
            const width = progressBar.dataset.width;
            if (width) {
                progressBar.style.setProperty('--progress-width', width);
            }
        });
    }

    animateSkillProgress(skillCategory) {
        const progressBars = skillCategory.querySelectorAll('.skill-progress');
        
        progressBars.forEach((progressBar, index) => {
            setTimeout(() => {
                progressBar.classList.add('animated');
                
                // Add shimmer effect
                progressBar.style.animationDelay = `${index * 0.2}s`;
                
                // Animate the percentage counter
                const skillLevel = progressBar.parentElement.nextElementSibling;
                if (skillLevel && skillLevel.classList.contains('skill-level')) {
                    this.animateCounter(skillLevel, progressBar.dataset.width);
                }
            }, index * 200);
        });
    }

    animateCounter(element, targetPercentage) {
        const target = parseInt(targetPercentage.replace('%', ''));
        let current = 0;
        const increment = target / 20; // 20 steps
        const duration = 1000; // 1 second
        const stepTime = duration / 20;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.round(current) + '%';
        }, stepTime);
    }

    // Add hover effects for skill items
    addSkillHoverEffects() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                if (!this.isMobile) {
                    const progressBar = item.querySelector('.skill-progress');
                    progressBar.style.background = 'linear-gradient(90deg, #64b5f6, #42a5f5)';
                    progressBar.style.boxShadow = '0 0 20px rgba(100, 181, 246, 0.5)';
                }
            });
            
            item.addEventListener('mouseleave', (e) => {
                if (!this.isMobile) {
                    const progressBar = item.querySelector('.skill-progress');
                    progressBar.style.background = 'linear-gradient(90deg, #fff, rgba(255, 255, 255, 0.8))';
                    progressBar.style.boxShadow = '';
                }
            });
        });
    }

    // Add tech stack hover effects
    addTechStackEffects() {
        const techItems = document.querySelectorAll('.tech-item');
        
        techItems.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                if (!this.isMobile) {
                    const icon = item.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'scale(1.2) rotateY(360deg)';
                        icon.style.transition = 'transform 0.6s ease';
                    }
                }
            });
            
            item.addEventListener('mouseleave', (e) => {
                if (!this.isMobile) {
                    const icon = item.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'scale(1) rotateY(0deg)';
                    }
                }
            });
        });
    }

    // Add floating animation to skill categories
    addFloatingEffects() {
        const skillCategories = document.querySelectorAll('.skill-category');
        
        skillCategories.forEach((category, index) => {
            // Add subtle floating animation with different phases
            category.style.animation = `float ${8 + index}s ease-in-out infinite`;
            category.style.animationDelay = `${index * 2}s`;
        });
    }

    // Performance optimization for mobile
    optimizeForMobile() {
        if (this.isMobile) {
            // Reduce animation complexity on mobile
            const style = document.createElement('style');
            style.textContent = `
                .skill-progress::before {
                    animation: none;
                }
                .floating-icons {
                    display: none !important;
                }
                .glass-card {
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const skillsManager = new SkillsManager();
    skillsManager.addSkillHoverEffects();
    skillsManager.addTechStackEffects();
    skillsManager.addFloatingEffects();
    skillsManager.optimizeForMobile();
    
    // Store reference for potential external access
    window.skillsManagerInstance = skillsManager;
});

// Handle window resize
window.addEventListener('resize', () => {
    const skillsManager = window.skillsManagerInstance;
    if (skillsManager) {
        skillsManager.isMobile = skillsManager.detectMobile();
        skillsManager.optimizeForMobile();
    }
});

// Add CSS animation keyframes if not already present
document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('float-animation')) {
        const style = document.createElement('style');
        style.id = 'float-animation';
        style.textContent = `
            @keyframes float {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-10px);
                }
            }
        `;
        document.head.appendChild(style);
    }
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SkillsManager;
}
