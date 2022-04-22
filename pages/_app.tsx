import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import OurServices from '../components/organisms/ourServices';
import Footer from '../components/organisms/footer';
import Header from '../components/organisms/header/index';
import OurServicesOnePage from '../components/organisms/ourServicesOnePage';
import Nav from '../components/organisms/navOnePage';


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
