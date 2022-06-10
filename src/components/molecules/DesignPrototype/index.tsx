import {
  ContentStyled, ImageStyled,
} from './styled';
import { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DesignPrototype() {
  return (
    <ContentStyled>
        <ImageStyled src="../images/mockup-animado-cell.png" alt="Mockup Animado" />
    </ContentStyled>
  );
}
export default DesignPrototype;
