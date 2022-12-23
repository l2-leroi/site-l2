import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Typography } from '../../../styles/typography';

export const InfiniteScrollContainerStyled = styled(InfiniteScroll)`
  display: flex;
  flex-direction: column;
  overflow-x: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 700px) {
    margin-top: 30px;
  }

  ${Typography} {
    margin-top: 60px;
    text-align: center;

    a {
      font-size: 4vw;
      width: 100%;
      cursor: pointer;
      text-decoration: none;

      ::selection {
        background: ${colors.purple};
      }

      @media (max-width: 600px) {
        font-size: 40px;
      }
      @media (max-width: 980px) {
        font-size: 40px;
      }
      @media (min-width: 601px) and (max-width: 1015px) {
        font-size: 3.5vw;
      }
    }
  }
`;
