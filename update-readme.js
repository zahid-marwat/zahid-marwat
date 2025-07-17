// Script to update README.md from config.js
// Run this script to automatically update your README.md with your latest configuration

const fs = require('fs');
const config = require('./config.js');

function generateReadme() {
    const readme = `# Hi there, I'm ${config.personal.name} 👋

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=2E9EF7&center=true&vCenter=true&width=435&lines=${config.typingTexts.join(';').replace(/\s+/g, '+')}" alt="Typing SVG" />
</div>

## 🚀 About Me

${config.personal.bio}

- 🔭 I'm currently working on **${config.status.currentWork}**
- 🌱 I'm currently learning **${config.status.learning}**
- 👯 I'm looking to collaborate on **${config.status.collaboration}**
- 💬 Ask me about **${config.status.askMeAbout}**
- 📫 How to reach me: **${config.contact.email}**
- ⚡ Fun fact: ${config.status.funFact}

## 🛠️ Tech Stack

### Programming Languages
${config.skills.programmingLanguages.map(skill => `![${skill}](https://img.shields.io/badge/${skill}-informational?style=for-the-badge&logo=${skill.toLowerCase()}&logoColor=white)`).join('\n')}

### AI/ML & Computer Vision
${config.skills.aiMlComputerVision.map(skill => `![${skill}](https://img.shields.io/badge/${skill}-informational?style=for-the-badge&logo=${skill.toLowerCase().replace(/\./g, '')}&logoColor=white)`).join('\n')}

### Web Development
${config.skills.webDevelopment.map(skill => `![${skill}](https://img.shields.io/badge/${skill}-informational?style=for-the-badge&logo=${skill.toLowerCase().replace(/\./g, '')}&logoColor=white)`).join('\n')}

### Cloud & DevOps
${config.skills.cloudDevOps.map(skill => `![${skill}](https://img.shields.io/badge/${skill}-informational?style=for-the-badge&logo=${skill.toLowerCase()}&logoColor=white)`).join('\n')}

## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${config.github.username}&show_icons=true&theme=${config.github.theme}" alt="GitHub Stats" />
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${config.github.username}&theme=${config.github.theme}" alt="GitHub Streak" />
</div>

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${config.github.username}&layout=compact&theme=${config.github.theme}" alt="Top Languages" />
</div>

## 🏆 Featured Projects

${config.projects.slice(0, 6).map(project => `### 🎯 [${project.title}](${project.github})
${project.description}

**Tech Stack:** ${project.tech.join(', ')}
- [GitHub Repository](${project.github})
- [Live Demo](${project.demo})
`).join('\n')}

## 📈 Current Focus

\`\`\`javascript
const currentFocus = {
    learning: ${JSON.stringify(config.status.learning.split(', '), null, 4)},
    working: ["${config.status.currentWork}"],
    collaborating: ["${config.status.collaboration}"],
    goals: ["Contributing to AI Research", "Building Impactful Products"]
};
\`\`\`

## 🎓 Education

${config.education.map(edu => `### ${edu.degree}
**${edu.school}** - ${edu.year}
${edu.description}
`).join('\n')}

## 💼 Experience

${config.experience.map(exp => `### ${exp.title}
**${exp.company}** - ${exp.duration}
${exp.description}
`).join('\n')}

## 🏅 Certifications

${config.certifications.map(cert => `- [${cert.title}](${cert.url}) - ${cert.issuer} (${cert.date})`).join('\n')}

${config.blog.enabled ? `## 📝 Latest Blog Posts

${config.blog.posts.map(post => `- [${post.title}](${post.url}) - ${post.date}`).join('\n')}` : ''}

## 🤝 Connect with Me

<div align="center">
  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](${config.social.linkedin})
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](${config.social.github})
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](${config.social.twitter})
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${config.contact.email})
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](${config.contact.website})

</div>

## 📊 Weekly Development Breakdown

<!--START_SECTION:waka-->
<!--END_SECTION:waka-->

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=${config.github.username}&color=blueviolet&style=flat-square&label=Profile+Views" alt="Profile Views" />
</div>

<div align="center">
  <i>⭐️ From <a href="${config.social.github}">${config.github.username}</a></i>
</div>`;

    return readme;
}

// Generate and save README.md
const readmeContent = generateReadme();
fs.writeFileSync('README.md', readmeContent);
console.log('README.md has been updated successfully!');
console.log('Please review the generated README.md and make any necessary adjustments.');
