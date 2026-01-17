# Использование SVGR в проекте

## Настройка завершена

SVGR webpack plugin настроен для импорта SVG файлов как React компонентов.

## Способы импорта

### 1. Импорт как React компонент (по умолчанию)

```tsx
import Logo from '@/app/assets/logo.svg';

export default function Component() {
  return (
    <div>
      <Logo width={159} height={43} className="logo" />
    </div>
  );
}
```

### 2. Импорт как URL (для использования в img src или background-image)

```tsx
import logoUrl from '@/app/assets/logo.svg?url';

export default function Component() {
  return (
    <div>
      <img src={logoUrl} alt="Logo" />
    </div>
  );
}
```

## Примеры использования

### Базовое использование

```tsx
import Icon from './icon.svg';

function MyComponent() {
  return <Icon />;
}
```

### С пропсами

```tsx
import Icon from './icon.svg';

function MyComponent() {
  return (
    <Icon 
      width={24} 
      height={24} 
      className="my-icon"
      fill="currentColor"
    />
  );
}
```

### С Next.js Image (используйте ?url)

```tsx
import Image from 'next/image';
import logoUrl from './logo.svg?url';

function MyComponent() {
  return (
    <Image 
      src={logoUrl} 
      alt="Logo" 
      width={159} 
      height={43} 
    />
  );
}
```

## Преимущества

- ✅ SVG импортируются как React компоненты
- ✅ TypeScript типизация из коробки
- ✅ Возможность передавать пропсы (width, height, className, fill, etc.)
- ✅ Оптимизация и tree-shaking
- ✅ Поддержка CSS стилей через className

