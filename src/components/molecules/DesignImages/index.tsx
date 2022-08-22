import { useEffect, useMemo, useState } from 'react';
import { useWindowSize } from 'use-hooks';
import {
  ContentStyled,
  ExitButtonImg,
  ExitButtonStyled,
  ImageStyled,
  LeftButtonStyled,
  MobileImageStyled,
  RightButtonStyled,
  SliderImageStyled,
  SliderStyled,
  StyledGallery,
  StyledMobileContent,
  StyledModal,
  StyledModalContent,
} from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface DesignImage {
  image: string;
  alt: string;
}

interface DesignImagesProps {
  imagesArray: DesignImage[];
  widthImage: number;
  heightImage: number;
  prototypeType: string;
}

export default function DesignImages({
  imagesArray,
  prototypeType,
}: DesignImagesProps) {
  const [indexShown, indexsetShown] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [galleryIsOpen, setGalleryIsOpen] = useState(true);
  const [sliderIsOpen, setSliderIsOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = useMemo(() => {
    return width <= 800;
  }, [width]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <RightButtonStyled />,
    prevArrow: <LeftButtonStyled />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    if (window.innerWidth < 800) {
      setGalleryIsOpen(false);
      setSliderIsOpen(true);
    } else {
      setGalleryIsOpen(true);
      setSliderIsOpen(false);
    }
  }, [isMobile]);

  function openModal(index) {
    indexsetShown(index);
    document.body.style.overflowY = 'hidden';
    setModalIsOpen(true);
  }

  function closeModal() {
    const modal = document.getElementById('modal-proposta');
    if (typeof modal === 'undefined' || modal === null) return;
    document.body.style.overflowY = 'scroll';
    setModalIsOpen(false);
  }

  window.onclick = (event) => {
    const modal = document.getElementById('modal-proposta');
    if (typeof modal === 'undefined' || modal === null) return;
    if (event.target === modal) {
      document.body.style.overflowY = 'scroll';
      setModalIsOpen(false);
    }
  };

  return (
    <ContentStyled id="content">
      {galleryIsOpen && (
        <StyledGallery id="galleryStyled">
          {imagesArray.map((images, index) => (
            <ImageStyled
              className={prototypeType}
              onClick={() => openModal(index)}
              src={images.image}
              alt={images.alt}
            />
          ))}
        </StyledGallery>
      )}

      {sliderIsOpen && (
        <StyledMobileContent className={prototypeType}>
          <SliderStyled {...{ ...settings, initialSlide: indexShown }}>
            {imagesArray.map((images) => (
              <MobileImageStyled src={images.image} />
            ))}
          </SliderStyled>
        </StyledMobileContent>
      )}

      {modalIsOpen && (
        <StyledModal id="modal-proposta" className="modal">
          <ExitButtonStyled type="submit" onClick={() => closeModal()}>
            <ExitButtonImg src="/images/exit.svg" />
          </ExitButtonStyled>
          <StyledModalContent className={prototypeType}>
            <SliderStyled {...{ ...settings, initialSlide: indexShown }}>
              {imagesArray.map((images) => (
                <SliderImageStyled src={images.image} />
              ))}
            </SliderStyled>
          </StyledModalContent>
        </StyledModal>
      )}
    </ContentStyled>
  );
}
