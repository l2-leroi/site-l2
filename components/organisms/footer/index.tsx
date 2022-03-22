import {
  FooterStyled,
  ContentStyled,
  AsideStyled,
  ParagraphStyled,
  TitleStyled,
  CopyrightStyled,
  InfoStyled,
  LinkStyled,
  PhraseStyled,
} from './styled';
import Image from 'next/image';
import logo from '../../../assets/images/Logo-Small.svg';
import { HeartIcon } from '../../../assets/icons/heartIcon';
import ContactList from '../../molecules/ContactList/index'

const Footer = () => {
  const contacts = [
    { title: "nosso whatsapp", contact: "+55 51 99693.9336", link: "tel:+5551996939336" },
    { title: "nosso e-mail", contact: "contato@l2code.com.br", link: "mailto:contato@l2code.com.br" },
    { title: "entre no time", contact: "talentos@l2code.com.br", link: "mailto:talentos@l2code.com.br" }
  ];

  return (
    <FooterStyled>
      <ContentStyled>
        <AsideStyled>
          <ParagraphStyled>&lt;AND DANCE&gt;</ParagraphStyled>
        </AsideStyled>
        <TitleStyled>VAMOS CONVERSAR</TitleStyled>
        <ContactList contacts={contacts} />
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
          <PhraseStyled>Feito com <HeartIcon /> L2code</PhraseStyled>
          <PhraseStyled>Copyright © Todos os direitos reservados</PhraseStyled>
        </InfoStyled>
      </CopyrightStyled>
    </FooterStyled>
  );
};

export default Footer;
