import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 20px;
`;

export const ImagesContainer = styled.div`
  position: relative;

  img {
    // 1580
    height: 340px;
    width: 340px;
    // width: auto;
    @media (max-width: 1580px) {
      height: 320px;
      width: 320px;
    }
    @media (max-width: 1455px) {
      height: 290px;
      width: 290px;
      min-width: 290px;
      max-height: 290px;
    }
    @media (max-width: 1436px) {
      height: 260px;
      width: 260px;
      min-width: 260px;
      max-height: 260px;
    }
    @media (max-width: 600px) {
      height: 200px;
      width: 200px;
      min-width: 200px;
      max-height: 200px;
    }

    @media (max-width: 480px) {
      min-width: 320px;
      max-height: 320px;
      height: 320px;
      width: 320px;
    }

    @media (max-width: 375px) {
      height: 200px;
      width: 200px;
      min-width: 200px;
      max-height: 200px;
    }
  }
`;

export const ImageProtect = styled.div`
  width: 100%;
  height: 100%;
  z-index: 40;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ImageIcon = styled.img`
  max-width: 100%;
  border-radius: 16px;
  object-fit: cover;
  height: 340px;
  width: 340px;
  min-width: 340px;
  max-height: 340px;
  display: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (max-width: 600px) {
    min-width: 120px;
  }

  &.active {
    display: block;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
