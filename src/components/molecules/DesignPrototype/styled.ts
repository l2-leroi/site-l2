import styled from 'styled-components';
import Slider from 'react-slick';
import { colors } from '../../../styles/colors';

interface imagesPrototype {
  image: string;
  alt: string;
}
interface DesignPrototypePropsMockup {
  width: number;
  height: number;
}
interface DesignPrototypeImage {
  imagesPrototype: imagesPrototype;
}

export const ContentStyled = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 140px;
  @media (max-width: 360px) {
    padding-bottom: 160px;
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

export const ImageStyled = styled.img<DesignPrototypePropsMockup>`
  max-width: ${(props) => props.width}px;
  width: 100%;
  height: auto;

  /*@media (max-width: 360px) {
    max-width: 335px;
    max-height: 197px;
  }*/

  &.imageBlock {
    display: block;
  }

  &.imageNone {
    display: none;
  }
`;

export const ImageStyledPrototype = styled.img<DesignPrototypeImage>`
  //max-width: ${(props) => props.width}px;
  height: 100vh;
  // @media (min-width: 801px) {
  //   height: calc(100vh - 94px);
  // }
  scroll-snap-align: start;
  border-radius: 29px;
`;

export const ContentStyledPrototype = styled.div`
  overflow: hidden;
  position: sticky;
  display: flex;
  height: 100vh;
  top: 0px;
  // @media (min-width: 801px) {
  //   top: 94px;
  //   height: calc(100vh - 94px);
  // }
  flex-direction: column;
`;
