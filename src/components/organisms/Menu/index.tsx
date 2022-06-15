import React, { useEffect, useRef } from "react";
import i18next from "i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import Scroll from "../../molecules/Scroll";
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
  MenuStyled,
  ButtonCloseStyled,
  ImageStyled,
} from "./styled";
import { Typography } from "../../../styles/typography";

export interface MenuProps {
  openMenu: boolean;
  closeMenu: () => void;
}

function Menu({ openMenu, closeMenu }: MenuProps) {
  const { t } = i18next;
  const router = useRouter();
  const previousPage = useRef("");

  useEffect(() => {
    openMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = null);
  }, [openMenu]);

  useEffect(() => {
    const currentUrl = router.asPath;
    previousPage.current = currentUrl.substring(3);
  }, [router.asPath]);

  return (
    <MenuStyled style={{ display: openMenu ? "block" : "none" }}>
      <ContainerStyled>
        <DivLogoStyled>
          <ImageStyled src="/images/L2Code-Logo-White.svg" alt="L2 Code" />
          <DivContactStyled className="first">
            <Typography
              tag="p"
              size="xxsmall"
              letterSpacing="space1"
              color="gray"
            >
              {t("menu.bePart")}
            </Typography>
            <DivLineStyled />
            <Typography
              tag="p"
              size="xxsmall"
              fontWeight="weight2"
              color="gray"
            >
              talentos@l2code.com.br
            </Typography>
          </DivContactStyled>
        </DivLogoStyled>

        <Scroll closeMenu={closeMenu} />

        <DivMenuStyled>
          <DivTextMenuStyled>
            <ButtonCloseStyled onClick={() => closeMenu()}>
              <ImageStyled src="/images/closeMenu.svg" />
              <DivTextStyled>
                <TextMenuStyled>ME</TextMenuStyled>
                <TextMenuStyled>NU</TextMenuStyled>
              </DivTextStyled>
            </ButtonCloseStyled>
          </DivTextMenuStyled>

          <DivLanguageStyled>
            <Typography
              tag="p"
              size="xxsmall"
              letterSpacing="space1"
              color="gray"
            >
              <Link
                href={`/pt${previousPage.current}`}
                locale="pt"
                scroll={false}
              >
                PT
              </Link>
            </Typography>
            <Typography
              tag="p"
              size="xxsmall"
              letterSpacing="space1"
              color="gray"
            >
              <Link
                href={`/en${previousPage.current}`}
                locale="en"
                scroll={false}
              >
                EN
              </Link>
            </Typography>
          </DivLanguageStyled>

          <DivContactStyled className="last">
            <Typography
              tag="p"
              size="xxsmall"
              letterSpacing="space1"
              color="gray"
            >
              {t("menu.ourWhatsapp")}
            </Typography>
            <DivLineStyled />
            <Typography
              tag="p"
              size="xxsmall"
              fontWeight="weight2"
              color="gray"
            >
              +55 51 99693.9336
            </Typography>
          </DivContactStyled>
        </DivMenuStyled>
      </ContainerStyled>
    </MenuStyled>
  );
}

export default Menu;
