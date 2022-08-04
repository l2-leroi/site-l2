import type { NextPage } from 'next';
import { useEffect } from 'react';
import { t } from 'i18next';
import Nav from '../../../components/organisms/Nav';
import About from '../../../components/organisms/About';
import LineAnimation from '../../../components/atoms/LineAnimation';
import Manifest from '../../../components/organisms/Manifest';
import { colors } from '../../../styles/colors';
import { Container, StyledScrollCircle } from './style';
import Footer from '../../../components/organisms/Footer';

const PageAbout: NextPage = () => {
  useEffect(() => {
    const nav = document.querySelector('.nav');
    nav?.classList.add('.white');
    nav?.classList.add('animate');
  }, []);

  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = () => {
        window.scrollTo(0, 0);
      };
    }
  }, []);

  return (
    <Container>
      <Nav />
      <About />

      <LineAnimation
        topChildren={
          <div className="topSpinner">
            <StyledScrollCircle
              isWhiteImage
              blackImage={`${t('images.spinner')}`}
              whiteImage={`${t('images.whiteSpinner')}`}
            />
          </div>
        }
        bottomChildren={
          <div className="bottomSpinner">
            <StyledScrollCircle
              isWhiteImage={false}
              blackImage={`${t('images.spinner')}`}
              whiteImage={`${t('images.whiteSpinner')}`}
            />
          </div>
        }
        lineBg={colors.gray}
        secondaryBg={colors.black}
        hasOutSourcing={false}
        hasSpinner={false}
      />
      <Manifest />
      <Footer />
    </Container>
  );
};

export default PageAbout;
