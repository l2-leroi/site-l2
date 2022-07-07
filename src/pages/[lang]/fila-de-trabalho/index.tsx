import { NextPage } from 'next';
import { useEffect, useState } from 'react';
// import { useWindowSize } from 'use-hooks';
import HeaderCases from '../../../components/organisms/HeaderCases';
import CardText from '../../../components/organisms/CardText';
import DesignsCases from '../../../components/organisms/DesignsCases';
import AllCases from '../../../components/organisms/Cases/AllCases';
import LineAnimation from '../../../components/atoms/LineAnimation';
import { colors } from '../../../styles/colors';

const FilaDeTrabalho: NextPage = () => {
  // const { width } = useWindowSize();

  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = function () {
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

  const widthPrototype = 1239;
  const heightPrototype = 688;
  const srcPrototype =
    '/images/fila-de-trabalho/mockup-desk-fila-de-trabalho.png';
  const altPrototype = 'Mockup animado';
  const widthImage = 464;
  const heightImage = 257;

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
        width={widthPrototype}
        height={heightPrototype}
        src={srcPrototype}
        alt={altPrototype}
        widthImage={widthImage}
        heightImage={heightImage}
      />
      <AllCases />

      <LineAnimation
        lineBg={colors.purple}
        secondaryBg={colors.gray}
        hasOutSourcing={false}
        hasSpinner={false}
        spaceForSpinner={0}
      />
    </>
  );
};

export default FilaDeTrabalho;
