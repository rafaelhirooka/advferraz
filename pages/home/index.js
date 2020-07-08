import styles from './Home.module.css';
import CardBlack from '../../components/CardBlack';
import CardWhite from '../../components/CardWhite';
import Button from '../../components/Button';
import Paper from '../../components/Paper';
import Grid from '../../components/Grid';
import GridItem from '../../components/GridItem';
import {FaBalanceScale, FaNewspaper, FaSuitcase, FaUniversity, FaIndustry, FaUsers, FaPiggyBank} from 'react-icons/fa'


export default function Home() {
  return (
    <div>
      <section className={styles.cover}>
        <div className={styles.caption}>
          <h1 className={styles.captionTitle}>Representando pessoas, não as Instituições Governamentais.</h1>
          <h2 className={styles.captionSubTitle}>Nossos profissionais (Mestres e Especialistas), estão sempre prontos para lhe prestar um serviço de excelência.</h2>
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

      <section className={styles.homeSection}>
        <div className={styles.sectionContent}>
          <Paper title="Áreas de atuação">
            <Grid>
              <GridItem>
                <div className={styles.expertiseIcon}>
                  <FaBalanceScale />
                </div>
                <h3 className={styles.expertiseTitle}>Direito<br/>Previdenciário</h3>
              </GridItem>
              <GridItem>
                <div className={styles.expertiseIcon}>
                  <FaNewspaper />
                </div>
                <h3 className={styles.expertiseTitle}>Direito<br/>Cível</h3>
              </GridItem>
              <GridItem>
                <div className={styles.expertiseIcon}>
                  <FaSuitcase />
                </div>
                <h3 className={styles.expertiseTitle}>Direito<br/>Trabalhista</h3>
              </GridItem>
              <GridItem>
                <div className={styles.expertiseIcon}>
                  <FaUniversity />
                </div>
                <h3 className={styles.expertiseTitle}>Direito<br/>Administrativo</h3>
              </GridItem>
            </Grid>
            <Grid>
              <GridItem>
                <div className={styles.expertiseIcon}>
                  <FaIndustry />
                </div>
                <h3 className={styles.expertiseTitle}>Direito<br/>Empresarial</h3>
              </GridItem>
              <GridItem>
                <div className={styles.expertiseIcon}>
                  <FaUsers />
                </div>
                <h3 className={styles.expertiseTitle}>Direito de Família</h3>
              </GridItem>
              <GridItem>
                <div className={styles.expertiseIcon}>
                  <FaPiggyBank />
                </div>
                <h3 className={styles.expertiseTitle}>Direito<br/>Bancário</h3>
              </GridItem>
            </Grid>
          </Paper>
        </div>
      </section>

      <section className={styles.firstSection}>
        <CardWhite 
        title="Representando pessoas, não as Instituições Governamentais" 
        description="Nossa história começou em 2007 com a visão de prestar um conjunto de serviço abrangentes e eficazes, utilizando mecanismos jurídicos mais atualizados que permitiriam alcançar os melhores resultados para nossos clientes." 
        image="./gustavo-oliveira-ferraz.jpg"
        button={<Button title="Veja mais" onClick={() => {alert('teste')}} />}
        />
      </section>
    </div>
  );
}