import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Footer from '../components/organisms/Footer/index';
import Header from '../components/organisms/Header/index';
import Nav from '../components/organisms/NavOnePage/index';
import {NextIntlProvider} from 'next-intl';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <GlobalStyle />
      <Nav />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </NextIntlProvider>
  );
}

export default MyApp;
