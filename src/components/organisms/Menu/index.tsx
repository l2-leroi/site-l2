import React from 'react';
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

export interface Props {
  openMenu: boolean;
  closeMenu: (value: boolean) => void;
}

const Menu: React.FC<Props> = ({ openMenu, closeMenu }) => {
  const { t } = i18next
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

        <Scroll />

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
            <ParagraphLanguageStyled>
              <Link href='/pt' locale='pt' scroll={false}>PT</Link>
            </ParagraphLanguageStyled>
            <ParagraphLanguageStyled>
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
