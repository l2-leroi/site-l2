import { useEffect, useMemo, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useWindowSize } from 'use-hooks';
import i18next from 'i18next';
import {
  CaseNumberStyled,
  CaseStyled,
  ContentStyled,
  ListStyled,
  InfoStyled,
  LinkStyled,
  TitleStyled,
  ImageStyled,
  SliderStyled,
  GridStyled,
} from './styled';

interface Case {
  number: string;
  title: string;
  info: string;
  image: string;
  alt: string;
  link: string;
  hover: string[];
}

interface CaseProps {
  cases: Case[];
}

function CaseList(props: CaseProps) {
  const language = i18next.language.substring(0, 2);
  const interval = useRef(null);
  let currentImage = '';
  const [actualImage, setActualImage] = useState('');
  const { width } = useWindowSize();
  const isMobile = useMemo(() => {
    return width <= 800;
  }, [width]);

  // anime slider
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: false,
    speed: 400,
    variableWidth: true,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          rows: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };

  // anime scroll
  const animateSlides = () => {
    const target = document.querySelectorAll<HTMLElement>('[data-anime]');
    function animeScroll() {
      const windowTop = window.pageYOffset + window.innerHeight * 0.7;
      target.forEach((element) => {
        const position = element.getBoundingClientRect();
        const positionAbsolute = position.top + window.scrollY;
        if (windowTop > positionAbsolute) {
          element.classList.add('animate');
        }
      });
    }

    animeScroll();
    if (target.length) {
      window.addEventListener('scroll', animeScroll);
    }
    return () => {
      window.removeEventListener('scroll', animeScroll);
    };
  };

  useEffect(animateSlides, [isMobile]);

  useEffect(() => {
    if (window.innerWidth < 500) {
      const images = document.querySelectorAll<HTMLElement>('.images');
      images.forEach((img) => {
        img.addEventListener('contextmenu', (e) => {
          e.preventDefault();
        });
      });
    }
  });

  // anime hover
  const initInterval = (images: string[]) => {
    interval.current = setInterval(() => {
      const index = currentImage != '' ? images.indexOf(currentImage) : 0;
      if (index == images.length - 1) {
        currentImage = images[0];
        setActualImage(currentImage);
      } else {
        currentImage = images[index + 1];
        setActualImage(currentImage);
      }
    }, 200);
  };

  const cancelInterval = (image: string) => {
    clearInterval(interval.current);
    interval.current = null;
    setActualImage(image);
  };

  const cases = props.cases.map((itemCase) => (
    <CaseStyled key={itemCase.title} data-anime="animate">
      <CaseNumberStyled>Case {itemCase.number}</CaseNumberStyled>
      <TitleStyled>{itemCase.title}</TitleStyled>
      <InfoStyled>{itemCase.info}</InfoStyled>
      <LinkStyled
        href={`/${language + itemCase.link}`}
        className="images"
        onMouseEnter={() => {
          if (window.innerWidth > 800) {
            initInterval(itemCase.hover);
          }
        }}
        onMouseLeave={() => {
          if (window.innerWidth > 800) {
            cancelInterval(itemCase.image);
          }
        }}
        onTouchStart={() => {
          initInterval(itemCase.hover);
        }}
        onTouchEnd={() => {
          cancelInterval(itemCase.image);
        }}
      >
        <ImageStyled
          src={itemCase.image}
          alt={itemCase.alt}
          className={
            itemCase.hover.find((imageHover) => actualImage == imageHover)
              ? 'images imageNone'
              : 'images imageBlock'
          }
        />
        {itemCase.hover.map((imageHover) => (
          <ImageStyled
            key={imageHover}
            src={imageHover}
            alt={itemCase.alt}
            className={
              actualImage == imageHover
                ? 'images imageBlock'
                : 'images imageNone'
            }
          />
        ))}
      </LinkStyled>
    </CaseStyled>
  ));

  const splicedCases = () => {
    const aux_case = [];
    const size = Math.ceil(Object.keys(props.cases).length / 3);
    for (let j = 0; j < size; j++) {
      aux_case.push(
        <GridStyled>
          <ListStyled>
            <SliderStyled {...settings}>{cases.splice(0, 3)}</SliderStyled>
          </ListStyled>
        </GridStyled>,
      );
    }
    return aux_case;
  };

  return (
    <ContentStyled onTouchEnd={animateSlides}>
      {isMobile ? (
        <SliderStyled {...settings}>{cases}</SliderStyled>
      ) : (
        splicedCases()
      )}
    </ContentStyled>
  );
}

export default CaseList;
