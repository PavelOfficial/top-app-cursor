import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { API } from '@/lib/api';
import { Product } from '@/types/product';
import styles from './page.module.css';

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${API.product.find}?id=${encodeURIComponent(id)}`, {
      next: { revalidate: 60 },
    });
    
    if (!res.ok) {
      return null;
    }
    
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const rating = Math.round(product.initialRating);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadcrumbLink}>Главная</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link href="/products" className={styles.breadcrumbLink}>Продукты</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>{product.title}</span>
        </nav>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.image}
                  priority
                />
              ) : (
                <div className={styles.imagePlaceholder}>Нет изображения</div>
              )}
              {discount > 0 && (
                <span className={styles.discountBadge}>-{discount}%</span>
              )}
            </div>
          </div>

          <div className={styles.infoSection}>
            <h1 className={styles.title}>{product.title}</h1>

            <div className={styles.rating}>
              <div className={styles.stars} aria-label={`Рейтинг: ${product.initialRating} из 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`${styles.star} ${i < rating ? styles.starFilled : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className={styles.ratingValue}>{product.initialRating}</span>
              <span className={styles.reviewsCount}>({product.reviewCount} отзывов)</span>
            </div>

            <div className={styles.priceSection}>
              {product.oldPrice && (
                <span className={styles.oldPrice}>{product.oldPrice.toLocaleString('ru-RU')} ₽</span>
              )}
              <span className={styles.price}>{product.price.toLocaleString('ru-RU')} ₽</span>
            </div>

            {product.credit > 0 && (
              <div className={styles.credit}>
                <span className={styles.creditLabel}>Рассрочка:</span>
                <span className={styles.creditValue}>от {product.credit.toLocaleString('ru-RU')} ₽/мес</span>
              </div>
            )}

            <div className={styles.actions}>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Перейти к продукту
              </a>
            </div>

            {product.advantages && (
              <div className={styles.advantages}>
                <h3 className={styles.sectionTitle}>Преимущества</h3>
                <p className={styles.advantagesText}>{product.advantages}</p>
              </div>
            )}

            {product.disadvantages && (
              <div className={styles.disadvantages}>
                <h3 className={styles.sectionTitle}>Недостатки</h3>
                <p className={styles.disadvantagesText}>{product.disadvantages}</p>
              </div>
            )}
          </div>
        </div>

        {product.description && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Описание</h2>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </section>
        )}

        {product.characteristics && product.characteristics.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Характеристики</h2>
            <div className={styles.characteristics}>
              {product.characteristics.map((char, index) => (
                <div key={index} className={styles.characteristic}>
                  <span className={styles.charName}>{char.name}</span>
                  <span className={styles.charValue}>{char.value}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {product.reviews && product.reviews.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Отзывы ({product.reviews.length})</h2>
            <div className={styles.reviews}>
              {product.reviews.map((review) => (
                <article key={review._id} className={styles.review}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.reviewAuthor}>
                      <span className={styles.reviewName}>{review.name}</span>
                      <div className={styles.reviewRating}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`${styles.reviewStar} ${i < review.rating ? styles.reviewStarFilled : ''}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <time className={styles.reviewDate}>
                      {new Date(review.createdAt).toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <h4 className={styles.reviewTitle}>{review.title}</h4>
                  <p className={styles.reviewText}>{review.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

