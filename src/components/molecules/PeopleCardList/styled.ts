import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const CardList = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(100px, 464px) 1fr;
`;

export const CardListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: fit-content;
    background-color: ${colors.black};
    gap: 40px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
      }

      @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;

      }

      grid-column: 1/4;
`;

export const InfoPeopleDiv = styled.div`
    max-width: 464px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
    grid-column: 2;
    margin-bottom: 40px;
    
    @media (max-width: 600px) {
      max-width: 160px;
      p, h2 {
        margin-left: -10vw;
      } 
    }
`;


export const Separator = styled.hr`
    border-color: ${colors.lightGray};
    width: calc(100% + 40vw);
    margin-left: auto;
    grid-column: 2/5;
    margin: 160px 0px;

    @media (max-width: 600px) {
      margin: 80px 0px;
      margin-left: 25vw;
    }
`;
