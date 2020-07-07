import './styles.css';
import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <div className="main">
      <Head>
        <title>Ferraz de Oliveira Advocacia</title>
      </Head>

      <Header/>

      <Main>
        <Component {...pageProps} />
      </Main>
    </div>
  );
}