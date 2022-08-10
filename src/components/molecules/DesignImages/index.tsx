import { useEffect, useMemo, useState } from 'react';
import { useWindowSize } from 'use-hooks';
import {
  ContentStyled,
  ExitButtonImg,
  ExitButtonStyled,
  GallerySliderStyled,
  ImageStyled,
  SliderImageStyled,
  SliderStyled,
  StyledGallery,
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
}

export default function DesignImages({ imagesArray }: DesignImagesProps) {
  const [indexShown, indexsetShown] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [galleryIsOpen, setGalleryIsOpen] = useState(true);
  const [sliderIsOpen, setSliderIsOpen] = useState(false);
  // const [width, setWidth] = useState(window.innerWidth);
  const { width } = useWindowSize();
  const isMobile = useMemo(() => {
    return width <= 800;
  }, [width]);

  const gallerySettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    console.log(window.innerWidth);

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

  window.onclick = function (event) {
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
        <StyledGallery>
          {imagesArray.map((images, index) => (
            <ImageStyled
              onClick={() => openModal(index)}
              src={images.image}
              alt={images.alt}
            />
          ))}
        </StyledGallery>
      )}

      {sliderIsOpen && (
        <StyledModalContent>
          <SliderStyled {...{ ...settings, initialSlide: indexShown }}>
            {imagesArray.map((images) => (
              <SliderImageStyled src={images.image} />
            ))}
          </SliderStyled>
        </StyledModalContent>
      )}

      {modalIsOpen && (
        <StyledModal id="modal-proposta" className="modal">
          <ExitButtonStyled
            type="submit"
            onClick={() => closeModal('modal-proposta')}
          >
            <ExitButtonImg src="/images/exit.svg" />
          </ExitButtonStyled>
          <StyledModalContent>
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
