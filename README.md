# 🧬 Biology Concept Map - Interactive Study Guide

An interactive, visually stunning concept map for studying biology at the molecular and cellular level. Features glassmorphism UI, animated diagrams, and deep-dive explanations for 35+ key biology terms.

![Biology Concept Map](https://img.shields.io/badge/React-18.3-blue) ![Vite](https://img.shields.io/badge/Vite-5.2-purple) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-pink)

## ✨ Features

- **🎨 Glassmorphism UI** - Beautiful frosted glass aesthetic with cosmic purple/blue gradient
- **🎬 Animated Diagrams** - Interactive SVG visualizations that animate on hover
- **📚 35+ Terms Covered** - Comprehensive coverage across 4 categories:
  - Chemistry Foundations (7 terms)
  - Macromolecules (11 terms)
  - Cell Structures (5 terms)
  - Transport & Solutions (8 terms)
- **🔍 Detail Panels** - Click any term to see in-depth explanations, examples, and related concepts
- **🔗 Relationship Mapping** - Visual connections between related terms
- **⚡ Smooth Animations** - Powered by Framer Motion for buttery transitions

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
```bash
cd "science study guide."
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages

1. Update the `homepage` field in `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

2. Update the `base` in `vite.config.js`:
```javascript
base: '/YOUR_REPO_NAME/'
```

3. Create a new repository on GitHub

4. Initialize git and push:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

5. Deploy:
```bash
npm run deploy
```

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## 🎯 How to Use

### Main Map View
- **Scroll** through the page to see all 4 category panels
- **Hover** over term cards to see mini diagram animations
- **Click** any term to open the detailed view

### Detail Panel
- View larger, animated diagrams
- Read comprehensive definitions and explanations
- See real-world examples
- Navigate to related terms by clicking chips
- Click the **X** or backdrop to return to main view

## 🎨 Customization

### Change Colors
Edit color variables in `src/styles/index.css`:
```css
:root {
  --bg-gradient-start: #0f0c29;
  --primary-blue: #6366f1;
  --primary-purple: #8b5cf6;
  /* ... */
}
```

### Add/Edit Terms
Modify `src/data/termsData.js`:
```javascript
export const termsData = {
  yourNewTerm: {
    id: 'yourNewTerm',
    name: 'Your New Term',
    category: 'chemistry', // or macromolecules, cellStructures, transport
    shortDef: 'Brief description',
    definition: 'Full definition',
    // ...
  }
}
```

### Create New Diagrams
Add new diagram components in `src/components/diagrams/` and register them in `DiagramSelector.jsx`

## 📚 Study Tips

- **Chunk the terms** - Focus on one category at a time
- **Use connections** - Follow the related terms to build a network of understanding
- **Visualize** - Pay attention to the diagrams - they show how concepts work
- **Teach it** - Try explaining each term out loud
- **Practice retrieval** - Quiz yourself by clicking terms and testing your knowledge before reading

## 🛠️ Tech Stack

- **React 18.3** - UI framework
- **Vite 5.2** - Build tool and dev server
- **Framer Motion 11.0** - Animation library
- **SVG** - Vector graphics for diagrams
- **CSS3** - Glassmorphism styling

## 📖 Categories Covered

### Chemistry Foundations
Atom, Proton, Neutron, Electron, Organic Compound, Acid/Base, Law of Conservation of Matter

### Macromolecules
Macromolecule, Monomer vs Polymer, Dehydration Synthesis, Hydrolysis, Carbohydrates, Monosaccharides, Proteins, Amino Acids, R-group, Lipids, Nucleic Acids, Enzyme

### Cell Structures
Cell Membrane, Phospholipids, Hydrophobic, Hydrophilic, Organelle

### Transport & Solutions
Passive Transport, Active Transport, Diffusion, Osmosis, Facilitated Diffusion, Endocytosis, Exocytosis, Hypertonic, Hypotonic, Isotonic, Homeostasis

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

Built as a study tool for biology students learning about life at the molecular and cellular level.

---

**Good luck with your studies!** 🎓🔬
