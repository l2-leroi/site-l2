import { NextPage } from 'next';
import { useEffect } from 'react';
import OurServicesFull from '../../../components/organisms/OurServicesFull';
import Footer from '../../../components/organisms/Footer';

const Services: NextPage = () => {
  useEffect(() => {
    const nav = document.querySelector('.nav');
    nav?.classList.add('white');

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
