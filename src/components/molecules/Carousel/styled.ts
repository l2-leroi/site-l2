import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const DivStyled = styled.div`
  margin-left: 4rem;
  max-width: 95%;

  @media (min-width: 360px), (max-width: 414px) {
    margin-left: 1%;
    margin-right: 5%;
  }

  .card-fade {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 1s, opacity 1s linear;
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
  right: -10rem;
  background-image: url('/images/white-arrow-right.png') !important;
  background-position: 3.5rem !important;
  background-repeat: no-repeat !important;
  /* @media (min-width: 360px), (max-width: 414px) {
    background-position: 1.5rem !important;
    right: -6rem;
    width: 12rem;
    height: 12rem;
  } */
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
