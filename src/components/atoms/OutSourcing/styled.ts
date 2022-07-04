import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionOutSourcingStyled = styled.section`
  p {
    overflow: hidden;
    text-align: center;

    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
  }
`;
