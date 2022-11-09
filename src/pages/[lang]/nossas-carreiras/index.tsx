import type { NextPage } from 'next';
import { useEffect } from 'react';
import LineAnimation from '../../../components/atoms/LineAnimation';
import NewLineAnimation from '../../../components/atoms/NewLineAnimation';
import Footer from '../../../components/organisms/Footer';
import OurCareersPage from '../../../components/organisms/OurCareersPage';
import { colors } from '../../../styles/colors';

const AllCases: NextPage = () => {
  // make page refresh on top
  useEffect(() => {
    const nav = document.querySelector('.nav');
    nav?.classList.add('white');
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
      <OurCareersPage />
      <NewLineAnimation bottomBgColor={colors.purple} topBgColor={colors.gray}>
        <Footer />
      </NewLineAnimation>
    </>
  );
};

export default AllCases;
