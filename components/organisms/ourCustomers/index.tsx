import {
  OurCustomersStyled,
  HeaderStyled,
  SubtitleStyled,
  TitleStyled,
  ContentStyled,
  SignStyled,
  SpinningIconStyled,
  BlackLineStyled,
} from './styled';

import { AsideStyled, ParagraphStyled } from '../footer/styled';

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


  React.useEffect(()=> {
    window.addEventListener("scroll", handleScroll);
  });
 
  const handleScroll = (event) => {
    const halfWindow = window.innerHeight * 0.8;
    const blackLine = document.querySelector(".blackLine") as HTMLElement;
    const spinner = document.querySelector(".spinner") as HTMLElement;

    const blackLineTop = blackLine.getBoundingClientRect().top

    const isVisible = (blackLineTop - halfWindow) < 0;

    const inclination = (halfWindow - blackLineTop)/10
    const internalPadding = (halfWindow - blackLineTop);
    const spinnerMargin = (inclination * 11) - (spinner.offsetHeight/2);


    if(isVisible && inclination <= 60 && internalPadding <= 576){

      if(inclination >= 0){
        spinner.style.top = `${spinnerMargin}px`;
      }
      
      blackLine.style.clipPath = `polygon(0 0, 100% ${inclination}%, 100% 100%, 0% 100%)`;
      blackLine.style.paddingTop = `${internalPadding}px`;      
    }
  }

  return (
    <OurCustomersStyled>
      <SpinningIconStyled className='spinner'>
        <Image src={Spinner} alt="L2 Code" />
      </SpinningIconStyled>
      <BlackLineStyled className='blackLine'>
        <ContentStyled>
          <AsideStyled>
            <ParagraphStyled>&lt;30+CLIENTES&gt;</ParagraphStyled>
          </AsideStyled>
          <HeaderStyled>
            <TitleStyled>ALGUNS DE NOSSOS CLIENTES</TitleStyled>
            <SubtitleStyled>
              Temos orgulho de fazer parceria com empresas e startups com fome
              de inovação.
            </SubtitleStyled>
          </HeaderStyled>
        </ContentStyled>

        <CustomersList customers={customers} />

          
      </BlackLineStyled>
      <SignStyled>
            Adoraríamos ter você nessa lista · Adoraríamos ter você nessa lista ·
            Adoraríamos ter você nessa lista · Adoraríamos ter você nessa lista ·
            Adoraríamos ter você nessa lista ·
      </SignStyled>
    </OurCustomersStyled>
  );
};

export default OurCustomers;
