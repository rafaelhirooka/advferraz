import styles from './Griditem.module.css';

export default function GridItem({children}) {
  return (
    <div className={styles.gridItem}>
      {children}
    </div>
  );
}