# Developer Documentation

Technical documentation for the UVA CSSS website development and maintenance.

## Project Structure

```
uvacsss-site/
├── assets/                 # Static assets
│   ├── officers/          # Team member photos
│   ├── partners/          # Partner/sponsor logos
│   ├── about.jpg          # About section image
│   ├── hero.jpg           # Hero section image
│   ├── logo.png           # CSSS logo
│   └── wechat_qr.jpg      # WeChat QR code
├── *.html                 # Individual page files
├── style.css              # Main stylesheet
├── main.js                # JavaScript functionality
├── package.json           # Node.js dependencies
└── README.md              # Project documentation
```

## Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Modern web browser

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd uvacsss-site

# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:3000` with live reload enabled.

## Technical Architecture

### HTML Structure
- **Semantic HTML5**: Uses proper semantic elements (`<main>`, `<section>`, `<article>`, etc.)
- **Accessibility**: ARIA labels, proper heading hierarchy, keyboard navigation
- **SEO Optimized**: Meta tags, structured data, descriptive alt text

### CSS Architecture
- **CSS Custom Properties**: Centralized color and spacing system
- **Mobile-First**: Responsive design using CSS Grid and Flexbox
- **UVA Brand Colors**: 
  - Primary Blue: `#232d4b`
  - Orange Accent: `#e57200`
  - Light variants for gradients and hover states

### JavaScript Functionality
- **Vanilla JS**: No framework dependencies for better performance
- **Intersection Observer**: Smooth scroll-triggered animations
- **Event Delegation**: Efficient event handling for dynamic content
- **Conditional Loading**: Features load only when needed

## Key Components

### Navigation System
- **Sticky Header**: Remains visible during scroll
- **Mega Menu**: Dropdown navigation with organized sections
- **Mobile Menu**: Collapsible hamburger menu for small screens
- **Active States**: Highlights current page in navigation

### Animation System
```css
.reveal {
  opacity: 1;
  transform: none;
  transition: all 0.6s ease;
}
.reveal:not(.in) {
  opacity: 0;
  transform: translateY(30px);
}
```

### Event Filtering
```javascript
function renderEvents(filter = "all") {
  // Filters and displays events based on category
  // Supports: all, cultural, career, social
}
```

## Content Management

### Adding New Events
Edit the `EVENTS` array in `main.js`:
```javascript
const EVENTS = [
  {
    title: "Event Name",
    date: "2025-MM-DD",
    location: "Venue Name",
    desc: "Event description",
    tags: ["cultural", "career", "social"]
  }
];
```

### Updating Team Members
1. Add photos to `assets/officers/`
2. Update the team cards in `team.html`
3. Ensure alt text describes the person's role

### Adding New Pages
1. Create new `.html` file following existing template structure
2. Update navigation in all existing pages
3. Add appropriate meta tags and page title
4. Test responsive design and accessibility

## Asset Management

### Images
- **Format**: Use WebP with JPG fallback for best performance
- **Sizing**: 
  - Hero images: 1600×900px
  - Team photos: 400×400px minimum
  - Partner logos: SVG preferred, PNG with transparency
- **Optimization**: Compress images before adding to repository

### Icons
- Use system emoji or SVG icons
- Ensure proper contrast ratios
- Include fallback text for screen readers

## Performance Optimization

### CSS
- **Critical CSS**: Inline critical styles in `<head>`
- **Unused CSS**: Remove unused styles regularly
- **Minification**: Minify CSS for production

### JavaScript
- **Lazy Loading**: Load features only when needed
- **Event Delegation**: Use efficient event handling
- **Debouncing**: Implement for scroll and resize events

### Images
- **Lazy Loading**: Implement for below-the-fold images
- **Responsive Images**: Use `srcset` for different screen sizes
- **WebP Format**: Use modern image formats with fallbacks

## Browser Support

### Target Browsers
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari iOS 14+
- Chrome Mobile 90+

### Fallbacks
- CSS Grid with Flexbox fallback
- Intersection Observer with scroll fallback
- Modern JavaScript with polyfills if needed

## Deployment

### Production Build
```bash
# Install dependencies
npm install

# Build for production (if using build process)
npm run build

# Test production build locally
npm run serve
```

### Hosting Recommendations
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Easy deployment with form handling
- **Vercel**: Fast global CDN
- **UVA Hosting**: Check with UVA IT for official hosting

### Environment Configuration
- Update form action URLs for production
- Replace placeholder email addresses
- Update social media links
- Test all external links

## Maintenance

### Regular Tasks
- [ ] Update event listings monthly
- [ ] Review and update team member information each semester
- [ ] Check for broken links quarterly
- [ ] Update dependencies and security patches
- [ ] Review analytics and user feedback

### Content Updates
- **Events**: Update `main.js` EVENTS array
- **Team**: Update `team.html` and add new photos
- **Contact**: Update email addresses in all relevant pages
- **Resources**: Keep UVA links current and working

## Troubleshooting

### Common Issues

**CSS not loading (404 error)**
- Check file path in HTML: `<link rel="stylesheet" href="style.css">`
- Ensure file is named `style.css` (not `styles.css`)

**JavaScript errors**
- Check browser console for error messages
- Ensure all DOM elements exist before accessing them
- Use conditional checks: `if (element) { ... }`

**Images not displaying**
- Verify file paths are correct
- Check file permissions
- Ensure images are in the correct format

**Mobile layout issues**
- Test responsive breakpoints
- Check viewport meta tag
- Validate CSS Grid/Flexbox usage

## Contributing Guidelines

### Code Style
- Use 2-space indentation
- Follow semantic HTML practices
- Write descriptive commit messages
- Test on multiple browsers and devices

### Pull Request Process
1. Fork the repository
2. Create feature branch from `main`
3. Make changes and test thoroughly
4. Update documentation if needed
5. Submit pull request with detailed description

### Testing Checklist
- [ ] All pages load without errors
- [ ] Navigation works on all pages
- [ ] Forms submit correctly
- [ ] Images display properly
- [ ] Mobile responsiveness
- [ ] Accessibility compliance
- [ ] Cross-browser compatibility

## Contact

For technical questions or contributions:
- **Development Team**: csss-tech@virginia.edu
- **Project Lead**: [Current maintainer email]
- **Issues**: Submit via repository issue tracker

---

Last updated: September 2025
