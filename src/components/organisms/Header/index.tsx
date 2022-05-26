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
import Link from "next/link";
import i18next from "i18next";
const Header = () => {
  const {t} = i18next
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
  const [counterLoop, setCounterLoop] = useState(0);
  const [isInitInterval, setIsInitInterval] = useState(false);
  const isTouchActive = useRef(false);
  const [splashPage, setSplashPage] = useState(false);
  const [isFirstTouch, setIsFirstTouch] = useState(false);
  const interval = useRef(null);
  let currentImage = '';
  const [actualImage, setActualImage] = useState('');
  const [whiteCircle, setWhiteCircle] = useState(false);
  let currentText = '';
  const [actualText, setActualText] = useState('CODE');
  const [viewHeight, setViewHeight] = useState(100);

  const animeSplashPage = () => {
    const target = document.querySelectorAll<HTMLElement>('.anime');
    target.forEach((element) => {
      element.classList.add('animate');
    });
    if (window.innerWidth < 500 || window.innerHeight <= 414) {
      document.body.style.overflow = null;
    }
  }

  useEffect(() => {
    const height = window.innerHeight;
    setViewHeight(height);
  })

  useEffect(() => {
    if (window.innerWidth < 500 || window.innerHeight <= 414) {
      document.body.style.overflow = 'hidden';
      const title = document.querySelectorAll<HTMLElement>('.title');
      title.forEach((title) => {
        title.addEventListener('contextmenu', (e) => {e.preventDefault()});
      });
    }
  }, [])

  useEffect(() => {
    function runAnimation() {
      const header = document.querySelector(".header");
      const link = document.querySelectorAll(".link");
      const nav = document.querySelector(".nav");
      const index = currentImage !== '' ? (backgroundList.findIndex(
        (background) => background.image === currentImage) + 1)
        : 0;

      // mobile
      if ((window.innerWidth < 500 || window.innerHeight <= 414) && index === backgroundList.length) {
        setCounterLoop(counterLoop + 1);
        if (isTouchActive.current) {
          currentImage = backgroundList[0].image;
          currentText = backgroundList[0].text;
          setActualImage(currentImage);
          setActualText(currentText);
        }
      }

      // desktop
      else if (index === backgroundList.length) {
        currentImage = backgroundList[0].image;
        currentText = backgroundList[0].text;
        setActualImage(currentImage);
        setActualText(currentText);
      }

      else {
        currentImage = backgroundList[index].image;
        setActualImage(currentImage);

        currentText = backgroundList[index].text;
        setActualText(currentText);
      }
      header.classList.add("white");
      nav?.classList.add("white");
      link.forEach((element) => {
        element.classList.add('white');
      });
      setWhiteCircle(true);
    }

    if(isInitInterval) {
      interval.current = setInterval(runAnimation, 200);
    }
  },[isInitInterval])

  const exitInterval = (backgroundList) => {
    
    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    const link = document.querySelectorAll(".link");
    header.classList.remove("white");
    nav?.classList.remove("white");
    link.forEach((element) => {
      element.classList.remove('white');
    });
    setWhiteCircle(false);
    clearInterval(interval.current);
    interval.current = null;
    setActualImage(backgroundList);
    setActualText('CODE');
    document.body.classList.remove("white");
    setCounterLoop(0);
  };

  useEffect(() => {
    if ((window.innerWidth < 500 || window.innerHeight <= 414) && !isTouchActive.current && counterLoop >= 1 && !splashPage) {
      exitInterval(backgroundList);
      animeSplashPage();
      setSplashPage(true);
    }
    else if ((window.innerWidth < 500 || window.innerHeight <= 414) && !isTouchActive.current && counterLoop >= 1 && splashPage) {
      exitInterval(backgroundList);
    }
  }, [isTouchActive.current, counterLoop])

  return (
    <HeaderStyled
      height={viewHeight}
      className='header'
      onTouchStart={() => {
        if (!splashPage && !isFirstTouch) {
          setIsFirstTouch(true);
          isTouchActive.current = true;
          setIsInitInterval(true);
        }
      }}
      onTouchEnd={() => {
        if (!splashPage) {
          setIsInitInterval(false);
          isTouchActive.current = false;
        }
      }}
    >
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
          <TitleStyled className={
            actualText.length > 7 ? 'textWrap title' : 'title'
          } 
            onMouseEnter={() => {
              if (window.innerWidth > 500 && window.innerHeight > 414) {
                setIsInitInterval(true);
              }
            }}
            onTouchStart={() => {
              if (splashPage) {
                isTouchActive.current = true;
                setIsInitInterval(true);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 500 && window.innerHeight > 414) {
                exitInterval(backgroundList);
              }
              setIsInitInterval(false);
            }}
            onTouchEnd={() => {
              if (splashPage) {
                isTouchActive.current = false;
                setIsInitInterval(false);
              }
            }}
          >
            {actualText}
          </TitleStyled>

          <TitleComplementStyled className='bannerText'>
          {t('header.weCreate')}
          </TitleComplementStyled>
        </MainTextStyled>

        <LanguageStyled className='anime'>
          <LanguageItemStyled className="link">
            <Link href='/pt' locale='pt' scroll={false}>PT</Link>
          </LanguageItemStyled>
          <LanguageItemStyled className="link">
          <Link href='/en' locale='en' scroll={false}>EN</Link>
          </LanguageItemStyled>
        </LanguageStyled>
      </MainContentStyled>

      <FooterContentStyled>
        <SocialMediaStyled className='anime'>
          <SocialMediaTitleStyled>{t('header.followUs')}</SocialMediaTitleStyled>
          <SocialMediaItemStyled className="link" href="https://www.linkedin.com/company/l2code-dev/" target="_blank">In</SocialMediaItemStyled>
          <SocialMediaItemStyled className="link" href="https://www.instagram.com/l2code.com.br/" target="_blank">IG</SocialMediaItemStyled>
        </SocialMediaStyled>

        <ArrowSpinnerContainerStyled className='anime'>
        <ScrollCircle isWhiteImage={whiteCircle} 
        blackImage={`${t('images.spinner')}`} 
        whiteImage={`${t('images.whiteSpinner')}`} 
        alt={`${t('images.alt.thereIsMore')}`}/>
        </ArrowSpinnerContainerStyled>
      </FooterContentStyled>
    </HeaderStyled>
  );
};

export default Header;
