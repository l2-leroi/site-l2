import React from 'react';
import {
  Container,
  DivLogo,
  DivLine,
  DivScroll,
  DivMenu,
  TextMenu,
  DivText,
  DivTextMenu,
  DivContact,
  DivLanguage,
  ParagraphLanguage,
  ParagraphOne,
  ParagraphTwo,
  ElementScroll,
} from './styles';
import Image from 'next/image';
import logo from '../../../assets/images/logoMenu.svg';
import x from '../../../assets/images/closeMenu.svg';

export default function Menu() {
    const element = document.getElementById('home')
    element.innerText = "< Home >"
    element.style.color = "#20BD9D"
  return (
      
    <Container>
      <DivLogo>
        <Image src={logo} alt="L2"/>

        <DivContact>
          <ParagraphOne>entre no time</ParagraphOne>
          <DivLine></DivLine>
          <ParagraphTwo>talentos@lecode.com.br</ParagraphTwo>
        </DivContact>
      </DivLogo>

      <DivScroll>
        <ElementScroll id="home">Home</ElementScroll>
        <ElementScroll>Sobre</ElementScroll>
        <ElementScroll>Cases</ElementScroll>
        <ElementScroll>Serviços</ElementScroll>
        <ElementScroll>Pessoas</ElementScroll>
        <ElementScroll>Carreira</ElementScroll>
        <ElementScroll>Contato</ElementScroll>

        
      </DivScroll>

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
