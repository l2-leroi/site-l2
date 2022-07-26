import type { NextPage } from 'next';
import { useEffect } from 'react';

import HeaderOurCareer from '../../../components/organisms/HeaderOurCareer';
import AboutOurCareer from '../../../components/organisms/AboutOurCareer';
// import TalentsOurCareer from '../../../components/organisms/TalentsOurCareer';
// import Carousel from '../../../components/molecules/Carousel';
// import LineAnimation from '../../../components/atoms/LineAnimation';
// import { colors } from '../../../styles/colors';

const NossasCarreiras: NextPage = () => {
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

  const startDate = '20/05/2022';
  const endDate = '24/07/2022';
  const id = 1;
  const li = [
    'headerOurCareer.desirable',
    'headerOurCareer.availability',
    'headerOurCareer.knowledge',
  ];
  const image = [{ src: '/images/trainee-image.jpg', alt: 'trainnes L2 Code' }];
  // const images = [
  //   { src: '/images/OurCareer/talent-01.jpg', alt: 'talentos L2 Code' },
  //   { src: '/images/OurCareer/talent-02.jpg', alt: 'talentos L2 Code' },
  //   { src: '/images/OurCareer/talent-03.jpg', alt: 'talentos L2 Code' },
  // ];
  // const cards = [
  //   {
  //     comment: 'TalentsOurCareer.comment1',
  //     authorImg: '/images/OurCareer/comment-01.png',
  //     authorName: 'Renã ● Dev. FullStack',
  //     id: 1,
  //     author: true,
  //   },
  //   {
  //     comment: 'TalentsOurCareer.comment2',
  //     authorImg: '/images/OurCareer/comment-02.png',
  //     authorName: 'Bruna ● Dev. Trainee ',
  //     id: 2,
  //     author: true,
  //   },
  //   {
  //     comment: 'TalentsOurCareer.comment3',
  //     authorImg: '/images/OurCareer/comment-03.png',
  //     authorName: 'Guilherme ● Dev. backend',
  //     id: 3,
  //     author: true,
  //   },
  //   {
  //     comment: 'TalentsOurCareer.comment4',
  //     authorImg: '/images/OurCareer/comment-04.png',
  //     authorName: 'Ana Julia ● Frontend',
  //     id: 4,
  //     author: true,
  //   },
  //   {
  //     comment: 'TalentsOurCareer.comment5',
  //     authorImg: '/images/OurCareer/comment-05.png',
  //     authorName: 'Brenda ● Dev. Trainee ',
  //     id: 5,
  //     author: true,
  //   },
  //   {
  //     comment: 'TalentsOurCareer.comment6',
  //     authorImg: '/images/OurCareer/comment-06.png',
  //     authorName: 'Vanessa ● UX / UI Designer',
  //     id: 6,
  //     author: true,
  //   },
  // ];
  return (
    <>
      <HeaderOurCareer startDate={startDate} endDate={endDate} id={id} />
      <AboutOurCareer li={li} traineeImage={image} />
      {/* <LineAnimation
        lineBg={colors.gray}
        secondaryBg={colors.black}
        hasOutSourcing={false}
        hasSpinner={false}
      /> */}

      {/* <TalentsOurCareer talentsImages={images} /> */}
      {/* <Carousel cards={cards} /> */}

      {/* <LineAnimation
        lineBg={colors.purple}
        secondaryBg={colors.gray}
        hasOutSourcing={false}
        hasSpinner={false}
      /> */}
    </>
  );
};

export default NossasCarreiras;
