import { t } from 'i18next';
import { colors } from '../../../styles/colors';
import LineAnimation from '../../atoms/LineAnimation';
import About from '../About';
import Manifest from '../Manifest';
import { Container, StyledScrollCircle } from './styled';

function AboutPage() {
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
    </Container>
  );
}
export default AboutPage;
