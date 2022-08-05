import type { NextPage } from 'next';
import { useEffect } from 'react';
import { t } from 'i18next';
import About from '../../../components/organisms/About';
import LineAnimation from '../../../components/atoms/LineAnimation';
import Manifest from '../../../components/organisms/Manifest';
import { colors } from '../../../styles/colors';
import { Container, StyledScrollCircle } from './styled';
import Footer from '../../../components/organisms/Footer';

const PageAbout: NextPage = () => {
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = () => {
        window.scrollTo(0, 0);
      };
    }
  });

  useEffect(() => {
    const nav = document.querySelector('.nav');
    nav?.classList.add('white');
    nav?.classList.add('animate');
  }, []);

  return (
    <Container>
      <About />

      <LineAnimation
        topChildren={
          <div className="topSpinner">
            <StyledScrollCircle
              isWhiteImage
              blackImage={`${t('images.spinnerBlack')}`}
              whiteImage={`${t('images.spinnerWhite')}`}
            />
          </div>
        }
        bottomChildren={
          <div className="bottomSpinner">
            <StyledScrollCircle
              isWhiteImage={false}
              blackImage={`${t('images.spinnerBlack')}`}
              whiteImage={`${t('images.spinnerWhite')}`}
            />
          </div>
        }
        lineBg={colors.gray}
        secondaryBg={colors.black}
        hasOutSourcing={false}
        hasSpinner={false}
      />
      <Manifest />
      <LineAnimation
        topChildren={false}
        bottomChildren={false}
        lineBg={colors.purple}
        secondaryBg={colors.gray}
        hasOutSourcing={false}
        hasSpinner={false}
      />
      <Footer />
    </Container>
  );
};

export default PageAbout;
