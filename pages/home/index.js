import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <section className={styles.cover}>
        <div className={styles.caption}>
          <h1 className={styles.captionTitle}>A great workplace combines exceptional colleagues and hard problems.</h1>
          <h2 className={styles.captionSubTitle}>Teste</h2>
        </div>
        <div className={styles.coverBackground}>
          <video autoPlay loop paysinline muted>
            <source src="./cover-video.mp4" />
          </video>
        </div>
        <div className={styles.coverShadow}></div>
      </section>

      <section>
        
      </section>
    </div>
  );
}