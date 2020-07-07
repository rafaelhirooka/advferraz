import Head from 'next/head'
import Header from '../components/Header';
import Main from '../components/Main';
import homeStyles from '../components/Main/Main.module.css';

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Ferraz de Oliveira Advocacia</title>
      </Head>

      <Header/>

      <Main>
        <section className={homeStyles.cover}>
          <div className={homeStyles.caption}>
            <h1 className={homeStyles.captionTitle}>A great workplace combines exceptional colleagues and hard problems.</h1>
            <h2 className={homeStyles.captionSubTitle}>Teste</h2>
          </div>
          <div className={homeStyles.coverBackground}>
            <video autoPlay loop paysinline muted>
              <source src="./cover-video.mp4" />
            </video>
          </div>
          <div className={homeStyles.coverShadow}></div>
        </section>

        <section>
          
        </section>
      </Main>
    </div>
  )
}
