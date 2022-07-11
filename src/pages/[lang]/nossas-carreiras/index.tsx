import type { NextPage } from 'next';
import { useEffect } from 'react';

import HeaderOurCareer from '../../../components/organisms/HeaderOurCareer';
import TalentsOurCareer from '../../../components/organisms/TalentsOurCareer';
import LineAnimation from '../../../components/atoms/LineAnimation';
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
  });

  const startDate = '20/07/2022';
  const endDate = '24/07/2022';
  const id = 1;
  const li = [
    'headerOurCareer.desirable',
    'headerOurCareer.availability',
    'headerOurCareer.knowledge',
  ];
  return (
    <>
      <HeaderOurCareer
        startDate={startDate}
        endDate={endDate}
        id={id}
        li={li}
      />
      <LineAnimation
        lineBg={colors.gray}
        secondaryBg={colors.black}
        hasOutSourcing={false}
        hasSpinner={false}
      />
      <TalentsOurCareer />
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
