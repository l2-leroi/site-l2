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
  height: 1005px;
  opacity: 0;
  transition: .8s;
  transform: translate3d(0, 200px, 0);

  &.animate {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  @media (max-width: 1350px) {
    height: 940px !important;
  }
  
  @media (max-width: 1155px) {
    height: 920px !important;
  }

  @media (max-width: 800px) {
    height: 530px !important;
  }
`;

export const SliderStyled = styled(Slider)`
  .slick-track {
    display: flex;
    flex-wrap: nowrap;

    @media (max-width: 600px) {
      height: 690px !important;
    }

    @media (max-width: 550px) {
      height: 630px !important;
    }

    @media (max-width: 500px) {
      height: 620px !important;
    }

    @media (max-width: 430px) {
      height: 580px !important;
    }

    @media (max-width: 390px) {
      height: 550px !important;
    }
  }

  .slick-current {
    margin-top: 0px;
  }

  .slick-active.slick-current +div {
    margin-top: 80px;
    margin-bottom: 30px;
  }

  .slick-active +div {
    margin-top: 160px;
  }

  .slick-slide {
    margin-top: 0px;
    width: 464px !important;
    margin: 0 1.6rem;
    transition: .5s;

    @media (min-width: 801px) {
      &:nth-child(2) {
        margin-top: 300px !important;
      } 
      &:nth-child(3) {
        margin-top: 600px !important;
      }
    } 

    @media (min-width: 600px) and (max-width: 800px) {
      &:nth-child(2) {
        margin-top: 80px;
      } 
      &:nth-child(3) {
        margin-top: 160px !important;
      }
    } 

    &:first-of-type {
      margin-left: 0px;
    }

    &:last-of-type {
      width: 100px !important;
      margin: 0px;

      @media (min-width: 600px) {
        width: 0px !important;
      }
    }
    
    @media (max-width: 1350px) {
      width: 415px !important;
    }

    @media (max-width: 800px) {
      width: 248px !important;
    }
  }
`;

export const GhostStyled = styled.div``;

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