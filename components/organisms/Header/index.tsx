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
import React, { useEffect, useRef, useState } from 'react';
import ScrollCircle from '../../atoms/ScrollCircle/index';

const Header = () => {
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
  const [counterLoop, setCounterLoop] = useState(0);
  const [isTouchActive, setIsTouchActive] = useState(false);
  const [counterOnInit, setCounterOnInit] = useState(0);
  const interval = useRef(null);
  let currentImage = '';
  const [actualImage, setActualImage] = useState('');
  const [whiteCircle, setWhiteCircle] = useState(false);
  let currentText = '';
  const [actualText, setActualText] = useState('CODE');

  const animeSplashPage = () => {
    const target = document.querySelectorAll<HTMLElement>('.anime');
    console.log(target);
    target.forEach((element) => {
      element.classList.add('animate');
    });
  }

  useEffect(() => {
    if(window.innerWidth < 500) {
      window.addEventListener('touchmove', () => {
        initInterval(backgroundList);
      });
    }
  }, []);

  const initInterval = (backgroundList) => {
    setIsBannerAnimating(true);
    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    interval.current = setInterval(() => {
      const index = currentImage != '' ? backgroundList.findIndex(
        (background) => background.image === currentImage,
      )
        : -1;
        console.log(index);
      if (index === backgroundList.length - 1) {
        setCounterLoop(counterLoop + 1);
        currentImage = backgroundList[0].image;
        currentText = backgroundList[0].text;
        setActualImage(currentImage);
        setActualText(currentText);
      } else {
        currentImage = backgroundList[index+1].image;
        setActualImage(currentImage);
        console.log(actualImage);

        currentText = backgroundList[index+1].text;
        setActualText(currentText);
        console.log(actualText);
      }
      header.classList.add("white");
      nav?.classList.add("white");
      setWhiteCircle(true);
    }, 150);
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
    setCounterLoop(0);
  };

  useEffect(() => {
    if(window.innerWidth < 500 && !isTouchActive && counterLoop > counterOnInit){
      exitInterval(backgroundList);
      animeSplashPage();
    }
  }, [counterLoop])

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
          <SubtitleStyled>Love to</SubtitleStyled>
          <TitleStyled
            onMouseEnter={() => {
              if(window.innerWidth > 500) {
                initInterval(backgroundList);
              }    
            }}
            onTouchStart={() => {
              setIsTouchActive(true);
              setCounterOnInit(counterLoop);
              initInterval(backgroundList);
            }}
            onMouseLeave={() => {
              if(window.innerWidth > 500) {
                exitInterval(backgroundList);
              }
            }}
            onTouchEnd={() => {
              if(counterLoop >= 1) {
                exitInterval(backgroundList);
                animeSplashPage();
              }
              setIsTouchActive(false);
            }}
          >
            {actualText}
          </TitleStyled>

          <TitleComplementStyled className='bannerText'>
            Criamos produtos digitais e experiências online que as pessoas
            adoram
          </TitleComplementStyled>
        </MainTextStyled>

        <LanguageStyled className='anime'>
          <LanguageItemStyled>PT</LanguageItemStyled>
          <LanguageItemStyled>EN</LanguageItemStyled>
        </LanguageStyled>
      </MainContentStyled>

      <FooterContentStyled>
        <SocialMediaStyled className='anime'>
          <SocialMediaTitleStyled>Siga-nos</SocialMediaTitleStyled>
          <SocialMediaItemStyled>In</SocialMediaItemStyled>
          <SocialMediaItemStyled>IG</SocialMediaItemStyled>
        </SocialMediaStyled>

        <ArrowSpinnerContainerStyled className='anime'>
            <ScrollCircle image={whiteCircle}/>
        </ArrowSpinnerContainerStyled>
      </FooterContentStyled>
    </HeaderStyled>
  );
};

export default Header;
