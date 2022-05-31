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
  BlackBg,
  DiagonalBox, Contentteste, Teste2, Teste5
} from './styled';

import CustomersList from '../../molecules/CustomersList/index';
import React from 'react';
import LineAnimation from '../../atoms/LineAnimation';
import OutSourcing from '../../atoms/OutSourcing';
import { colors } from '../../../styles/colors';
import { Teste } from '../Menu/styled';

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
    // verifyPurpleLine();
    const spinner = document.querySelector('.spinner') as HTMLElement;
    const blackLine = document.querySelector('.blackLine') as HTMLElement;
    const hgroup = document.querySelector('.hgroup') as HTMLElement;

    const blackLineMovimento =
      window.innerHeight * 0.8 - blackLine.getBoundingClientRect().top - 128;

    const hgroupHeight = hgroup.getBoundingClientRect().height;
    const blackLinePadding = +getComputedStyle(blackLine)
      .getPropertyValue('padding-top')
      .replace('px', '');
    const spinnerTop = +getComputedStyle(spinner)
      .getPropertyValue('top')
      .replace('px', '');

    if (spinner.getBoundingClientRect().height > spinnerMaxHeight) {
      spinnerMaxHeight = spinner.getBoundingClientRect().height;
    }

    let soma = blackLinePadding + hgroupHeight - spinnerMaxHeight * 0.5;

    if(window.innerWidth <= 500 && window.innerWidth > 350){
      soma = blackLinePadding + (hgroupHeight * 0.2) - spinnerMaxHeight * 0.5;
    }else if(window.innerWidth <= 350){
      soma = blackLinePadding - spinnerMaxHeight * 0.5;
    }

    if (blackLineMovimento >= 0 && spinnerTop <= soma) {
      if (!(blackLineMovimento * 0.8 > soma)) {
        spinner.style.top = blackLineMovimento * 0.8 + 'px';
      }
    }
  };

  const teste = () => {
    const black = document.querySelector(".customers") as HTMLElement;
    const blackLineMovimento =
    window.innerHeight * 0.6 - black.getBoundingClientRect().top;

    const box = document.querySelector(".testebox") as HTMLElement;
    const customersContent = document.querySelector(".customersContent") as HTMLElement;
    const teste4 = document.querySelector(".teste4") as HTMLElement;
    const contentstyled = document.querySelector(".containerstyled") as HTMLElement;
    const footer = document.querySelector(".footer") as HTMLElement;


    // const blackLineMovimento =
    //   window.innerHeight * 0.6 - box.getBoundingClientRect().top;

      const graus = blackLineMovimento/50;

    if(graus > 0 && graus <= 17.76){
      black.style.transform = `skewY(${graus}deg)`;
      

      const radians = graus * (Math.PI/180)
      const x = Math.tan(radians) * (window.innerWidth) / 2;

      black.style.marginTop = `${x}px`;
      customersContent.style.paddingTop = x+"px";
      customersContent.style.marginTop = -x+"px";
      customersContent.style.transition = `0.2s linear all`;

      black.style.paddingTop = x+"px";

    
  }

    requestAnimationFrame(teste);
  }

  const teste3 = () => {
    
    const box = document.querySelector(".testebox") as HTMLElement;
    const roxo = document.querySelector("#contact") as HTMLElement;
    const customersContent = document.querySelector(".customersContent") as HTMLElement;
    const teste4 = document.querySelector(".teste4") as HTMLElement;
    const contentstyled = document.querySelector(".containerstyled") as HTMLElement;
    const footer = document.querySelector(".footer") as HTMLElement;


    const blackLineMovimento =
      window.innerHeight * 0.6 - box.getBoundingClientRect().top;

      const graus = blackLineMovimento/50;

    if(graus > 0 && graus <= 17.76){
      box.style.transform = `skewY(${graus}deg)`;

      const radians = graus * (Math.PI/180)
      const x = Math.tan(radians) * (window.innerWidth) / 2;

      roxo.style.paddingTop = x+"px";
      roxo.style.marginTop = -x+"px";
      roxo.style.transition = `0.2s linear all`;
      customersContent.style.marginBottom = -x+"px";
      customersContent.style.paddingBottom = x+"px";
      customersContent.style.transition = `0.2s linear all`;
      teste4.style.top = -(x + 50)+"px";
      teste4.style.height = (x + 20)+"px";
      teste4.style.width = (window.innerWidth/2)+"px";
      teste4.style.transition = `0.2s linear all`;
      const padding = +getComputedStyle(contentstyled).getPropertyValue('margin-right')
      .replace('px', '')
      const paddingfooter = +getComputedStyle(footer).getPropertyValue('padding-right')
      .replace('px', '')
      const soma = padding + paddingfooter;
      teste4.style.right = `-${soma}px`
      box.style.paddingTop = x+"px";
      box.style.marginTop = -x+"px";

    
  }
  requestAnimationFrame(teste3);
}

  React.useEffect(() => {
    requestAnimationFrame(teste)
    requestAnimationFrame(teste3)
  },[]);

  return (
    <>
    <OurCustomersStyled id="customers" className="customers">
    </OurCustomersStyled>
    <div style={{position: "relative", overflow: "hidden"}}>
      <SpinningIconStyled className="spinner">
          <img src={Spinner} alt="L2 Code" />
      </SpinningIconStyled>
    </div>
    <div style={{

    }}>

        <Teste2 className='teste2' >
        <Teste5 className="teste5"></Teste5>

          <BlackLineStyled className="customersContent">
            <ContentStyled>
              <HeaderStyled className="hgroup">
                <TitleStyled>ALGUNS DE NOSSOS CLIENTES</TitleStyled>
                <SubtitleStyled>
                  Temos orgulho de fazer parceria com empresas e startups com
                  fome de inovação.
                </SubtitleStyled>
              </HeaderStyled>
              <AsideStyled>
                <ParagraphStyled>&lt;30+ CLIENTES&gt;</ParagraphStyled>
              </AsideStyled>
            </ContentStyled>

            <CustomersContainer className="customersList">
              <CustomersList customers={customers} />
            </CustomersContainer>
          </BlackLineStyled>
        </Teste2>
      
      </div>
      <DiagonalBox className="testebox">
          <Contentteste>
            <OutSourcing />
          </Contentteste>
      </DiagonalBox>

      
      {/* <BlackBg className="black"> */}

        {/* <SignContainerStyled className="signCustomers">
          <OutSourcing />
        </SignContainerStyled> */}
      {/* </BlackBg> */}
      
    </>
  );
};

export default OurCustomers;
