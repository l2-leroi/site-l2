import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Footer from '../components/organisms/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
