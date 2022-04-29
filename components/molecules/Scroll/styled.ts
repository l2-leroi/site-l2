import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const InfiniteScrollContainerStyled = styled(InfiniteScroll)`
  display: flex;
  flex-direction: column;
  overflow-x: none;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 700px) {
    margin-top: 30px;
  }
`;

export const ElementScrollStyled = styled.a`
  text-align: center;
  font-family: 'Neue Machina';
  font-weight: 800;
  font-size: 4vw;
  line-height: 110px;
  letter-spacing: -0.06em;
  line-height: 6.5vw;
  color: ${colors.gray};
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 600px) {
    padding-bottom: 15vw;
  }
  @media (max-width: 1024px) {
    font-size: 5vw;
    line-height: 9.5vw;
  }
`;
