import {
  HeaderStyled,
  MainContentStyled,
  FooterContentStyled,
  MainTextStyled,
  LanguageStyled,
  SocialMediaStyled,
  ArrowSpinnerContainerStyled,
  TitleStyled,
  SubtitleStyled,
  TitleComplementStyled,
  LanguageItemStyled,
  SocialMediaTitleStyled,
  SocialMediaItemStyled,
  ImageStyled,
} from "./styled";
import React, { useRef, useState } from 'react';
import ScrollCircle from '../../atoms/ScrollCircle/index';
//translation
import { useTranslations } from 'next-intl'

const Header = () => {
   //translation
   const t= useTranslations('header');
  const backgroundList = [
    {
      image: './images/PROTOTYPE.jpg',
      text: 'PROTOTYPE',
    },
    {
      image: './images/INOVATE.jpg',
      text: 'INOVATE',
    },
    {
      image: './images/HACK.jpg',
      text: 'HACK',
    },
    {
      image: './images/LAUGH.jpg',
      text: 'LAUGH',
    },
    {
      image: './images/THINK.jpg',
      text: 'THINK',
    },
  ];
  const [isBannerAnimating, setIsBannerAnimating] = useState(false);

  const interval = useRef(null);
  let currentImage = '';
  const [actualImage, setActualImage] = useState('');
  const [whiteCircle, setWhiteCircle] = useState(false);
  let currentText = '';
  const [actualText, setActualText] = useState('CODE');

  const initInterval = (backgroundList) => {
    
    setIsBannerAnimating(true);
    console.log(isBannerAnimating);
    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    
    interval.current = setInterval(() => {
      const index = currentImage !== '' ? backgroundList.findIndex(
        (background) => background.image === currentImage,
      )
        : 0;
      if (index === backgroundList.length - 1) {
        currentImage = backgroundList[0].image;
        currentText = backgroundList[0].text;
        setActualImage(currentImage);
        setActualText(currentText);
      } else {
        currentImage = backgroundList[index + 1].image;
        setActualImage(backgroundList[index + 1].image);

        currentText = backgroundList[index + 1].text;
        setActualText(backgroundList[index + 1].text);
      }
      header.classList.add("white");
      nav?.classList.add("white");
      setWhiteCircle(true);
    }, 300);
  };

  const exitInterval = (backgroundList) => {
    
    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    header.classList.remove("white");
    nav?.classList.remove("white");
    setWhiteCircle(false);
    clearInterval(interval.current);
    interval.current = null;
    setActualImage(backgroundList);
    setActualText('CODE');
    document.body.classList.remove("white");
  };

  return (
    <HeaderStyled className='header'>
      {backgroundList.map((background) => (
        <ImageStyled
          key={background.image}
          src={background.image}
          alt={background.text}
          className={
            actualImage == background.image ? 'activeImage' : 'noneImage'
          }
        />
      ))}

      <MainContentStyled>
        <MainTextStyled>
          <SubtitleStyled>{t('loveTo')}</SubtitleStyled>
          <TitleStyled
            onMouseEnter={() => {
              initInterval(backgroundList);
            }}
            onMouseLeave={() => {
              exitInterval(backgroundList);
            }}
          >
            {actualText}
          </TitleStyled>

          <TitleComplementStyled className='bannerText'>
          {t('weCreate')}
          </TitleComplementStyled>
        </MainTextStyled>

        <LanguageStyled>
          <LanguageItemStyled>
            <a href="/">PT</a>
          </LanguageItemStyled>
          <LanguageItemStyled>
            <a href="/en">EN</a>
          </LanguageItemStyled>
        </LanguageStyled>
      </MainContentStyled>

      <FooterContentStyled>
        <SocialMediaStyled>
          <SocialMediaTitleStyled>{t('followUs')}</SocialMediaTitleStyled>
          <SocialMediaItemStyled href="https://www.linkedin.com/company/l2code-dev/" target="_blank">In</SocialMediaItemStyled>
          <SocialMediaItemStyled href="https://www.instagram.com/l2code.com.br/" target="_blank">IG</SocialMediaItemStyled>
        </SocialMediaStyled>

        <ArrowSpinnerContainerStyled>
            <ScrollCircle image={whiteCircle}/>
        </ArrowSpinnerContainerStyled>
      </FooterContentStyled>
    </HeaderStyled>
  );
};

export default Header;
