import styles from './BlogPaper.module.css';

export default function BlogPaper({title, description, button: Button, category, style}) {
  return (
    <div className={styles.blogPaper} style={style || null}>
      <div className={styles.blogPaperContent}>
        {category ? (
          <h4 className={styles.categoryText}>{category}</h4>
        ) : null}

        <h3 className={styles.blogPaperTitle}>{title}</h3>

        {description ? (
          <div className={styles.blobPaperBody}>
            <p>{description}</p>
          </div>
        ) : null}

        {Button || null}
      </div>
    </div>
  );
}