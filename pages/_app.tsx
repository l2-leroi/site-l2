import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Footer from '../components/organisms/footer';
import Header from '../components/organisms/header/index';
import OurServices from '../components/organisms/ourServices';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <OurServices/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
