import styles from './GridItem.module.css';

export default function GridItem({children}) {
  return (
    <div className={styles.gridItem}>
      {children}
    </div>
  );
}