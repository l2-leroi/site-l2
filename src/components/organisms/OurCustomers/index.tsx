import React, { useRef } from 'react';
import i18next from 'i18next';
import {
  OurCustomersStyled,
  HeaderStyled,
  ContentStyled,
  BlackLineStyled,
  AsideStyled,
  CustomersContainer,
  IdSpanStyled,
  AuxDiv,
} from './styled';

import CustomersList from '../../molecules/CustomersList/index';
import { Typography } from '../../../styles/typography';

function OurCustomers() {
  const { t } = i18next;
  const ToParadoLogo = '/images/OurCustomers/to-parado-logo.svg';
  const PhiLogo = '/images/OurCustomers/phi-logo.svg';
  const BancoRCILogo = '/images/OurCustomers/banco-rci-logo.svg';
  const SescLogo = '/images/OurCustomers/sesc-logo.svg';
  const TalentDreamsLogo = '/images/OurCustomers/talent-dreams-logo.svg';
  const AnotaAiLogo = '/images/OurCustomers/anotai-logo.svg';
  const MemoriesUpLogo = '/images/OurCustomers/memories-up-logo.svg';
  const NoVerdeLogo = '/images/OurCustomers/no-verde-logo.svg';
  const DigitalBusinessLogo = '/images/OurCustomers/digital-business-logo.svg';
  const FundacredLogo = '/images/OurCustomers/fundacred-logo.svg';
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
  const blackLine = useRef();

  return (
    <OurCustomersStyled className="customers">
      <IdSpanStyled id="customers" />
      <BlackLineStyled className="customersContent" ref={blackLine}>
        <ContentStyled>
          <HeaderStyled className="hgroup" ref={hgroup}>
            <Typography
              color="gray"
              tag="h2"
              size="medium"
              fontFamily="font1"
              lineHeight="line90"
              fontWeight="weight3"
            >
              {t('clients.someClients')}
            </Typography>

            <Typography color="gray" tag="p">
              {t('clients.weAreProud')}
            </Typography>
          </HeaderStyled>

          <AsideStyled>
            <Typography
              color="gray"
              tag="p"
              size="xxsmall"
              letterSpacing="space1"
            >
              &lt;{t('clients.alt.30Clients')}&gt;
            </Typography>
          </AsideStyled>
          <AuxDiv />
        </ContentStyled>
        <CustomersContainer className="customersList">
          <CustomersList customers={customers} />
        </CustomersContainer>
      </BlackLineStyled>
    </OurCustomersStyled>
  );
}
export default OurCustomers;
