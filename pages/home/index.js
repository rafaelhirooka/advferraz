import styles from './Home.module.css';
import CardBlack from '../../components/CardBlack';
import Button from '../../components/Button';

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

      <section className={styles.firstSection}>
        <CardBlack 
        title="Internet entertainment. Global original content. Product personalization." 
        description="Our first original series debuted in 2013. Over the following decades, Internet TV will replace linear, and we hope to keep leading by offering an amazing entertainment experience." 
        image="./gustavo-oliveira-ferraz.jpg"
        button={<Button title="Veja mais" onClick={() => {alert('teste')}} />}
        />
      </section>
    </div>
  );
}