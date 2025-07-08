![Deploy](https://github.com/guillaumecrespel/website/actions/workflows/fly-deploy.yml/badge.svg)

# Guillaume CRESPEL Portfolio

Modern and high-performance professional portfolio built with the latest web technologies.

## 🚀 Requirements Met

- ✅ **Very Fast** : Multiple optimizations for maximum performance
- ✅ **Best Lighthouse Score** : Architecture optimized for Core Web Vitals metrics
- ✅ **Best SEO** : Meta tags, sitemap, and optimized semantic structure
- ✅ **Light Analytics** : Minimal and privacy-respecting tracking
- ✅ **Single page with scroll interactions** : Smooth navigation and animations

## 🛠️ Technical Stack

### Core
- **Astro 5.10** : Modern framework for ultra-performant static sites
- **React 19.1** : Interactive components with latest features (Actions, useOptimistic, etc.)
- **TypeScript** : Static typing for robust code

### Styling & UI
- **Tailwind CSS 4.1** : Utility CSS framework with custom design system
- **CSS Animations** : Smooth transitions and micro-interactions
- **Responsive Design** : Mobile-first with optimized breakpoints

### Internationalization
- **astro-i18next** : Complete French/English support
- **Localized URLs** : `/fr/` and `/en/` with automatic fallback

### Content & CMS
- **MDX** : Professional experiences in enriched Markdown
- **Content Collections** : Typed content management with Zod validation
- **Optimized Images** : Progressive loading and WebP formats

### Performance & SEO
- **Automatic Sitemap** : XML generation for search engines
- **Dynamic Meta Tags** : Open Graph and Twitter Cards
- **Lazy Loading** : Deferred component loading
- **Code Splitting** : Automatic bundle division

### Deployment
- **Fly.io** : Modern and performant cloud platform
- **Docker** : Containerization for reliable deployment
- **Automatic HTTPS** : SSL certificates managed automatically

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.astro    # Main navigation
│   ├── Hero.astro      # Home section
│   ├── About.astro     # About section
│   ├── Experience.astro # Professional experiences
│   ├── Projects.astro  # Project portfolio
│   ├── Contact.astro   # Contact form
│   ├── Footer.astro    # Footer
│   ├── ThemeToggle.tsx # Light/dark theme toggle
│   └── LanguageToggle.tsx # Language toggle
├── content/            # MDX content
│   ├── experiences/    # Professional experiences
│   └── config.ts       # Collection configuration
├── i18n/              # Internationalization
│   ├── ui.ts          # French translations
│   ├── en.ts          # English translations
│   └── utils.ts       # Types and utilities
├── layouts/           # Page layouts
│   └── Layout.astro   # Main layout with SEO
└── pages/             # Application pages
    └── index.astro    # Home page
```

## 🚀 Installation and Development

### Prerequisites
- Node.js 22+ 
- pnpm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd website

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts
```bash
pnpm dev             # Development server
pnpm build           # Production build
pnpm preview         # Build preview
pnpm lint            # Linting with Biome
pnpm format          # Code formatting
```

## 🎨 Features

### Design System
- **Dark/Light Theme** : Automatic toggle with localStorage persistence
- **Color Palette** : Coherent system with CSS variables
- **Typography** : Inter font for text, JetBrains Mono for code
- **Animations** : Smooth transitions and micro-interactions

### Performance
- **Core Web Vitals** : Optimized for LCP, FID, CLS
- **Bundle Size** : Automatic code splitting
- **Images** : WebP formats with fallback
- **Caching** : Optimized caching strategies

### SEO
- **Meta Tags** : Dynamic tags for each page
- **Structured Data** : Structured data for search engines
- **Sitemap** : Automatic XML generation
- **Robots.txt** : Configuration for crawlers

### Accessibility
- **ARIA Labels** : Complete screen reader support
- **Keyboard Navigation** : Complete keyboard navigation
- **Contrast** : WCAG compliant contrast ratios
- **Focus Management** : Focus management for accessibility

## 🌐 Deployment

### Fly.io (Recommended)
```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Login
fly auth login

# Deploy
fly deploy
```

### Environment Variables
```bash
# Production
NODE_ENV=production
SITE_URL=https://guillaumecrespel.fr
```

## 📊 Performance Metrics

- **Lighthouse Score** : 95+ on all criteria
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **First Input Delay** : < 100ms

## 🔧 Configuration

### Astro
The `astro.config.mjs` file configures:
- Integrations (React, Tailwind, Sitemap, MDX)
- Internationalization
- Build optimizations
- SEO configuration

### Biome
The `biome.json` file defines:
- Linting rules
- Code formatting
- TypeScript configuration


## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 📞 Contact

Guillaume CRESPEL - [guillaume.crespel@gmail.com](mailto:guillaume.crespel@gmail.com)

Project Link: [https://github.com/guillaumecrespel/portfolio](https://github.com/guillaumecrespel/portfolio)


