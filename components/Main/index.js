import styles from './Main.module.css'
import Link from 'next/link'

export default function Main({children}) {
  return (
    <main className={styles.main}>
      { children }
    </main>
  )
}