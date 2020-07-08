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
        title="Representando pessoas, não as Instituições Governamentais" 
        description="Nossa história começou em 2007 com a visão de prestar um conjunto de serviço abrangentes e eficazes, utilizando mecanismos jurídicos mais atualizados que permitiriam alcançar os melhores resultados para nossos clientes." 
        image="./gustavo-oliveira-ferraz.jpg"
        button={<Button title="Veja mais" onClick={() => {alert('teste')}} />}
        />
      </section>
    </div>
  );
}