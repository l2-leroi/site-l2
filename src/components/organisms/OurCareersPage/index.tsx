import i18next from 'i18next';
import { colors } from '../../../styles/colors';
import LineAnimation from '../../atoms/LineAnimation';
import Carousel from '../../molecules/Carousel';
import AboutOurCareer from '../AboutOurCareer';
import HeaderOurCareer from '../HeaderOurCareer';
import TalentsOurCareer from '../TalentsOurCareer';
import { Container, StyledScrollCircle } from './style';

function OurCareersPage() {
  const { t } = i18next;
  const startDate = '20/08/2022';
  const endDate = '24/08/2022';
  const id = 1;
  const li = [
    'headerOurCareer.desirable',
    'headerOurCareer.availability',
    'headerOurCareer.knowledge',
  ];
  const image = [{ src: '/images/trainee-image.jpg', alt: 'trainnes L2 Code' }];
  const images = [
    { src: '/images/OurCareer/talent-01.jpg', alt: 'talentos L2 Code' },
    { src: '/images/OurCareer/talent-02.jpg', alt: 'talentos L2 Code' },
    { src: '/images/OurCareer/talent-03.jpg', alt: 'talentos L2 Code' },
  ];
  const cards = [
    {
      comment: 'TalentsOurCareer.comment1',
      authorImg: '/images/OurCareer/comment-01.png',
      authorName: 'Renã ● Dev. FullStack',
      id: 1,
      author: true,
    },
    {
      comment: 'TalentsOurCareer.comment2',
      authorImg: '/images/OurCareer/comment-02.png',
      authorName: 'Bruna ● Dev. Trainee ',
      id: 2,
      author: true,
    },
    {
      comment: 'TalentsOurCareer.comment3',
      authorImg: '/images/OurCareer/comment-03.png',
      authorName: 'Guilherme ● Dev. backend',
      id: 3,
      author: true,
    },
    {
      comment: 'TalentsOurCareer.comment4',
      authorImg: '/images/OurCareer/comment-04.png',
      authorName: 'Ana Julia ● Frontend',
      id: 4,
      author: true,
    },
    {
      comment: 'TalentsOurCareer.comment5',
      authorImg: '/images/OurCareer/comment-05.png',
      authorName: 'Brenda ● Dev. Trainee ',
      id: 5,
      author: true,
    },
    {
      comment: 'TalentsOurCareer.comment6',
      authorImg: '/images/OurCareer/comment-06.png',
      authorName: 'Vanessa ● UX / UI Designer',
      id: 6,
      author: true,
    },
  ];
  return (
    <Container>
      <HeaderOurCareer startDate={startDate} endDate={endDate} id={id} />
      <AboutOurCareer li={li} traineeImage={image} />
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

      <TalentsOurCareer talentsImages={images} />
      <Carousel cards={cards} />
    </Container>
  );
}
export default OurCareersPage;
