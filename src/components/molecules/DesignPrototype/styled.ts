import styled from 'styled-components';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { colors } from '../../../styles/colors';
import { device } from '../../../styles/medias';

interface DesignPrototypeImage {
  widthImage: number;
  heightImage: number;
}

export const ContentStyled = styled.section`
  display: flex;
  justify-content: center;
  // margin-bottom: 140px;
  @media (max-width: 360px) {
    margin-bottom: 160px;
  }

  &.center {
    margin-top: 25vh;
    // position: fixed;
    // top: 25vh;
  }

  scroll-behavior: smooth;
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

export const SliderStyled = styled(Slider)`
  .slick-track {
    display: flex;
    flex-wrap: nowrap;
    user-select: text;

    @media (max-width: 600px) {
      height: 740px;
    }

    @media (max-width: 550px) {
      height: 700px;
    }

    @media (max-width: 500px) {
      height: 665px;
    }

    @media (max-width: 430px) {
      height: 610px;
    }

    @media (max-width: 390px) {
      height: 590px;
    }
  }

  @media (max-width: 800px) {
    .slick-current {
      margin-top: 0px;
    }

    .slick-active.slick-current + div {
      margin-top: 80px;
    }

    .slick-active + div {
      margin-top: 160px;
    }
  }

  .slick-slide {
    width: 464px;
    margin-top: 0px;
    margin: 0 1.6rem;
    transition: 0.5s;

    @media (min-width: 801px) {
      &:nth-child(2) {
        margin-top: 300px;
      }
      &:nth-child(3) {
        margin-top: 600px;
      }
    }

    &:first-of-type {
      margin-left: 0px;
    }

    &:last-of-type {
      width: 100px;
      margin: 0px;

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

export const ImageStyledPrototype = styled(motion.img)`
  width: 100%;
  height: auto;
  scroll-snap-align: start;
`;

export const ContentStyledPrototype = styled.div<DesignPrototypeImage>`
  &.mobile {
    width: 60vw;
    --calc-height: calc(
      (
          (60vw * ${(props) => props.heightImage}) /
            ${(props) => props.widthImage}
        ) - 24px
    );
    height: var(--calc-height);

    @media ${device.xs} {
      width: 40vw;
      --calc-height: calc(
        (
            (40vw * ${(props) => props.heightImage}) /
              ${(props) => props.widthImage}
          ) - 24px
      );
    }

    @media${device.sm} {
      width: 40vw;
      --calc-height: calc(
        (
            (40vw * ${(props) => props.heightImage}) /
              ${(props) => props.widthImage}
          ) - 24px
      );
    }

    @media${device.md} {
      width: 40vw;
      --calc-height: calc(
        (
            (40vw * ${(props) => props.heightImage}) /
              ${(props) => props.widthImage}
          ) - 24px
      );
    }

    @media${device.lg} {
      width: 19vw;
      --calc-height: calc(
        (
            (19vw * ${(props) => props.heightImage}) /
              ${(props) => props.widthImage}
          ) - 24px
      );
    }

    @media${device.xl} {
      width: 20vw;
      --calc-height: calc(
        (
            (20vw * ${(props) => props.heightImage}) /
              ${(props) => props.widthImage}
          ) - 24px
      );
    }
  }

  &.desktop {
    width: 100vw;
    --calc-height: calc(
      (100vw * ${(props) => props.heightImage}) / ${(props) => props.widthImage}
    );
    height: var(--calc-height);

    @media${device.xs} {
      width: 75vw;
      --calc-height: calc(
        (75vw * ${(props) => props.heightImage}) /
          ${(props) => props.widthImage}
      );
    }

    @media${device.lg} {
      width: 60vw;
      --calc-height: calc(
        (60vw * ${(props) => props.heightImage}) /
          ${(props) => props.widthImage}
      );
    }
  }

  overflow: hidden;
  position: sticky;
  display: flex;
  top: calc(((100vh - var(--calc-height)) / 2) + (94.7812px / 2));
  border: 12px;
  border-style: solid;
  border-color: #000000;
  border-radius: 24px;
  flex-direction: column;
`;
export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 2s;

  &.transformImageNone {
    img:nth-child(2) {
      display: none;
    }
    img:nth-child(3) {
      display: none;
    }
  }
  &.transformAllImageNone {
    transition: transform 0s;
    transform: scaleY(0);
  }

  &.transformImage {
    // width: 40px;
    transform: scaleY(0);
  }
`;
