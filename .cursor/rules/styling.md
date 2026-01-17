# Styling Rules

## CSS Modules
- Use CSS Modules for all component styling
- File naming: `ComponentName.module.css`
- Import styles: `import styles from './ComponentName.module.css'`
- Use camelCase for class names in CSS Modules

## Styling Best Practices
- Keep styles scoped to components
- Use CSS variables for theme values (colors, spacing, etc.)
- Follow mobile-first responsive design approach
- Maintain consistent spacing and typography scales
- Use semantic class names

## Example
```css
/* ComponentName.module.css */
.container {
  padding: 1rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
}
```

```tsx
// ComponentName.tsx
import styles from './ComponentName.module.css';

export default function ComponentName() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Title</h1>
    </div>
  );
}
```

