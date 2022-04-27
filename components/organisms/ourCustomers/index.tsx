import {
  OurCustomersStyled,
  HeaderStyled,
  SubtitleStyled,
  TitleStyled,
  ContentStyled,
  SignStyled,
  SpinningIconStyled,
  BlackLineStyled,
  PurpleLineStyled,
  SignContainerStyled,
  AsideStyled,
  ParagraphStyled,
  CustomersContainer,
  BlackLine
} from './styled';

import Spinner from '../../../assets/images/OurCustomers/enfeite-giratorio.svg';

import CustomersList from '../../molecules/CustomersList/index';
import React from 'react';

const OurCustomers = () => {
  const ToParadoLogo = './images/OurCustomers/to-parado-logo.svg';
  const PhiLogo = './images/OurCustomers/phi-logo.svg';
  const BancoRCILogo = './images/OurCustomers/banco-rci-logo.svg';
  const SescLogo = './images/OurCustomers/sesc-logo.svg';
  const TalentDreamsLogo = './images/OurCustomers/talent-dreams-logo.svg';
  const AnotaAiLogo = './images/OurCustomers/anotai-logo.svg';
  const MemoriesUpLogo = './images/OurCustomers/memories-up-logo.svg';
  const NoVerdeLogo = './images/OurCustomers/no-verde-logo.svg';
  const DigitalBusinessLogo = './images/OurCustomers/digital-business-logo.svg';
  const FundacredLogo = './images/OurCustomers/fundacred-logo.svg';

  const Spinner = './images/OurCustomers/enfeite-giratorio.svg';

  const customers = [
    { alt: 'Tô Parado Logo', src: ToParadoLogo },
    { alt: 'Phi Logo', src: PhiLogo },
    { alt: 'Banco RCI Brasil Logo', src: BancoRCILogo },
    { alt: 'Sesc Logo', src: SescLogo },
    { alt: 'Talent Dreams Logo', src: TalentDreamsLogo },
    { alt: 'Anota Aí Logo', src: AnotaAiLogo },
    { alt: 'Memories Up Logo', src: MemoriesUpLogo },
    { alt: 'No Verde Logo', src: NoVerdeLogo },
    { alt: 'Digital Business Logo', src: DigitalBusinessLogo },
    { alt: 'Fundacred Logo', src: FundacredLogo },
  ];

  const lines = [
    {
      element: "blackLine",
      halfWindow: 0.8,
      secondaryElement: "spinner",
    },

    {
      element: "purpleLine",
      halfWindow: 0.9,
      secondaryElement: "sign",
    }
  ]
  
  
  React.useEffect(()=> {
    window.addEventListener("scroll", handleScroll);
  });
  
  const handleScroll = () => {
    const whiteLine = document.querySelector(`.whiteLine`) as HTMLElement;
    const blackLine = document.querySelector(`.blackLine`) as HTMLElement;
    const spinner = document.querySelector(`.spinner`) as HTMLElement;
    const heightLine = blackLine.getBoundingClientRect().top;
    lines.forEach(lineObj => {
      const line = document.querySelector(`.${lineObj.element}`) as HTMLElement;
      const secondaryElement = document.querySelector(`.${lineObj.secondaryElement}`) as HTMLElement;
      const halfWindow = window.innerHeight * lineObj.halfWindow;
      const lineTop = line.getBoundingClientRect().top;
      const inclination = (halfWindow - lineTop)/10;
      const internalPadding = (halfWindow - lineTop);
      const isVisible = (lineTop - halfWindow) < 0;
      const blackLineMovimento = ( window.innerHeight * 0.8 - blackLine.getBoundingClientRect().top )
      let secondaryElementTop;
      
      
      if(lineObj.secondaryElement === "sign"){
        secondaryElementTop = inclination * 2;
      }
      if(isVisible && inclination <= 60 && internalPadding <= 576){
        if(inclination >= 0){
          secondaryElement.style.top = `${secondaryElementTop - 20}px`;

          if(lineObj.secondaryElement === "sign"){
            secondaryElement.style.transform = `rotate(${inclination/6.5}deg)`;
          }

        }
        console.log(heightLine)
        
        line.style.paddingTop = `${internalPadding}px`;   
      }

      if ((blackLineMovimento/1.55 > 70) && (blackLineMovimento/1.55 < 320)){
        spinner.style.top = `${blackLineMovimento/1.55}px`;

      }
      if( blackLineMovimento < 500){
        whiteLine.style.height = `${blackLineMovimento}px`;     
      }  
    });
  }
  
  return (
    <OurCustomersStyled>
      <BlackLine className='whiteLine' />
        <SpinningIconStyled className='spinner'>
          <img src={Spinner} alt="L2 Code" />
        </SpinningIconStyled>
      <BlackLineStyled className='blackLine'>
        <ContentStyled>
          <HeaderStyled>
            <TitleStyled>ALGUNS DE NOSSOS CLIENTES</TitleStyled>
            <SubtitleStyled>
              Temos orgulho de fazer parceria com empresas e startups com fome
              de inovação.
            </SubtitleStyled>
          </HeaderStyled>
          <AsideStyled>
            <ParagraphStyled>&lt;30+ CLIENTES&gt;</ParagraphStyled>
          </AsideStyled>
          
        </ContentStyled>

        <CustomersContainer>
          <CustomersList customers={customers}/>
        </CustomersContainer>

          
      </BlackLineStyled>
      <SignContainerStyled>
          <SignStyled className='sign'>
            <OutSourcing  />
          </SignStyled>
        <PurpleLineStyled className='purpleLine'>
          
        </PurpleLineStyled>
      </SignContainerStyled>
    </OurCustomersStyled>
  );
};

export default OurCustomers;
