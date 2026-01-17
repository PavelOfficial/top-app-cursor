import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>О проекте</h3>
            <p className={styles.text}>
              Платформа курсов и их рейтинга. Найдите лучшие курсы, сервисы и книги.
            </p>
          </div>
          <div className={styles.section}>
            <h3 className={styles.title}>Правила</h3>
            <ul className={styles.list}>
              <li>
                <Link href="/rules" className={styles.link}>Правила использования</Link>
              </li>
              <li>
                <Link href="/privacy" className={styles.link}>Политика конфиденциальности</Link>
              </li>
              <li>
                <Link href="/terms" className={styles.link}>Условия использования</Link>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3 className={styles.title}>Контакты</h3>
            <p className={styles.text}>
              Email: info@topapp.ru
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Top App. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

