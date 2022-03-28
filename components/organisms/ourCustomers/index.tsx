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

import Enfeite from '../../../assets/images/OurCustomers/enfeite-giratorio.svg';

import CustomersList from '../../molecules/CustomersList/index';

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

  return (
    <OurCustomersStyled>
      <SpinningIconStyled>
        <Image src={Enfeite} alt="L2 Code" />
      </SpinningIconStyled>
      <BlackLineStyled>
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
