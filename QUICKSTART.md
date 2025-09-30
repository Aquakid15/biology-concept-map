# 🚀 Quick Start Guide

## Running Locally (Right Now!)

1. **Open Terminal** in this folder

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser** to the URL shown (usually `http://localhost:5173`)

4. **Start exploring!** Click around, hover over terms, and dive into detailed views.

---

## Deploying to GitHub Pages

### First Time Setup:

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it something like `biology-concept-map`
   - Make it public
   - Don't initialize with README

2. **Update the configuration files:**
   
   In `package.json`, change line 6:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/biology-concept-map",
   ```
   
   In `vite.config.js`, change line 5:
   ```javascript
   base: '/biology-concept-map/',
   ```

3. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Biology Concept Map"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/biology-concept-map.git
   git push -u origin main
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **gh-pages** branch
   - Click Save

6. **Visit your site!**
   - It will be live at: `https://YOUR_USERNAME.github.io/biology-concept-map`
   - May take a few minutes to go live

---

## Making Changes

1. Edit files in the `src/` folder
2. The dev server will auto-reload
3. When happy, commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. Redeploy:
   ```bash
   npm run deploy
   ```

---

## Troubleshooting

**Port already in use?**
- Try: `npm run dev -- --port 3000`

**Build errors?**
- Run: `npm install` again
- Check for typos in recently edited files

**Deployment not showing?**
- Wait 5 minutes for GitHub to build
- Check Settings → Pages is set to gh-pages branch
- Clear browser cache

---

## Tips for Studying

- **Start with Chemistry Foundations** - it builds the base
- **Follow the connections** - use the "Related Concepts" to jump between terms
- **Watch the animations** - they show HOW things work, not just what they are
- **Test yourself** - try to explain each term before reading the definition
- **Create your own examples** - think of real-world applications

---

**Need help?** Check the main README.md for full documentation!
