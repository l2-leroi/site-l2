import type { NextPage } from 'next';
import Cases from '../../components/organisms/Cases';
import OurServicesOnePage from '../../components/organisms/OurServicesOnePage';
import OurCustomers from '../../components/organisms/OurCustomers';
import LineAnimation from '../../components/atoms/LineAnimation';
import { useEffect, useState } from 'react';
import { colors } from '../../styles/colors';
import Header from '../../components/organisms/Header';

const Home: NextPage = () => {

  // make page refresh on top
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    }
  });

  const [space, setSpace] = useState(0);

  const setSpaceForSpinner = (spaceForSet) => {
    setSpace(spaceForSet);
  }

  return (
    <>
      <Header />
      <OurServicesOnePage />
      <Cases />
      <LineAnimation lineBg={colors.black} secondaryBg={colors.gray} hasOutSourcing={false} hasSpinner={true} spaceForSpinner={space}/>
      <OurCustomers setSpaceForSpinner={setSpaceForSpinner}/>
      <LineAnimation lineBg={colors.purple} secondaryBg={colors.black} hasOutSourcing={true} hasSpinner={false} spaceForSpinner={0}/>
    </>
  );
};

export default Home;

