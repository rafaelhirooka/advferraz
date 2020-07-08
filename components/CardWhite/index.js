import styles from './CardWhite.module.css';

export default function CardWhite({title, description, image, button: Button}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitleMobile}>
        <h2>{title}</h2>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardBody}>
          <h2>{title}</h2>

          <p>{description}</p>

          {Button || null}
        </div>
      </div>

      <div className={styles.cardImageBorder}>
        <div className={styles.cardImageBorderContent}></div>
      </div>

      <div className={styles.cardImage}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
}