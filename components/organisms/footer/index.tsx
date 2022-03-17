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
  PhraseStyled,
  ImageStyled
} from './styled';
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
          <ContactInfoStyled>+55 51 99693.9336</ContactInfoStyled>
        </ContactStyled>

        <ContactStyled>
          <SubtitleStyled>nosso e-mail</SubtitleStyled>
          <ContactInfoStyled>contato@l2code.com.br</ContactInfoStyled>
        </ContactStyled>

        <ContactStyled>
          <SubtitleStyled>entre no time</SubtitleStyled>
          <ContactInfoStyled>talentos@l2code.com.br</ContactInfoStyled>
        </ContactStyled>
      </ContentStyled>
      
      <CopyrightStyled>
        <InfoStyled>
          <PhraseStyled>Abraçamos os talentos do mundo</PhraseStyled>
          <PhraseStyled>Somos uma empresa que trabalha 100% remoto</PhraseStyled>
        </InfoStyled>

        <InfoStyled>
          <ImageStyled src={logo} alt="L2 Code" />
        </InfoStyled>
        
        <InfoStyled>
          <PhraseStyled>Feito com <ImageStyled src={heart} alt="Coração" /> L2code</PhraseStyled>
          <PhraseStyled>Copyright © Todos os direitos reservados</PhraseStyled>
        </InfoStyled>
      </CopyrightStyled>
    </FooterStyled>
  );
};

export default Footer;
