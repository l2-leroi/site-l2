import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Footer from '../components/organisms/footer';
import Header from '../components/organisms/header/index';
import OurServices from '../components/organisms/ourServices';
import OurServicesOnePage from '../components/organisms/ourServicesOnePage';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <>
      <GlobalStyle />
      <Header />
      <OurServices/>
      <OurServicesOnePage/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
