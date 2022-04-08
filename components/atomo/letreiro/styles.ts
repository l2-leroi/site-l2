import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionOutSourcingStyled = styled.section`
  overflow: hidden;
  position: absolute;
  transform: translateY(30rem);
  @media (max-width: 500px) {
    transform: translateY(20rem);
  }
`;

export const ParagraphOutSourcingStyled = styled.p`
  font-weight: 800;
  font-size: 40px;
  padding-left: 22px;
  line-height: 120%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #8e9195;
  font-family: 'Neue Machina';
  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;