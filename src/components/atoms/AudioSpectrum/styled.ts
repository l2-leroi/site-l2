import styled from 'styled-components';

export const AudioContainerStyled = styled.div`
  display: flex;
`;

export const WaveForm = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
`;

export const AudioIconStyled = styled.div`
  max-width: 120px;
  display: block;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  cursor: pointer;
  user-select: none;

  :first-of-type {
    flex: 1 1 120px;
  }

  &::before {
    content: url(/images/play-video.png);
    display: block;
    position: absolute;
    color: white;
    z-index: 7;
    transition: content 0.5s ease;
  }

  &.pause {
    &::before {
      content: url(/images/pause-video.png);
    }
  }
`;

export const IconStyled = styled.img`
  max-width: 100%;
  display: block;
  align-items: center;
  justify-content: center;
  position: relative;
`;
