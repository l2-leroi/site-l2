import styled from 'styled-components';

export const FooterStyled = styled.section`
  color: #F2F3F4;
  background-color: #5900CC;
  clip-path: polygon(0 0, 100% 40%, 100% 100%, 0% 100%);
  height: 1156px;
  width: 100%;
  padding: 360.5px 28px 60.5px;
`;

export const ContentStyled = styled.section`
  width: 515px;
  position: relative;
`;

export const AsideStyled = styled.aside`
  position: absolute;
  width: 100%;
  left: 674px;
  top: 95px;
`;

export const ParagraphStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 16px;
  line-height: 22.4px;
  font-weight: 400;
`;

export const TitleStyled = styled.h2`
  font-family: 'Neue Machina', sans-serif;
  font-size: 64px;
  line-height: 57.6px;
  font-weight: 800;
  margin-bottom: 91px;
`;

export const ContactStyled = styled.section`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const SubtitleStyled = styled.h3`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 24px;
  line-height: 33.6px;
  font-weight: 400;
  margin-bottom: 19px;
`;

export const ContactInfoStyled = styled.p`
  font-family: 'Neue Machina', sans-serif;
  font-size: 40px;
  line-height: 48px;
  font-weight: 800;
`;

export const CopyrightStyled = styled.footer`
  margin-top: 92px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

export const InfoStyled = styled.section`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 16px;
  line-height: 22.4px;
  font-weight: 400;

  &:first-child {
    text-align: start;
  }
  
  &:last-child {
    text-align: end;
  }
`;

export const PhraseStyled = styled.p`
  &:first-child {
    margin-bottom: 9px;
  }
`;

export const ImageStyled = styled.img``;
