import styled from 'styled-components';
import Slider from 'react-slick';
import { colors } from '../../../styles/colors';

interface DesignPrototypePropsImages {
  widthImage: number;
  heightImage: number;
}

export const ContentStyled = styled.section`
  // display: flex;
  // overflow: hidden;
  // max-width: 1500px;
  // flex-direction: row;
  // flex-wrap: wrap;
  // justify-content: center;
  // grid-gap: 32px;
  // padding-bottom: 140px;
`;

export const StyledGallery = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 1500px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 32px;
  // padding-bottom: 140px;
`;

export const GallerySliderStyled = styled(Slider)``;

export const SliderStyled = styled(Slider)`
  .slick-arrow {
    background: transparent;
  }
  .slick-list {
    background: transparent;
    heigth: 100px;
  }

  .slick-next {
    heigth: 80px;
  }

  .slick-prev:before,
  .slick-next:before {
    background: pink;
    opacity: 1;
    border-radius: 100%;
  }
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 30;
`;

export const StyledModalContent = styled.div`
  margin: auto;
  // margin-top: 10vh;
  width: 250px;
  height: auto;
  // min-height: 300px;
  // max-width: 600px;
  // background-color: #eee;
  // padding: 16px;
  // box-shadow: 0 0 2px #fff;
`;
export const ExitButtonImg = styled.img``;
export const ExitButtonStyled = styled.button`
  border: 0;
  background: transparent;
  padding: 25px 28px;
  display: flex;
  justify-content: end;
`;

export const SliderImageStyled = styled.img`
  //  width: 60px;
`;

export const ImageStyled = styled.img`
  width: 20%;
  user-select: none;

  &.imageBlock {
    display: block;
  }

  &.imageNone {
    display: none;
  }
`;

export const ListStyled = styled.section``;

export const CaseStyled = styled.article`
  height: 1010px;
  opacity: 0;
  transition: 0.8s;
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
