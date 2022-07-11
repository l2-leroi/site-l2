import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const DivStyled = styled.div`
  width: 34rem;
  max-width: 34rem;
  display: flex;
  height: auto;
  flex-direction: column;
  margin: 0 2rem;
`;

export const TextArea = styled.div`
  background-color: #ffff;
  padding: 3.2rem 1.6rem;
  border-radius: 0.8rem 0.8rem 0rem 0rem;
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 140%;
  display: flex;
  height: 20px;
  align-items: center;
  letter-spacing: -0.04em;
  min-height: 16.7rem;
  /* @media (max-width: 930px), (max-width: 800px) {
    font-size: 2rem;
    width: 80%;
  }
  @media (max-width: 414px), (max-width: 360px) {
    font-size: 1.4rem;
    font-weight: 200;
    width: 60%;
  } */
`;

export const AuthorArea = styled.div`
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 140%;
  letter-spacing: -0.02em;
  background-color: ${colors.purple};
  padding: 2rem 1.6rem;
  color: ${colors.gray};
  border-radius: 0rem 0rem 0.8rem 0.8rem;
  display: flex;
  align-items: center;
  /* @media (max-width: 930px), (max-width: 800px) {
    font-size: 1.2rem;
    width: 80%;
  }
  @media (max-width: 414px), (max-width: 360px) {
    font-size: 1rem;
    font-weight: 200;
    width: 60%;
  } */
`;

export const AuthorImg = styled.img`
  padding-right: 1.6rem;
`;
