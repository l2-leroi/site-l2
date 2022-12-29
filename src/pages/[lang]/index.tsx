import { useEffect } from 'react';
import Cases from '../../components/organisms/Cases';
import OurServicesOnePage from '../../components/organisms/OurServicesOnePage';
import OurCustomers from '../../components/organisms/OurCustomers';
import { colors } from '../../styles/colors';
import Header from '../../components/organisms/Header';
import LineAnimation from '../../components/atoms/LineAnimation';
import Footer from '../../components/organisms/Footer';

export default function Home() {
  // make page refresh on top
  useEffect(() => {
    const nav = document.querySelector('.nav');
    nav?.classList.remove('black');

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
      <Header />
      <OurServicesOnePage />
      <Cases />

      <LineAnimation
        bottomBgColor={colors.black}
        topBgColor={colors.gray}
        hasSpinner
      >
        <OurCustomers />
      </LineAnimation>
      <LineAnimation
        hasOutSourcing
        bottomBgColor={colors.purple}
        topBgColor={colors.black}
      >
        <Footer />
      </LineAnimation>
    </>
  );
}
