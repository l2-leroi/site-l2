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

  const interval = useRef(null);
  let currentImage = '';
  let currentText = '';
  const [actualImage, setActualImage] = useState('');
  const [whiteCircle, setWhiteCircle] = useState(false);
  const [actualText, setActualText] = useState('CODE');
  const [startTouch, setStartTouch] = useState(new Date());
  let isTouch = false;

  const initInterval = (backgroundList) => {
    if(!isBannerAnimating){
      if(isTouch === true){
        setStartTouch(new Date());
      }
      
      setIsBannerAnimating(true);
      const header = document.querySelector(".header");
      const nav = document.querySelector(".nav");

      interval.current = null;
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
        nav.classList.add("white");
        setWhiteCircle(true);
      }, 150);
    }
  };

  const exitInterval = (backgroundList) => {
    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    header.classList.remove("white");
    nav.classList.remove("white");
    setWhiteCircle(false);
    clearInterval(interval.current);
    interval.current = null;
    setActualImage("");
    setActualText('CODE');
    setIsBannerAnimating(false);
    isTouch = false;
  };

  return (
    <HeaderStyled className='header' style={{backgroundImage: `url(${actualImage})`}}>
      <MainContentStyled>
        <MainTextStyled>
          <SubtitleStyled>Love to</SubtitleStyled>
          <TitleStyled
            onTouchStart={(e)=>{
              isTouch = true;
              interval.current = null;
              initInterval(backgroundList);
            }}

            onMouseEnter={(e)=>{
              if(window.innerWidth > 1024){
                interval.current = null;
                initInterval(backgroundList);
              }
            }}

            onMouseLeave={(e)=>{
              if(window.innerWidth > 1024){
                exitInterval(backgroundList);
              }
            }}
            
            onTouchEnd={(event)=>{
              const endTouch = new Date();
              let difference = Math.floor(endTouch.getTime() - startTouch.getTime());
              if(difference < 715){
                  setTimeout(()=>{
                    exitInterval(backgroundList);
                },(750 - difference))
              }else {
                exitInterval(backgroundList);
              }
            }}
          >
            {actualText}
          </TitleStyled>

          <TitleComplementStyled className='bannerText'>
            Criamos produtos digitais e experiências online que as pessoas
            adoram
          </TitleComplementStyled>
        </MainTextStyled>

        <LanguageStyled>
          <LanguageItemStyled>PT</LanguageItemStyled>
          <LanguageItemStyled>EN</LanguageItemStyled>
        </LanguageStyled>
      </MainContentStyled>

      <FooterContentStyled>
        <SocialMediaStyled>
          <SocialMediaTitleStyled>Siga-nos</SocialMediaTitleStyled>
          <SocialMediaItemStyled href="https://www.linkedin.com/company/l2code-dev/" target="_blank">In</SocialMediaItemStyled>
          <SocialMediaItemStyled href="https://www.instagram.com/l2code.com.br/" target="_blank">IG</SocialMediaItemStyled>
        </SocialMediaStyled>

        <ArrowSpinnerContainerStyled>
            <ScrollCircle isWhiteImage={whiteCircle} blackImage={"./images/Arrow-Spinner.svg"} whiteImage={"./images/Arrow-Spinner-White.svg"} alt={"Tem mais coisa aqui em baixo"}/>
        </ArrowSpinnerContainerStyled>
      </FooterContentStyled>
    </HeaderStyled>
  );
};

export default Header;
