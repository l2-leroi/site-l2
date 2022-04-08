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
  CustomersContainer
} from './styled';

import CustomersList from '../../molecules/CustomersList/index';
import Spinner from '../../molecules/Spinner/index';
import React from 'react';

const OurCustomers = () => {
  const customers = [
    { alt: 'Tô Parado Logo', src: "./images/to-parado-logo.svg" },
    { alt: 'Phi Logo', src: './images/phi-logo.svg' },
    { alt: 'Banco RCI Brasil Logo', src: './images/banco-rci-logo.svg' },
    { alt: 'Sesc Logo', src: './images/sesc-logo.svg' },
    { alt: 'Talent Dreams Logo', src: './images/talent-dreams-logo.svg' },
    { alt: 'Anota Aí Logo', src: './images/anotai-logo.svg' },
    { alt: 'Memories Up Logo', src: './images/memories-up-logo.svg' },
    { alt: 'No Verde Logo', src: './images/no-verde-logo.svg' },
    { alt: 'Digital Business Logo', src: './images/digital-business-logo.svg' },
    { alt: 'Fundacred Logo', src: './images/fundacred-logo.svg' },
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

    lines.forEach(lineObj => {
      const line = document.querySelector(`.${lineObj.element}`) as HTMLElement;
      const secondaryElement = document.querySelector(`.${lineObj.secondaryElement}`) as HTMLElement;
      const halfWindow = window.innerHeight * lineObj.halfWindow;
      const lineTop = line.getBoundingClientRect().top;
      const inclination = (halfWindow - lineTop)/10;
      const internalPadding = (halfWindow - lineTop);
      const isVisible = (lineTop - halfWindow) < 0;
      let secondaryElementTop;

      if(lineObj.secondaryElement === "spinner"){
        secondaryElementTop = (inclination * 11) - (secondaryElement.offsetHeight/2) + 300;
      }else if(lineObj.secondaryElement === "sign"){
        secondaryElementTop = inclination * 2;
      }

      if(isVisible && inclination <= 60 && internalPadding <= 576){
        if(inclination >= 0){
          secondaryElement.style.top = `${secondaryElementTop}px`;

          if(lineObj.secondaryElement === "sign"){
            secondaryElement.style.transform = `rotate(${inclination/7}deg)`;
          }

        }

        line.style.clipPath = `polygon(0 0, 100% ${inclination}%, 100% 100%, 0% 100%)`;
        line.style.paddingTop = `${internalPadding}px`;     
      }
    });
  }

  return (
    <OurCustomersStyled>
      
      <SpinningIconStyled className='spinner'>
        <Spinner spinnerPosition={{top: "0px", left: "0px", bottom: "0px", right: "0px"}} />
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
                Adoraríamos ter você nessa lista · Adoraríamos ter você nessa lista ·
                Adoraríamos ter você nessa lista · Adoraríamos ter você nessa lista ·
                Adoraríamos ter você nessa lista ·
          </SignStyled>
        <PurpleLineStyled className='purpleLine'>
          
        </PurpleLineStyled>
      </SignContainerStyled>
    </OurCustomersStyled>
  );
};

export default OurCustomers;
