import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const DivStyled = styled.div`
  width: 34rem;
  max-width: 34rem;
  display: flex;
  height: auto;
  flex-direction: column;
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
`;

export const AuthorImg = styled.img`
  padding-right: 1.6rem;
`;
