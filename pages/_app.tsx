import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Footer from '../components/organisms/Footer_/index';
import Header from '../components/organisms/Header_/index';
import Nav from '../components/organisms/NavOnePage_/index';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
