// Enhanced Contact Page JavaScript with Mobile Touch Effects and Glass Morphism

document.addEventListener('DOMContentLoaded', function() {
    // Mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    // Initialize all features
    initMobileNavigation();
    setupMobileTouchEffects();
    initScrollAnimations();
    setupFormValidation();
    initFloatingIcons();
    
    // Mobile Navigation Toggle
    function initMobileNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            // Close menu when clicking on a link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }
    }
    
    // Mobile Touch Effects System
    function setupMobileTouchEffects() {
        if (!isMobile) return;
        
        const touchEffectsContainer = document.querySelector('.mobile-touch-effects');
        if (!touchEffectsContainer) return;
        
        // Add touch listeners to interactive elements
        const interactiveElements = document.querySelectorAll('.glass-card, .submit-btn, .cta-button, .nav-link, .contact-method');
        
        interactiveElements.forEach(element => {
            // Touch start effect
            element.addEventListener('touchstart', function(e) {
                createTouchRipple(e.touches[0].clientX, e.touches[0].clientY);
                element.style.transform = 'scale(0.98)';
                element.style.filter = 'brightness(1.1)';
            });
            
            // Touch end effect
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    element.style.transform = '';
                    element.style.filter = '';
                }, 100);
            });
            
            // Touch cancel effect
            element.addEventListener('touchcancel', function() {
                element.style.transform = '';
                element.style.filter = '';
            });
        });
        
        // Global touch listener for ripple effects
        document.addEventListener('touchstart', function(e) {
            const touch = e.touches[0];
            createTouchRipple(touch.clientX, touch.clientY);
        });
    }
    
    // Create touch ripple effect
    function createTouchRipple(x, y) {
        const touchEffectsContainer = document.querySelector('.mobile-touch-effects');
        if (!touchEffectsContainer) return;
        
        const ripple = document.createElement('div');
        ripple.className = 'touch-ripple';
        ripple.style.left = (x - 150) + 'px';
        ripple.style.top = (y - 150) + 'px';
        
        touchEffectsContainer.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 1000);
    }
    
    // Scroll Animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe elements for scroll animations
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));
        
        // Add animation classes to elements
        const sections = document.querySelectorAll('section, .glass-card');
        sections.forEach((section, index) => {
            section.classList.add('animate-on-scroll');
            
            // Add specific animation classes based on index
            if (index % 4 === 0) section.classList.add('slide-in-left');
            else if (index % 4 === 1) section.classList.add('slide-in-right');
            else if (index % 4 === 2) section.classList.add('fade-in-up');
            else section.classList.add('bounce-in');
        });
    }
    
    // Form Validation and Enhancement
    function setupFormValidation() {
        const contactForm = document.getElementById('contactForm');
        const submitBtn = document.querySelector('.submit-btn');
        
        if (!contactForm) return;
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        // Real-time validation
        [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
            if (input) {
                input.addEventListener('input', validateForm);
                input.addEventListener('blur', function() {
                    validateField(this);
                });
                
                // Enhanced focus effects
                input.addEventListener('focus', function() {
                    this.parentNode.classList.add('focused');
                    createInputFocusEffect(this);
                });
                
                input.addEventListener('blur', function() {
                    this.parentNode.classList.remove('focused');
                });
            }
        });
        
        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                submitForm();
            }
        });
        
        function validateField(field) {
            const value = field.value.trim();
            let isValid = true;
            
            // Remove existing error messages
            const existingError = field.parentNode.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            
            // Validation rules
            switch (field.id) {
                case 'name':
                    if (value.length < 2) {
                        showFieldError(field, 'Name must be at least 2 characters long');
                        isValid = false;
                    }
                    break;
                    
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        showFieldError(field, 'Please enter a valid email address');
                        isValid = false;
                    }
                    break;
                    
                case 'subject':
                    if (value.length < 3) {
                        showFieldError(field, 'Subject must be at least 3 characters long');
                        isValid = false;
                    }
                    break;
                    
                case 'message':
                    if (value.length < 10) {
                        showFieldError(field, 'Message must be at least 10 characters long');
                        isValid = false;
                    }
                    break;
            }
            
            // Visual feedback
            if (isValid) {
                field.style.borderColor = 'rgba(0, 255, 0, 0.5)';
                field.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.2)';
            } else {
                field.style.borderColor = 'rgba(255, 0, 0, 0.5)';
                field.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.2)';
            }
            
            return isValid;
        }
        
        function showFieldError(field, message) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.color = '#ff6b6b';
            errorDiv.style.fontSize = '0.9rem';
            errorDiv.style.marginTop = '0.5rem';
            errorDiv.style.textShadow = '0 1px 3px rgba(0, 0, 0, 0.3)';
            errorDiv.textContent = message;
            
            field.parentNode.appendChild(errorDiv);
        }
        
        function validateForm() {
            const fields = [nameInput, emailInput, subjectInput, messageInput];
            let isFormValid = true;
            
            fields.forEach(field => {
                if (field && !validateField(field)) {
                    isFormValid = false;
                }
            });
            
            // Update submit button state
            if (submitBtn) {
                if (isFormValid) {
                    submitBtn.style.opacity = '1';
                    submitBtn.style.cursor = 'pointer';
                } else {
                    submitBtn.style.opacity = '0.7';
                    submitBtn.style.cursor = 'not-allowed';
                }
            }
            
            return isFormValid;
        }
        
        function createInputFocusEffect(input) {
            const rect = input.getBoundingClientRect();
            const effect = document.createElement('div');
            effect.style.position = 'absolute';
            effect.style.left = rect.left + 'px';
            effect.style.top = rect.top + 'px';
            effect.style.width = rect.width + 'px';
            effect.style.height = rect.height + 'px';
            effect.style.border = '2px solid rgba(255, 255, 255, 0.5)';
            effect.style.borderRadius = '10px';
            effect.style.pointerEvents = 'none';
            effect.style.zIndex = '1000';
            effect.style.animation = 'focusRing 0.3s ease-out';
            
            document.body.appendChild(effect);
            
            setTimeout(() => {
                if (effect.parentNode) {
                    effect.parentNode.removeChild(effect);
                }
            }, 300);
        }
        
        function submitForm() {
            if (!submitBtn) return;
            
            // Show loading state
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Success animation
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(45deg, rgba(0, 255, 0, 0.3), rgba(0, 255, 0, 0.2))';
                
                // Show success message
                showSuccessMessage();
                
                // Reset form after delay
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    
                    // Reset field styles
                    [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
                        if (field) {
                            field.style.borderColor = '';
                            field.style.boxShadow = '';
                        }
                    });
                }, 3000);
            }, 2000);
        }
        
        function showSuccessMessage() {
            const successDiv = document.createElement('div');
            successDiv.className = 'success-message glass-card';
            successDiv.style.position = 'fixed';
            successDiv.style.top = '50%';
            successDiv.style.left = '50%';
            successDiv.style.transform = 'translate(-50%, -50%)';
            successDiv.style.padding = '2rem';
            successDiv.style.textAlign = 'center';
            successDiv.style.zIndex = '10000';
            successDiv.style.color = 'white';
            successDiv.style.background = 'rgba(0, 255, 0, 0.2)';
            successDiv.style.animation = 'bounceIn 0.5s ease-out';
            
            successDiv.innerHTML = `
                <i class="fas fa-check-circle" style="font-size: 3rem; margin-bottom: 1rem; color: #4CAF50;"></i>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
            `;
            
            document.body.appendChild(successDiv);
            
            setTimeout(() => {
                if (successDiv.parentNode) {
                    successDiv.style.animation = 'fadeOut 0.5s ease-out';
                    setTimeout(() => {
                        successDiv.parentNode.removeChild(successDiv);
                    }, 500);
                }
            }, 3000);
        }
    }
    
    // Floating Icons for Desktop
    function initFloatingIcons() {
        if (isMobile) return;
        
        const floatingContainer = document.querySelector('.floating-icons');
        if (!floatingContainer) return;
        
        const icons = ['fas fa-envelope', 'fas fa-phone', 'fas fa-map-marker-alt', 'fab fa-linkedin'];
        
        icons.forEach((iconClass, index) => {
            const icon = document.createElement('i');
            icon.className = `floating-icon ${iconClass}`;
            icon.style.setProperty('--delay', `${index * 2}s`);
            floatingContainer.appendChild(icon);
        });
        
        // Interactive floating icons
        const floatingIcons = document.querySelectorAll('.floating-icon');
        floatingIcons.forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.style.animationPlayState = 'paused';
                this.style.transform = 'scale(1.2)';
                this.style.color = 'rgba(255, 255, 255, 0.3)';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.animationPlayState = 'running';
                this.style.transform = '';
                this.style.color = '';
            });
        });
    }
    
    // Enhanced glass morphism effects
    function enhanceGlassEffects() {
        const glassCards = document.querySelectorAll('.glass-card');
        
        glassCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(255, 255, 255, 0.25)';
                this.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.background = '';
                this.style.borderColor = '';
            });
            
            // Parallax effect on mouse move
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }
    
    // Initialize enhanced effects for non-mobile devices
    if (!isMobile) {
        enhanceGlassEffects();
    }
    
    // Keyboard navigation enhancement
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu
            const navToggle = document.querySelector('.nav-toggle');
            const navMenu = document.querySelector('.nav-menu');
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
    
    // Performance optimization for scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
            // Add scroll-based effects here if needed
            const scrolled = window.pageYOffset;
            const navbar = document.querySelector('.navbar');
            
            if (navbar) {
                if (scrolled > 100) {
                    navbar.style.background = 'rgba(255, 255, 255, 0.15)';
                    navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.2)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.1)';
                    navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
                }
            }
        }, 10);
    });
});

// CSS Animation keyframes to be added dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes focusRing {
        0% {
            transform: scale(0.8);
            opacity: 0;
        }
        50% {
            transform: scale(1.1);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
    
    .focused {
        transform: translateY(-2px);
        transition: transform 0.3s ease;
    }
    
    .error-message {
        animation: slideInUp 0.3s ease-out;
    }
`;

document.head.appendChild(style);
