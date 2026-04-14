# Portfolio Deployment Guide

## Project Structure

```
├── docs/
│   ├── index.html          # Main portfolio page
│   ├── css/
│   │   └── style.css       # Styles & animations
│   ├── js/
│   │   ├── content.js      # Portfolio data (single source of truth)
│   │   └── app.js          # Tab switching & dynamic rendering
│   ├── profile.jpg         # Profile picture
│   └── README.md
├── .github/
│   └── workflows/
│       └── pages.yml       # GitHub Pages deployment workflow
├── README.md               # Profile README
├── CHANGELOG.md            # Version history
├── LICENSE                 # MIT License
└── DEPLOYMENT.md           # This file
```

## Deployment Steps

### Step 1: Test Locally (Optional)

```bash
cd docs
python -m http.server 8000
# Visit http://localhost:8000
```

### Step 2: Commit and Push Changes

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings** > **Pages**
2. Under **Build and deployment**, set Source to **GitHub Actions**
3. Wait 1-2 minutes for deployment

### Step 4: Verify

Live at: **https://abhilashindulkar.github.io/abhilashindulkar/**

The GitHub Actions workflow automatically deploys from the `docs` folder on every push to main.

## Updating Content

All portfolio content lives in `docs/js/content.js`. Edit that file to update:

- **Experience**: `portfolioData.experience` array
- **Skills**: `portfolioData.skills` object
- **Certifications**: `portfolioData.certifications` array
- **Projects**: `portfolioData.projects` array

After editing, commit and push. GitHub Actions redeploys automatically.

## Customization

**Change colors/styling** - edit CSS variables in `docs/css/style.css`:

```css
:root {
    --primary-color: #2563eb;
    --accent-color: #3b82f6;
    --bg-dark: #0f172a;
}
```

**Modify layout** - edit `docs/index.html`

## Troubleshooting

**Portfolio not showing up?**
- Check the GitHub Actions tab for deployment status
- Ensure Pages is enabled with Source set to GitHub Actions
- Verify you pushed to the `main` branch

**Content not updating?**
- Clear browser cache (Ctrl+Shift+R)
- Wait 1-2 minutes after push for GitHub Actions to complete

---

Built with vanilla HTML, CSS, and JavaScript
