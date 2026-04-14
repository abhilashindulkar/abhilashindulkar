document.addEventListener('DOMContentLoaded', function() {
    renderExperience();
    renderSkills();
    renderProjects();
    renderCertifications();
    initScrollSpy();
    initMobileMenu();
    initScrollReveal();
});

/* ── Scroll Spy ── */
function initScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { threshold: 0.2, rootMargin: '-10% 0px -70% 0px' });

    sections.forEach(s => observer.observe(s));

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.getElementById(link.dataset.section);
            if (target) target.scrollIntoView({ behavior: 'smooth' });

            const sidebar = document.getElementById('sidebar');
            const overlay = document.querySelector('.sidebar-overlay');
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                if (overlay) overlay.classList.remove('active');
                document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
            }
        });
    });
}

/* ── Mobile Menu ── */
function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const sidebar = document.getElementById('sidebar');

    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
    }

    function close() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', () => {
        const open = sidebar.classList.toggle('open');
        overlay.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', String(open));
    });

    overlay.addEventListener('click', close);
}

/* ── Scroll Reveal ── */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.timeline-item, .skill-category, .project-card, .cert-card').forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i * 0.04, 0.3)}s`;
        observer.observe(el);
    });
}

/* ── Render Helpers ── */
function renderTechPills(arr) {
    return arr.map(t => `<span class="tech-pill">${t}</span>`).join('');
}

function renderExperience() {
    const container = document.getElementById('experience-timeline');

    portfolioData.experience.forEach(job => {
        const el = document.createElement('div');
        el.className = 'timeline-item';
        el.innerHTML = `
            <div class="timeline-header">
                <div class="timeline-left">
                    <div class="company-name">${job.company}</div>
                    <div class="job-title">${job.title}</div>
                </div>
                <span class="job-period">${job.period}</span>
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
        container.appendChild(el);
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
        el.style.setProperty('--cert-accent', PROVIDER_COLORS[cert.provider] || '#6366f1');
        el.innerHTML = `
            <span class="cert-provider">${cert.provider.toUpperCase()}</span>
            <div class="cert-name">${cert.name}</div>
            <div class="cert-date">${cert.date}</div>
            <div class="cert-id">${cert.id}</div>
        `;
        grid.appendChild(el);
    });
}
