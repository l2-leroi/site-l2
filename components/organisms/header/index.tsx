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
  LanguageItemSyled,
  SocialMediaTitleStyled,
  SocialMediaItemStyled,
  ImageStyled,
  ArrowSpinnerComponentStyled,
  ImageArrowSpinnerStyled,
} from './styled';

import { useRef, useState } from 'react';

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

  const interval = useRef(null);
  let currentImage = '';
  const [actualImage, setActualImage] = useState('');
  let currentText = '';
  const [actualText, setActualText] = useState('CODE');

  const initInterval = (backgroundList) => {
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
    }, 150);
  };

  const exitInterval = (backgroundList) => {
    const header = document.querySelector(".header");
    header.classList.remove("white");
    clearInterval(interval.current);
    interval.current = null;
    setActualImage(backgroundList);
    setActualText('CODE');
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
            onMouseEnter={() => {
              initInterval(backgroundList);
            }}
            onMouseLeave={() => {
              exitInterval(backgroundList);
            }}
          >
            {actualText}
          </TitleStyled>
          

          <TitleComplementStyled>
            Criamos produtos digitais e experiências online que as pessoas
            adoram
          </TitleComplementStyled>
        </MainTextStyled>

        <LanguageStyled>
          <LanguageItemSyled>PT</LanguageItemSyled>
          <LanguageItemSyled>EN</LanguageItemSyled>
        </LanguageStyled>
      </MainContentStyled>

      <FooterContentStyled>
        <SocialMediaStyled>
          <SocialMediaTitleStyled>Siga-nos</SocialMediaTitleStyled>
          <SocialMediaItemStyled>In</SocialMediaItemStyled>
          <SocialMediaItemStyled>Fb</SocialMediaItemStyled>
          <SocialMediaItemStyled>Tw</SocialMediaItemStyled>
        </SocialMediaStyled>

        <ArrowSpinnerContainerStyled>
          <ArrowSpinnerComponentStyled>
            <ImageArrowSpinnerStyled src='./images/Arrow-Spinner.png' alt="Tem mais coisa aqui em baixo" className='absolute'/>
            <ImageArrowSpinnerStyled src='./images/Arrow.png' alt="Seta" />
          </ArrowSpinnerComponentStyled>
        </ArrowSpinnerContainerStyled>
      </FooterContentStyled>
    </HeaderStyled>
  );
};

export default Header;
