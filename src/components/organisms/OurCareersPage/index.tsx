import type { NextPage } from 'next';
import { useEffect } from 'react';

import HeaderOurCareer from '../HeaderOurCareer';
import AboutOurCareer from '../AboutOurCareer';
import TalentsOurCareer from '../TalentsOurCareer';
import { colors } from '../../../styles/colors';
import { Container } from './styled';
import LineAnimation from '../../atoms/LineAnimation';

const OurCareersPage: NextPage = () => {
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = () => {
        window.scrollTo(0, 0);
      };
    }
  }, []);

  useEffect(() => {
    const nav = document.querySelector('.nav');
    nav?.classList.add('animate');
  }, []);

  const startDate = '11/11/2022';
  const endDate = '25/11/2022';
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
  return (
    <Container>
      <HeaderOurCareer startDate={startDate} endDate={endDate} id={id} />
      <AboutOurCareer li={li} traineeImage={image} />
      <LineAnimation bottomBgColor={colors.gray} topBgColor={colors.black}>
        <TalentsOurCareer talentsImages={images} />
      </LineAnimation>
    </Container>
  );
};

export default OurCareersPage;
