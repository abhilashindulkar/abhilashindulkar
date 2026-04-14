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

    document.querySelectorAll('.timeline-item, .skill-category, .project-card, .cert-card').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.05}s`;
        observer.observe(el);
    });
});

function renderTechPills(techArray) {
    return techArray
        .map(t => `<span class="tech-pill">${t}</span>`)
        .join('');
}

function renderExperience() {
    const timeline = document.getElementById('experience-timeline');

    portfolioData.experience.forEach(job => {
        const el = document.createElement('div');
        el.className = 'timeline-item';

        el.innerHTML = `
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
                <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
            </div>
            <div class="tech-stack">
                <strong>Technologies</strong>
                <div class="tech-pills">${renderTechPills(job.tech)}</div>
            </div>
        `;

        timeline.appendChild(el);
    });
}

function renderSkills() {
    const grid = document.getElementById('skills-grid');

    Object.entries(portfolioData.skills).forEach(([category, items]) => {
        const el = document.createElement('div');
        el.className = 'skill-category';
        el.innerHTML = `
            <h3>${category}</h3>
            <div class="skill-pills">${items.map(s => `<span class="skill-pill">${s}</span>`).join('')}</div>
        `;
        grid.appendChild(el);
    });
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');

    portfolioData.projects.forEach(project => {
        const el = document.createElement('div');
        el.className = 'project-card';

        el.innerHTML = `
            <h3>${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-highlights">
                <ul>${project.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
            </div>
            <div class="project-tech">
                <strong>Tech Stack</strong>
                <div class="tech-pills">${renderTechPills(project.tech)}</div>
            </div>
        `;

        grid.appendChild(el);
    });
}

const PROVIDER_COLORS = {
    google: '#4285f4',
    aws: '#ff9900',
    hashicorp: '#7b42bc',
    cncf: '#446ca9'
};

function renderCertifications() {
    const grid = document.getElementById('certifications-grid');

    portfolioData.certifications.forEach(cert => {
        const el = document.createElement('div');
        el.className = 'cert-card';
        const color = PROVIDER_COLORS[cert.provider] || '#3b82f6';
        el.style.setProperty('--cert-accent', color);

        el.innerHTML = `
            <span class="cert-provider">${cert.provider.toUpperCase()}</span>
            <div class="cert-name">${cert.name}</div>
            <div class="cert-date">${cert.date}</div>
            <div class="cert-id">${cert.id}</div>
        `;

        grid.appendChild(el);
    });
}
