import { API } from '@/lib/api';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './page.module.css';

async function getProducts(category?: string): Promise<Product[]> {
  try {
    const url = category
      ? `${API.product.find}?category=${encodeURIComponent(category)}`
      : API.product.find;
    
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });
    
    if (!res.ok) {
      return [];
    }
    
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const products = await getProducts(params.category);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Каталог продуктов</h1>
          <p className={styles.subtitle}>
            Найдите лучшие курсы, сервисы и образовательные материалы
          </p>
        </header>

        {products.length > 0 ? (
          <>
            <div className={styles.resultsInfo}>
              <span className={styles.count}>
                Найдено продуктов: <strong>{products.length}</strong>
              </span>
            </div>

            <div className={styles.grid}>
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyContent}>
              <h2 className={styles.emptyTitle}>Продукты не найдены</h2>
              <p className={styles.emptyText}>
                Попробуйте изменить параметры поиска или вернитесь позже
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

