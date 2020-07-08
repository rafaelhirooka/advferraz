import {useEffect, useState} from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import {FiMenu} from 'react-icons/fi'

export default function Header() {
  const [solidHeader, setSolidHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= 5) {
        setSolidHeader(true);
      }
      else {
        setSolidHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={solidHeader ? styles.headerSolid : styles.header}>
      <section className={styles.headerSection}>
        <div className={styles.headerContainer}>
          <button role="button" aria-label="Side Menu" className={styles.buttonSideMenu}>
            <span>
              <span>
                <FiMenu/>
              </span>
            </span>
          </button>

          <div className={styles.headerLogo}>
            <Link href="/">
              {solidHeader ? (
                <span className={styles.headerLogoSpan}>
                  <img className={styles.horizontalLogo} src="/logo.svg" />
                </span>
              ) : (
                <span className={styles.headerLogoSpan}>
                  <img className={styles.horizontalLogo} src="/logo-gold.svg" />
                </span>
              )}
            </Link>

            <Link href="/">
              {solidHeader ? (
                <span className={styles.headerLogoSpan}>
                  <img className={styles.verticalLogo} src="/logo.svg" />
                </span>
              ) : (
                <span className={styles.headerLogoSpan}>
                  <img className={styles.verticalLogo} src="/logo-gold.svg" />
                </span>
              )}
            </Link>
          </div>

          <nav className={styles.mainMenu}>
            <button className={styles.menuItem}>
              <span>
                <span className={styles.menuItemTitle}>
                  Time
                </span>
              </span>
            </button>
            <button className={styles.menuItem}>
              <span>
                <span className={styles.menuItemTitle}>
                  Quem somos
                </span>
              </span>
            </button>
            <button className={styles.menuItem}>
              <span>
                <span className={styles.menuItemTitle}>
                  Blog
                </span>
              </span>
            </button>
            <button className={styles.menuItem}>
              <span>
                <span className={styles.menuItemTitle}>
                  Contato
                </span>
              </span>
            </button>
          </nav>
        </div>
      </section>
      
      <div className={styles.headerShadow}></div>
    </header>
  )
}