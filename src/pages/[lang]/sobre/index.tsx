import type { NextPage } from 'next';
import { useEffect } from 'react';
// import Header from '../../../components/organisms/Header';

import About from '../../../components/organisms/About';

const Page: NextPage = () => {
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = () => {
        window.scrollTo(0, 0);
      };
    }
  }, []);

  useEffect(() => {
    const nav = document.querySelector('.nav');
    nav?.classList.add('animate');
  }, []);

  return (
    <>
      {/* <Header /> */}
      <About />
    </>
  );
};

export default Page;
