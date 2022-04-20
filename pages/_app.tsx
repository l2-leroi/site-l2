import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import OurServices from '../components/organisms/ourServices';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <OurServices/>

    </>
  );
}

export default MyApp;
