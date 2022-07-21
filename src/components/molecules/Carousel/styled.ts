import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const DivStyled = styled.div`
  overflow: hidden;
  //width: 100%;
  width: 80%;
  //margin-left: 4rem;
  // position: absolute;
  //max-width: 95%;

  @media (max-width: 800px) {
    width: 100%;
  }
  .card-fade {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 1s, opacity 1s linear;
  }
  .slick-slide {
    width: auto !important;
    // width: auto;
  }
  .slick-track {
    //height: 0px;
    width: max-content !important;
  }
`;

export const ArrowRightStyled = styled.div`
  width: 13rem;
  height: 13rem;
  background-color: ${colors.black} !important;
  border-radius: 50% 0 0 50%;
  position: absolute !important;
  ::before {
    display: none !important;
  }
  right: -65px;
  // right: -10rem;
  background-image: url('/images/white-arrow-right.png') !important;
  background-position: 3.5rem !important;
  background-repeat: no-repeat !important;
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
