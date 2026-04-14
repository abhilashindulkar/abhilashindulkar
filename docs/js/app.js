// Modern Portfolio App JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            document.getElementById(targetTab).classList.add('active');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    renderExperience();
    renderSkills();
    renderProjects();
    renderCertifications();

    // Observer must run after render so dynamically created elements exist
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item, .skill-category, .project-card, .cert-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

function renderExperience() {
    const timeline = document.getElementById('experience-timeline');

    portfolioData.experience.forEach(job => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';

        const responsibilitiesList = job.responsibilities
            .map(resp => `<li>${resp}</li>`)
            .join('');

        timelineItem.innerHTML = `
            <div class="timeline-header">
                <div class="company-name">${job.company}</div>
                <div class="job-title">${job.title}</div>
                <div class="job-period">${job.period}</div>
            </div>
            <div class="project-info">
                <p><strong>Client:</strong> ${job.client}</p>
                <p><strong>Project:</strong> ${job.project}</p>
            </div>
            <div class="responsibilities">
                <ul>${responsibilitiesList}</ul>
            </div>
            <div class="tech-stack">
                <strong>Technologies:</strong>
                <span>${job.tech}</span>
            </div>
        `;

        timeline.appendChild(timelineItem);
    });
}

function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');

    Object.entries(portfolioData.skills).forEach(([category, skills]) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-category';
        skillCard.innerHTML = `
            <h3>${category}</h3>
            <p>${skills}</p>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');

    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const highlightsList = project.highlights
            .map(highlight => `<li>${highlight}</li>`)
            .join('');

        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-highlights">
                <ul>${highlightsList}</ul>
            </div>
            <div class="project-tech">
                <strong>Tech Stack:</strong> ${project.tech}
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

function renderCertifications() {
    const certificationsGrid = document.getElementById('certifications-grid');

    portfolioData.certifications.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'cert-card';
        certCard.innerHTML = `
            <div class="cert-name">${cert.name}</div>
            <div class="cert-date">Issued: ${cert.date}</div>
            <div class="cert-id">ID: ${cert.id}</div>
        `;
        certificationsGrid.appendChild(certCard);
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
