import { colors } from '../../../styles/colors';
import LineAnimation from '../../atoms/LineAnimation';
import About from '../About';
import Manifest from '../Manifest';
import { Container } from './styled';

function AboutPage() {
  return (
    <Container>
      <About />
      <LineAnimation bottomBgColor={colors.gray} topBgColor={colors.black}>
        <Manifest />
      </LineAnimation>
    </Container>
  );
}
export default AboutPage;
