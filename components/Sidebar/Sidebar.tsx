import Link from 'next/link';
import Image from 'next/image';
import { API } from '@/lib/api';
import { TopPageMenuItem } from '@/types/navigation';
import styles from './Sidebar.module.css';

async function getMenu(): Promise<TopPageMenuItem[]> {
  try {
    const res = await fetch(API.topPage.find, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return data || [];
  } catch (error) {
    console.error('Failed to fetch menu:', error);
    return [];
  }
}

export default async function Sidebar() {
  const menu = await getMenu();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo.svg"
            alt="Top App Logo"
            width={159}
            height={43}
            priority
            className={styles.logo}
          />
        </Link>
      </div>

      <nav className={styles.nav}>
        {menu.length > 0 ? (
          <ul className={styles.menu}>
            {menu.map((menuItem) => (
              <li key={menuItem._id.secondCategory} className={styles.menuItem}>
                <div className={styles.menuItemHeader}>
                  <span className={styles.menuItemTitle}>
                    {menuItem._id.secondCategory}
                  </span>
                </div>
                {menuItem.pages && menuItem.pages.length > 0 && (
                  <ul className={styles.subMenu}>
                    {menuItem.pages.map((page) => (
                      <li key={page._id} className={styles.subMenuItem}>
                        <Link
                          href={`/top-page/${page.alias}`}
                          className={styles.subMenuLink}
                        >
                          {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.emptyMenu}>
            <p>Меню загружается...</p>
          </div>
        )}
      </nav>
    </aside>
  );
}

