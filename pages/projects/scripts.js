// Enhanced Projects Page with Auto-Detection and Mobile Touch Effects

class ProjectsManager {
    constructor() {
        this.projects = [];
        this.filteredProjects = [];
        this.currentFilter = 'all';
        this.isMobile = this.detectMobile();
        
        this.init();
    }

    detectMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
    }

    async init() {
        await this.loadProjects();
        this.setupEventListeners();
        this.setupMobileEffects();
        this.renderProjects();
        this.setupScrollAnimations();
    }

    async loadProjects() {
        // Automatic project detection from projects folder
        const knownProjects = [
            'face-recognition-system',
            'portfolio-website', 
            'traffic-monitoring-system'
        ];

        for (const projectName of knownProjects) {
            try {
                const project = await this.loadProjectData(projectName);
                if (project) {
                    this.projects.push(project);
                }
            } catch (error) {
                console.log(`Project ${projectName} not found or error loading:`, error);
            }
        }

        this.filteredProjects = [...this.projects];
    }

    async loadProjectData(projectName) {
        try {
            // Try to load README.md content
            const readmeResponse = await fetch(`./${projectName}/README.md`);
            let readmeContent = '';
            
            if (readmeResponse.ok) {
                readmeContent = await readmeResponse.text();
            }

            // Parse README content
            const projectData = this.parseReadmeContent(readmeContent, projectName);
            
            // Check if project has an index.html
            const indexResponse = await fetch(`./${projectName}/index.html`);
            const hasDemo = indexResponse.ok;

            return {
                ...projectData,
                name: projectName,
                demoUrl: hasDemo ? `./${projectName}/index.html` : null,
                githubUrl: `https://github.com/zahid-marwat/${projectName}` // Adjust as needed
            };
        } catch (error) {
            console.error(`Error loading project ${projectName}:`, error);
            return null;
        }
    }

    parseReadmeContent(content, projectName) {
        // Default project data
        const defaults = {
            title: this.formatProjectName(projectName),
            description: 'An exciting project showcasing innovative technology solutions.',
            category: 'other',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            icon: 'fas fa-project-diagram'
        };

        if (!content) return defaults;

        // Extract title (first # heading)
        const titleMatch = content.match(/^#\s+(.+)/m);
        const title = titleMatch ? titleMatch[1].trim() : defaults.title;

        // Extract overview/description
        const overviewMatch = content.match(/##\s+Overview\s*\n\n(.*?)(?=\n##|\n$)/s);
        const description = overviewMatch ? 
            overviewMatch[1].trim().split('\n')[0] : defaults.description;

        // Extract technologies
        const techMatch = content.match(/##\s+Technologies Used\s*\n\n(.*?)(?=\n##|\n$)/s);
        let technologies = defaults.technologies;
        
        if (techMatch) {
            technologies = techMatch[1]
                .split('\n')
                .filter(line => line.trim().startsWith('-'))
                .map(line => line.replace('-', '').trim())
                .filter(tech => tech);
        }

        // Determine category and icon based on content
        const { category, icon } = this.categorizeProject(content, projectName);

        return {
            title,
            description,
            category,
            technologies,
            icon
        };
    }

    categorizeProject(content, projectName) {
        const contentLower = content.toLowerCase();
        const nameLower = projectName.toLowerCase();

        if (contentLower.includes('face recognition') || 
            contentLower.includes('computer vision') || 
            nameLower.includes('face') ||
            contentLower.includes('opencv') ||
            contentLower.includes('detection')) {
            return { category: 'computer-vision', icon: 'fas fa-eye' };
        }

        if (contentLower.includes('ai') || 
            contentLower.includes('machine learning') || 
            contentLower.includes('deep learning') ||
            contentLower.includes('neural network')) {
            return { category: 'ai-ml', icon: 'fas fa-brain' };
        }

        if (contentLower.includes('web') || 
            contentLower.includes('html') || 
            contentLower.includes('css') ||
            contentLower.includes('javascript') ||
            nameLower.includes('website') ||
            nameLower.includes('portfolio')) {
            return { category: 'web-dev', icon: 'fas fa-code' };
        }

        if (contentLower.includes('data') || 
            contentLower.includes('analytics') || 
            contentLower.includes('visualization')) {
            return { category: 'data-science', icon: 'fas fa-chart-bar' };
        }

        return { category: 'other', icon: 'fas fa-project-diagram' };
    }

    formatProjectName(name) {
        return name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    setupEventListeners() {
        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.setActiveFilter(filter);
                this.filterProjects(filter);
            });
        });

        // Mobile menu toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileMenu) {
            mobileMenu.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }
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

    setActiveFilter(filter) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });
        this.currentFilter = filter;
    }

    filterProjects(filter) {
        if (filter === 'all') {
            this.filteredProjects = [...this.projects];
        } else {
            this.filteredProjects = this.projects.filter(project => 
                project.category === filter
            );
        }
        this.renderProjects();
    }

    renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        projectsGrid.innerHTML = '';

        this.filteredProjects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });

        // Re-setup scroll animations for new elements
        this.setupScrollAnimations();
    }

    createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card glass-card animate-on-scroll';
        card.style.animationDelay = `${index * 0.1}s`;
        card.dataset.category = project.category;

        const logoPath = `./${project.name}/logo.svg`;
        
        card.innerHTML = `
            <div class="project-image">
                <div class="project-logo">
                    <i class="${project.icon}"></i>
                </div>
                ${project.demoUrl ? `
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.demoUrl}" class="project-link" title="View Demo">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="${project.githubUrl}" class="project-link" title="View Code" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                ` : `
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.githubUrl}" class="project-link" title="View Code" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                `}
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>
        `;

        return card;
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
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsManager();
});

// Add smooth scrolling for anchor links
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

// Handle window resize
window.addEventListener('resize', () => {
    // Update mobile detection on resize
    const projectsManager = window.projectsManagerInstance;
    if (projectsManager) {
        projectsManager.isMobile = projectsManager.detectMobile();
    }
});

// Export for global access
window.ProjectsManager = ProjectsManager;
