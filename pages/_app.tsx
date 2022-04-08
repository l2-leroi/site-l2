import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import OurServicesOnePage from '../components/organisms/ourServicesOnePage';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <OurServicesOnePage/>

    </>
  );
}

export default MyApp;
