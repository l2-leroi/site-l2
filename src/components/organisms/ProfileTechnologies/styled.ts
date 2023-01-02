import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.section`
  background-color: ${colors.gray};
  overflow: inherit;
  display: flex;
  flex-direction: column;
  width: 35vw;
  padding-right: 28px;
}
`;

export const TechnologyContainerStyled = styled.div`
  display: flex;
  gap: 25px;
  padding-top: 40px;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    padding-top: 20px;
  }
`;

export const TechnologyIcon = styled.img``;
