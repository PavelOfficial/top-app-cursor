# Next.js Rules

## Framework Version
- Use Next.js latest stable version
- Always use App Router (not Pages Router) for new pages

## App Router Guidelines
- Use `app/` directory for routing
- Create `layout.tsx` for shared layouts
- Use `page.tsx` for route pages
- Use `loading.tsx` for loading states
- Use `error.tsx` for error boundaries
- Use `not-found.tsx` for 404 pages

## Server vs Client Components
- Default to Server Components
- Use `'use client'` directive only when needed (interactivity, hooks, browser APIs)
- Fetch data in Server Components when possible

## Data Fetching
- Use async Server Components for data fetching
- Implement proper caching strategies
- Use `revalidate` for ISR when appropriate

## Best Practices
- Follow Next.js conventions and file structure
- Optimize images using `next/image`
- Use Next.js Link component for navigation
- Implement proper metadata for SEO
