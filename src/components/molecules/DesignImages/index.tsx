import {
  ContentStyled, ImageStyled,
} from './styled';
import { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface DesignImage {
  image: string;
  alt: string;
}

interface DesignImagesProps {
  imagesArray: DesignImage[];
  widthImage: number;
  heightImage: number;
}

export default function DesignImages({
  imagesArray, widthImage, heightImage
}: DesignImagesProps) {

  return (
    <ContentStyled>
        {imagesArray.map((images) =>(
          <ImageStyled src={images.image} alt={images.alt} widthImage={widthImage} heightImage={heightImage}  />)
        )}
    </ContentStyled>
  );
};

