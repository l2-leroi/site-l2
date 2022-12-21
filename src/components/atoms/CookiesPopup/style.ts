import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const TriangleContainer = styled.div`
  background: #242a33;
  z-index: 10000;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  width: 800px;
  height: 400px;
  clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%);
  // gap: 20px;
  // padding: 60px 18px 28px 18px;
  padding: 60px 29px 28px 29px;
  position: fixed;
  bottom: -3px;
  right: -3px;
  transition: all 0.9s;
  opacity: 0;
  overflow-y: hidden;
  margin-right: -2000px;
  margin-bottom: -2000px;

  &:*::select {
    background-color: ${colors.purple};
    color: white;
  }

  &.active {
    opacity: 0.9;
    visibility: visible;
    margin-right: 0px;
    margin-bottom: 0px;
  }

  @media (max-width: 800px) {
    padding: 60px 29px 28px 29px;
    width: 380px;
    height: 350px;
  }

  @media (max-width: 500px) {
    clip-path: polygon(100% 0%, 100% 0%, 100% 100%, -25% 100%);
    width: 510px;
    padding: 18px;
    height: 280px;

    &.active {
      opacity: 0.9;
      visibility: visible;
      margin-right: -5px;
      margin-bottom: 0px;
      padding: 60px 18px 28px 18px;
      
    }
  }
`;

export const CookiesIcon = styled.img`
  width: 30%;
  max-width: 112px;
  max-height: 86px;

  @media (max-width: 500px) {
    padding-left: 5px;
    max-width: 70px;
  }
`;

export const CookiesDescription = styled.div`
  font-family: 'Circular Air Pro', 'sans serif';
  font-weight: 400;
  // font-size: 2.4rem;
  line-height: 3.36rem;
  color: ${colors.gray};
  // width: 50%;
  max-width: 350px;
  text-align: right;
  // margin: 0px 20px;
  margin-top: 26px;
  margin-bottom: 16px;

  p {
    font-size: 2rem;
  }

  @media (max-width: 800px) {
    max-width: 200px;
    p {
      font-size: 2.4rem;
    }
  }
`;

export const PrivacyLink = styled.a``;

export const OkButton = styled.button`
  font-family: 'Circular Air Pro', 'sans serif';
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.24rem;
  text-transform: uppercase;
  color: ${colors.gray};
  background: transparent;
  border: 1px solid ${colors.green};
  border-radius: 20px;
  padding: 4px 15px;
  cursor: pointer;
  // margin: 0px 20px;

  @media (max-width: 500px) {
    padding: 9px 18px;
  }
`;
