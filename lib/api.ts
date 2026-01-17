const API_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'https://courses-top.ru';

export const API = {
  topPage: {
    find: `${API_DOMAIN}/api/top-page/find`,
    byAlias: (alias: string) => `${API_DOMAIN}/api/top-page/byAlias/${alias}`,
  },
  product: {
    find: `${API_DOMAIN}/api/product/find`,
  },
  review: {
    createDemo: `${API_DOMAIN}/api/review/create-demo`,
  },
};

