import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Footer from '../components/organisms/footer';
import Header from '../components/organisms/header/index';
import Nav from '../components/organisms/nav';
import Cases from '../components/organisms/cases';
import OurServicesOnePage from '../components/organisms/ourServicesOnePage';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
<<<<<<< HEAD
      <Nav />
=======
      <Header />
>>>>>>> cd9bb73702971cbb0469824b8f064c4ba4f53708
      <Component {...pageProps} />
      <Header />
      <Footer/>
    </>
  );
}

export default MyApp;
