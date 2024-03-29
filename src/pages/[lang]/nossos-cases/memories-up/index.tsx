import React, { useEffect } from 'react';
import { NextPage } from 'next';
import HeaderCases from '../../../../components/organisms/HeaderCases';
import CardText from '../../../../components/organisms/CardText';
import DesignsCases from '../../../../components/organisms/DesignsCases';
import AllCases from '../../../../components/organisms/Cases/AllCases';
import LineAnimation from '../../../../components/atoms/LineAnimation';
import { colors } from '../../../../styles/colors';
import Footer from '../../../../components/organisms/Footer';

const MemoriesUp: NextPage = () => {
  useEffect(() => {
    const nav = document.querySelector('.nav');
    nav?.classList.add('transparentBlack');

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = () => {
        window.scrollTo(0, 0);
      };
    }
  }, []);

  const h2Header = 'headerCases.case01';
  const h1Header = 'headerCases.memoriesUp';
  const pHeader = 'headerCases.design';
  const h1SecondHeader = 'headerCases.atTheBeginning';
  const pSecondHeader = 'headerCases.ifTheService';
  const linkBtnPt = '/pt/nossos-cases/memories-up';
  const linkBtnEn = '/en/nossos-cases/memories-up';

  const h1Card = 'cardText.processesCarriedOut';
  const pCard = 'cardText.weTread';
  const liCard = [
    'cardText.ideation',
    'cardText.wireframe',
    'cardText.conceptArt',
    'cardText.design',
    'cardText.navigablePrototype',
  ];

  const imagesDesign = [
    {
      image: '/images/DesignMemoriesUp/RectangleCaseMemoriesUp-1.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignMemoriesUp/RectangleCaseMemoriesUp-2.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignMemoriesUp/RectangleCaseMemoriesUp-3.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignMemoriesUp/RectangleCaseMemoriesUp-4.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignMemoriesUp/RectangleCaseMemoriesUp-5.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignMemoriesUp/RectangleCaseMemoriesUp-6.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignMemoriesUp/RectangleCaseMemoriesUp-7.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignMemoriesUp/RectangleCaseMemoriesUp-8.jpg',
      alt: 'Mockup',
    },
  ];

  const imagesPrototype = [
    {
      image: '/images/PrototypeMemoriesUp/PrototypeMemoriesUp-1.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/PrototypeMemoriesUp/PrototypeMemoriesUp-2.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/PrototypeMemoriesUp/PrototypeMemoriesUp-3.jpg',
      alt: 'Mockup',
    },
  ];
  const imagesTechnologies = [
    { image: '/images/TechnologiesLogos/figma-logo.svg', alt: 'Figma Logo' },
  ];

  const widthImage = 414;
  const heightImage = 896;
  const prototypeType = 'mobile';

  return (
    <>
      <HeaderCases
        backgroundImage="/images/memories-up/capa-maior-memories-up.jpg"
        backgroundImageSmall="/images/memories-up/celulares-memories-up.jpg"
        h2={h2Header}
        h1={h1Header}
        p={pHeader}
        h1Second={h1SecondHeader}
        pSecond={pSecondHeader}
        linkBtnPt={linkBtnPt}
        linkBtnEn={linkBtnEn}
      />
      <CardText
        backgroundColor="#5900cc"
        backgroundImage="/images/memories-up/card-image-memories-up.jpg"
        h1={h1Card}
        p={pCard}
        li={liCard}
      />
      <DesignsCases
        images={imagesDesign}
        imagesPrototype={imagesPrototype}
        imagesTechnologies={imagesTechnologies}
        widthImage={widthImage}
        heightImage={heightImage}
        prototypeType={prototypeType}
      />
      <AllCases />
      <LineAnimation bottomBgColor={colors.purple} topBgColor={colors.gray} />
      <Footer />
    </>
  );
};

export default MemoriesUp;
