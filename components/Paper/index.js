import styles from './Paper.module.css';

export default function Paper({title, children}) {
  return (
    <div className={styles.paper}>
      <div className={styles.paperHeader}>
        <h2 className={styles.paperTitle}>{title}</h2>
      </div>

      <div className={styles.paperBody}>
        <div style={{width: '100%'}}>
          {children}
        </div>
      </div>
    </div>
  );
}