import styled from 'styled-components';

export const FooterStyled = styled.section`
  color: #F2F3F4;
  background-color: #5900CC;
  height: 1156px;
  width: 1512px;
  padding: 360.5px 28px 60.5px;

  section {
    width: 515px;
  }

  h2 {
    font-size: 64px;
    line-height: 57.6px;
  }
`;

export const ContactStyled = styled.section`
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0px;
  }

  h3 {
    font-size: 24px;
    line-height: 33.6px;
  }

  p {
    font-size: 40px;
    line-height: 48px;
  }
`;
