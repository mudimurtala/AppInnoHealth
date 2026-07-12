# 🌐 Live Website

Access the deployed InnoHealth Africa Technology web app here: [https://innohealth.tech/](https://innohealth.tech/)

---

# InnoHealth Africa Technology Web App

A production-ready React + TypeScript web application that demonstrates modern frontend practices, performance optimization, and thoughtful UX design. Built to transform healthcare delivery in underserved communities through technology, data, and innovation.

## 🚀 Overview

InnoHealth Africa Technology Ltd is a registered social enterprise in Nigeria, focused on improving maternal and child health outcomes using digital tools, data systems, and capacity building. The web app showcases our mission, services, team, and impact, and provides a seamless, branded user experience across devices.

## ✨ Key Features

- **Modern, Responsive UI:** Built with React, TypeScript, Vite, and Tailwind CSS for fast, accessible, and mobile-first experiences.
- **Type-Safe Development:** Full TypeScript coverage ensures maintainability and catches errors at compile time.
- **Branded Design System:** Centralized design tokens (colors, fonts, spacing, shadows) for visual consistency across all components.
- **Optimized Performance:** Strategic preloading of critical assets, SPA route handling, and minimal re-renders.
- **Animated, Interactive Sections:** Framer Motion for smooth hero slides and card interactions; CSS keyframes for lightweight effects.
- **Form Submission Pipeline:** Form handling with async validation and Formspree backend integration for email delivery.
- **About Us Modal:** Organized modal with clear sections, values, vision, and mission—accessible from any page.
- **Team Carousel:** Responsive, interactive carousel showcasing team members with smooth horizontal scroll.
- **Fixed Navigation Bar:** Context-aware navigation with scroll detection and modal triggers for seamless UX.
- **Mobile/Desktop Optimization:** Carefully tailored layouts and interactions ensure polished experience across all device sizes.
- **Production Deployment:** Netlify-ready with SPA fallback redirects, ensuring deep-link refresh stability in production.
- **Clean, Maintainable Code:** Organized component structure and meaningful comments.

## 🗂️ Project Structure

```
src/
├── components/
│   ├── sections/       # Page sections: Hero, Services, Team, About, Footer, etc.
│   └── ui/             # Reusable primitives: Button, Dropdown, ImageWithFallback
├── App.tsx             # Main app router and section orchestrator
├── main.tsx            # React entry point with UX loader
├── index.css           # Global styles and Tailwind directives
└── brand.css           # Brand-specific design tokens and custom utilities

public/
├── _redirects          # SPA fallback rule for Netlify (essential for deep-link stability)
├── book-appointment.html  # Static fallback form for accessibility
└── images/             # Organized asset directories (branding, hero, team, partners)

Configuration files:
├── vite.config.ts      # Build config with SWC transpilation and path aliases
├── tailwind.config.js  # Design system extension with brand colors/fonts/shadows
├── postcss.config.js   # Tailwind CSS pipeline
├── netlify.toml        # Deployment config with Node version pinning
└── package.json        # Dependencies and build scripts
```

## 🛠️ Getting Started

**Prerequisites:** Node.js 20+, npm

**Installation & Development:**
```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000 with hot reload)
npm run dev

# Build for production (output to build/ directory)
npm run build
```

**Deployment:**
The app is deployed on Netlify. Each push to `main` triggers an automatic build and deployment via the configuration in `netlify.toml`.
�️ Technical Architecture & Decisions

### Frontend Stack
- **React 18 + TypeScript:** Component-based architecture with type safety ensures maintainability and catches errors early.
- **Vite:** Lightning-fast dev server and optimized production builds using SWC for JSX transpilation.
- **Tailwind CSS:** Utility-first approach with centralized design tokens via `tailwind.config.js` for consistent branding.
- **Framer Motion:** Declarative animations for hero slides and interactive sections without performance overhead.

### Performance Optimizations
- **Asset Preloading:** Critical images and fonts are preloaded in `index.html` to reduce first-paint latency.
- **UX Loader:** 3.5-second minimum loader ensures smooth perception during app bootstrap.
- **SPA Routing:** `_redirects` fallback rule enables client-side routing in production without 404 errors on deep-link refresh.
- **Component Code-Splitting:** Lazy section rendering and minimal dependencies reduce bundle size.

### Form Handling & Backend Integration
- **Async Form Submission:** React forms use `FormData` and `fetch` with state transitions for real-time user feedback.
- **Formspree Integration:** Third-party email delivery service ensures reliable form submission without custom backend.
- **Fallback Static Form:** `public/book-appointment.html` provides accessibility when JavaScript is disabled.

### Design System
- **Centralized Tokens:** Brand colors, typography, spacing, and shadows defined in `tailwind.config.js` and `brand.css`.
- **Responsive Design:** Mobile-first Tailwind classes ensure pixel-perfect layouts from small phones to large desktops.
- **Semantic HTML:** Accessible markup with proper heading hierarchy and ARIA attributes where needed.

## 📊 Development Process & Learning Outcomes

### Key Learnings
1. **Component Composition:** Organized section components into isolated, reusable parts for maintainability.
2. **TypeScript Benefits:** Type annotations caught bugs early and improved developer confidence during refactoring.
3. **Styling at Scale:** Centralized design tokens prevented style drift and made brand updates trivial.
4. **Production Readiness:** Netlify deployment, SPA routing fallback, and asset optimization were essential for a stable production site.
5. **Performance Matters:** Preloading and minimal animation overhead significantly improved perceived performance on real networks.

### Best Practices Applied
- ✅ Clean component structure with separation of concerns
- ✅ Meaningful code comments explaining design decisions
- ✅ Professional git commit messages following conventional commits
- ✅ Environment parity between dev and production via Netlify config
- ✅ Responsive design tested across device sizes
- ✅ Accessibility first: keyboard navigation, semantic HTML, alt text

## 🌍 Mission & Impact

**InnoHealth Africa Technology Ltd** is a registered social enterprise in Nigeria, focused on improving maternal and child health outcomes through:
- Digital health tools and telemedicine access
- Data-driven public health solutions
- Capacity building for health workers and communities
- Sustainable partnerships with governments, NGOs, and health facilities

Our hybrid model combines revenue-generating services with donor-funded programmes to ensure impact at scale.

## 👥 Meet the Team

Explore our leadership and programme team via the interactive Team Carousel on the live site.

## 🤝 Partnerships

We collaborate with governments, NGOs, health facilities, and development partners to deliver scalable, inclusive, and locally relevant solutions.

## 🧑‍💻 Contributing

This project is proprietary to InnoHealth Africa Technology. For partnership or contribution inquiries, please contact the team via the website.

## 📄 License

All rights reserved. Contact InnoHealth Africa Technology for usage or distribution permissions.
