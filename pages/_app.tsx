import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Footer from '../components/organisms/Footer/index';
import Header from '../components/organisms/Header/index';
import Nav from '../components/organisms/NavOnePage/index';
import Teste from '../components/organisms/Teste';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Teste/>
    </>
  );
}

export default MyApp;
