# Configuration Setup Guide

This guide explains how to use the configuration system to easily manage all your personal information, links, and content across all your profile pages.

## 📁 Configuration Files

### `config.js` - Main Configuration File
This is the central configuration file where you'll update all your personal information, links, skills, projects, and settings.

### `update-readme.js` - README Generator
Automatically generates your `README.md` file from the configuration.

### `update-email.js` - Email Template Generator
Generates your email-friendly HTML page from the configuration.

## 🚀 Quick Setup

### 1. Update Your Information

Open `config.js` and update all the placeholder information:

```javascript
// Personal Information
personal: {
    name: "Your Full Name",
    title: "Your Professional Title",
    email: "your-email@example.com",
    // ... update all fields
}

// Social Media Links
social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    // ... update all social links
}

// Projects
projects: [
    {
        title: "Your Project Name",
        description: "Project description",
        github: "https://github.com/your-username/project-repo",
        demo: "https://your-project-demo.com",
        // ... add your real projects
    }
]
```

### 2. Update Your Profile Pages

After updating `config.js`, you can regenerate your profile pages:

#### For README.md:
```powershell
node update-readme.js
```

#### For Email Template:
```powershell
node update-email.js
```

#### For HTML Page:
The `index.html` file will automatically use your configuration when loaded in the browser.

## 📋 Configuration Sections

### Personal Information
- Basic details like name, title, email, bio
- Profile image URL
- Resume link

### Social Media Links
- GitHub, LinkedIn, Twitter, etc.
- Portfolio website
- Professional platforms

### Contact Information
- Email, phone, website
- Calendly link for meetings
- Other contact methods

### Current Status
- What you're working on
- What you're learning
- Collaboration interests
- Areas of expertise

### Technical Skills
- Programming languages
- AI/ML technologies
- Web development tools
- Cloud and DevOps
- Databases and tools

### Projects
- Featured projects with descriptions
- GitHub repository links
- Live demo links
- Technology stack used

### Statistics
- GitHub stats
- Professional achievements
- Years of experience
- Number of projects

### Theme Configuration
- Color scheme
- Visual preferences
- Feature toggles

## 🎨 Customization Options

### Changing Colors
Update the theme section in `config.js`:
```javascript
theme: {
    primaryColor: "#your-primary-color",
    secondaryColor: "#your-secondary-color",
    // ... other theme options
}
```

### Adding New Projects
Add to the projects array:
```javascript
projects: [
    {
        title: "New Project",
        description: "Description of your new project",
        github: "https://github.com/you/new-project",
        demo: "https://new-project-demo.com",
        tech: ["React", "Node.js", "MongoDB"],
        image: "https://project-image-url.com"
    }
]
```

### Updating Skills
Modify the skills object:
```javascript
skills: {
    programmingLanguages: ["Python", "JavaScript", "New Language"],
    // ... other skill categories
}
```

## 🔧 Advanced Features

### SEO Configuration
Update meta tags and SEO settings:
```javascript
seo: {
    title: "Your SEO Title",
    description: "Your SEO description",
    keywords: "your, seo, keywords",
    // ... other SEO settings
}
```

### Feature Toggles
Enable/disable features:
```javascript
features: {
    typingAnimation: true,
    darkMode: true,
    particleBackground: false,
    // ... other features
}
```

### GitHub Integration
Configure GitHub stats:
```javascript
github: {
    username: "your-github-username",
    showStats: true,
    theme: "radical", // or "default", "dark", etc.
}
```

## 📱 File Structure

```
zahid-marwat/
├── config.js              # Main configuration file
├── index.html             # Interactive profile page
├── email-intro.html       # Email-friendly template
├── README.md              # GitHub profile README
├── update-readme.js       # README generator script
├── update-email.js        # Email template generator
├── styles.css             # Additional styling
└── SETUP.md              # Setup instructions
```

## 🛠️ Maintenance

### Regular Updates
1. Update `config.js` with new projects, skills, or information
2. Run the generator scripts to update your files
3. Commit and push changes to GitHub

### Adding New Features
1. Update the configuration structure in `config.js`
2. Modify the generator scripts to use new config options
3. Update the HTML templates as needed

## 🚀 Deployment

### GitHub Pages
1. Push all files to your GitHub repository
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose "main"
4. Your site will be available at `https://your-username.github.io/your-repo/`

### Custom Domain
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 📧 Using the Email Template

The email-friendly template can be used in several ways:

1. **Email Signature**: Copy the HTML and use it as your email signature
2. **Professional Introduction**: Send the link in emails
3. **Networking**: Share the link on professional platforms
4. **Mobile-Friendly**: Optimized for mobile viewing

## 🔍 Troubleshooting

### Common Issues

**Scripts not running:**
- Make sure Node.js is installed
- Run `npm init -y` if needed
- Check file permissions

**Images not loading:**
- Verify image URLs are accessible
- Use HTTPS URLs for security
- Consider using a CDN for images

**Links not working:**
- Double-check all URLs in config.js
- Ensure social media links are complete
- Test all external links

## 📝 Best Practices

1. **Keep it updated**: Regularly update your configuration
2. **Use high-quality images**: Professional photos work best
3. **Test on mobile**: Ensure responsive design works
4. **Validate links**: Check all links are working
5. **SEO optimize**: Use relevant keywords in descriptions
6. **Professional tone**: Maintain consistent professional voice

## 🆘 Support

If you encounter any issues:
1. Check the troubleshooting section
2. Verify your configuration syntax
3. Test individual components
4. Check browser console for errors

## 🔄 Updates

To update your profile:
1. Edit `config.js`
2. Run generator scripts
3. Test changes locally
4. Commit and push to GitHub
5. Verify live site updates

This configuration system makes it easy to maintain consistency across all your professional profiles while keeping everything up to date from a single source of truth.
