# Portfolio Deployment Guide

## 🎯 What's Been Created

Your terminal-themed DevOps portfolio has been created with:

### Files Structure
```
├── docs/
│   ├── index.html          # Main portfolio page
│   ├── css/
│   │   └── style.css       # Terminal styling
│   ├── js/
│   │   ├── content.js      # Your resume data
│   │   └── terminal.js     # Terminal functionality
│   └── README.md
├── .github/
│   └── workflows/
│       └── pages.yml       # GitHub Pages deployment workflow
├── README.md               # Updated profile README
└── DEPLOYMENT.md          # This file
```

### Features
✅ Interactive terminal interface
✅ All content from your resume
✅ Command-line navigation (help, about, experience, skills, certifications, projects, contact)
✅ Command history (↑/↓ arrows)
✅ Tab auto-complete
✅ Fully responsive design
✅ Professional terminal aesthetic

## 🚀 Deployment Steps

### Step 1: Test Locally (Optional)
```bash
# Open the portfolio locally in your browser
start docs/index.html
# or
open docs/index.html  # on Mac/Linux
```

### Step 2: Commit and Push Changes
```bash
# Check current status
git status

# Add all new files
git add .

# Commit with a meaningful message
git commit -m "Add terminal-themed portfolio website

- Created interactive terminal-style portfolio
- Added about, experience, skills, certifications, projects sections
- Configured GitHub Pages deployment with GitHub Actions
- Updated profile README with portfolio link"

# Push to GitHub
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/abhilashindulkar/abhilashindulkar
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
   - (The workflow will automatically deploy from the `docs` folder)
5. Wait 1-2 minutes for the deployment to complete

### Step 4: Verify Deployment

Your portfolio will be live at:
**https://abhilashindulkar.github.io/abhilashindulkar/**

The GitHub Actions workflow will automatically:
- Build and deploy on every push to main branch
- Deploy from the `docs` folder
- Update your live site within minutes

## 📝 Updating Content

To update your portfolio content:

1. Edit `docs/js/content.js` - Contains all your resume data
2. Commit and push changes
3. GitHub Actions will automatically redeploy

### Common Updates

**Update experience:**
```javascript
// Edit portfolioData.experience array in docs/js/content.js
```

**Add new certification:**
```javascript
// Add to portfolioData.certifications array in docs/js/content.js
```

**Update skills:**
```javascript
// Modify portfolioData.skills object in docs/js/content.js
```

**Change colors/styling:**
```css
/* Edit variables in docs/css/style.css */
:root {
    --text-color: #00ff00;  /* Change terminal text color */
    --highlight: #ffff00;   /* Change highlight color */
}
```

## 🎨 Customization Options

### Change Terminal Color Scheme
Edit `docs/css/style.css` `:root` variables:
- `--text-color`: Main terminal text color (default: green)
- `--highlight`: Highlight color for commands (default: yellow)
- `--terminal-bg`: Terminal background (default: dark)

### Add New Commands
Edit `docs/js/terminal.js` and add to the `commands` object:
```javascript
this.commands = {
    // ... existing commands
    yourcommand: this.yourFunction.bind(this)
};
```

### Modify ASCII Art
Edit the ASCII art in `docs/index.html` in the `.ascii-art` section.

## 🔧 Troubleshooting

**Portfolio not showing up?**
- Check GitHub Actions tab for deployment status
- Ensure Pages is enabled in repository settings
- Verify the workflow file is in `.github/workflows/pages.yml`
- Check that you pushed to the `main` branch

**Content not updating?**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 1-2 minutes after push for GitHub Actions to complete
- Check Actions tab for any errors

**Styling issues on mobile?**
- The site is responsive and tested on mobile devices
- Clear browser cache if styles aren't loading

## 📚 Terminal Commands Reference

| Command | Description |
|---------|-------------|
| `help` | Show all available commands |
| `about` | Display professional summary |
| `experience` | Show work history |
| `skills` | List technical skills |
| `certifications` | Display all certifications |
| `projects` | Showcase key projects |
| `education` | Educational background |
| `contact` | Contact information |
| `links` | Social media links |
| `resume` | Resume download info |
| `clear` | Clear terminal screen |
| `whoami` | Display current user |
| `pwd` | Print working directory |
| `ls` | List available sections |

## 🌟 Next Steps

1. **Test locally** - Open `docs/index.html` to preview
2. **Push to GitHub** - Follow Step 2 above
3. **Enable Pages** - Configure in GitHub settings
4. **Share your portfolio** - Add the link to your resume, LinkedIn, etc.
5. **Keep it updated** - Regularly update with new projects and certifications

## 📞 Support

If you encounter any issues:
1. Check the GitHub Actions logs
2. Review the browser console for JavaScript errors
3. Ensure all file paths are correct

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript
Terminal theme optimized for DevOps professionals
