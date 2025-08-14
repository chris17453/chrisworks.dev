# ChrisWorks.dev - Data-Driven Portfolio Template

## 🚀 About This Project

This is my (Chris Watkins) personal portfolio and "hire me" website, built as a **fully data-driven template** that anyone can use. While it showcases my 25 years of experience in IT and engineering, the entire architecture is designed so you can clone it, update the data files, and have your own professional portfolio running in minutes.

**Live Site**: [https://chrisworks.dev](https://chrisworks.dev)

## 🎯 Why This Exists

I needed a portfolio site to showcase my work and help me find my next role. But instead of building a one-off site, I created a completely data-driven template system. Now you can use the same professional design for your own career journey - just update the data files with your information!

## ✨ Features

- **100% Data-Driven**: Every piece of text comes from configuration files
- **Zero Component Editing Required**: Just edit JSON-like data files
- **Professional Design**: Clean, modern, responsive layout
- **SEO Optimized**: Meta tags, structured data, all configurable
- **Section Control**: Enable/disable sections as needed
- **Terminal Animations**: Cool retro terminal effects (optional)
- **Dark Theme**: Easy on the eyes, professional appearance
- **MIT Licensed**: Free to use for any purpose

## 🏃 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/chris17453/chrisworks.dev.git
cd chrisworks.dev
npm install
```

### 2. Make It Yours

Edit these files in `src/data/`:

#### `site_data.js` - Main Configuration
```javascript
personal: {
  full_name: 'Your Name',
  email_user: 'you',
  email_domain: 'yourdomain.com',
  phone: '(555) 123-4567',
  location: 'Your City, State',
  years_experience: 10
}
```

#### `experience.js` - Your Work History
```javascript
export const professional_experience = [
  {
    title: "Your Title",
    company: "Your Company",
    date: "2020 - Present",
    description: "What you did...",
  }
];
```

#### `projects.js` - Your Projects
```javascript
projects: [
  {
    name: "Your Project",
    description: "What it does",
    url: "https://github.com/you/project",
    tech: ["React", "Node.js"],
  }
]
```

#### `skills.js` - Your Skills
```javascript
skills: [
  { name: "JavaScript", level: 4, description: "Frontend & Backend" },
  { name: "Python", level: 3.5, description: "Automation & ML" }
]
```

### 3. Add Your Images

Replace in `/public/static/`:
- `chris.webp` → your profile photo
- `og.png` → your social media preview image

### 4. Run It

```bash
npm start  # Development
npm run build  # Production build
```

## 📁 What to Edit (and What Not to)

### ✅ DO Edit These:
```
src/data/
├── site_data.js       # All your personal info & content
├── experience.js      # Your work history
├── projects.js        # Your projects
├── skills.js          # Your technical skills
└── hobbies.js         # Your side projects/hobbies

public/static/         # Your images
```

### ❌ DON'T Edit These (unless customizing the template itself):
```
src/components/        # Template components (already perfect!)
src/styles/           # Styling (unless you want different colors)
src/App.js           # Main app logic
```

## 🎨 Customization Examples

### Example 1: Software Developer Portfolio
```javascript
// site_data.js
personal: {
  full_name: 'Jane Smith',
  title: 'Full Stack Developer',
  years_experience: 8
},
hero: {
  status_message: 'Open to Remote Opportunities',
  headline: 'Full Stack Developer',
  intro_text: 'I build scalable web applications with modern JavaScript...'
}
```

### Example 2: DevOps Engineer Portfolio
```javascript
// site_data.js
personal: {
  full_name: 'Alex Johnson',
  title: 'Senior DevOps Engineer',
  years_experience: 12
},
hero: {
  status_message: 'Available for Consulting',
  headline: 'DevOps & Cloud Architecture',
  intro_text: 'Kubernetes, AWS, and infrastructure automation expert...'
}
```

### Example 3: Disable Sections You Don't Need
```javascript
// site_data.js
navigation: {
  sections: [
    { id: 'home', name: 'Home', enabled: true },
    { id: 'about', name: 'About', enabled: true },
    { id: 'hire-video', name: 'Video', enabled: false }, // Don't want video
    { id: 'hobbies', name: 'Hobbies', enabled: false }, // Keep it professional
  ]
}
```

## 🚢 Deployment

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io/portfolio"
npm run deploy
```

### Netlify
1. Push to GitHub
2. Connect repo to Netlify
3. Auto-deploys on push

### Vercel
```bash
npm install -g vercel
vercel
```

## 🛠 Tech Stack

- **React** - Component-based UI
- **Bootstrap 5** - Responsive design
- **Lucide Icons** - Beautiful icons
- **CSS-in-JS** - Scoped styling
- **No Build Complexity** - Simple CRA setup

## 📝 Template Variables

The system supports these template variables in strings:
- `%full_name%` - Your full name
- `%first_name%` - First name only
- `%last_name%` - Last name only
- `%email%` - Complete email
- `%years%` - Years of experience
- `%company%` - Company name
- `%title%` - Professional title

## 🤝 Contributing

This is my personal portfolio, but I welcome improvements to the template system! Feel free to:
- Submit bug fixes
- Propose new features for the template
- Improve documentation
- Share your customized version

## 📄 License

MIT License - Use this template for anything you want!

```
MIT License

Copyright (c) 2025 Chris Watkins

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- Vibe-coded with Claude Opus 4
- Built with React and Bootstrap
- Inspired by the need to find my next role
- Designed to help others in their job search too

## 💬 Contact

**Chris Watkins** (the original author)
- Email: chris@watkinslabs.com
- LinkedIn: [/in/chris17453](https://www.linkedin.com/in/chris17453)
- GitHub: [@chris17453](https://github.com/chris17453)

**Using this template?** I'd love to see what you build with it! Feel free to reach out or submit a PR to add your site to a showcase list.

---

**Remember**: This is a template to help you get hired. Focus on your content, not the code. The template handles the rest. Good luck with your job search! 🚀