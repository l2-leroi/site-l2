import {
  OurCustomersStyled,
  HeaderStyled,
  SubtitleStyled,
  TitleStyled,
  ContentStyled,
  SignStyled,
  SpinningIconStyled,
  BlackLineStyled,
  SignContainerStyled,
  AsideStyled,
  ParagraphStyled,
  CustomersContainer,
  BlackBg
} from './styled';

import CustomersList from '../../molecules/CustomersList/index';
import React from 'react';
import LineAnimation from '../../atoms/LineAnimation';
import { colors } from '../../../styles/colors';

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
  let spinnerMaxHeight = 0;
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

  const handleScroll = () => {
    const spinner = document.querySelector('.spinner') as HTMLElement;
    const blackLine = document.querySelector('.blackLine') as HTMLElement;
    const hgroup = document.querySelector('.hgroup') as HTMLElement;

    const blackLineMovimento = ( window.innerHeight * 0.8 - blackLine.getBoundingClientRect().top )-128

    const hgroupHeight = hgroup.getBoundingClientRect().height;
    const blackLinePadding = +getComputedStyle(blackLine).getPropertyValue("padding-top").replace("px", "")
    const spinnerTop = +getComputedStyle(spinner).getPropertyValue("top").replace("px", "");
    

    if(spinner.getBoundingClientRect().height > spinnerMaxHeight){
      spinnerMaxHeight = spinner.getBoundingClientRect().height 
    }
      
    const soma = (blackLinePadding + hgroupHeight) - (spinnerMaxHeight * 0.5);
      
  
    if(blackLineMovimento >= 0 && spinnerTop <= soma){
      if(!((blackLineMovimento * 0.8) > soma)){
        spinner.style.top = (blackLineMovimento * 0.8)+"px";
      }
    }
  }

  const spinnerBehindText = () => {
    if(window.innerWidth < 1024){
      const content = document.querySelector(".customersContent") as HTMLElement;
      const blackLine = document.querySelector(".blackLine") as HTMLElement;
      const sign = document.querySelector(".signCustomers") as HTMLElement;
      const customers = document.querySelector(".customers") as HTMLElement;
      
      customers.insertBefore(content, sign);

      blackLine.style.height = content.getBoundingClientRect().height + "px";
      content.style.marginTop = (-(content.getBoundingClientRect().height - ((+getComputedStyle(blackLine).getPropertyValue("padding-top").replace("px", "") * 1.1))) +"px");
    }
  }

  React.useEffect(()=> {
    window.addEventListener("scroll", handleScroll);
    spinnerBehindText();
  });


  return (
    <>
    <OurCustomersStyled id="customers" className='customers'>
        <SpinningIconStyled className='spinner'>
          <img src={Spinner} alt="L2 Code" />
        </SpinningIconStyled>

        <LineAnimation classe="blackLine" backgroundColor={colors.black}>
          
          <BlackLineStyled className='customersContent'>
            <ContentStyled>
              <HeaderStyled className='hgroup'>
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

            <CustomersContainer className='customersList'>
              <CustomersList customers={customers}/>
            </CustomersContainer>
          </BlackLineStyled>

          </LineAnimation>

      <SignContainerStyled className='signCustomers'>
          <SignStyled className='sign'>
          </SignStyled>
      </SignContainerStyled>
      
    </OurCustomersStyled>
    <BlackBg />
    </>
  );
};

export default OurCustomers;
