import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const PeopleMosaicSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${colors.black};
  color: ${colors.gray};
  margin: 0 auto;
  padding: 0 28px;
  overflow-x: hidden;
  padding-bottom: 200px;

  @media (max-width: 600px) {
    padding-bottom: 100px;
  }
`;
