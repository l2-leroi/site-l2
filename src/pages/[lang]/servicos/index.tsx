import { NextPage } from 'next';
import { useEffect } from 'react';
import OurServicesFull from '../../../components/organisms/OurServicesFull';
import Footer from '../../../components/organisms/Footer';
import LineAnimation from '../../../components/atoms/LineAnimation';
import { colors } from '../../../styles/colors';

const Services: NextPage = () => {
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
      <OurServicesFull />

      <LineAnimation topBgColor={colors.black} bottomBgColor={colors.purple}>
        <Footer />
      </LineAnimation>
    </>
  );
};

export default Services;
