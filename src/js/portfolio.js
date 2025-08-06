// Enhanced Navigation functionality with Mobile Touch Effects
document.addEventListener('DOMContentLoaded', function() {
    // Mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                     (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
    
    // Setup mobile touch effects if on mobile
    if (isMobile) {
        setupMobileTouchEffects();
        hideMobileFloatingIcons();
    }
    
    // Create theme toggle button and add to navbar
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.classList.add('theme-toggle');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    
    // Add theme toggle button to the right side of navbar (after nav-menu)
    navContainer.appendChild(themeToggle);
    
    // Load saved theme and apply it immediately
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Theme toggle functionality with animation
    themeToggle.addEventListener('click', function() {
        // Add click animation
        this.classList.add('clicked');
        
        // Toggle theme
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        
        // Update icon with animation
        setTimeout(() => {
            themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }, 200);
        
        // Save theme preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Remove click animation class
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 400);
        
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
    
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenuElement = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenuElement.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
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
    
    // Projects filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top <= windowHeight && rect.bottom >= 0 && !bar.classList.contains('animated')) {
                bar.classList.add('animated');
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    };
    
    // Animate on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Animate stats numbers
    const animateStats = () => {
        const statNumbers = document.querySelectorAll('.stat-item h3');
        
        statNumbers.forEach(stat => {
            const rect = stat.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top <= windowHeight && rect.bottom >= 0 && !stat.classList.contains('animated')) {
                stat.classList.add('animated');
                const finalValue = parseInt(stat.textContent.replace(/[^\d]/g, ''));
                let currentValue = 0;
                const increment = finalValue / 50;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        stat.textContent = stat.textContent.replace(/\d+/, finalValue);
                        clearInterval(counter);
                    } else {
                        stat.textContent = stat.textContent.replace(/\d+/, Math.floor(currentValue));
                    }
                }, 20);
            }
        });
    };
    
    // Animate on scroll
    window.addEventListener('scroll', animateStats);
    
    // Contact form handling
    const contactForm = document.querySelector('.message-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple form validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Create mailto link
            const mailtoLink = `mailto:fbpzahid4830@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your message! Your default email client should open now.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Add scroll transition to navbar
    navbar.style.transition = 'transform 0.3s ease';
    
    // Enhanced Intersection Observer for animations
    const enhancedObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const enhancedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Handle different animation types
                if (element.classList.contains('animate-on-scroll')) {
                    element.classList.add('animated');
                }
                
                // Handle typing animation
                if (element.classList.contains('typing-animation')) {
                    element.style.animation = 'typing 3s steps(20, end), pulse 1s infinite';
                }
                
                // Handle progress bars
                if (element.classList.contains('animated-progress')) {
                    const width = element.style.width;
                    element.style.width = '0%';
                    setTimeout(() => {
                        element.style.width = width;
                    }, 200);
                }
                
                // Handle staggered animations
                const delay = element.dataset.delay;
                if (delay) {
                    element.style.animationDelay = delay;
                }
                
                // Unobserve after animation
                enhancedObserver.unobserve(element);
            }
        });
    }, enhancedObserverOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .typing-animation, .animated-progress, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .slide-in-up, .slide-in-down, .slide-in-left, .slide-in-right, .bounce-in');
    animatedElements.forEach(el => {
        enhancedObserver.observe(el);
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat-item, .certification-item, .value-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Initialize animations
    animateSkillBars();
    animateStats();
    
    // Typing animation
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = typingText.textContent;
        typingText.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
    
    // Floating icons mouse interaction - Cross-page implementation
    const floatingIcons = document.querySelectorAll('.floating-icon');
    const body = document.body;
    let mouseX = 0;
    let mouseY = 0;
    let isMouseInWindow = false;
    let isMouseMoving = false;
    let mouseTimer = null;
    let orbitAnimationId = null;
    let fightAnimationId = null;
    let isHomePage = document.querySelector('.hero') !== null;
    let iconsInitialized = false;
    
    // Initialize floating icons on all pages
    function initializeFloatingIcons() {
        if (floatingIcons.length === 0) {
            // Create floating icons if they don't exist
            createFloatingIcons();
        }
        
        // Show icons with emerging animation from left
        showIconsWithEmergingAnimation();
    }
    
    // Create floating icons dynamically
    function createFloatingIcons() {
        const floatingIconsContainer = document.querySelector('.floating-icons');
        if (!floatingIconsContainer) {
            // Create container if it doesn't exist
            const container = document.createElement('div');
            container.className = 'floating-icons';
            document.body.appendChild(container);
            
            // Create the icons
            const icons = ['fa-code', 'fa-laptop', 'fa-cog', 'fa-lightbulb'];
            icons.forEach((iconClass, index) => {
                const iconDiv = document.createElement('div');
                iconDiv.className = 'floating-icon';
                iconDiv.style.setProperty('--delay', `${index * 3}s`);
                iconDiv.innerHTML = `<i class="fas ${iconClass}"></i>`;
                container.appendChild(iconDiv);
            });
        }
    }
    
    // Show icons with emerging animation from left side
    function showIconsWithEmergingAnimation() {
        const allIcons = document.querySelectorAll('.floating-icon');
        
        allIcons.forEach((icon, index) => {
            // Start from left side of screen
            icon.style.position = 'fixed';
            icon.style.left = '-100px';
            icon.style.top = '50%';
            icon.style.width = '50px';
            icon.style.height = '50px';
            icon.style.opacity = '0';
            icon.style.transform = 'translate(-50%, -50%)';
            icon.style.transition = 'all 0.8s ease-out';
            icon.style.zIndex = '1000';
            
            // Animate in with delay
            setTimeout(() => {
                icon.style.opacity = '1';
                icon.style.left = '100px';
                
                // After emerging, position based on page type
                setTimeout(() => {
                    if (isHomePage) {
                        resetFloatingIcons();
                    } else {
                        // On other pages, position randomly and start following cursor
                        const randomX = Math.random() * (window.innerWidth - 100) + 50;
                        const randomY = Math.random() * (window.innerHeight - 100) + 50;
                        icon.style.left = `${randomX}px`;
                        icon.style.top = `${randomY}px`;
                        icon.style.transition = 'all 0.3s ease-out';
                    }
                }, 1200);
            }, index * 600); // Slower stagger - increased from 200ms to 600ms
        });
        
        iconsInitialized = true;
    }

    if (floatingIcons.length > 0 || !iconsInitialized) {
        // Initialize icons on page load
        initializeFloatingIcons();
        
        // Track mouse position on entire window
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            isMouseInWindow = true;
            isMouseMoving = true;
            
            // Clear the stationary timer
            if (mouseTimer) {
                clearTimeout(mouseTimer);
            }
            
            // Cancel fighting animation if mouse is moving
            if (fightAnimationId) {
                cancelAnimationFrame(fightAnimationId);
                fightAnimationId = null;
            }
            
            // Set timer for mouse stationary detection
            mouseTimer = setTimeout(() => {
                isMouseMoving = false;
                startCursorRotationAnimation();
            }, 1000); // 1 second of no movement starts cursor rotation
            
            // Update floating icons to follow mouse
            updateFloatingIcons();
        });
        
        // Track mouse leave window
        document.addEventListener('mouseleave', () => {
            isMouseInWindow = false;
            isMouseMoving = false;
            if (mouseTimer) {
                clearTimeout(mouseTimer);
            }
            if (fightAnimationId) {
                cancelAnimationFrame(fightAnimationId);
                fightAnimationId = null;
            }
            resetFloatingIcons();
        });
        
        // Track mouse enter window
        document.addEventListener('mouseenter', () => {
            isMouseInWindow = true;
        });
        
        // Function to update floating icons position based on mouse
        function updateFloatingIcons() {
            if (!isMouseInWindow || !isMouseMoving) return;
            
            const allIcons = document.querySelectorAll('.floating-icon');
            if (allIcons.length === 0) return;
            
            // Cancel orbit animation when following mouse
            if (orbitAnimationId) {
                cancelAnimationFrame(orbitAnimationId);
                orbitAnimationId = null;
            }
            
            // Cancel cursor rotation if mouse is moving
            if (fightAnimationId) {
                cancelAnimationFrame(fightAnimationId);
                fightAnimationId = null;
            }
            
            const time = Date.now() * 0.002; // For smooth rotation
            
            allIcons.forEach((icon, index) => {
                // Add snake mode class
                icon.classList.add('snake-mode');
                icon.classList.remove('orbit-mode', 'fighting-mode');
                
                // Create snake-like formation - icons follow in a line behind the cursor
                const delay = index * 0.1; // Reduced delay for smoother snake
                const distance = 50 + (index * 40); // Distance from cursor (closer = bigger)
                
                // Calculate angle based on mouse movement direction
                const mouseVelocityX = mouseX - (icon.lastMouseX || mouseX);
                const mouseVelocityY = mouseY - (icon.lastMouseY || mouseY);
                let angle = Math.atan2(mouseVelocityY, mouseVelocityX) + Math.PI; // Opposite direction
                
                // Add slight curve to the snake
                const snakeWave = Math.sin(time * 2 + index * 0.5) * 0.3;
                angle += snakeWave;
                
                const relativeX = Math.cos(angle) * distance;
                const relativeY = Math.sin(angle) * distance;
                
                // Convert to viewport coordinates
                const targetX = mouseX + relativeX;
                const targetY = mouseY + relativeY;
                
                // Calculate size based on distance from cursor (closer = bigger)
                const maxSize = 60;
                const minSize = 35;
                const sizeRatio = Math.max(0, (4 - index) / 4); // First icon biggest, last smallest
                const iconSize = minSize + (maxSize - minSize) * sizeRatio;
                
                // Apply positioning and size
                icon.style.position = 'fixed';
                icon.style.left = `${targetX}px`;
                icon.style.top = `${targetY}px`;
                icon.style.width = `${iconSize}px`;
                icon.style.height = `${iconSize}px`;
                icon.style.fontSize = `${iconSize * 0.4}px`; // Scale font with size
                icon.style.transform = 'translate(-50%, -50%)';
                icon.style.transition = `all ${0.15 + delay}s ease-out`;
                icon.style.animation = 'none';
                icon.style.zIndex = '1000';
                
                // Add rotation around own axis
                const rotationSpeed = 2 + (index * 0.3); // Different rotation speeds
                const rotationAngle = (time * rotationSpeed * 50) % 360;
                icon.style.transform += ` rotate(${rotationAngle}deg)`;
                
                // Add opacity based on distance (closer = more opaque)
                const opacity = 0.7 + (sizeRatio * 0.3);
                icon.style.opacity = opacity;
                
                // Store last mouse position for direction calculation
                icon.lastMouseX = mouseX;
                icon.lastMouseY = mouseY;
            });
        }
        
        // Function to reset floating icons to orbit animation or default positioning
        function resetFloatingIcons() {
            const allIcons = document.querySelectorAll('.floating-icon');
            if (allIcons.length === 0) return;
            
            if (isHomePage) {
                // On home page, orbit around profile picture
                const heroImageContainer = document.querySelector('.hero-image');
                if (!heroImageContainer) return;
                
                const containerRect = heroImageContainer.getBoundingClientRect();
                const containerCenterX = containerRect.left + containerRect.width / 2;
                const containerCenterY = containerRect.top + containerRect.height / 2;
                
                // Reset to standard size and opacity with random starting positions
                allIcons.forEach((icon, index) => {
                    // Add orbit mode class
                    icon.classList.add('orbit-mode');
                    icon.classList.remove('snake-mode', 'fighting-mode');
                    
                    // Random starting angle for each icon
                    const randomAngle = Math.random() * Math.PI * 2;
                    const radius = 160 + (index * 35); // Bigger circle around profile picture
                    const x = Math.cos(randomAngle) * radius;
                    const y = Math.sin(randomAngle) * radius;
                    
                    // Store the starting angle for smooth orbit animation
                    icon.startAngle = randomAngle;
                    
                    // Position relative to profile picture center
                    const targetX = containerCenterX + x;
                    const targetY = containerCenterY + y;
                    
                    // Reset size and properties
                    icon.style.position = 'fixed';
                    icon.style.left = `${targetX}px`;
                    icon.style.top = `${targetY}px`;
                    icon.style.width = '50px';
                    icon.style.height = '50px';
                    icon.style.fontSize = '1.2rem';
                    icon.style.opacity = '1';
                    icon.style.transform = 'translate(-50%, -50%)';
                    icon.style.transition = 'all 0.8s ease-out';
                    icon.style.animation = 'none';
                    icon.style.zIndex = '1';
                });
                
                // Start orbit animation after transition
                setTimeout(() => {
                    startOrbitAnimation();
                }, 800);
            } else {
                // On other pages, float in random positions
                allIcons.forEach((icon, index) => {
                    // Add orbit mode class
                    icon.classList.add('orbit-mode');
                    icon.classList.remove('snake-mode', 'fighting-mode');
                    
                    // Random position on screen
                    const randomX = Math.random() * (window.innerWidth - 100) + 50;
                    const randomY = Math.random() * (window.innerHeight - 100) + 50;
                    
                    // Reset size and properties
                    icon.style.position = 'fixed';
                    icon.style.left = `${randomX}px`;
                    icon.style.top = `${randomY}px`;
                    icon.style.width = '50px';
                    icon.style.height = '50px';
                    icon.style.fontSize = '1.2rem';
                    icon.style.opacity = '0.8';
                    icon.style.transform = 'translate(-50%, -50%)';
                    icon.style.transition = 'all 0.8s ease-out';
                    icon.style.animation = 'none';
                    icon.style.zIndex = '1';
                });
                
                // Start gentle floating animation
                setTimeout(() => {
                    startGeneralFloatingAnimation();
                }, 800);
            }
        }
        
        // Enhanced orbit animation function
        function startOrbitAnimation() {
            if (isMouseInWindow && isMouseMoving) return;
            
            const heroImageContainer = document.querySelector('.hero-image');
            if (!heroImageContainer) return;
            
            function animate() {
                if (isMouseInWindow && isMouseMoving) return;
                
                const containerRect = heroImageContainer.getBoundingClientRect();
                const containerCenterX = containerRect.left + containerRect.width / 2;
                const containerCenterY = containerRect.top + containerRect.height / 2;
                
                const time = Date.now() * 0.001;
                const allIcons = document.querySelectorAll('.floating-icon');
                
                allIcons.forEach((icon, index) => {
                    const speed = 0.4 + (index * 0.1); // Different speeds
                    const radius = 160 + (index * 35); // Bigger circle around profile picture
                    
                    // Use stored starting angle plus time-based rotation
                    const angle = (icon.startAngle || 0) + (time * speed);
                    
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    // Position relative to profile picture center
                    const targetX = containerCenterX + x;
                    const targetY = containerCenterY + y;
                    
                    icon.style.position = 'fixed';
                    icon.style.left = `${targetX}px`;
                    icon.style.top = `${targetY}px`;
                    icon.style.width = '50px';
                    icon.style.height = '50px';
                    icon.style.fontSize = '1.2rem';
                    icon.style.opacity = '1';
                    icon.style.transform = 'translate(-50%, -50%)';
                    icon.style.transition = 'none';
                    icon.style.zIndex = '1';
                    
                    // Add rotation to the icon itself (slower rotation around own axis)
                    const selfRotationAngle = (time * (1 + index * 0.2) * 20) % 360;
                    icon.style.transform += ` rotate(${selfRotationAngle}deg)`;
                });
                
                orbitAnimationId = requestAnimationFrame(animate);
            }
            
            animate();
        }
        
        // General floating animation for non-home pages
        function startGeneralFloatingAnimation() {
            if (isMouseInWindow && isMouseMoving) return;
            
            function animate() {
                if (isMouseInWindow && isMouseMoving) return;
                
                const time = Date.now() * 0.001;
                const allIcons = document.querySelectorAll('.floating-icon');
                
                allIcons.forEach((icon, index) => {
                    // Get current position
                    const currentX = parseFloat(icon.style.left) || 0;
                    const currentY = parseFloat(icon.style.top) || 0;
                    
                    // Add gentle floating motion
                    const floatX = Math.sin(time * 0.5 + index * 1.5) * 30;
                    const floatY = Math.cos(time * 0.3 + index * 1.2) * 20;
                    
                    // Keep within screen bounds
                    const minX = 50;
                    const maxX = window.innerWidth - 50;
                    const minY = 50;
                    const maxY = window.innerHeight - 50;
                    
                    const targetX = Math.max(minX, Math.min(maxX, currentX + floatX * 0.1));
                    const targetY = Math.max(minY, Math.min(maxY, currentY + floatY * 0.1));
                    
                    icon.style.position = 'fixed';
                    icon.style.left = `${targetX}px`;
                    icon.style.top = `${targetY}px`;
                    icon.style.width = '50px';
                    icon.style.height = '50px';
                    icon.style.fontSize = '1.2rem';
                    icon.style.opacity = '0.8';
                    icon.style.transform = 'translate(-50%, -50%)';
                    icon.style.transition = 'none';
                    icon.style.zIndex = '1';
                    
                    // Add rotation to the icon itself
                    const selfRotationAngle = (time * (1 + index * 0.2) * 15) % 360;
                    icon.style.transform += ` rotate(${selfRotationAngle}deg)`;
                });
                
                orbitAnimationId = requestAnimationFrame(animate);
            }
            
            animate();
        }
        
        // Cursor rotation animation function - icons rotate around the cursor when stationary
        function startCursorRotationAnimation() {
            if (!isMouseInWindow || isMouseMoving) return;
            
            function animate() {
                if (!isMouseInWindow || isMouseMoving) return;
                
                const time = Date.now() * 0.001;
                const allIcons = document.querySelectorAll('.floating-icon');
                
                allIcons.forEach((icon, index) => {
                    // Add rotation mode class
                    icon.classList.add('fighting-mode');
                    icon.classList.remove('orbit-mode', 'snake-mode');
                    
                    // Calculate rotation around cursor
                    const speed = 0.8 + (index * 0.2); // Different rotation speeds
                    const radius = 60 + (index * 25); // Different radii from cursor
                    const baseAngle = (index * Math.PI / 2); // Starting positions
                    const angle = baseAngle + (time * speed);
                    
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    // Position relative to cursor
                    const targetX = mouseX + x;
                    const targetY = mouseY + y;
                    
                    // Dynamic sizing based on rotation speed
                    const dynamicSize = 45 + Math.sin(time * 2 + index) * 8;
                    
                    icon.style.position = 'fixed';
                    icon.style.left = `${targetX}px`;
                    icon.style.top = `${targetY}px`;
                    icon.style.width = `${dynamicSize}px`;
                    icon.style.height = `${dynamicSize}px`;
                    icon.style.fontSize = `${dynamicSize * 0.4}px`;
                    icon.style.transform = 'translate(-50%, -50%)';
                    icon.style.transition = 'none';
                    icon.style.zIndex = '1000';
                    
                    // Add fast self-rotation
                    const selfRotationAngle = (time * (3 + index * 0.5) * 60) % 360;
                    icon.style.transform += ` rotate(${selfRotationAngle}deg)`;
                    
                    // Pulsating opacity
                    const opacity = 0.8 + Math.sin(time * 3 + index) * 0.2;
                    icon.style.opacity = opacity;
                });
                
                fightAnimationId = requestAnimationFrame(animate);
            }
            
            animate();
        }
        
        // Initialize with appropriate animation based on page
        setTimeout(() => {
            if (!iconsInitialized) {
                initializeFloatingIcons();
            }
        }, 100);
        
        // Handle page scroll to maintain position
        window.addEventListener('scroll', () => {
            if (!isMouseInWindow || !isMouseMoving) {
                // Update position on scroll
                if (orbitAnimationId) {
                    cancelAnimationFrame(orbitAnimationId);
                    orbitAnimationId = null;
                    setTimeout(() => {
                        if (isHomePage) {
                            startOrbitAnimation();
                        } else {
                            startGeneralFloatingAnimation();
                        }
                    }, 50);
                }
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (!isMouseInWindow || !isMouseMoving) {
                if (orbitAnimationId) {
                    cancelAnimationFrame(orbitAnimationId);
                    orbitAnimationId = null;
                    setTimeout(() => {
                        if (isHomePage) {
                            startOrbitAnimation();
                        } else {
                            startGeneralFloatingAnimation();
                        }
                    }, 50);
                }
            }
        });
    }
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Mobile Touch Effects Functions
function setupMobileTouchEffects() {
    // Create mobile effects container
    const effectsContainer = document.createElement('div');
    effectsContainer.id = 'mobileEffects';
    effectsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(effectsContainer);
    
    // Add touch effect on touch/click
    document.addEventListener('touchstart', (e) => {
        createTouchRipple(e.touches[0].clientX, e.touches[0].clientY);
    });

    // Also handle mouse clicks for hybrid devices
    document.addEventListener('click', (e) => {
        if (e.isTrusted) { // Only real user clicks
            createTouchRipple(e.clientX, e.clientY);
        }
    });
}

function createTouchRipple(x, y) {
    const effectsContainer = document.getElementById('mobileEffects');
    if (!effectsContainer) return;
    
    const ripple = document.createElement('div');
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
        animation: ripple 1s ease-out forwards;
        pointer-events: none;
        left: ${x - 150}px;
        top: ${y - 150}px;
    `;
    
    // Add CSS animation if not already added
    if (!document.getElementById('ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                0% {
                    width: 0;
                    height: 0;
                    opacity: 1;
                }
                100% {
                    width: 300px;
                    height: 300px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    effectsContainer.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 1000);
}

function hideMobileFloatingIcons() {
    // Hide floating icons on mobile devices
    const floatingIcons = document.querySelector('.floating-icons');
    if (floatingIcons) {
        floatingIcons.style.display = 'none';
    }
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.3s ease';
    }, 100);
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    }
});

// Add focus indicators for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #3498db';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Add lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
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
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Add theme toggle functionality (optional)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load saved theme
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
