# Project Structure Rules

## Directory Organization
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `styles/` - Global styles (if needed)
- `lib/` - Utility functions and helpers
- `types/` - TypeScript type definitions (if using TypeScript)
- `public/` - Static assets

## File Naming Conventions
- Components: PascalCase (e.g., `Header.tsx`, `ProductCard.tsx`)
- Pages: lowercase with hyphens (follows Next.js App Router conventions)
- CSS Modules: same name as component with `.module.css` extension
- Utilities: camelCase (e.g., `apiClient.ts`, `formatDate.ts`)

## Component Structure
- Each component should have its own directory or file
- CSS Modules should be co-located with components
- Export components as default or named exports based on usage

