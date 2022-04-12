import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Footer from '../components/organisms/footer';
import Header from '../components/organisms/header/index';
import OurServicesOnePage from '../components/organisms/ourServicesOnePage';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <OurServicesOnePage/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
