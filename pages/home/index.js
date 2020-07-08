import styles from './Home.module.css';
import CardBlack from '../../components/CardBlack';
import CardWhite from '../../components/CardWhite';
import BlogPaper from '../../components/BlogPaper';
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
        title="Agende uma consulta" 
        description="Entre em contato conosco agora mesmo e agende uma consulta pelo nosso WhatsApp" 
        image="./contact-whatsapp.jpg"
        button={<Button title="Agendar consulta" onClick={() => {window.open('https://api.whatsapp.com/send?phone=5519996045373&text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20consulta')}} />}
        />
      </section>

      <section className={styles.homeSection}>
        <h3 className={styles.sectionTitle}>Leia nosso Blog</h3>
        <div className={styles.lastSection}>
          <BlogPaper 
          title="DR. GUSTAVO FERRAZ É NOMEADO PARA COMISSÃO DE SEGURIDADE SOCIAL DE CAMPINAS/SP"
          description="Quero Agradecer a Comissão de Direito da Seguridade Social da Cidade de Campinas/SP pela nomeação de minha pessoa co..."
          button={<Button title="Veja mais" onClick={() => {alert('teste')}} />}
          style={{marginRight: '0.63rem', marginLeft: '0'}}
          />

          <BlogPaper 
          title="DR. GUSTAVO FERRAZ É NOMEADO PARA A COMISSÃO ESPECIAL DE DIREITO PREVIDENCIÁRIO OAB/SP"
          description="Fico honrado e agradecido pela confiança do Advogado, Professor e doutrinador José Roberto Sodero..."
          button={<Button title="Veja mais" onClick={() => {alert('teste')}} />}
          />
        </div>
      </section>
    </div>
  );
}