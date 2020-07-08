import styles from './CardBlack.module.css';

export default function CardBlack({ title, description, image, button: Button }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        {Button ? Button : null}
      </div>
    </div>
  );
}