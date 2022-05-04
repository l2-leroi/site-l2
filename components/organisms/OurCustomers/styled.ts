import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

export const OurCustomersStyled = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;

  @media(max-width: 600px){
    padding-top: 50px;
  }

  @media(max-width: 414px){
    padding-top: 0px;
  }
`;

export const BlackLineStyled = styled.div`
  color: ${colors.gray};
  background-color: ${colors.black};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(280px, 1456px) 1fr;
  padding: 0px 28px;
  overflow: hidden;
  @media(max-width: 800px){
    padding: 0px 12px;
  }
`;

export const HeaderStyled = styled.hgroup`
  max-width: 648px;
  z-index: 50;

  @media(max-width: 800px){
    max-width: 264px;
  }


`;

export const TitleStyled = styled.h2`
  font-family: 'Neue Machina', sans-serif;
  font-style: normal;
  font-size: 6.4rem;
  line-height: 90%;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 40px;
  ::selection {
    background: ${colors.purple};
  }
  
  @media(max-width: 800px){
    max-width: 264px;
    margin-bottom: 16px;
  }
`;

export const SubtitleStyled = styled.h3`
  font-family: 'Circular Air Pro', sans-serif;
  max-width: 464px;
  font-style: normal;
  font-weight: 400;
  font-size: 2.4em;
  line-height: 140%;
  letter-spacing: -0.04em;
  ::selection {
    background: ${colors.purple};
  }

  @media(max-width: 800px){
    max-width: 160px;
  }
`;

export const AsideStyled = styled.aside`
  text-align: right;
  align-self: center;
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 140%;
  letter-spacing: -0.02em;

  @media(max-width: 800px){
    max-width: 50px;
  }
`;

export const ParagraphStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 140%;
  letter-spacing: -0.02em;
  ::selection {
    background: ${colors.purple};
  }
  
  @media(max-width: 800px){
    max-width: 61px;
  }
`;

export const ContentStyled = styled.section`
  position: relative;
  display: flex;
  margin-bottom: 124px;
  grid-column: 2;

  @media(max-width: 800px){
    margin-bottom: 39px;

  }

  @media(max-width: 625px){
    padding-top: 60px;

  }

  @media(max-width: 414px){
    margin-bottom: 36px;
    margin-top: 100px;
    width: 100%;
  }

  @media(max-width: 375px){
    margin-top: 120px;
  }
`;

export const SignStyled = styled.span`
  font-family: 'Neue Machina', sans-serif;
  font-style: normal;
  font-size: 3rem;
  line-height: 200%;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${colors.dark_gray};
  overflow: hidden;
  padding-left: 30px;
  width: 100%;
  max-height: 40px;
  position: absolute;
  top: -10px;
  z-index: 99;
  margin-top: -20px;

  @media(max-width: 800px){
    line-height: 120%;
  }
`;

export const SpinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinningIconStyled = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 1;  
  overflow-x: hidden;
  border-radius: 50%;
  animation: ${SpinningAnimation} 5s linear infinite;
  max-width: 468px;

  // @media(max-width: 1366px){
  //   max-width: 380px;
  //   top: 5.3%;
  // }

  // @media(max-width: 1126px){
  //   max-width: 380px;
  //   top: 4.2%;
  // }

  // @media(max-width: 1076px){
  //   top: 3.4%;
  // }

  // @media(max-width: 954px){
  //   top: 2.4%;
  // }

  // @media(max-width: 800px){
  //   top: 2.8%;
  // }

  // @media(max-width: 600px){
  //   top: 2.2%;
  // }
  
  // @media(max-width: 440px){
  //   top: 1.8%;
  // }

  // @media(max-width: 414px){
  //   top: 3.6%;
  // }

  // @media(max-width: 300px){
  //   top: 2.8%;
  // }

  img{

    @media(max-width: 1366px){
      max-width: 380px;
    }
  
    @media(max-width: 800px){
      max-width: 248px;
    }
  
    @media(max-width: 414px){
      max-width: 140px;
    }
  }
`;

export const SignContainerStyled = styled.div`
  background-color: ${colors.black};
  padding-top: 40px;
  margin-top: -2px;
  position: relative;
  color: ${colors.dark_gray}
`;

export const CustomersContainer = styled.div`
  z-index: 5;  
  grid-column: 2;
`;

export const BlackBg = styled.div`
  height: 400px;
  width:100%;
  background-color: ${colors.black};
  position: absolute;
`;