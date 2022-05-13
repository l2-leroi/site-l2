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
//translation
import { useTranslations } from 'next-intl'

const OurCustomers = () => {
   //translation
   const t= useTranslations('customers');
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

  return (
    <>
    <OurCustomersStyled id="customers">
        <SpinningIconStyled className='spinner'>
          <img src={Spinner} alt="L2 Code" />
        </SpinningIconStyled>

        <LineAnimation classe="blackLine" backgroundColor={colors.black}>

          <BlackLineStyled>
            <ContentStyled>
              <HeaderStyled>
                <TitleStyled>{t('someCustomers')}</TitleStyled>
                <SubtitleStyled>
                {t('weArePround')}
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
          
        </LineAnimation>

      <SignContainerStyled>
          <SignStyled className='sign'>
          </SignStyled>
      </SignContainerStyled>
      
    </OurCustomersStyled>
    <BlackBg />
    </>
  );
};

export default OurCustomers;
