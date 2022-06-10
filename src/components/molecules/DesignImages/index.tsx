import {
  ContentStyled, ImageStyled,
} from './styled';
import { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DesignImages() {

  const images = [
    {
      image: "../images/DesignMemoriesUp/RectangleCaseMemoriesUp-1.jpg",
      alt: "Mockup"
    },
    { 
      image: "../images/DesignMemoriesUp/RectangleCaseMemoriesUp-2.jpg", 
      alt: "Mockup"
    },
    {
      image: "../images/DesignMemoriesUp/RectangleCaseMemoriesUp-3.jpg",
      alt: "Mockup" 
    },
    {
      image: "../images/DesignMemoriesUp/RectangleCaseMemoriesUp-4.jpg",
      alt: "Mockup"
    },
    {
      image: "../images/DesignMemoriesUp/RectangleCaseMemoriesUp-5.jpg", 
      alt: "Mockup"
    },
    { 
      image: "../images/DesignMemoriesUp/RectangleCaseMemoriesUp-6.jpg", 
      alt: "Mockup"
    },
    {
      image: "../images/DesignMemoriesUp/RectangleCaseMemoriesUp-7.jpg", 
      alt: "Mockup"
    },
    {  
      image: "../images/DesignMemoriesUp/RectangleCaseMemoriesUp-8.jpg",
      alt: "Mockup"
    }
  ];

  return (
    <ContentStyled>
        {images.map((images) => (
          <ImageStyled src={images.image} alt={images.alt} />)
        )}
    </ContentStyled>
  );
};
export default DesignImages;
