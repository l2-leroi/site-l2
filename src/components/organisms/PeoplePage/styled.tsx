import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionStyled = styled.section`
  background-color: ${colors.black};
  padding: 0px 28px 12rem 28px;

  @media (max-width: 500px) {
    padding: 0px 12px 12rem 12px;
  }
`;

export const DivStyled = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 88px;

  @media (max-width: 800px) {
    gap: 20px;
  }
  @media (max-width: 500px) {
    width: 60%;
  }
`;
