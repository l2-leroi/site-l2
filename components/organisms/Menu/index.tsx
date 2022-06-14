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
  Teste,
  ButtonClose,
} from "./styled";
// import logo from '../../../assets/images/logoMenu.svg';
// import x from '../../../assets/images/closeMenu.svg';
import Scroll from '../../molecules/Scroll';



export interface Props {
  openMenu: boolean;
  closeMenu: (value: boolean) => void;
}

const Menu: React.FC<Props> = ({ openMenu, closeMenu }) => {
  return (
    <Teste style={{ display: openMenu ? 'block' : 'none' }}>
      <Container>
        <DivLogo>
          {/* <Image src={logo} alt="L2" /> */}
  
          <DivContact>
            <ParagraphOne>entre no time</ParagraphOne>
            <DivLine></DivLine>
            <ParagraphTwo>talentos@lecode.com.br</ParagraphTwo>
          </DivContact>
        </DivLogo>

        <Scroll />

        <DivMenu>
          <DivTextMenu>
            <ButtonClose onClick={() => closeMenu(false)}>
              {/* <Image src={x} alt="X" /> */}
            </ButtonClose>
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
    </Teste>
  );
};

export default Menu;
