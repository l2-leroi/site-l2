import {
  OurCustomersStyled,
  HeaderStyled,
  SubtitleStyled,
  TitleStyled,
  ContentStyled,
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
import OutSourcing from '../../atoms/OutSourcing';
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

  const verifyPurpleLine = () => {
    const sign = document.querySelector(".signCustomers") as HTMLElement;
    const purpleLine = document.querySelector('.purpleLine') as HTMLElement;
    const purpleLineMovimento = ( window.innerHeight * 0.8 - purpleLine.getBoundingClientRect().top )-128
    

    let inclination = 25;

    if((window.innerWidth > 600) && (window.innerWidth < 800)){
      inclination = 15;
    }else if(window.innerWidth <= 600){
      inclination = 10;
    }

    const teste = 150 - (purpleLineMovimento/5);
    
    const purpleLinePaddingTop = +getComputedStyle(purpleLine).getPropertyValue("padding-top").replace("px", "")
    const purpleLineWidth = purpleLine.getBoundingClientRect().width;

    const tangente = Math.atan(purpleLinePaddingTop/purpleLineWidth);

    const graus = tangente * (180 / Math.PI);

    const ppmovimento = purpleLineMovimento/15;

    // if(purpleLineMovimento >= 0 && ppmovimento <= graus){
    //   sign.style.transform = `rotate(${ppmovimento}deg)`;
    // }

    // if(ppmovimento > graus){
    //   sign.style.transform = `rotate(${graus}deg)`;
    // }
    
    if(purpleLineMovimento >= 0 && (inclination + (purpleLineMovimento/50)) < inclination + 5){
      if(window.innerWidth <= 800){
        const padding = teste - (purpleLinePaddingTop * 0.10);
        sign.style.top = `${padding}px`;
      }else{
        sign.style.top = `${teste}px`;
      }
      
      console.log("ppmovimento", ppmovimento);

      if(ppmovimento <= graus){
        sign.style.transform = `rotate(${ppmovimento}deg)`;
      }else{
        console.log("entrou", graus)
        sign.style.transform = `rotate(${graus}deg)`;
      }
    }
    
    console.log("graus", graus)

  }

  const handleScroll = () => {
    verifyPurpleLine();
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
      const sign = document.querySelector(".black") as HTMLElement;
      const customers = document.querySelector(".customers") as HTMLElement;
      
      customers.appendChild(content);

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

      
      
    </OurCustomersStyled>
    <BlackBg className='black' >
      <SignContainerStyled className='signCustomers'>
          <OutSourcing />
      </SignContainerStyled>
    </BlackBg>
    </>
  );
};

export default OurCustomers;
