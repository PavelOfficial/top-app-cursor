# API Integration Rules

## API Configuration
All API calls should use the centralized API configuration from the environment variable `NEXT_PUBLIC_DOMAIN`.

## API Endpoints

### Top Page API
- **Find**: `GET ${NEXT_PUBLIC_DOMAIN}/api/top-page/find`
- **By Alias**: `GET ${NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/{alias}`

### Product API
- **Find**: `GET ${NEXT_PUBLIC_DOMAIN}/api/product/find`

### Review API
- **Create Demo**: `POST ${NEXT_PUBLIC_DOMAIN}/api/review/create-demo`

## Best Practices
- Use Next.js built-in `fetch` for API calls
- Implement proper error handling
- Use Server Components for data fetching when possible
- Cache API responses appropriately
- Handle loading and error states in UI

## API Client Pattern
Consider creating a centralized API client utility for consistent error handling and request configuration.

