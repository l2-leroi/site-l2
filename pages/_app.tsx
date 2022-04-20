import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import OurServices from '../components/organisms/ourServices';
import Footer from '../components/organisms/footer';
import Header from '../components/organisms/header/index';
import Nav from '../components/organisms/nav';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Header />
      <OurServices/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
