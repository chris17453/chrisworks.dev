# Portfolio Site - Chris Watkins

Professional portfolio showcasing 20+ years of enterprise engineering experience.

## Project Structure

```
├── public
├── README.md
├── src
│   ├── App.js
│   ├── components
│   │   ├── about.jsx
│   │   ├── contact.jsx
│   │   ├── experience.jsx
│   │   ├── footer.jsx
│   │   ├── hero.jsx
│   │   ├── hobbies.jsx
│   │   ├── navigation.jsx
│   │   ├── projects.jsx
│   │   ├── solutions.jsx
│   │   ├── source_code.jsx
│   │   └── video.jsx
│   ├── data
│   │   └── portfolio_data.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── source_Code.js
│   ├── styles
│   │   └── portfolio_styles.js
│   └── utils
│       └── head_manager.js
└── tailwaind.config.js
```

## Tech Stack

- **React** - Component framework
- **Bootstrap 5** - CSS framework
- **Lucide React** - Icon library
- **Vanilla CSS** - Custom styling

## Features

- **Responsive Design** - Mobile-first, works on all devices
- **Dark Theme** - Professional dark aesthetic
- **Smooth Scrolling** - Section-based navigation
- **SEO Optimized** - Full meta tags and JSON-LD structured data
- **Component-Based** - Modular architecture for easy maintenance

## Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone [your-repo-url]
cd portfolio

# Install dependencies
npm install

# Start development server
npm start
```

### Dependencies

```json
{
  "react": "^18.0.0",
  "lucide-react": "^0.263.1"
}
```

Bootstrap 5 is loaded via CDN in the main component.

## Development

### Code Standards

- **snake_case** - All variables and functions use snake_case
- **No over-commenting** - Code is self-documenting
- **Component isolation** - Each component is independent
- **MIT License** - Open source

### File Descriptions

#### Main Component
- `portfolio.jsx` - Orchestrates all components, handles scroll tracking, loads Bootstrap

#### Data Layer
- `portfolio_data.js` - Contains all content:
  - Professional experience (6 positions)
  - Enterprise solutions (4 case studies)
  - Open source projects (11 projects in 4 categories)

#### Components
- `navigation.jsx` - Fixed top nav with active section tracking
- `hero.jsx` - Landing with profile photo and CTAs
- `about.jsx` - Three cards: Reality, Innovation, Commitment
- `experience.jsx` - Timeline of professional roles with tech stacks
- `video.jsx` - Embedded YouTube AI-generated demo
- `solutions.jsx` - Enterprise project case studies
- `projects.jsx` - GitHub projects organized by category
- `contact.jsx` - Contact methods and availability info
- `footer.jsx` - Copyright footer

#### Styles
- `portfolio_styles.js` - All CSS in one exportable string

## Customization

### Update Content
Edit `data/portfolio_data.js` to modify:
- Work experience
- Projects
- Solutions
- Tech stacks

### Change Colors
Edit CSS variables in `styles/portfolio_styles.js`:
```css
:root {
  --bs-primary: #6366f1;   /* Primary accent */
  --bs-secondary: #64748b; /* Secondary color */
  --bs-dark: #000;         /* Background */
}
```

### Add Sections
1. Create new component in `components/`
2. Import in `portfolio.jsx`
3. Add to navigation array
4. Add section ID to scroll tracking

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Host
The build output can be deployed to any static host:
- Netlify
- Vercel  
- GitHub Pages
- AWS S3 + CloudFront

### Environment Variables
None required - all configuration is in code.

## Contact Section Colors

The contact section uses a blue gradient background with high-contrast white text:
- Background: Blue gradient (`#1e3c72` to `#2a5298`)
- Cards: Dark semi-transparent (`rgba(0, 0, 0, 0.4)`)
- Buttons: White background with dark blue text
- Text: Explicitly white for maximum visibility

## SEO Configuration

The site includes:
- Open Graph meta tags
- Twitter Card meta tags
- JSON-LD structured data for Person and WebSite schemas
- Canonical URL
- Sitemap reference

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Lazy-loaded Bootstrap via CDN
- Minimal dependencies
- Component-based code splitting ready
- No heavy animations for fast rendering

## Source Code

View the complete source code for this portfolio site:

🔗 **[github.com/chris17453/chrisworks.dev](https://github.com/chris17453/chrisworks.dev)**

Feel free to:
- Star the repository if you find it useful
- Fork it for your own portfolio
- Submit issues or PRs for improvements
- Use it as a reference for React component architecture

## License

MIT License - See LICENSE file for details

## Author

**Chris Watkins**
- Email: chris@watkinslabs.com
- Phone: (877) 731-4155
- GitHub: [@chris17453](https://github.com/chris17453)
- Location: Sugar Hill, GA

---

Built with focus on enterprise-scale problem solving and 20+ years of engineering experience.