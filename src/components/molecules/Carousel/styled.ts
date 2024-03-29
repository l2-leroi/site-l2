import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const DivStyled = styled.div`
  overflow: hidden;
  display: flex; //
  justify-content: flex-end; //

  @media (max-width: 800px) {
    width: 100%;
    padding-left: 0;
  }

  .slick-slider {
    width: 85vw;
  }

  .first-card {
    visibility: hidden;
    opacity: 0;
    // transition: visibility 0s 1s, opacity 1s linear;
  }

  .card-fade {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 1s, opacity 1s linear;
  }

  .slick-slide {
    width: 457px !important;
    @media (max-width: 800px) {
      width: 220.5px !important;
    }
  }

  .slick-track {
    width: max-content !important;
    infinite: true !important; //
    transition: fade 400ms ease 1s !important;
  }

  // último card
  .slick-slide[aria-hidden='true'] + .slick-cloned[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 1s, opacity 1s linear !important;
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
  right: -75px;
  background-image: url('/images/white-arrow-right.png') !important;
  background-position: 3.5rem !important;
  background-repeat: no-repeat !important;

  @media (max-width: 800px) {
    right: -37.5px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const FadeOutDiv = styled.div`
  height: 25.1rem;
  width: 60rem;
  position: absolute;
  z-index: 2;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    270deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(242, 243, 244, 0) 0%,
    rgba(242, 243, 244, 0.8068977591036415) 33%,
    rgba(242, 243, 244, 0.9077380952380952) 60%,
    rgba(242, 243, 244, 1) 86%
  );
`;

export const ArrowLeftStyled = styled.div`
  display: none !important;
`;
