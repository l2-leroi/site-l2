// import React from 'react';
import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import {
  ContainerStyled,
  ContentStyled,
  DivStyled,
  TitleStyled,
  ButtonImages,
  ImageStyled,
  ButtonStyled,
  TechnologiesStyled,
  TecTitleStyled,
  ButtonPrototype,
} from './styled';
import DesignPrototype from '../../molecules/DesignPrototype';
import DesignImages from '../../molecules/DesignImages';

interface DesignImage {
  image: string;
  alt: string;
}
interface imagesPrototype {
  image: string;
  alt: string;
}
interface imagesTechnologies {
  image: string;
  alt: string;
}

interface DesignsCasesProps {
  images: DesignImage[];
  imagesPrototype: imagesPrototype[];
  imagesTechnologies: imagesTechnologies[];
  width: number;
  height: number;
  widthImage: number;
  heightImage: number;
  src: string;
  alt: string;
}

function DesignsCases({
  images,
  imagesPrototype,
  imagesTechnologies,
  width,
  height,
  src,
  alt,
  widthImage,
  heightImage,
}: DesignsCasesProps) {
  const [button1isShown, button1setIsShown] = useState(true);
  const [button2isShown, button2setIsShown] = useState(false);
  const { t } = i18next;

  useEffect(() => {
    const btn1 = document.getElementById('btn1');
    btn1.classList.add('classBtn1');
    btn1.classList.add('classPadding1');
    const btn2 = document.getElementById('btn2');
    btn2.classList.add('classBtn2');
    btn2.classList.add('classPadding2');

    if (button1isShown === false) {
      btn1.classList.remove('classBtn1');
      btn2.classList.remove('classPadding2');
    }
    if (button2isShown === false) {
      btn2.classList.remove('classBtn2');
      btn1.classList.remove('classPadding1');
    }
  }, [button1isShown, button2isShown]);

  const buttonOpen1 = () => {
    button1setIsShown(true);
    button2setIsShown(false);
  };
  const buttonOpen2 = () => {
    button2setIsShown(true);
    button1setIsShown(false);
  };

  return (
    <ContainerStyled>
      <ContentStyled>
        <DivStyled>
          <TitleStyled>{t('CasesDetail.design')}</TitleStyled>
        </DivStyled>

        <ButtonStyled>
          <ButtonPrototype onClick={buttonOpen1} id="btn1">
            {' '}
            {t('CasesDetail.prototipo')}{' '}
          </ButtonPrototype>
          <ButtonImages onClick={buttonOpen2} id="btn2">
            {' '}
            {t('CasesDetail.imagens')}{' '}
          </ButtonImages>
        </ButtonStyled>

        {button1isShown && (
          <DesignPrototype
            width={width}
            height={height}
            src={src}
            alt={alt}
            imagesPrototype={imagesPrototype}
          />
        )}
        {button2isShown && (
          <DesignImages
            imagesArray={images}
            widthImage={widthImage}
            heightImage={heightImage}
          />
        )}

        <TecTitleStyled>{t('CasesDetail.tecnologias')}</TecTitleStyled>

        <TechnologiesStyled>
          {imagesTechnologies.map((image) => (
            <ImageStyled src={image.image} alt={image.alt} />
          ))}

          {/* <ImageStyled src="../images/WebApp.svg" alt="WebApp Logo" />
          <ImageStyled src="../images/nodejs-logo.svg" alt="Node.js Logo" />
        <ImageStyled src="../images/reactjs-logo.svg" alt="React Logo" /> */}
        </TechnologiesStyled>
      </ContentStyled>
    </ContainerStyled>
  );
}
export default DesignsCases;
