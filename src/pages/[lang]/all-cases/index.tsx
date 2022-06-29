import type { NextPage } from 'next';
import { useEffect } from 'react';
import LineAnimation from '../../../components/atoms/LineAnimation';
import AllCasesPage from '../../../components/organisms/AllCasesPage';
import { colors } from '../../../styles/colors';

const AllCases: NextPage = () => {
  // make page refresh on top
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  });

  return (
    <>
      <AllCasesPage />
      <LineAnimation
        lineBg={colors.purple}
        secondaryBg={colors.black}
        hasOutSourcing={false}
        hasSpinner={false}
        spaceForSpinner={0}
      />
    </>
  );
};

export default AllCases;
