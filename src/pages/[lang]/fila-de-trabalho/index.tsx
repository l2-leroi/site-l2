import { NextPage } from 'next';
import { useEffect } from 'react';
import HeaderCases from '../../../components/organisms/HeaderCases';
import CardText from '../../../components/organisms/CardText';
import DesignsCases from '../../../components/organisms/DesignsCases';
import AllCases from '../../../components/organisms/Cases/AllCases';
import LineAnimation from '../../../components/atoms/LineAnimation';
import { colors } from '../../../styles/colors';
import Footer from '../../../components/organisms/Footer';

const FilaDeTrabalho: NextPage = () => {
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
  });

  const h2Header = 'headerCases.case04';
  const h1Header = 'headerCases.workQueue';
  const pHeader = 'headerCases.platformDevelopment';
  const h1SecondHeader = 'headerCases.theBureaucracy';
  const pSecondHeader = 'headerCases.weMakeCharming';
  const linkBtnPt = '/pt/fila-de-trabalho';
  const linkBtnEn = '/en/fila-de-trabalho';

  const h1Card = 'cardText.processesCarriedOut';
  const pCard = 'cardText.weTread';
  const liCard = [
    'cardText.uxUiDesign',
    'cardText.conceptArt',
    'cardText.wireframe',
  ];

  const imagesDesign = [
    {
      image: '/images/DesignFilaDeTrabalho/RectangleCaseFilaDeTrabalho-1.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignFilaDeTrabalho/RectangleCaseFilaDeTrabalho-2.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignFilaDeTrabalho/RectangleCaseFilaDeTrabalho-3.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignFilaDeTrabalho/RectangleCaseFilaDeTrabalho-4.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignFilaDeTrabalho/RectangleCaseFilaDeTrabalho-5.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignFilaDeTrabalho/RectangleCaseFilaDeTrabalho-6.jpg',
      alt: 'Mockup',
    },
  ];
  const imagesPrototype = [
    {
      image: '/images/PrototypeFilaDeTrabalho/PrototypeFilaDeTrabalho-1.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/PrototypeFilaDeTrabalho/PrototypeFilaDeTrabalho-2.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/PrototypeFilaDeTrabalho/PrototypeFilaDeTrabalho-3.jpg',
      alt: 'Mockup',
    },
  ];

  const imagesTechnologies = [
    { image: '/images/TechnologiesLogos/redux-logo.svg', alt: 'Redux Logo' },
    { image: '/images/TechnologiesLogos/reactjs-logo.svg', alt: 'React Logo' },
  ];

  const widthImage = 1239;
  const heightImage = 688;
  const prototypeType = 'desktop';

  return (
    <>
      <HeaderCases
        backgroundImage="/images/fila-de-trabalho/capa-maior-fila-de-trabalho.jpg"
        backgroundImageSmall="/images/fila-de-trabalho/desk-fila-de-trabalho.jpg"
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
        backgroundImage="/images/fila-de-trabalho/card-image-fila-de-trabalho.jpg"
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
      <LineAnimation
        lineBg={colors.purple}
        secondaryBg={colors.gray}
        hasOutSourcing={false}
        hasSpinner={false}
        spaceForSpinner={0}
      />
      <Footer />
    </>
  );
};

export default FilaDeTrabalho;
