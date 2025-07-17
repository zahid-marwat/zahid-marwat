// Email template generator using config.js
// This script generates the email-friendly HTML from your configuration

const fs = require('fs');
const config = require('./config.js');

function generateEmailTemplate() {
    const emailTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.personal.name} - Introduction</title>
    <style>
        /* Email-friendly styles */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        
        .email-container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .header {
            text-align: center;
            border-bottom: 2px solid ${config.theme.primaryColor};
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        
        .profile-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: linear-gradient(135deg, ${config.theme.primaryColor}, ${config.theme.secondaryColor});
            margin: 0 auto 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 40px;
        }
        
        .name {
            font-size: 28px;
            margin: 0;
            color: #333;
        }
        
        .title {
            font-size: 18px;
            color: ${config.theme.primaryColor};
            margin: 5px 0;
        }
        
        .contact-info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        
        .contact-info h3 {
            margin-top: 0;
            color: #333;
        }
        
        .contact-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
        }
        
        .contact-links a {
            color: ${config.theme.primaryColor};
            text-decoration: none;
            font-weight: bold;
        }
        
        .contact-links a:hover {
            text-decoration: underline;
        }
        
        .section {
            margin: 25px 0;
        }
        
        .section h3 {
            color: #333;
            border-bottom: 1px solid ${config.theme.primaryColor};
            padding-bottom: 5px;
        }
        
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        
        .skill-tag {
            background: ${config.theme.primaryColor};
            color: white;
            padding: 4px 8px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: 500;
        }
        
        .highlight {
            background: #e8f4f8;
            padding: 15px;
            border-left: 4px solid ${config.theme.primaryColor};
            margin: 15px 0;
        }
        
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
        }
        
        ul {
            padding-left: 20px;
        }
        
        li {
            margin: 5px 0;
        }
        
        @media (max-width: 600px) {
            body {
                padding: 10px;
            }
            
            .email-container {
                padding: 20px;
            }
            
            .contact-links {
                flex-direction: column;
                gap: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="profile-img">${config.personal.name.split(' ').map(n => n[0]).join('')}</div>
            <h1 class="name">${config.personal.name}</h1>
            <p class="title">${config.personal.title}</p>
        </div>
        
        <div class="highlight">
            <p><strong>Hello!</strong> ${config.personal.bio}</p>
        </div>
        
        <div class="section">
            <h3>🚀 What I'm Currently Working On</h3>
            <ul>
                <li>${config.status.currentWork}</li>
                <li>${config.status.learning}</li>
                <li>Research in computer vision and machine learning</li>
                <li>Open-source contributions to the AI community</li>
            </ul>
        </div>
        
        <div class="section">
            <h3>💻 Technical Expertise</h3>
            <div class="skills">
                ${[...config.skills.programmingLanguages.slice(0, 5), ...config.skills.aiMlComputerVision.slice(0, 5), ...config.skills.webDevelopment.slice(0, 3)].map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
        
        <div class="section">
            <h3>🎯 Key Projects</h3>
            <ul>
                ${config.projects.slice(0, 4).map(project => `<li><strong>${project.title}</strong> - ${project.description}</li>`).join('')}
            </ul>
        </div>
        
        <div class="section">
            <h3>🌱 Current Learning Focus</h3>
            <ul>
                <li>${config.status.learning}</li>
                <li>MLOps and model deployment at scale</li>
                <li>Computer Vision research methodologies</li>
                <li>Cloud architecture and distributed systems</li>
            </ul>
        </div>
        
        <div class="section">
            <h3>🤝 Looking to Collaborate</h3>
            <p>I'm always interested in working on innovative projects, especially those involving:</p>
            <ul>
                <li>Computer vision and AI applications</li>
                <li>Open-source machine learning projects</li>
                <li>Tech solutions with social impact</li>
                <li>Research collaborations in AI/ML</li>
            </ul>
        </div>
        
        <div class="contact-info">
            <h3>📫 Let's Connect</h3>
            <p>I'd love to discuss potential collaborations, projects, or just chat about technology!</p>
            <div class="contact-links">
                <a href="mailto:${config.contact.email}">📧 Email</a>
                <a href="${config.social.linkedin}" target="_blank">💼 LinkedIn</a>
                <a href="${config.social.github}" target="_blank">🐙 GitHub</a>
                <a href="${config.contact.website}" target="_blank">🌐 Portfolio</a>
            </div>
        </div>
        
        <div class="footer">
            <p>Thank you for taking the time to learn about me! Looking forward to connecting.</p>
            <p><em>Best regards,<br>${config.personal.name}</em></p>
        </div>
    </div>
</body>
</html>`;

    return emailTemplate;
}

// Generate and save email template
const emailContent = generateEmailTemplate();
fs.writeFileSync('email-intro.html', emailContent);
console.log('email-intro.html has been updated successfully!');
console.log('Your email-friendly introduction page is ready to use.');
