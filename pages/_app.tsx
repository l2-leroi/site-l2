import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Footer from '../components/organisms/footer';
import Header from '../components/organisms/header/index';
import Menu from '../components/organisms/menu';
import Nav from '../components/organisms/nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle/>
      <Nav/>
    </>
  );
}

export default MyApp;
