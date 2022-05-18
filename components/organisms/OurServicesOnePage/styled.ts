import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionOnePageStyled = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  padding: 0px 152px;

  background-color: ${colors.gray};

  @media (max-width: 1366px) {
    padding: 0px 12px;
  }
`;

export const ScrollArrow = styled.div`
  position: absolute;
  right: 148px;
  bottom: -70px;

  @media (min-width: 2560px) {
    right: 703px;
  }

  @media (max-width: 1365px) {
    right: 70px;
  }

  @media (orientation: landscape) and (max-width: 800px) {
    bottom: -45px;
  }

  @media (orientation: portrait) and (max-width: 800px) {
    bottom: -45px;
    right: 0.5px;
    width: 100%;
  }
`;

export const ContentOnePageStyled = styled.div`
  background: ${colors.black};
  padding: 124px 90px;
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    padding: 40px 16px;
  }
`;

export const DivServicesStyled = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-bottom: 8rem;
  align-items: center;
`;

export const HeadingStyled = styled.h2`
  ::selection {
    background: ${colors.purple};
  }
  max-width: 464px;
  font-family: 'Neue Machina';
  font-weight: 800;
  font-size: 6.4rem;
  line-height: 5.8rem;
  letter-spacing: -0.04em;
  color: ${colors.gray};
  margin: 0;

  @media (max-width: 800px) {
    max-width: 264px;
  }
`;

export const ParagraphServicesStyled = styled.p`
  ::selection {
    background: ${colors.purple};
  }
  max-width: 464px;
  font-family: 'Circular Air Pro';
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.4rem;
  letter-spacing: -0.04em;
  color: ${colors.gray};
  padding-top: 24px;
  margin: 0;

  @media (max-width: 800px) {
    width: 160px;
    padding-top: 20px;
  }
`;

export const DivServiceItemsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  justify-content: space-between;
  max-width: 1018px;
  margin: 0 auto;

  @media (max-width: 800px) {
    max-width: 1018px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const DivItemStyled = styled.div`
  max-width: 340px;

  @media (max-width: 800px) {
    max-width: 270px;
    min-width: 270px;
  }

  @media (max-width: 700px) {
    max-width: 300px;
  }

  @media (max-width: 600px) {
    max-width: 160px;
    min-width: 260px;
  }

  @media (max-width: 576px) {
    max-width: 384px;
    min-width: 0px;

    &:nth-child(1) {
      order: 1;
    }
    &:nth-child(2) {
      order: 4;
    }
    &:nth-child(3) {
      order: 2;
    }
    &:nth-child(4) {
      order: 3;
    }
    &:nth-child(5) {
      order: 5;
    }
  }
`;

export const HeadingItemStyled = styled.h3`
  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }
  font-family: 'Neue Machina';
  font-weight: 800;
  font-size: 4rem;
  line-height: 4.8rem;
  letter-spacing: -0.02em;
  color: ${colors.gray};
  padding-bottom: 24px;
  margin: 0;

  @media (max-width: 800px) {
    padding-bottom: 16px;
  }

  @media (max-width: 800px) {
    padding-bottom: 16px;
  }
`;

export const ParagraphItemStyled = styled.p`
  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }
  font-family: 'Circular Air Pro';
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.4rem;
  letter-spacing: -0.04em;
  color: ${colors.dark_gray};
  margin-top: 0;
  margin-bottom: 8rem;

   @media (max-width: 800px) {
    max-width: 230px;

    &.last-paragraph{
      max-width: 144px;
    }
  }

  @media (max-width: 600px) {
    max-width: 180px;

    &.last-paragraph{
      max-width: 180px;
    }
  }

  @media (max-width: 576px) {
    max-width: 300px;

    &.last-paragraph{
      max-width: 300px;
    }
  }
`;

export const ImageStyled = styled.img`
  @media (max-width: 800px) {
    max-width: 164px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;
