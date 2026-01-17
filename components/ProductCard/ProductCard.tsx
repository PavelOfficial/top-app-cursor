import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const rating = Math.round(product.initialRating);

  return (
    <article className={styles.card}>
      <Link href={`/product/${product._id}`} className={styles.link}>
        <div className={styles.imageContainer}>
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          ) : (
            <div className={styles.placeholder}>Нет изображения</div>
          )}
          {discount > 0 && (
            <span className={styles.discountBadge}>-{discount}%</span>
          )}
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{product.title}</h3>

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
            <span className={styles.reviewsCount}>({product.reviewCount})</span>
          </div>

          <div className={styles.priceWrapper}>
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

          {product.advantages && (
            <div className={styles.advantages}>
              <span className={styles.advantagesText}>{product.advantages}</span>
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}

