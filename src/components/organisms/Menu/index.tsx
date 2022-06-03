import React, { useEffect, useState } from 'react';
import {
  ContainerStyled,
  DivLogoStyled,
  DivLineStyled,
  DivMenuStyled,
  TextMenuStyled,
  DivTextStyled,
  DivTextMenuStyled,
  DivContactStyled,
  DivLanguageStyled,
  ParagraphLanguageStyled,
  ParagraphOneStyled,
  ParagraphTwoStyled,
  MenuStyled,
  ButtonCloseStyled,
  ImageStyled,
} from "./styled";
import Scroll from '../../molecules/Scroll';
import i18next from 'i18next';
import Link from 'next/link';

export interface MenuProps {
  openMenu: boolean;
  closeMenu: (value: boolean) => void;
}

const Menu = ({ openMenu, closeMenu }: MenuProps) => {
  const { t } = i18next;
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const urlLanguage = window.location.pathname;

    if(urlLanguage == '/en') {
      setLanguage('en');
    }
    else { 
      setLanguage('pt');
    }
  }, [])

  useEffect(() => {
    openMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = null;
  }, [openMenu])

  return (
    <MenuStyled style={{ display: openMenu ? 'block' : 'none' }}>
      <ContainerStyled>
        <DivLogoStyled>
          <ImageStyled src="./images/L2Code-Logo-White.svg" alt="L2 Code" />
          <DivContactStyled>
            <ParagraphOneStyled>{t('menu.bePart')}</ParagraphOneStyled>
            <DivLineStyled></DivLineStyled>
            <ParagraphTwoStyled>talentos@l2code.com.br</ParagraphTwoStyled>
          </DivContactStyled>
        </DivLogoStyled>

        <Scroll language={language} />

        <DivMenuStyled>
          <DivTextMenuStyled>
            <ButtonCloseStyled onClick={() => closeMenu(false)}>
              <ImageStyled src="./images/closeMenu.svg"></ImageStyled>
              <DivTextStyled>
                <TextMenuStyled>ME</TextMenuStyled>
                <TextMenuStyled>NU</TextMenuStyled>
              </DivTextStyled>
            </ButtonCloseStyled>
          </DivTextMenuStyled>

          <DivLanguageStyled>
            <ParagraphLanguageStyled onClick={() => setLanguage('pt')}>
              <Link href='/pt' locale='pt' scroll={false}>PT</Link>
            </ParagraphLanguageStyled>
            <ParagraphLanguageStyled onClick={() => setLanguage('en')}>
              <Link href='/en' locale='en' scroll={false}>EN</Link>
            </ParagraphLanguageStyled>
          </DivLanguageStyled>

          <DivContactStyled className="last">
            <ParagraphOneStyled>{t('menu.ourWhatsapp')}</ParagraphOneStyled>
            <DivLineStyled></DivLineStyled>
            <ParagraphTwoStyled>+55 51 99693.9336</ParagraphTwoStyled>
          </DivContactStyled>
        </DivMenuStyled>
      </ContainerStyled>
    </MenuStyled>
  );
};

export default Menu;
