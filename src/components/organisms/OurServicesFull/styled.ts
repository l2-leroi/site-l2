import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionStyled = styled.section`
    background-color: ${colors.black};
    display: grid;
    grid-template-columns: 1fr minmax(280px, 1456px) 1fr;
    color: ${colors.gray};
    width: 100%;

    @media(max-width: 800px){
        padding: 0px 12px;
        padding-bottom: 80px;
    }

`;


export const OurServicesFullStyled = styled.div`
    grid-column: 2/3;
    display: grid;
    grid-template-columns: 1fr 2fr;
    box-sizing: border-box;
    padding: 0px 28px;
    gap: 30px;

    @media(max-width: 800px){
        margin-top: 138px;
    }
`;

export const HeaderStyled = styled.div`
    grid-column: 1/-1;

    position: relative;
    display: flex;
  
    @media(max-width: 414px){
      margin-bottom: 36px;
      width: 100%;
    }
`;

export const TitleGroupStyled = styled.hgroup`
    max-width: 712px;
    z-index: 50;
  
    @media(max-width: 1000px){
      max-width: 605px;
    }

    
  
    // @media(max-width: 800px){
    //   max-width: 264px;
    // }
    p{
      max-width: 464px;
      ::selection {
        background: ${colors.purple};
    }

    @media(max-width: 800px){
        p {
            max-width: 160px;
        }
    }



    //   @media(max-width: 800px){
    //     max-width: 160px;
    //   }
    }
    h2{
      margin-bottom: 40px;
      ::selection {
        background: ${colors.purple};
      }
      
    //   @media(max-width: 800px){
    //     max-width: 264px;
    //     margin-bottom: 16px;
    //   }
    }
`;

export const TitleStyled = styled.h2`
    margin-bottom: 40px;

    @media(max-width: 800px){
        max-width: 400px;
    }
`;

export const ParagraphStyled = styled.p`
    max-width: 464px;

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
    z-index: 2;

    @media(max-width: 800px){
    max-width: 50px;
    }
    p{
    ::selection {
        background: ${colors.purple};
    }
    @media(max-width: 800px){
        max-width: 61px;
    }
    }
`;

export const AsideTextStyled = styled.span`

`;

export const ArrowSpinnerContainerStyled = styled.div`
    grid-column: 1/2;
    margin-top: 150px;
    position: relative;
    display: flex;
    justify-content: center;
`;

export const ArrowSpinnerComponentStyled = styled.div`
    position: absolute;
    margin: 0 auto;
    transition: top .2s linear;
    

    img {
        max-width: 200px;
        max-height: 200px;
    }

    @media(max-width: 800px){
        img {
            max-width: 72px;
            max-height: 72px;
        }
        
    }
`;

export const ContentStyled = styled.div`
    margin-top: 150px;
    grid-column: 2/3;
`;

export const VideoTitleStyled = styled.div`
    max-width: 400px;
`;