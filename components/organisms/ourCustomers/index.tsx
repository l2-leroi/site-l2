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

import Image from 'next/image';

import ToParadoLogo from '../../../assets/images/OurCustomers/to-parado-logo.svg';
import PhiLogo from '../../../assets/images/OurCustomers/phi-logo.svg';
import BancoRCILogo from '../../../assets/images/OurCustomers/banco-rci-logo.svg';
import SescLogo from '../../../assets/images/OurCustomers/sesc-logo.svg';
import TalentDreamsLogo from '../../../assets/images/OurCustomers/talent-dreams-logo.svg';
import AnotaAiLogo from '../../../assets/images/OurCustomers/anotai-logo.svg';
import MemoriesUpLogo from '../../../assets/images/OurCustomers/memories-up-logo.svg';
import NoVerdeLogo from '../../../assets/images/OurCustomers/no-verde-logo.svg';
import DigitalBusinessLogo from '../../../assets/images/OurCustomers/digital-business-logo.svg';
import FundacredLogo from '../../../assets/images/OurCustomers/fundacred-logo.svg';

import Spinner from '../../../assets/images/OurCustomers/enfeite-giratorio.svg';

import CustomersList from '../../molecules/CustomersList/index';
import React from 'react';

const OurCustomers = () => {
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
        <Image src={Spinner} alt="L2 Code" />
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
