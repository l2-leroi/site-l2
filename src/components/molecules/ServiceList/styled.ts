import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ListStyled = styled.div`
  &:last-child div:last-child li:nth-of-type(4) {
    margin-top: -35px;

    @media (max-width: 800px) {
      margin-top: 0px;
    }
  }
`;

export const SubtitleStyled = styled.h3`
  margin-bottom: 40px;

  @media (max-width: 800px) {
    max-width: 160px;
  }
`;

export const ParagraphStyled = styled.p`
  max-width: 464px;
  margin: 40px 0px;

  @media (max-width: 800px) {
    max-width: 160px;
  }
`;

export const ContentStyled = styled.div`
  &:last-child hr {
    display: none;
  }
`;

export const AudioContainer = styled.div``;
export const ImageContainerStyled = styled.div`
  display: flex;
`;

export const ImageStyled = styled.img`
  margin-right: 32px;
  &:first-of-type {
    margin-right: 16px;
  }

  @media (max-width: 800px) {
    max-width: 80px;
    &:first-of-type {
      margin-right: 16px;
    }
  }
`;

export const VideoStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AltVideoStyled = styled.span`
  margin-top: 28px;
  width: 100%;
  align-self: flex-end;
  justify-self: flex-end;
`;

export const AboutListStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
  margin-bottom: 80px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItemStyled = styled.li`
  list-style: none;
  margin: 0px;
  padding: 0px;
  padding-left: 26px;
  position: relative;

  &::before {
    content: '+';
    position: absolute;
    top: 6px;
    left: 0px;
    z-index: 6;
    font-size: 18px;
    color: ${colors.gray};
    font-weight: 800;
    text-shadow: 1px 0px 0 #fff, 0px 1px 0 #fff;

    @media (max-width: 800px) {
      top: -2px;
    }
  }

  &:nth-of-type(odd) {
    grid-column: 1/2;

    @media (max-width: 800px) {
      grid-column: 1/2;
    }
  }

  &:nth-of-type(even) {
    grid-column: 2/3;

    @media (max-width: 800px) {
      grid-column: 1/2;
    }
  }
`;

export const VideoIconStyled = styled.div`
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

  :first-of-type {
    flex: 1 1 120px;
  }

  &::before {
    content: url(/images/pause-video.png);
    display: block;
    position: absolute;
    color: white;
    z-index: 7;
    transition: content 0.5s ease;
  }

  &.pause {
    &::before {
      content: url(/images/play-video.png);
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

export const VideoIconContainer = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  width: 100%;
`;

export const LineStyled = styled.hr`
  border-color: ${colors.lightGray};
  margin-bottom: 80px;
`;
