import type { NextPage } from 'next';
import { useEffect } from 'react';
import LineAnimation from '../../../components/atoms/LineAnimation';
import PeopleCard from '../../../components/atoms/PeopleCard';
import PeopleCardList from '../../../components/molecules/PeopleCardList';
import Footer from '../../../components/organisms/Footer';
import PeopleMosaic from '../../../components/organisms/PeopleMosaic';
import PeoplePage from '../../../components/organisms/PeoplePage';
import { colors } from '../../../styles/colors';

const Pessoas: NextPage = () => {
  // make page refresh on top
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
      <PeoplePage />
      <PeopleMosaic />
      <LineAnimation
        topBgColor={colors.black}
        bottomBgColor={colors.purple}
        hasOutSourcing={false}
        hasSpinner={false}
      />
      <Footer />
    </>
  );
};

export default Pessoas;
