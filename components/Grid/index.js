import styles from './Grid.module.css';

export default function Grid({children}) {
  return (
    <div className={styles.grid}>
      <div className={styles.gridContainer}>
        {children}
      </div>
    </div>
  );
}