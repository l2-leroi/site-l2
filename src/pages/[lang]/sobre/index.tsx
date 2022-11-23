import type { NextPage } from 'next';
import { useEffect } from 'react';
import LineAnimation from '../../../components/atoms/LineAnimation';
import { colors } from '../../../styles/colors';
import Footer from '../../../components/organisms/Footer';
import AboutPage from '../../../components/organisms/AboutPage';

const PageAbout: NextPage = () => {
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = () => {
        window.scrollTo(0, 0);
      };
    }
  });

  useEffect(() => {
    const nav = document.querySelector('.nav');
    nav?.classList.add('white');
    nav?.classList.add('animate');
  }, []);

  return (
    <>
      <AboutPage />
      <LineAnimation
        topChildren={false}
        bottomChildren={false}
        lineBg={colors.purple}
        secondaryBg={colors.gray}
        hasOutSourcing={false}
        hasSpinner={false}
      />
      <Footer />
    </>
  );
};

export default PageAbout;