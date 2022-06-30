import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import HeaderCases from '../../../components/organisms/HeaderCases';
import CardText from '../../../components/organisms/CardText';
import DesignsCases from '../../../components/organisms/DesignsCases';
import AllCases from '../../../components/organisms/Cases/AllCases';

const MaisAcesso: NextPage = () => {
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  });

  const h2Header = 'headerCases.case02';
  const h1Header = 'headerCases.moreAccess';
  const pHeader = 'headerCases.webappDevelopment';
  const h1SecondHeader = 'headerCases.helpingToStart';
  const pSecondHeader = 'headerCases.aWebapp';
  const linkBtnPt = '/pt/mais-acesso';
  const linkBtnEn = '/en/mais-acesso';

  const h1Card = 'cardText.processesCarriedOut';
  const pCard = 'cardText.weTread';
  const liCard = [
    'cardText.uxUiDesign',
    'cardText.conceptArt',
    'cardText.wireframe',
  ];

  const imagesDesign = [
    {
      image: '/images/DesignMaisAcesso/RectangleCaseMaisAcesso-1.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignMaisAcesso/RectangleCaseMaisAcesso-2.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignMaisAcesso/RectangleCaseMaisAcesso-3.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignMaisAcesso/RectangleCaseMaisAcesso-4.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignMaisAcesso/RectangleCaseMaisAcesso-5.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignMaisAcesso/RectangleCaseMaisAcesso-6.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignMaisAcesso/RectangleCaseMaisAcesso-7.jpg',
      alt: 'Mockup',
    },
    {
      image: '/images/DesignMaisAcesso/RectangleCaseMaisAcesso-8.jpg',
      alt: 'Mockup',
    },
  ];

  const widthPrototype = 414;
  const heightPrototype = 896;
  const srcPrototype = '/images/mockup-animado-cell.png';
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
        backgroundImage="/images/mais-acesso/capa-maior-mais-acesso.jpg"
        backgroundImageSmall="/images/mais-acesso/celulares-mais-acesso.jpg"
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
        backgroundImage="/images/mais-acesso/card-image-mais-acesso.jpg"
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

export default MaisAcesso;