# Amanjot Singh – Portfolio

A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript.

## 🚀 Live Site
After deploying to GitHub Pages, your site will be live at:
`https://<your-github-username>.github.io/<repository-name>/`

## 📁 Project Structure
```
PORTFOLIO/
├── index.html          # Main HTML file
├── style.css           # All styles (dark theme, responsive)
├── script.js           # Typewriter, animations, nav, form
├── .github/
│   └── workflows/
│       └── deploy.yml  # Auto-deploy to GitHub Pages
└── README.md
```

## ✨ Features
- Animated hero section with typewriter effect
- Smooth scroll navigation with active link highlighting
- Scroll-triggered fade-in animations
- Responsive design (mobile-friendly hamburger menu)
- Education timeline
- Skills, Projects, and Certifications sections
- Contact form with validation
- Back-to-top button
- 100% static – no server needed, works 24/7

## 🌐 How to Deploy (GitHub Pages – Free & 24/7)

### Step 1 – Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in.
2. Click **+** → **New repository**.
3. Name it `portfolio` (or anything you like).
4. Set it to **Public** and click **Create repository**.

### Step 2 – Push your code
Open **PowerShell** in your PORTFOLIO folder and run:
```powershell
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step 3 – Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** → **Pages**.
3. Under **Source**, select **GitHub Actions**.
4. Your site will be live within 1–2 minutes at `https://<username>.github.io/<repo-name>/`.

Every time you push changes, the site redeploys automatically.
