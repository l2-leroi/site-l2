import { 
  FooterStyled, 
  ContentStyled, 
  AsideStyled, 
  ParagraphStyled, 
  TitleStyled, 
  ContactStyled, 
  SubtitleStyled, 
  ContactInfoStyled, 
  CopyrightStyled,
  InfoStyled,
  LinkStyled,
  PhraseStyled,
} from './styled';
import Image from 'next/image';
import logo from '../../../assets/images/Logo-Small.svg';
import heart from '../../../assets/images/Vector.svg';

const Footer = () => {
  return (
    <FooterStyled>
      <ContentStyled>
        <AsideStyled>
          <ParagraphStyled>&lt;AND DANCE&gt;</ParagraphStyled>
        </AsideStyled>

        <TitleStyled>VAMOS CONVERSAR</TitleStyled>

        <ContactStyled>
          <SubtitleStyled>nosso whatsapp</SubtitleStyled>
          <ContactInfoStyled href="tel: +5551996939336">+55 51 99693.9336</ContactInfoStyled>
        </ContactStyled>

        <ContactStyled>
          <SubtitleStyled>nosso e-mail</SubtitleStyled>
          <ContactInfoStyled href="mailto: contato@l2code.com.br">contato@l2code.com.br</ContactInfoStyled>
        </ContactStyled>

        <ContactStyled>
          <SubtitleStyled>entre no time</SubtitleStyled>
          <ContactInfoStyled href="mailto: talentos@l2code.com.br">talentos@l2code.com.br</ContactInfoStyled>
        </ContactStyled>
      </ContentStyled>
      
      <CopyrightStyled>
        <InfoStyled>
          <PhraseStyled>Abraçamos os talentos do mundo</PhraseStyled>
          <PhraseStyled>Somos uma empresa que trabalha 100% remoto</PhraseStyled>
        </InfoStyled>

        <InfoStyled>
          <LinkStyled href="/">
            <Image src={logo} alt="L2 Code" />
          </LinkStyled>
        </InfoStyled>
        
        <InfoStyled>
          <PhraseStyled>Feito com <Image src={heart} alt="Coração" /> L2code</PhraseStyled>
          <PhraseStyled>Copyright © Todos os direitos reservados</PhraseStyled>
        </InfoStyled>
      </CopyrightStyled>
    </FooterStyled>
  );
};

export default Footer;
