'use client';

import { useEffect } from 'react';
import styles from './error.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.error}>
      <h2 className={styles.title}>Что-то пошло не так!</h2>
      <p className={styles.message}>{error.message}</p>
      <button className={styles.button} onClick={() => reset()}>
        Попробовать снова
      </button>
    </div>
  );
}

