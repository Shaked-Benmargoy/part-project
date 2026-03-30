# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hebrew RTL information portal ("עדכוני פרט") for military personnel at Tel Nof Air Base (בח״א 8). Built with React 19 + TypeScript + Material-UI 7, bootstrapped with Create React App. Deployed on Vercel at https://part-project-kappa.vercel.app/.

All content is static (no backend/API). All text is in Hebrew with RTL layout.

## Commands

- `npm start` — dev server on localhost:3000 with hot reload
- `npm run build` — production build to `build/`
- `npm test` — Jest test runner in watch mode

## Architecture

**Navigation:** State-based routing in `src/pages/LandingPage.tsx` using `useState<"home" | "keva" | "miluim" | ...>`. No React Router — view switching is driven by `setCurrentView()` passed as props. Each category view has an `onBack` prop to return home.

**Component pattern for each category (Keva, Miluim, Sadir, Medical, Dental, Food, Logistics, Psychology, Personal):**
- `src/components/landing/<Category>/<Category>View.tsx` — page wrapper with back button, wraps in `LandingLayout`
- `src/components/landing/<Category>/<Category>CategoriesGrid.tsx` — maps data sections into `ExpandableInfoCard` accordions
- `src/components/landing/<Category>/<Category>Data.tsx` — exports typed arrays of `{ title, icon, content }` items grouped into sections

**Shared components** in `src/components/landing/`:
- `LandingLayout` — background image + dark gradient overlay wrapper
- `CategoryCard` — home grid button
- `ExpandableInfoCard` — MUI Accordion card used by all category grids
- `HeroSection` / `FooterSection` / `HomeView` / `CategoriesGrid` — home page pieces

**Styling:** MUI `sx` prop throughout. Key colors: primary blue `#2449C6`, accent `#6EA3FF`, dark background `#092959`, white text. Responsive via `{ xs, md }` breakpoints.

## Adding a New Category

1. Create `src/components/landing/<Name>/` with `*Data.tsx`, `*CategoriesGrid.tsx`, `*View.tsx` following existing patterns
2. Add the view string to the union type in `LandingPage.tsx`
3. Add conditional render and a `CategoryCard` on the home grid
