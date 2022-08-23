import type { NextPage } from 'next';
import { useEffect } from 'react';
import LineAnimation from '../../../components/atoms/LineAnimation';
import AllCasesPage from '../../../components/organisms/AllCasesPage';
import Footer from '../../../components/organisms/Footer';
import { colors } from '../../../styles/colors';

const AllCases: NextPage = () => {
  // make page refresh on top
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = () => {
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
      />
      <Footer />
    </>
  );
};

export default AllCases;
