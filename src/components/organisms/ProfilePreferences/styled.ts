import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.section`
  background-color: ${colors.gray};
  width: 100%;
  padding: 0px 28px;
  margin-top: 80px;
`;

export const PreferencesContainerStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 30px;
  list-style: none;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export const PreferenceLineStyled = styled.div`
  border-top: 1px solid ${colors.dark_gray};
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 80px;

  h3 {
    margin-bottom: 28px;
  }

  @media (max-width: 800px) {
    padding-top: 20px;
    padding-bottom: 40px;

    h3 {
      margin-bottom: 20px;
    }
  }
`;

export const PreferenceStyled = styled.li``;

export const SocialNetworkIconStyled = styled.img``;
