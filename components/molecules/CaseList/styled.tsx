import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import Slider from "react-slick";

export const ContentStyled = styled.section`
  display: flex;
  flex-direction: column;  
  overflow: hidden;
`;

export const ListStyled = styled.section``;

export const CaseStyled = styled.article`
  opacity: 0;
  transition: .8s;
  transform: translate3d(0, 200px, 0);

  &.animate {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const SliderStyled = styled(Slider)`
  .slick-track {
    display: flex;
    flex-wrap: nowrap;
  }

  .slick-current {
    margin-top: 0px !important;
    transition: .5s;
  }

  .slick-active:not(.slick-current) {
    @media(max-width: 600px) {
      &:last-child{
      margin: 80px 0 !important;
      transition: .5s;
      }
    }
  }

  .slick-slide {
    width: 464px !important;
    height: 1088px !important;

    &:nth-child(2) {
      margin: 300px 3.2rem 0;

      @media (max-width: 800px) {
        margin-top: 80px;
        transition: .5s;
      }
    }

    &:nth-child(3) {
      margin-top: 600px;

      @media (max-width: 800px) {
        margin-top: 160px;
        transition: .5s;
      }
    }
    
    @media (max-width: 1350px) {
      height: 930px !important;
      width: 415px !important;
    }
    
    @media (max-width: 1155px) {
      height: 880px !important;
    }

    @media (max-width: 800px) {
      width: 248px !important;
      height: 565px !important;
    }

    @media (max-width: 600px) {
      height: 440px !important;
    }

    @media (max-width: 540px) {
      height: 400px !important;
    }
  }
`;

export const CaseNumberStyled = styled.h3`
  font-family: 'Circular Air Pro', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  padding: 0 0 3.2rem 10px;
  border-bottom: 1px solid ${colors.dark_gray};

  @media (max-width: 800px) {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const TitleStyled = styled.h4`
  font-family: 'Neue Machina', sans-serif;
  font-weight: 800;
  font-size: 4rem;
  line-height: 4.8rem;
  padding: 4.4rem 0 2.8rem 0;
`;

export const InfoStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.36rem;
  padding-bottom: 3.2rem;
  width: 345px;

  @media (max-width: 800px) {
    width: 175px;
  }
`;

export const LinkStyled = styled.a`
  cursor: pointer;
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  position: absolute;
  
  &.imageBlock {
    display: block;
  }

  &.imageNone {
    display: none;
  }
`;

export const ButtonContentStyled = styled.section`
  margin-right: 40px;

  @media (max-width: 1366px) {
    margin-right: 0px;
  }
`;