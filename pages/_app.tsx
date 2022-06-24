import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Footer from '../components/organisms/Footer/index';
import Header from '../components/organisms/Header/index';
import Nav from '../components/organisms/NavOnePage/index';
import Head from 'next/head';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        {/* Google Tag Manager */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P2868RZ');`,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>

      {/* Google Tag Manager (noscript) */}
      <noscript 
        dangerouslySetInnerHTML={{ 
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2868RZ" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}
      />
      {/* End Google Tag Manager (noscript) */}
      <GlobalStyle />
      <Nav />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
