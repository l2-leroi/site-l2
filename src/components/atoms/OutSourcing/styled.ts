import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionOutSourcingStyled = styled.section`
  // position: absolute; 
  bottom: 8rem;
`;

export const ParagraphOutSourcingStyled = styled.p`
  overflow: hidden;
  font-weight: 700;
  font-size: 4rem;
  line-height: 4.8rem;
  text-align: center;
  letter-spacing: -0.02em;
  color: #8e9195;
  font-family: 'Neue Machina';
  
  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }
`;