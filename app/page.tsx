import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Добро пожаловать в Top App</h1>
        <p className={styles.description}>
          Платформа курсов их рейтинга
        </p>
      </div>
    </main>
  );
}

