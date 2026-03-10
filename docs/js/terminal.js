// Terminal functionality
class Terminal {
    constructor() {
        this.input = document.getElementById('terminal-input');
        this.terminal = document.getElementById('terminal');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.commands = {
            help: this.showHelp.bind(this),
            about: this.showAbout.bind(this),
            experience: this.showExperience.bind(this),
            skills: this.showSkills.bind(this),
            certifications: this.showCertifications.bind(this),
            projects: this.showProjects.bind(this),
            contact: this.showContact.bind(this),
            education: this.showEducation.bind(this),
            clear: this.clearTerminal.bind(this),
            resume: this.downloadResume.bind(this),
            links: this.showLinks.bind(this),
            whoami: this.whoami.bind(this),
            pwd: this.pwd.bind(this),
            ls: this.ls.bind(this)
        };

        this.init();
    }

    init() {
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.handleCommand();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory('up');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory('down');
            } else if (e.key === 'Tab') {
                e.preventDefault();
                this.autoComplete();
            }
        });

        // Keep input focused
        document.addEventListener('click', () => {
            this.input.focus();
        });

        // Show help automatically on load
        setTimeout(() => {
            this.typeCommand('help');
        }, 500);
    }

    handleCommand() {
        const commandText = this.input.value.trim();
        if (!commandText) return;

        this.commandHistory.push(commandText);
        this.historyIndex = this.commandHistory.length;

        // Display command
        this.addCommandLine(commandText);

        // Execute command
        const [cmd, ...args] = commandText.toLowerCase().split(' ');
        if (this.commands[cmd]) {
            this.commands[cmd](args);
        } else if (commandText) {
            this.addOutput(`<span class="error">Command not found: ${cmd}</span>\nType '<span class="highlight">help</span>' to see available commands.`);
        }

        // Clear input and scroll to bottom
        this.input.value = '';
        this.scrollToBottom();
    }

    addCommandLine(command) {
        const commandLine = document.createElement('div');
        commandLine.className = 'command-line';
        commandLine.innerHTML = `
            <span class="command-prompt">visitor@portfolio:~$</span>
            <span class="command-text">${this.escapeHtml(command)}</span>
        `;

        const outputDiv = this.terminal.querySelector('.output');
        outputDiv.appendChild(commandLine);
    }

    addOutput(content) {
        const output = document.createElement('div');
        output.className = 'command-output';
        output.innerHTML = content;

        const outputDiv = this.terminal.querySelector('.output');
        outputDiv.appendChild(output);
    }

    navigateHistory(direction) {
        if (direction === 'up' && this.historyIndex > 0) {
            this.historyIndex--;
            this.input.value = this.commandHistory[this.historyIndex];
        } else if (direction === 'down') {
            this.historyIndex++;
            if (this.historyIndex >= this.commandHistory.length) {
                this.historyIndex = this.commandHistory.length;
                this.input.value = '';
            } else {
                this.input.value = this.commandHistory[this.historyIndex];
            }
        }
    }

    autoComplete() {
        const partial = this.input.value.toLowerCase();
        if (!partial) return;

        const matches = Object.keys(this.commands).filter(cmd => cmd.startsWith(partial));
        if (matches.length === 1) {
            this.input.value = matches[0];
        } else if (matches.length > 1) {
            this.addCommandLine(partial);
            this.addOutput(matches.join('  '));
        }
    }

    typeCommand(command) {
        this.input.value = command;
        this.handleCommand();
    }

    scrollToBottom() {
        this.terminal.scrollTop = this.terminal.scrollHeight;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    clearTerminal() {
        const outputDiv = this.terminal.querySelector('.output');
        outputDiv.innerHTML = '';
    }

    showHelp() {
        const helpText = `
<h2>Available Commands:</h2>

<span class="highlight">about</span>          - Learn about me and my professional background
<span class="highlight">experience</span>     - View my work experience and career journey
<span class="highlight">skills</span>         - Display my technical skills and expertise
<span class="highlight">certifications</span> - List my professional certifications
<span class="highlight">projects</span>       - Showcase key projects I've worked on
<span class="highlight">education</span>      - View my educational background
<span class="highlight">contact</span>        - Get my contact information
<span class="highlight">links</span>          - Social media and professional links
<span class="highlight">resume</span>         - Information about downloading my resume

<h3>Terminal Commands:</h3>
<span class="highlight">clear</span>          - Clear the terminal screen
<span class="highlight">help</span>           - Show this help message
<span class="highlight">whoami</span>         - Display current user
<span class="highlight">pwd</span>            - Print working directory
<span class="highlight">ls</span>             - List available sections

<h3>Navigation Tips:</h3>
• Use <span class="highlight">↑/↓</span> arrow keys to navigate command history
• Press <span class="highlight">Tab</span> to autocomplete commands
• Type any command above to explore my portfolio
        `;
        this.addOutput(helpText);
    }

    showAbout() {
        const about = portfolioData.about;
        const aboutText = `
<h2>${about.name}</h2>
<h3>${about.title}</h3>

<div class="section">
Experience: ${about.experience} in DevOps & Cloud Engineering
Email: <a href="mailto:${about.email}" class="link">${about.email}</a>
Phone: ${about.phone}
</div>

<div class="section">
${about.summary}
</div>

<p>Type '<span class="highlight">experience</span>' to see my work history or '<span class="highlight">skills</span>' to view technical expertise.</p>
        `;
        this.addOutput(aboutText);
    }

    showExperience() {
        let expText = '<h2>Professional Experience</h2>\n';

        portfolioData.experience.forEach((job, index) => {
            expText += `
<div class="job">
    <div class="job-title">${job.title}</div>
    <div class="job-company">${job.company}</div>
    <div class="job-date">${job.period}</div>
    ${job.client ? `<div>Client: ${job.client}</div>` : ''}
    ${job.project ? `<div>Project: ${job.project}</div>` : ''}

    <div style="margin-top: 10px;">
        <strong>Key Responsibilities:</strong>
        <ul>
            ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
        </ul>
    </div>

    <div style="margin-top: 8px;">
        <strong>Technologies:</strong> ${job.tech}
    </div>
</div>
            `;
        });

        this.addOutput(expText);
    }

    showSkills() {
        let skillsText = '<h2>Technical Skills</h2>\n';

        for (const [category, skills] of Object.entries(portfolioData.skills)) {
            skillsText += `
<div class="skill-category">
    <span class="skill-name">${category}:</span>
    <span>${skills}</span>
</div>
            `;
        }

        skillsText += '\n<p>Type \'<span class="highlight">certifications</span>\' to view my professional certifications.</p>';
        this.addOutput(skillsText);
    }

    showCertifications() {
        let certText = '<h2>Professional Certifications</h2>\n';
        certText += '<p>Total: 9 certifications (6x GCP, 1x AWS, 1x HashiCorp, 1x KCNA)</p>\n';

        portfolioData.certifications.forEach(cert => {
            certText += `
<div class="cert-item">
    <span class="cert-name">✓ ${cert.name}</span>
    <span class="cert-date">(${cert.date})</span>
    ${cert.id ? `<br><span style="color: #666;">ID: ${cert.id}</span>` : ''}
</div>
            `;
        });

        this.addOutput(certText);
    }

    showProjects() {
        let projectsText = '<h2>Key Projects</h2>\n';

        portfolioData.projects.forEach((project, index) => {
            projectsText += `
<div class="job">
    <h3>${project.name}</h3>
    <div>${project.description}</div>

    <div style="margin-top: 10px;">
        <strong>Highlights:</strong>
        <ul>
            ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
        </ul>
    </div>

    <div style="margin-top: 8px;">
        <strong>Technologies:</strong> ${project.tech}
    </div>
</div>
            `;
        });

        this.addOutput(projectsText);
    }

    showContact() {
        const contact = portfolioData.about;
        const links = portfolioData.links;
        const contactText = `
<h2>Contact Information</h2>

<div class="section">
📧 Email: <a href="mailto:${contact.email}" class="link">${contact.email}</a>
📱 Phone: ${contact.phone}

💼 LinkedIn: <a href="${links.linkedin}" target="_blank" class="link">${links.linkedin}</a>
🐙 GitHub: <a href="${links.github}" target="_blank" class="link">${links.github}</a>
✍️ Medium: <a href="${links.medium}" target="_blank" class="link">${links.medium}</a>
📺 YouTube: <a href="${links.youtube}" target="_blank" class="link">${links.youtube}</a>
</div>

<p>Feel free to reach out for opportunities, collaborations, or just to connect!</p>
        `;
        this.addOutput(contactText);
    }

    showEducation() {
        const edu = portfolioData.education;
        const educationText = `
<h2>Education</h2>

<div class="job">
    <div class="job-title">${edu.degree}</div>
    <div class="job-company">${edu.college}</div>
    <div class="job-date">Graduated: ${edu.year}</div>
</div>

<div class="section">
<strong>Additional Qualifications:</strong>
• 12th (CBSE) from Kendriya Vidyalaya Vasco Da Gama, Goa (2010)
• 10th from Kendriya Vidyalaya Panagarh, WB (2008)
</div>
        `;
        this.addOutput(educationText);
    }

    downloadResume() {
        const resumeText = `
<h2>Resume</h2>

<div class="section">
My complete resume is available with detailed information about:
• 9 years of DevOps & Cloud Engineering experience
• Multiple certifications (6 GCP, AWS, HashiCorp, KCNA)
• Comprehensive project portfolio
• Technical skills and achievements

To download my resume:
• Email me at <a href="mailto:${portfolioData.about.email}" class="link">${portfolioData.about.email}</a>
• Connect with me on <a href="${portfolioData.links.linkedin}" target="_blank" class="link">LinkedIn</a>
• Check my <a href="${portfolioData.links.github}" target="_blank" class="link">GitHub profile</a>
</div>

<p>Type '<span class="highlight">contact</span>' to see all my contact information.</p>
        `;
        this.addOutput(resumeText);
    }

    showLinks() {
        const links = portfolioData.links;
        const linksText = `
<h2>Find Me Online</h2>

<div class="section">
🐙 GitHub:   <a href="${links.github}" target="_blank" class="link">${links.github}</a>
💼 LinkedIn: <a href="${links.linkedin}" target="_blank" class="link">${links.linkedin}</a>
✍️ Medium:   <a href="${links.medium}" target="_blank" class="link">${links.medium}</a>
📺 YouTube:  <a href="${links.youtube}" target="_blank" class="link">${links.youtube}</a>
</div>

<p>Connect with me to stay updated on my latest projects and insights!</p>
        `;
        this.addOutput(linksText);
    }

    whoami() {
        this.addOutput('visitor\n\n<p>You are viewing the portfolio of Abhilash Indulkar. Type \'<span class="highlight">about</span>\' to learn more.</p>');
    }

    pwd() {
        this.addOutput('/home/abhilash/portfolio');
    }

    ls() {
        const items = Object.keys(this.commands).filter(cmd =>
            !['clear', 'help', 'whoami', 'pwd', 'ls'].includes(cmd)
        );
        this.addOutput(items.join('  ') + '\n\n<p>Type any of the above to explore that section.</p>');
    }
}

// Initialize terminal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Terminal();
});
