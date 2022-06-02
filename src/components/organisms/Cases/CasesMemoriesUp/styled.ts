import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

export const ContainerStyled = styled.div`
  color: ${colors.black};
  background-color: ${colors.gray};
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  // padding: 10rem 2.8rem 48rem;
  padding: 10rem 2.8rem 10rem;  

  // @media (min-width: 2560px) {
  //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 77%);
  // }

  // @media (min-width: 1920px) {
  //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 76%);
  // }

  // @media (max-width: 800px) {
  //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 86%);
  // }

  // @media (max-width: 600px) {
  //   padding-right: 0px;
  // }
`;

export const ContentStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
`;

export const DivStyled = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 3.6rem;
`;

export const AsideStyled = styled.aside`
  margin-bottom: -8px;
  margin-left: 25px;

  @media (max-width: 800px) {
    margin-left: 5px;
  }
  @media (min-width: 400px) {
    margin-left: 60px;
  }
  @media (max-width: 400px) {
    margin-left: 19px;
  }
`;

export const ParagraphStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 1.6rem;
  line-height: 22.4px;
  font-weight: 400;
  letter-spacing: -0.02em;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }
`;

export const TitleStyled = styled.h2`
  font-family: 'Neue Machina', sans-serif;
  font-size: 5.4rem;
  line-height: 57.6px;
  font-weight: 800;
  width: 686px; 
  letter-spacing: -0.04em;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  @media (max-width: 930px) {
    width: 500px;
  }

  @media (max-width: 800px) {
    width: 278px;
    line-height: 28.8px;
  }

  @media (max-width: 415px) {
    width: 264px;
    line-height: 28.8px;
  }
`;

export const PhraseStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.36rem;
  width: 502px;
  margin-bottom: 8rem;
  letter-spacing: -0.04em;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  @media (max-width: 800px) {
    width: 175px;
  }
`;

// export const DivItemStyled = styled.div`
//   max-width: 340px;
  

//   @media (max-width: 800px) {
//     max-width: 270px;
//     min-width: 270px;
//   }

//   @media (max-width: 700px) {
//     max-width: 300px;
//   }

//   @media (max-width: 600px) {
//     max-width: 160px;
//     min-width: 260px;
//   }

//   @media (max-width: 576px) {
//     max-width: 384px;
//     min-width: 0px;
//   }
//   `;

// export const Link = styled.div`
// width: 253px;
// height: 34px;

// font-family: 'Circular Air Pro';
// font-style: normal;
// font-weight: 400;
// font-size: 19px;
// line-height: 140%;
// text-align: center;
// letter-spacing: -0.04em;
// padding: 3px;
// margin-left: 900px;
// border: 2px solid #20BD9D;
// border-radius: 24px;
// color: #171B21;


// /* Inside auto layout */

// flex: none;
// order: 0;
// flex-grow: 0;
// `;

// export const button = styled.div``;



