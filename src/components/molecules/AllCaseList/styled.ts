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
  height: 1010px;
  opacity: 0;
  transition: .8s;
  transform: translate3d(0, 200px, 0);

  &.animate {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  @media (max-width: 1350px) {
    height: 940px;
  }
  
  @media (max-width: 1155px) {
    height: 920px;
  }

  @media (max-width: 800px) {
    height: 530px;
  }
`;

export const SliderStyled = styled(Slider)`
  .slick-track {
    height:2500px;
    display: flex;
    flex-wrap: nowrap;
    user-select: text;
    
    div{
      @media (min-width: 801px) {
        &:nth-child(2) {
          margin-top: 300px;
        } 
        &:nth-child(3) {
          margin-top: 600px;
        }
      } 
    }
    @media (max-width: 600px) {
      height: 1480px;
    }

    @media (max-width: 550px) {
      height: 1400px;
    }

    @media (max-width: 500px) {
      height: 1330px;
    }

    @media (max-width: 430px) {
      height: 1220px;
    }

    @media (max-width: 390px) {
      height: 1180px;
    }
  }

  @media (max-width: 800px) {
    .slick-current {
      margin-top: 0px;
    }

    .slick-active.slick-current +div {
      margin-top: 80px;
    }

    .slick-active +div {
      margin-top: 160px;
    }
  }

  .slick-slide {
    width: 464px;
    margin-top: 0px;
    margin: 0 16px;
    transition: .5s;

    &:first-of-type {
      margin-left: 0px;
    }

    &:last-of-type {
      width: 100px;
      margin: 16px;
      margin-right: 0px;

      @media (min-width: 600px) {
        width: 0px;
      }
    }
    
    @media (max-width: 1350px) {
      width: 415px;
    }

    @media (max-width: 1160px) {
      width: 340px;
    }

    @media (max-width: 800px) {
      width: 248px;
    }
  }
`;

export const GhostStyled = styled.div``;

export const CaseNumberStyled = styled.h3`
  font-family: 'Circular Air Pro', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  letter-spacing: -0.02em;
  padding: 0 0 3.2rem 10px;
  border-bottom: 1px solid ${colors.dark_gray};
  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

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
  letter-spacing: -0.02em;
  padding: 4.4rem 0 2.8rem 0;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  @media (min-width: 800px) and (max-width: 1365px) {
    font-size: 34px;
  }
`;

export const InfoStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.36rem;
  letter-spacing: -0.04em;
  padding-bottom: 3.2rem;
  max-width: 345px;
  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  @media (min-width: 800px) and (max-width: 1365px) {
    font-size: 22px;
  }

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
  user-select: none;

  &.imageBlock {
    display: block;
  }

  &.imageNone {
    display: none;
  }
`;