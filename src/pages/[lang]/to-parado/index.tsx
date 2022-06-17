import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import HeaderCases from '../../../components/organisms/HeaderCases';
import CardText from '../../../components/organisms/CardText';
import DesignsCases from '../../../components/organisms/DesignsCases';
import AllCases from '../../../components/organisms/Cases/AllCases';

const ToParado: NextPage = () => {
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  });

  const h2Header = 'headerCases.case03';
  const h1Header = 'headerCases.imStopped';
  const pHeader = 'headerCases.navigablePrototype';
  const h1SecondHeader = 'headerCases.connecting';
  const pSecondHeader = 'headerCases.serviceProviders';
  const linkBtnPt = '/pt/to-parado';
  const linkBtnEn = '/en/to-parado';

  const h1Card = 'cardText.processesCarriedOut';
  const pCard = 'cardText.weTread';
  const liCard = [
    'cardText.uxUiDesign',
    'cardText.conceptArt',
    'cardText.wireframe',
    
  ];

  const imagesDesign = [
    {
      image: '/images/DesignToParado/RectangleCaseToParado-1.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignToParado/RectangleCaseToParado-2.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignToParado/RectangleCaseToParado-3.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignToParado/RectangleCaseToParado-4.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignToParado/RectangleCaseToParado-5.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignToParado/RectangleCaseToParado-6.jpg',
      alt: 'Mockup',
    },
    {
        image: '/images/DesignToParado/RectangleCaseToParado-7.jpg',
        alt: 'Mockup',
      },
      {
        image: '/images/DesignToParado/RectangleCaseToParado-8.jpg',
        alt: 'Mockup',
      },
  ];

  const widthPrototype = 414;
  const heightPrototype = 896;
  const srcPrototype =
    '/images/mockup-animado-cell.png';
  const altPrototype = 'Mockup animado';
  const widthImage = 270;
  const heightImage = 582;

  const [space, setSpace] = useState(0);

  const setSpaceForSpinner = (spaceForSet) => {
    setSpace(spaceForSet);
  };

  return (
    <>
      <HeaderCases
        backgroundImage="/images/to-parado/capa-maior-to-parado.jpg"
        backgroundImageSmall="/images/to-parado/celulares-to-parado.jpg"
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
        backgroundImage="/images/to-parado/card-image.jpg"
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
    </>
  );
};

export default ToParado;
