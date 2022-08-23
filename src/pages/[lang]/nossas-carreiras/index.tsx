import type { NextPage } from 'next';
import { useEffect } from 'react';
import LineAnimation from '../../../components/atoms/LineAnimation';
import OurCareersPage from '../../../components/organisms/OurCareersPage';
import { colors } from '../../../styles/colors';

const NossasCarreiras: NextPage = () => {
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
      <OurCareersPage />
      <LineAnimation
        lineBg={colors.purple}
        secondaryBg={colors.gray}
        hasOutSourcing={false}
        hasSpinner={false}
      />
    </>
  );
};

export default NossasCarreiras;
