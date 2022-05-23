import {
  OurCustomersStyled,
  HeaderStyled,
  SubtitleStyled,
  TitleStyled,
  ContentStyled,
  SignStyled,
  SpinningIconStyled,
  TopGreyBackgroundStyled,
  BottomPurpleBackgroundStyled,
  BlackLineStyled,
  SignContainerStyled,
  AsideStyled,
  ParagraphStyled,
  CustomersContainer
} from "./styled";

import CustomersList from '../../molecules/CustomersList/index';
import React from 'react';
import i18next from "i18next";
const OurCustomersTemp = () => {
  const {t} = i18next
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

  
  return (
    <OurCustomersStyled id="customers">
      <TopGreyBackgroundStyled />
      <BottomPurpleBackgroundStyled />
      <BlackLineStyled>
        <ContentStyled>
          <HeaderStyled>
            <TitleStyled>{t('customers.someCustomers')}</TitleStyled>
            <SubtitleStyled>
            {t('customers.weAreProud')}
            </SubtitleStyled>
          </HeaderStyled>
          <AsideStyled>
            <ParagraphStyled>&lt;{t('customers.alt.30Customers')}&gt;</ParagraphStyled>
          </AsideStyled>
          
        </ContentStyled>

        <CustomersContainer>
          <CustomersList customers={customers}/>
        </CustomersContainer>
      </BlackLineStyled>
    </OurCustomersStyled>
  );
};

export default OurCustomersTemp;
