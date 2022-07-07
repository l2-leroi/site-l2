import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionOutSourcingStyled = styled.section`
  margin-left: -50px;
  p {
    overflow: visible;
    text-align: center;
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
  }
`;
