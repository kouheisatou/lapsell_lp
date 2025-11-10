# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page for "Lapsell" - a platform that allows music creators to sell their creative process as unique merchandise. Built with React 19, TypeScript, and Vite 7, using Tailwind CSS 4 and shadcn/ui components.

## Development Commands

### Development
```bash
npm run dev          # Start dev server at http://localhost:5173
```

### Building
```bash
npm run build        # Standard production build to dist/
npm run build:single # Bundle everything into a single HTML file
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Run ESLint on TypeScript files
```

## Architecture

### Page Structure
The landing page follows a single-page application pattern with sequential sections:

1. **HeroSection** - Main visual and catchphrase
2. **ProblemSection** - Challenges faced by music creators
3. **SolutionSection** - Platform solution overview
4. **ProcessSection** - Usage process walkthrough
5. **FanBenefitsSection** - Benefits for fans
6. **RevenueSection** - Monetization mechanism
7. **CTASection** - Call to action

All sections are composed in `src/App.tsx` in order.

### Component Organization

- `src/components/` - Page section components
- `src/components/ui/` - shadcn/ui reusable components (accordion, alert-dialog, button, card, etc.)
- `src/components/figma/` - Figma-specific components (currently only ImageWithFallback)
- `src/styles/` - Additional style files
- `src/guidelines/` - Design system guidelines (currently template only)

### Custom Vite Plugins

The project includes two custom Vite plugins in `vite.config.ts`:

1. **removeVersionSpecifiers**: Automatically strips version numbers from import statements (e.g., `@radix-ui/react-slot@1.1.2` → `@radix-ui/react-slot`)

2. **figmaAssetsResolver**: Resolves imports with `figma:asset/` prefix to `./src/assets/` directory for Figma-exported assets

### Design System

**Color Palette:**
- Primary accent: `#d4a574` (gold)
- Background: `#0a0a0f` (dark)
- Text: `#e8e8ed` (light gray)
- Scrollbar thumb: `#d4a574` with hover `#e8b888`

**Typography:**
- Headings: Cormorant Garamond (serif) - weights 300, 400, 500
- Body text: Inter (sans-serif) - weights 400, 500, 600
- Base styling loaded via Google Fonts in App.tsx

**Animation:**
- Uses Motion (Framer Motion) for scroll-linked animations
- Smooth scroll behavior enabled globally via CSS

### Styling Approach

- Tailwind CSS 4 with Vite plugin for styling
- Dark theme optimized for music production studio aesthetic
- Custom scrollbar styling for brand consistency
- Responsive design from mobile to desktop

### Build Configuration

- **Single-file build mode**: Set `SINGLE_FILE=true` environment variable to bundle all assets inline (used by `npm run build:single`)
- **TypeScript**: Project references architecture with separate configs for app and node code
- **ESLint**: Configured for TypeScript/React with hooks and refresh plugins

## Development Notes

- The project name in package.json is "figma-make-local-runner" but the actual product is "Lapsell"
- All components use functional React patterns with hooks
- No routing library - single scrolling page design
- shadcn/ui provides comprehensive UI component library
