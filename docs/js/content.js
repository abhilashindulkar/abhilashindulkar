// Portfolio content data extracted from resume
const portfolioData = {
    about: {
        name: "Abhilash Indulkar",
        title: "Sr. Systems Engineer III - DevOps",
        experience: "9 years",
        email: "abhilashindulkar@gmail.com",
        summary: `Having 9 years of experience as a DevOps & Cloud Engineer with exposure to Software Configuration Management, Build & Release Management, IaC & CI/CD.

Certified: 6*GCP, HCTA-003, KCNA, 1*AWS

Core Expertise:
• DevOps operations, processes and tools
• Software Configuration Management (SCM) - compiling, packaging, deploying
• Version Control Systems (Git), Build tools (Maven), CI/CD (GitHub Actions, Jenkins, Azure DevOps)
• Configuration Management & Deployment (Ansible)
• Cloud Platforms: GCP, AWS, Azure
• Containerization & Orchestration: Docker, Kubernetes, OpenShift
• Infrastructure as Code: Terraform, Terragrunt, CloudFormation
• Scripting: Bash, Python
• Monitoring & Observability: Prometheus, Grafana, ELK Stack`
    },

    experience: [
        {
            company: "EPAM Systems",
            title: "Sr. Systems Engineer III - DevOps",
            period: "Oct 2023 - Present",
            client: "An Investment & Financial Services Company",
            project: "Legacy Modernization / Cloud Transformation (On-Prem Apps - GCP Migration)",
            responsibilities: [
                "Provision and manage GCP Organization infrastructure through Terraform",
                "Develop and manage build, deploy, and GitHub Actions workflows for microservices",
                "Release applications following SDLC Compliance through change management",
                "Configure Auditing, Logging/Monitoring modules, SLIs/SLOs, Toil automation",
                "Successfully completed 3 applications migration from On-prem to GCP",
                "Code reviews and collaboration with Data, Development, and Infrastructure teams"
            ],
            tech: "Linux, Bash, GitHub, GHA, GCP, Azure, Terraform, Docker, Kubernetes, SRE, JIRA, Confluence, ServiceNow, GenAI, Sonarqube, Jfrog Artifactory, Helm, Istio"
        },
        {
            company: "Quantiphi Inc.",
            title: "Sr. Platform Engineer - DevOps",
            period: "July 2021 - Sep 2023",
            client: "Global Medical Product Company & British Financial Services Company",
            project: "GCP Landing Zone & Data Ingestion Pipeline",
            responsibilities: [
                "Create/manage Landing Zone project using CFT (Cloud Foundation Toolkit)",
                "Develop Terraform scripts for resource provisioning and management",
                "Work on Data Ingestion Pipeline and Infrastructure resource creation",
                "Implement CI/CD for pipeline orchestration automation",
                "Deploy ML Model tools into Docker Environment",
                "Develop and improvise Azure Pipelines for various tech stacks"
            ],
            tech: "Linux, Bash, Python, Github, Jenkins, Azure DevOps, GCP, AWS, Terraform, Docker, Kubernetes, JIRA, Confluence, ServiceNow, GenAI"
        },
        {
            company: "OvalEdge India Pvt Ltd",
            title: "Associate DevOps Engineer",
            period: "Oct 2019 - June 2021",
            client: "Greensky, Upwork, Adecco, Getty Images",
            project: "Web Application OvalEdge (Data Catalog & Governance Tool)",
            responsibilities: [
                "Build and deploy OvalEdge in various deployment models (IaaS, PaaS, CaaS)",
                "Work with Development and Testing teams for build scheduling",
                "Execute builds and troubleshoot build failures",
                "Manage multi-cloud deployments (AWS, Azure, GCP)"
            ],
            tech: "Linux, Bash, BitBucket, Jenkins, JIRA, AWS, Azure, GCP, Docker, Kubernetes, Okta"
        },
        {
            company: "Wipro Ltd",
            title: "Senior Associate (DevOps)",
            period: "Jan 2017 - Sep 2019",
            client: "UBER",
            project: "AVMM & Bedrock (Maps Improvement Projects)",
            responsibilities: [
                "Build and deploy backend Java code for Maps modeling",
                "Manage Microsoft AD and ADFS",
                "Work with Development and Testing teams for build management",
                "Execute builds and troubleshoot failures"
            ],
            tech: "Linux, GitHub, Jenkins, Ansible, AWS, Microsoft AD, ADFS"
        }
    ],

    skills: {
        "Operating System": "Linux (Ubuntu, RHEL), Windows",
        "Version Control": "GitHub, GitLab, Bitbucket",
        "Build Tools": "Maven",
        "CI/CD": "GitHub Actions, Jenkins, Azure DevOps",
        "Web Servers": "Apache Tomcat, Apache WebServer, Nginx",
        "Containers": "Docker, Kubernetes, OpenShift",
        "Config Management": "Ansible, Bash Scripting, Python",
        "Infrastructure as Code": "Terraform, Terragrunt, CloudFormation",
        "Artifactories": "Jfrog, Nexus",
        "Cloud Platforms": "GCP (Primary), AWS, Azure",
        "Databases": "MySQL, MongoDB",
        "Monitoring": "Prometheus, Grafana, StackDriver, ELK Stack",
        "Other Tools": "Helm, Kustomize, JIRA, ServiceNow, Confluence"
    },

    certifications: [
        { name: "Google Professional Cloud Developer", date: "May 2025", id: "d0a49c80-0fa4-4291-86f6-ca75442f52fd" },
        { name: "Google Gen AI Leader", date: "Jun 2025", id: "424ccc5c56d247b88bbf4bca0523889c" },
        { name: "Kubernetes and Cloud Native Associate (KCNA)", date: "Mar 2025", id: "LF-fk3nfei1e4" },
        { name: "Google Professional Cloud Database Engineer", date: "Oct 2024", id: "bdde5539e1994534ba597248d65872f4" },
        { name: "Google Professional Cloud DevOps Engineer", date: "Sep 2024", id: "341a22cf8e3141f383e61c3c8c103a27" },
        { name: "HashiCorp Certified: Terraform Associate (003)", date: "May 2024", id: "5f012587-c15c-4427-8ca5-7ce883a69e13" },
        { name: "Google Professional Cloud Architect", date: "Apr 2023", id: "c96e2e10-f1ce-464e-a69d-61eeaf3de2a9" },
        { name: "AWS Cloud Practitioner", date: "Apr 2022", id: "D8MWFX0BN2B4129N" },
        { name: "Google Associate Cloud Engineer", date: "Dec 2021", id: "5dbc02a5f3144cb184bba28d7e476b8e" }
    ],

    projects: [
        {
            name: "Legacy Modernization - Cloud Transformation",
            description: "On-Premises Applications Migration to GCP",
            highlights: [
                "Successfully migrated 3 applications from On-prem to GCP",
                "Implemented IaC using Terraform for GCP Organization infrastructure",
                "Built CI/CD pipelines using GitHub Actions for microservices",
                "Configured monitoring, logging, and SRE practices (SLIs/SLOs)",
                "Implemented Toil automation for operational efficiency"
            ],
            tech: "GCP, Terraform, GitHub Actions, Docker, Kubernetes, Helm, Istio"
        },
        {
            name: "GCP Landing Zone & Data Ingestion Pipeline",
            description: "Enterprise-grade GCP Foundation with automated data pipelines",
            highlights: [
                "Created and managed GCP Landing Zone using Cloud Foundation Toolkit",
                "Built Data Ingestion Pipeline for multiple source systems",
                "Automated Pipeline orchestration with CI/CD",
                "Deployed ML Model-based tools in containerized environments"
            ],
            tech: "GCP, CFT, Terraform, Python, Docker, Jenkins, Azure DevOps"
        },
        {
            name: "OvalEdge Multi-Cloud Deployment",
            description: "Data Catalog & Governance Tool - Multi-cloud Architecture",
            highlights: [
                "Deployed data catalog solution across AWS, Azure, and GCP",
                "Implemented IaaS, PaaS, and CaaS deployment models",
                "Integrated with SSO tools (Okta) for enterprise authentication",
                "Built automated build and deployment pipelines"
            ],
            tech: "AWS, Azure, GCP, Docker, Kubernetes, Jenkins, Okta"
        },
        {
            name: "Infrastructure Automation & Tooling",
            description: "Custom automation solutions across multiple projects",
            highlights: [
                "Python module for Google Group membership automation with Azure AD sync",
                "Automated Access Context List management via Terragrunt",
                "Created AWS Public AMI with BYOL subscription model",
                "Set up VPN servers and Site-to-Site VPN for hybrid connectivity",
                "Multi-tenant GKE Cluster governance using OPA and Kyverno policies"
            ],
            tech: "Python, Terraform, Terragrunt, AWS, GCP, Kubernetes, OPA, Kyverno"
        }
    ],

    links: {
        linkedin: "https://www.linkedin.com/in/abhilashindulkar",
        github: "https://github.com/abhilashindulkar",
        medium: "https://abhilashindulkar.medium.com",
        youtube: "https://www.youtube.com/@starktalksdevops"
    },

    education: {
        degree: "B.E. (Electronics & Communication Engineering)",
        college: "Maratha Mandal College of Engineering (VTU)",
        year: "2015"
    }
};
