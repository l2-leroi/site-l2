import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Footer from '../components/organisms/footer';
import Header from '../components/organisms/header/index';
import Menu from '../components/organisms/menu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
    </>
  );
}

export default MyApp;
