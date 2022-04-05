import React from 'react';
import {
  Container,
  DivLogo,
  DivLine,
  DivMenu,
  TextMenu,
  DivText,
  DivTextMenu,
  DivContact,
  DivLanguage,
  ParagraphLanguage,
  ParagraphOne,
  ParagraphTwo,
} from './styles';
import Image from 'next/image';
import logo from '../../../assets/images/logoMenu.svg';
import x from '../../../assets/images/closeMenu.svg';
import Scroll from '../../molecules/Scroll';

export default function Menu() {
  const items = [
    { title: 'Home', link: 'https://www.google.com.br/' },
    { title: 'Cases', link: 'https://www.google.com.br/' },
    { title: 'Serviços', link: 'https://www.google.com.br/' },
    { title: 'Contato', link: 'https://www.google.com.br/' },
  ];

  return (
    <Container>
      <DivLogo>
        <Image src={logo} alt="L2" />

        <DivContact>
          <ParagraphOne>entre no time</ParagraphOne>
          <DivLine></DivLine>
          <ParagraphTwo>talentos@lecode.com.br</ParagraphTwo>
        </DivContact>
      </DivLogo>

      <Scroll items={items} />

      <DivMenu>
        <DivTextMenu>
          <Image src={x} alt="X" />

          <DivText>
            <TextMenu>ME</TextMenu>
            <TextMenu>NU</TextMenu>
          </DivText>
        </DivTextMenu>
        <DivLanguage>
          <ParagraphLanguage>PT</ParagraphLanguage>
          <ParagraphLanguage>EN</ParagraphLanguage>
        </DivLanguage>
        <DivContact>
          <ParagraphOne>nosso whatsapp</ParagraphOne>
          <DivLine></DivLine>
          <ParagraphTwo>+55 51 99693.9336</ParagraphTwo>
        </DivContact>
      </DivMenu>
    </Container>
  );
}
