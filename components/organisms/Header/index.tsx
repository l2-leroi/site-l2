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

  const initInterval = (backgroundList) => {
    if(!isBannerAnimating){
      setStartTouch(new Date());
      setIsBannerAnimating(true);
      interval.current = null;
      const header = document.querySelector(".header");
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
        setWhiteCircle(true);
      }, 150);
    }
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
    setIsBannerAnimating(false);
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
          <SubtitleStyled>Love to</SubtitleStyled>
          <TitleStyled
            onTouchStart={(e)=>{
              interval.current = null;
              initInterval(backgroundList);
            }}

            onMouseEnter={(e)=>{
              interval.current = null;
              initInterval(backgroundList);
            }}

            onMouseLeave={(e)=>{
              exitInterval(backgroundList);
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
            <ScrollCircle isWhiteImage={whiteCircle} blackImage={"./images/Arrow-Spinner.png"} whiteImage={"./images/Arrow-Spinner-White.png"} alt={"Tem mais coisa aqui em baixo"}/>
        </ArrowSpinnerContainerStyled>
      </FooterContentStyled>
    </HeaderStyled>
  );
};

export default Header;
