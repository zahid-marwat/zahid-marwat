// Configuration file for GitHub Profile Page
// Update all your personal information, links, and content here

const config = {
    // Personal Information
    personal: {
        name: "Zahid Marwat",
        title: "Computer Vision Engineer & AI/ML Enthusiast",
        email: "fbpzahid4830@gmail.com",
        location: "Pakistan",
        bio: "Passionate Computer Vision Engineer with expertise in AI/ML and software development. I specialize in building intelligent solutions that solve real-world problems using cutting-edge technology.",
        profileImage: "assets/images/profile picture.png", // Local profile image
        resume: "assets/docs/CV.pdf" // Local resume file
    },

    // Local Files
    files: {
        profileImage: "assets/images/profile picture.png",
        resume: "assets/docs/CV.pdf",
        companyLogos: {
            airloop: "assets/images/airloop_logo.png"
        },
        // Add more file categories as needed
        certificates: {
            // Add certificate files here when available
        },
        projectImages: {
            // Add project screenshot files here when available
        }
    },

    // Social Media Links
    social: {
        github: "https://github.com/zahid-marwat",
        linkedin: "https://www.linkedin.com/in/zahid4830513",
        twitter: "https://x.com/zahid89782667",
        portfolio: "https://zahidmarwat.dev",
        instagram: "https://instagram.com/zahid_marwat",
        youtube: "https://youtube.com/@zahidmarwat",
        medium: "https://medium.com/@zahidmarwat",
        dev: "https://dev.to/zahidmarwat"
    },

    // Contact Information
    contact: {
        email: "fbpzahid4830@gmail.com",
        phone: "+93459858020",
        website: "https://zahidmarwat.dev",
        calendly: "https://calendly.com/zahidmarwat",
        discord: "zahid9333"
    },

    // Current Status
    status: {
        currentWork: "Computer vision projects and AI-powered applications that solve real-world problems.",
        learning: "Advanced Deep Learning, MLOps, and Computer Vision Research methodologies.",
        collaboration: "Open-source AI projects and innovative tech solutions that make a difference.",
        askMeAbout: "Computer Vision, Machine Learning, Python, Software Architecture, and AI implementation.",
        funFact: "I can debug code faster after a good cup of coffee ☕"
    },

    // Technical Skills
    skills: {
        programmingLanguages: [
            "Python",
            "C++",
            "R",
            'SQL',
            "MATLAB"
        ],
        aiMlComputerVision: [
            "TensorFlow",
            "PyTorch",
            "OpenCV",
            "scikit-learn",
            "Pandas",
            "NumPy",
            "Keras",
            "YOLO",
            "CNN",
            "RCNN"
        ],
        webDevelopment: [
            "React",
            "Node.js",
            "Express.js",
            "HTML5",
            "CSS3",
            "Vue.js",
            "Angular",
            "Next.js"
        ],
        cloudDevOps: [
            "AWS",
            "Docker",
            "Kubernetes",
            "Git",
            "Linux",
            "Azure",
            "GCP",
            "Jenkins"
        ],
        databases: [
            "MongoDB",
            "PostgreSQL",
            "MySQL",
            "Redis",
            "SQLite"
        ],
        tools: [
            "VS Code",
            "Jupyter",
            "Postman",
            "Figma",
            "Slack",
            "Jira"
        ]
    },

    // Projects
    projects: [
        {
            title: "Computer Vision Object Detection",
            description: "Real-time object detection system using YOLO and OpenCV for automated surveillance applications.",
            github: "https://github.com/zahid-marwat/object-detection",
            demo: "https://object-detection-demo.vercel.app",
            tech: ["Python", "OpenCV", "YOLO", "TensorFlow"],
            image: "https://via.placeholder.com/300x200.png?text=Object+Detection"
        },
        {
            title: "AI-Powered Image Classification",
            description: "Deep learning model for medical image classification with 95% accuracy using TensorFlow and CNN.",
            github: "https://github.com/zahid-marwat/medical-image-classification",
            demo: "https://medical-ai-demo.vercel.app",
            tech: ["Python", "TensorFlow", "CNN", "Medical AI"],
            image: "https://via.placeholder.com/300x200.png?text=Medical+AI"
        },
        {
            title: "Smart Traffic Management System",
            description: "IoT-based traffic monitoring system with computer vision for traffic flow optimization.",
            github: "https://github.com/zahid-marwat/smart-traffic",
            demo: "https://smart-traffic-demo.vercel.app",
            tech: ["Python", "IoT", "Computer Vision", "OpenCV"],
            image: "https://via.placeholder.com/300x200.png?text=Smart+Traffic"
        },
        {
            title: "Full-Stack Web Application",
            description: "Modern web application with React frontend, Node.js backend, and MongoDB database.",
            github: "https://github.com/zahid-marwat/fullstack-app",
            demo: "https://fullstack-app-demo.vercel.app",
            tech: ["React", "Node.js", "MongoDB", "Express.js"],
            image: "https://via.placeholder.com/300x200.png?text=Full+Stack"
        },
        {
            title: "Machine Learning Portfolio",
            description: "Collection of ML projects including NLP, time series analysis, and recommendation systems.",
            github: "https://github.com/zahid-marwat/ml-portfolio",
            demo: "https://ml-portfolio-demo.vercel.app",
            tech: ["Python", "Scikit-learn", "NLP", "Time Series"],
            image: "https://via.placeholder.com/300x200.png?text=ML+Portfolio"
        },
        {
            title: "React Component Library",
            description: "Reusable React component library with TypeScript, Storybook, and comprehensive testing.",
            github: "https://github.com/zahid-marwat/react-components",
            demo: "https://react-components-storybook.vercel.app",
            tech: ["React", "TypeScript", "Storybook", "Jest"],
            image: "https://via.placeholder.com/300x200.png?text=React+Components"
        }
    ],

    // GitHub Stats
    github: {
        username: "zahid-marwat",
        showStats: true,
        showLanguages: true,
        showStreak: true,
        theme: "radical" // Options: default, dark, radical, merko, gruvbox, tokyonight, onedark, cobalt, synthwave, highcontrast, dracula
    },

    // Statistics
    stats: {
        projects: "50+",
        commits: "2k+",
        languages: "15+",
        experience: "3+",
        repositories: "30+",
        followers: "100+",
        contributions: "1k+",
        linesOfCode: "50k+"
    },

    // Typing Animation Texts
    typingTexts: [
        "Building the future with AI and Computer Vision",
        "Passionate about Machine Learning and Innovation",
        "Creating intelligent solutions for real-world problems",
        "Always learning and exploring new technologies",
        "Turning complex algorithms into user-friendly applications",
        "Contributing to open-source AI projects"
    ],

    // Certifications
    certifications: [
        {
            title: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2024",
            url: "https://your-certificate-url.com"
        },
        {
            title: "TensorFlow Developer Certificate",
            issuer: "Google",
            date: "2023",
            url: "https://your-certificate-url.com"
        },
        {
            title: "Computer Vision Specialization",
            issuer: "Coursera",
            date: "2023",
            url: "https://your-certificate-url.com"
        }
    ],

    // Education
    education: [
        {
            degree: "Master of Science in Information Security",
            school: "National University of Sciences and Technology, NUST",
            year: "2026",
            description: "Specialized in information security, secure software development, and AI applications"
        },
        {
            degree: "Bachelor of Science in Electrical Engineering",
            school: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology, GIKI",
            year: "2022",
            description: "Focus on electrical systems, software development, and data structures"
        }
    ],

    // Experience
    experience: [
        {
            title: "Senior Computer Vision Engineer",
            company: "Airloop",
            duration: "2022 - Present",
            description: "Leading computer vision projects and AI model development",
            logo: "./Files/airloop_logo.png" // Company logo
        },
        // {
        //     title: "AI/ML Developer",
        //     company: "Airloop",
        //     duration: "2021 - 2023",
        //     description: "Developed machine learning solutions for various industries"
        // },
        // {
        //     title: "Software Developer",
        //     company: "Software Company",
        //     duration: "2020 - 2021",
        //     description: "Built web applications and backend systems"
        // }
    ],

    // Blog Posts (if you have a blog)
    blog: {
        enabled: true,
        platform: "medium", // medium, dev, hashnode, etc.
        posts: [
            {
                title: "Getting Started with Computer Vision",
                url: "https://medium.com/@zahidmarwat/getting-started-cv",
                date: "2024-01-15"
            },
            {
                title: "Deep Learning Best Practices",
                url: "https://medium.com/@zahidmarwat/deep-learning-best-practices",
                date: "2024-01-10"
            }
        ]
    },

    // Theme Configuration
    theme: {
        primaryColor: "#667eea",
        secondaryColor: "#764ba2",
        accentColor: "#f093fb",
        backgroundColor: "#f8f9fa",
        textColor: "#333333",
        gradientDirection: "135deg"
    },

    // Features to enable/disable
    features: {
        typingAnimation: true,
        darkMode: true,
        particleBackground: false,
        smoothScrolling: true,
        lazyLoading: true,
        analytics: false,
        chatbot: false
    },

    // SEO Configuration
    seo: {
        title: "Zahid Marwat - Computer Vision Engineer & AI/ML Enthusiast",
        description: "Passionate Computer Vision Engineer specializing in AI/ML solutions. Building intelligent applications that solve real-world problems.",
        keywords: "computer vision, machine learning, AI, software engineer, python, tensorflow, opencv",
        author: "Zahid Marwat",
        image: "https://your-profile-image.com/og-image.jpg",
        url: "https://zahidmarwat.dev"
    },

    // Typing Animation Texts
    typingTexts: [
        "Building the future with AI and Computer Vision",
        "Passionate about Machine Learning and Innovation", 
        "Creating intelligent solutions for real-world problems",
        "Always learning and exploring new technologies",
        "Computer Vision Engineer & AI/ML Enthusiast",
        "Turning ideas into intelligent applications"
    ],

    // Contact Form Configuration (if you want to add a contact form)
    contactForm: {
        enabled: false,
        formspreeEndpoint: "https://formspree.io/f/your-form-id",
        netlifyForms: false
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
}

// Make config available globally in browser
if (typeof window !== 'undefined') {
    window.profileConfig = config;
}
