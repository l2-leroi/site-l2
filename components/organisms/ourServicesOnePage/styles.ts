import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionOnePageStyled = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${colors.strong_gray};
  padding: 120px 152px 10rem;
  @media (max-width: 650px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  @media (max-width: 800px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export const ScrollArrow = styled.div`
  position: absolute;
  right: 148px;
  bottom: -70px;
  @media (max-width: 800px) {
    bottom: -45px;
    right: 0.5px;
    width: 100%;
  }

  @media (min-width: 2560px) {
    right: 703px;
  }
`;

export const ContentOnePageStyled = styled.div`
  background: ${colors.black};
  border-radius: 8px;
  width: 1220px;
  padding: 90px 124px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    padding-bottom: 50px
  }
  @media (max-width: 650px) {
    padding: 40px 16px 0px;
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
  width: 464px;
  font-family: 'Neue Machina';
  font-weight: 800;
  font-size: 6.4rem;
  line-height: 5.8rem;
  letter-spacing: -0.04em;
  color: ${colors.gray};
  margin: 0;
  @media (max-width: 800px) {
    width: 264px;
  }
`;

export const ParagraphServicesStyled = styled.p`
  ::selection {
    background: ${colors.purple};
  }
  width: 464px;
  font-family: 'Circular Air Pro';
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.4rem;
  letter-spacing: -0.04em;
  color: ${colors.gray};
  padding-top: 24px;
  margin: 0;
  @media (max-width: 800px) {
    width: 210px;
  }
  @media (max-width: 650px) {
    width: 160px;
    padding-top: 20px;
  }
`;

export const DivServiceItemsStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const DivItemStyled = styled.div`
  width: 340px;
  @media (max-width: 800px) {
    width: 170px;
  }
  @media (min-width: 750px) and (max-width: 800px) {
    width: 170px;
    &:nth-child(odd) {
      margin-right: 110px;
    }
  }
  @media (max-width: 650px) {
    width: 230px;
    margin-right: 170px;
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
  @media (max-width: 650px) {
    width: 304px;
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
`;

export const ImageStyled = styled.img`
  @media (max-width: 800px) {
    width: 170px;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;
