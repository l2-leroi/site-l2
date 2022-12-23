import type { NextPage } from 'next';
import { useEffect } from 'react';
import LineAnimation from '../../../components/atoms/LineAnimation';
import { colors } from '../../../styles/colors';

const Pessoas: NextPage = () => {
  useEffect(() => {
    const nav = document.querySelector('.nav');
    nav?.classList.add('black');

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = () => {
        window.scrollTo(0, 0);
      };
    }
  }, []);

  return (
    <>
      {/* <PeoplePage /> */}
      <LineAnimation
        topBgColor={colors.purple}
        bottomBgColor={colors.black}
        hasOutSourcing={false}
        hasSpinner={false}
      />
    </>
  );
};

export default Pessoas;
