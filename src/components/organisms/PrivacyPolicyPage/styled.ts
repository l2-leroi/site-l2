import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionStyled = styled.section`
  background-color: ${colors.gray};
  padding: 0px 28px 12rem 28px;
  padding-top: 300px;

  @media (max-width: 800px) {
    padding: 0px 12px 12rem 12px;
    padding-top: 150px;
  }

  h1 {
    max-width: 700px;
    text-transform: uppercase;
    margin-bottom: -20px;

    @media (max-width: 800px) {
      max-width: 300px;
    }
  }
`;
