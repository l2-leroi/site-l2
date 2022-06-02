import {
  OurCustomersStyled,
  HeaderStyled,
  SubtitleStyled,
  TitleStyled,
  ContentStyled,
  BlackLineStyled,
  AsideStyled,
  ParagraphStyled,
  CustomersContainer,
} from './styled';

import CustomersList from '../../molecules/CustomersList/index';
import React, { useEffect, useRef } from 'react';

const OurCustomers = ({setSpaceForSpinner}) => {
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
  const hgroup = useRef();

  const catchHeight = () => {
    const hgroupElement = hgroup.current as HTMLElement;
    return hgroupElement.getBoundingClientRect().height;
  }

  useEffect(() => {
    setSpaceForSpinner(catchHeight());
  }, []);

  return (
    <>
      <OurCustomersStyled id="customers" className="customers">
          <BlackLineStyled className="customersContent">
            <ContentStyled>
              <HeaderStyled className="hgroup" ref={hgroup}>
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
      </OurCustomersStyled>
    </>
  );
};
export default OurCustomers;