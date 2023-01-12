import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const PolicyStyled = styled.div`
  max-width: 960px;
  margin: 0 auto;
  h2 {
    margin-top: 100px;
    margin-bottom: 40px;
    max-width: 588px;
  }

  @media (max-width: 800px) {
    max-width: 85%;

    h2 {
      margin-top: 60px;
      margin-bottom: 30px;
      max-width: 588px;
    }
  }
`;

export const ListStyled = styled.ul`
  list-style: none;

  &.normal {
    li {
      position: relative;
      padding-left: 35px;

      &::before {
        content: '+';
        position: absolute;
        left: 13px;

        z-index: 6;
        font-size: 18px;
        color: ${colors.black};
        font-weight: 900;

        // @media (max-width: 800px) {
        //   top: -2px;
        // }
      }
    }
  }
`;
