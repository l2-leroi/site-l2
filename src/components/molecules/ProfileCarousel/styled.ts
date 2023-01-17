import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Card = styled.img``;

export const DivStyled = styled.div`
  overflow: hidden;
  --calc-width: calc(70vw - (50vw - (232px + 30vw)));
  width: var(--calc-width);

  @media (max-width: 800px) {
    padding-left: 0; //
    --calc-width: calc(70vw - (50vw - (84px + 30vw)));
    width: var(--calc-width);
  }
  .card-fade {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 1s, opacity 1s linear;
  }
  .slick-slide {
    // width: auto !important;
  }
  .slick-track {
    width: max-content !important;
  }
`;

export const ArrowRightStyled = styled.div`
  width: 12rem;
  height: 12rem;
  background-color: ${colors.black} !important;
  border-radius: 50% 0 0 50%;
  position: absolute !important;

  ::before {
    display: none !important;
  }
  right: -65px;
  background-image: url('/images/white-arrow-right.png') !important;
  background-position: 3.5rem !important;
  background-repeat: no-repeat !important;
  @media (max-width: 800px) {
    right: -25px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const ArrowLeftStyled = styled.div`
  display: none !important;
`;
