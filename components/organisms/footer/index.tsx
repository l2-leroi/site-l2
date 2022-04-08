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
  IconStyled,
  ImageStyled,
  ContainerStyled,
  DivStyled,
} from './styled';
import { HeartIcon } from '../../../assets/icons/heartIcon';
import ContactList from '../../molecules/ContactList/index'
import React from 'react';

const Footer = () => {
  const contacts = [
    { title: "nosso whatsapp", contact: "+55 51 99693.9336", link: "tel:+5551996939336" },
    { title: "nosso e-mail", contact: "contato@l2code.com.br", link: "mailto:contato@l2code.com.br" },
    { title: "entre no time", contact: "talentos@l2code.com.br", link: "mailto:talentos@l2code.com.br" }
  ];

  return (
    <FooterStyled>
      <ContainerStyled>
        <ContentStyled>
          <DivStyled>
            <TitleStyled>VAMOS CONVERSAR</TitleStyled>
            <AsideStyled>
              <ParagraphStyled>&lt;AND DANCE&gt;</ParagraphStyled>
            </AsideStyled>
          </DivStyled>
          <ContactList contacts={contacts} />
        </ContentStyled>

        <CopyrightStyled>
          <InfoStyled>
            <PhraseStyled>Abraçamos os talentos do mundo</PhraseStyled>
            <PhraseStyled>Somos uma empresa que trabalha 100% remoto</PhraseStyled>
          </InfoStyled>

          <InfoStyled className="desktop">
            <LinkStyled href="/">
              <ImageStyled src="./images/Logo-Small.svg" alt="L2 Code" />
            </LinkStyled>
          </InfoStyled>

          <InfoStyled className="align-end">
            <PhraseStyled>Feito com <IconStyled> <HeartIcon/> </IconStyled> L2code</PhraseStyled>
            <PhraseStyled>Copyright © Todos os direitos reservados</PhraseStyled>
          </InfoStyled>
        </CopyrightStyled>

        <InfoStyled className="mobile">
            <LinkStyled href="/">
              <ImageStyled src="./images/Logo-Small.svg" alt="L2 Code" />
            </LinkStyled>
          </InfoStyled>
      </ContainerStyled>
    </FooterStyled>
  );
};

export default Footer;
