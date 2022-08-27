import type { NextPage } from 'next';
import { useEffect } from 'react';
import OurServicesFull from '../../../components/organisms/OurServicesFull';
import Footer from '../../../components/organisms/Footer';

const Services: NextPage = () => {
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
      <OurServicesFull />
      <Footer />
    </>
  );
};

export default Services;
