import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionOnePageStyled = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  padding: 0px 152px;
  background-color: ${colors.gray};

  @media (max-width: 1366px) {
    padding: 0px 12px;
  }
`;

export const ScrollArrow = styled.div`
  position: absolute;
  right: 148px;
  bottom: -70px;
  user-select: none;

  @media (min-width: 2560px) {
    right: 703px;
  }

  @media (max-width: 1365px) {
    right: 70px;
  }

  @media (orientation: landscape) and (max-width: 800px) {
    bottom: -45px;
  }

  @media (orientation: portrait) and (max-width: 800px) {
    bottom: -45px;
    right: 0.5px;
    width: 100%;
  }
`;

export const ContentOnePageStyled = styled.div`
  background: ${colors.black};
  padding: 124px 90px;
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 52px;

  @media (max-width: 900px) {
    padding: 40px 16px;
  }

  @media (max-width: 800px) {
    margin-top: 80px;
  }
`;

export const DivServicesStyled = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-bottom: 8rem;
  align-items: center;
  h2 {
    ::selection {
      background: ${colors.purple};
    }
    max-width: 464px;
    margin: 0;

    @media (max-width: 800px) {
      max-width: 264px;
    }
  }
  p {
    max-width: 464px;
    ::selection {
      background: ${colors.purple};
    }
    color: ${colors.gray};
    padding-top: 24px;
    margin: 0;

    @media (max-width: 800px) {
      width: 160px;
      padding-top: 20px;
    }
  }
`;

export const DivServiceItemsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  justify-content: space-between;
  max-width: 1018px;
  margin: 0 auto;

  @media (max-width: 800px) {
    max-width: 1018px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const DivItemStyled = styled.div`
  max-width: 340px;

  @media (max-width: 800px) {
    max-width: 270px;
    min-width: 270px;
  }

  @media (max-width: 700px) {
    max-width: 300px;
  }

  @media (max-width: 600px) {
    max-width: 160px;
    min-width: 260px;
  }

  @media (max-width: 576px) {
    max-width: 384px;
    min-width: 0px;

    &:nth-child(1) {
      order: 1;
    }
    &:nth-child(2) {
      order: 4;
    }
    &:nth-child(3) {
      order: 2;
    }
    &:nth-child(4) {
      order: 3;
    }
    &:nth-child(5) {
      order: 5;
    }
  }
  h3 {
    ::selection {
      background: ${colors.purple};
    }

    padding-bottom: 24px;
    margin: 0;

    @media (max-width: 800px) {
      padding-bottom: 16px;
    }

    @media (max-width: 800px) {
      padding-bottom: 16px;
    }
  }
  p {
    ::selection {
      background: ${colors.purple};
    }
    color: ${colors.dark_gray};
    margin-top: 0;
    margin-bottom: 8rem;

    @media (max-width: 800px) {
      max-width: 230px;

      &.last-paragraph {
        max-width: 144px;
      }
    }

    @media (max-width: 600px) {
      max-width: 180px;

      &.last-paragraph {
        max-width: 180px;
      }
    }

    @media (max-width: 576px) {
      max-width: 300px;

      &.last-paragraph {
        max-width: 300px;
      }
    }
  }
`;

export const ImageStyled = styled.img`
  user-select: none;

  @media (max-width: 800px) {
    max-width: 164px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;
