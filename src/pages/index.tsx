import type { NextPage } from 'next';
import Cases from '../components/organisms/Cases';
import OurServicesOnePage from '../components/organisms/OurServicesOnePage';
import OurCustomers from '../components/organisms/OurCustomers';
import { useEffect } from 'react';

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

  return (
    <>
      <OurServicesOnePage />
      <Cases />
      <OurCustomers />
    </>
  );
};

export default Home;
