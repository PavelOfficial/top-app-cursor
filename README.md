# Top App Cursor

Платформа курсов и топ-страниц на Next.js с App Router.

## Технологии

- **Next.js 15.1** (App Router)
- **TypeScript**
- **CSS Modules**
- **React 18**

## Быстрый старт

### Установка зависимостей

```bash
npm install
# или
yarn install
# или
pnpm install
```

### Настройка переменных окружения

Создайте файл `.env.local` на основе `env.example`:

```bash
cp env.example .env.local
```

Или создайте `.env.local` вручную:

```env
NEXT_PUBLIC_DOMAIN=https://courses-top.ru
```

### Запуск проекта

```bash
npm run dev
# или
yarn dev
# или
pnpm dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Структура проекта

```
top-app-cursor/
├── app/                    # App Router страницы и layouts
│   ├── layout.tsx         # Корневой layout
│   ├── page.tsx           # Главная страница
│   ├── loading.tsx        # Компонент загрузки
│   ├── error.tsx          # Обработка ошибок
│   ├── not-found.tsx      # 404 страница
│   └── globals.css        # Глобальные стили
├── lib/                   # Утилиты и хелперы
│   └── api.ts            # Конфигурация API
├── components/            # React компоненты (создавать по необходимости)
└── public/                # Статические файлы
```

## API Endpoints

API конфигурация находится в `lib/api.ts`:

- **Top Page API**:
  - Find: `/api/top-page/find`
  - By Alias: `/api/top-page/byAlias/{alias}`
- **Product API**:
  - Find: `/api/product/find`
- **Review API**:
  - Create Demo: `/api/review/create-demo`

## Дизайн

Figma: https://www.figma.com/design/eHIyKZXUUtMf1BQiuv6tTA/%D0%9A%D1%83%D1%80%D1%81-2---NextJS?node-id=0-1&p=f&t=DmPbziy9MMt3KsEY-0

## Команды

- `npm run dev` - Запуск dev сервера
- `npm run build` - Сборка production версии
- `npm run start` - Запуск production сервера
- `npm run lint` - Проверка кода линтером

## Правила разработки

- Используйте **App Router** для всех новых страниц
- Используйте **CSS Modules** для стилизации компонентов
- Используйте **TypeScript** для типобезопасности
- Следуйте структуре проекта и соглашениям по именованию
