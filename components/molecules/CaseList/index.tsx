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
  GhostStyled,
} from './styled';
import { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const interval = useRef(null);
  var currentImage = '';
  const [actualImage, setActualImage] = useState('');

  // anime slider
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: false,
    speed: 400,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
        }
      },
    ]
  };

  // anime scroll 
  useEffect(() => {
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
      window.addEventListener('scroll', () => {
        animeScroll();
      });
    }
  }, []);

  useEffect(() => {
    if(window.innerWidth < 500) {
      const images = document.querySelectorAll<HTMLElement>('.images');
      images.forEach((img) => {
        img.addEventListener('contextmenu', (e) => {e.preventDefault()});
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

  return (
    <ContentStyled>
      <ListStyled>
        <SliderStyled {...settings}>
          {
            props.cases.map((itemCase) => (
              <CaseStyled key={itemCase.title} data-anime="animate">
                <CaseNumberStyled>Case {itemCase.number}</CaseNumberStyled>
                <TitleStyled>{itemCase.title}</TitleStyled>
                <InfoStyled>{itemCase.info}</InfoStyled>
                <LinkStyled
                  onMouseEnter={() => {
                    if(window.innerWidth > 500) {
                      initInterval(itemCase.hover);
                    }
                  }}
                  onMouseLeave={() => {
                    if(window.innerWidth > 500) {
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
                  <ImageStyled className="images"
                    src={itemCase.image}
                    alt={itemCase.alt}
                  />
                  {
                    itemCase.hover.map((imageHover => (
                      <ImageStyled key={imageHover}
                        src={imageHover}
                        alt={itemCase.alt}
                        className={
                          ((actualImage == imageHover) ? "imageBlock" : "imageNone")
                        }
                      />
                    )))
                  }
                </LinkStyled>
              </CaseStyled>
            ))
          }
          <GhostStyled></GhostStyled>
        </SliderStyled>
      </ListStyled>
    </ContentStyled>
  );
}

export default CaseList;
