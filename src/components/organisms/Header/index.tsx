import {
  HeaderStyled,
  MainContentStyled,
  FooterContentStyled,
  MainTextStyled,
  LanguageStyled,
  SocialMediaStyled,
  ArrowSpinnerContainerStyled,
  SocialMediaLinkStyled,
  ImageStyled
} from "./styled";
import React, { useEffect, useRef, useState } from 'react';
import ScrollCircle from '../../atoms/ScrollCircle/index';
import Link from "next/link";
import i18next from "i18next";
import { Typography } from "../../../styles/typography";

const Header = () => {
  const { t } = i18next
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
    if (window.innerWidth < 500 || window.innerHeight <= 414) {
      document.body.style.overflow = 'hidden';
      const title = document.querySelectorAll<HTMLElement>('.title');
      title.forEach((title) => {
        title.addEventListener('contextmenu', (e) => { e.preventDefault() });
      });
    }
  }, [])

  useEffect(() => {
    function runAnimation() {
      const header = document.querySelector(".header");
      const nav = document.querySelector(".nav");
      const typography = document.querySelectorAll(".typography");
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
      typography.forEach((element) => {
        element.classList.add('white');
      });
      header.classList.add("white");
      nav?.classList.add("white");
      setWhiteCircle(true);
    }

    if (isInitInterval) {
      interval.current = setInterval(runAnimation, 200);
    }
  }, [isInitInterval])

  const exitInterval = (backgroundList) => {

    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    const typography= document.querySelectorAll(".typography");
    header.classList.remove("white");
    nav?.classList.remove("white");

    typography.forEach((element) => {
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

      <MainContentStyled >
        <MainTextStyled>

          <Typography className="typography" tag="h2" size="small" lineHeight="line120" fontWeight="weight3" fontFamily="font1" letterSpacing="space1">Love to</Typography>

          <Typography tag='h1' fontFamily='font1' fontWeight="weight3" size="xxlarge" lineHeight="line100"
            className={
              actualText.length > 7 ? 'textWrap typography title' : ' typography title'
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
          </Typography>
          <Typography className='bannerText typography' tag={"p"} >{t('header.weCreate')}</Typography>
        </MainTextStyled>

        <LanguageStyled className='anime'>
          <Typography tag='button' size="xxsmall"  letterSpacing="space1" className="typography">
            <Link href='/pt' locale='pt' scroll={false}>PT</Link>
          </Typography>
          <Typography tag='button' size="xxsmall"  letterSpacing="space1" className="typography">
            <Link href='/en' locale='en' scroll={false}>EN</Link>
          </Typography>
        </LanguageStyled>
      </MainContentStyled>

      <FooterContentStyled>
        <SocialMediaStyled className='anime'>

          <Typography className="typography" tag='span' size="xxsmall" letterSpacing="space1" >
            {t('header.followUs')}
          </Typography>

          <SocialMediaLinkStyled  href="https://www.linkedin.com/company/l2code-dev/" target="_blank">

            <Typography className="typography" tag='button' fontWeight="weight2" size="xxsmall" letterSpacing="space1">In
            </Typography>

          </SocialMediaLinkStyled>

          <SocialMediaLinkStyled  href="https://www.instagram.com/l2code.com.br/" target="_blank">

            <Typography className="typography" tag='button' fontWeight="weight2" size="xxsmall" letterSpacing="space1">IG
            </Typography>

          </SocialMediaLinkStyled>

        </SocialMediaStyled>

        <ArrowSpinnerContainerStyled className='anime'>
          <ScrollCircle isWhiteImage={whiteCircle}
            blackImage={`${t('images.spinner')}`}
            whiteImage={`${t('images.whiteSpinner')}`}
            alt={`${t('images.alt.thereIsMore')}`} />
        </ArrowSpinnerContainerStyled>
      </FooterContentStyled>
    </HeaderStyled>
  );
};

export default Header;
