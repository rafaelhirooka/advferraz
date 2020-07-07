import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.headerSection}>
        <div className={styles.headerContainer}>
          <button role="button" aria-label="Side Menu" className={styles.buttonSideMenu}>
            <span>
              <span>
                Menu
              </span>
            </span>
          </button>

          <div className={styles.headerLogo}>
            <Link href="/">
              <span className={styles.headerLogoSpan}>
                <img className={styles.horizontalLogo} src="/logo.svg" />
              </span>
            </Link>

            <Link href="/">
              <span className={styles.headerLogoSpan}>
                <img className={styles.verticalLogo} src="/logo.svg" />
              </span>
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
                  Contato
                </span>
              </span>
            </button>
          </nav>
        </div>
      </section>
    </header>
  )
}