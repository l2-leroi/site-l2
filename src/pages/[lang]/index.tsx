import { useEffect, useState } from 'react';
import Cases from '../../components/organisms/Cases';
import OurServicesOnePage from '../../components/organisms/OurServicesOnePage';
import OurCustomers from '../../components/organisms/OurCustomers';
import LineAnimation from '../../components/atoms/LineAnimation';
import { colors } from '../../styles/colors';
import Header from '../../components/organisms/Header';

export default function Home() {
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

  const [space, setSpace] = useState(0);

  const setSpaceForSpinner = (spaceForSet) => {
    setSpace(spaceForSet);
  };

  return (
    <>
      
      <Header />
      <OurServicesOnePage />
      <Cases />
      <LineAnimation
        lineBg={colors.black}
        secondaryBg={colors.gray}
        hasOutSourcing={false}
        hasSpinner
        spaceForSpinner={space}
      />
      <OurCustomers setSpaceForSpinner={setSpaceForSpinner} />
      <LineAnimation
        lineBg={colors.purple}
        secondaryBg={colors.black}
        hasOutSourcing
        hasSpinner={false}
        spaceForSpinner={0}
      />
    </>
  );
}
