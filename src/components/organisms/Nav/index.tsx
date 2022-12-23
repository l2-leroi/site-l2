import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  NavStyled,
  NavItemStyled,
  NavButtonStyled,
  DivTextStyled,
  ImageStyled,
  SandwichMenuStyled,
} from './styled';
import Menu from '../Menu/index';
import { Typography } from '../../../styles/typography';

export default function Nav() {
  const [menuClick, setMenuClick] = useState(false);
  const [isWhiteLogo, setIsWhiteLogo] = useState(false);

  const handleWhite = () => {
    const observer = new MutationObserver(handleMutation);

    const observerTarget = document.querySelector('.nav');
    observer.observe(observerTarget, { attributes: true });
  };

  const handleMutation = (mutation) => {
    if (
      mutation[0].target.classList.contains('white') ||
      mutation[0].target.classList.contains('black') ||
      mutation[0].target.classList.contains('transparentBlack')
    ) {
      setIsWhiteLogo(true);
    } else {
      setIsWhiteLogo(false);
    }
  };

  let lastScrollTop = 0;

  const handleScroll = () => {
    const bannerText = document.querySelector('.bannerText') as HTMLElement;
    const bannerTextTop = bannerText?.getBoundingClientRect().top;
    const nav = document.querySelector('.nav');

    const handleScrollHome = () => {
      if (screen.width <= 880) {
        if (bannerTextTop > lastScrollTop) {
          nav.classList.add('smallFixed');
        } else {
          nav.classList.remove('smallFixed');
        }
        lastScrollTop = bannerTextTop;
      } else {
        bannerTextTop < 0
          ? nav.classList.add('smallFixed')
          : nav.classList.remove('smallFixed');
      }
    };

    const handleScrollPages = () => {
      nav.classList.add('smallFixed');
    };

    if (
      nav.classList.contains('black') ||
      nav.classList.contains('transparentBlack')
    ) {
      handleScrollPages();
    } else {
      handleScrollHome();
    }
  };

  useEffect(() => {
    handleWhite();
    addEventListener('scroll', handleScroll);
    document.querySelector('html').style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <Menu openMenu={menuClick} closeMenu={() => setMenuClick(!menuClick)} />
      <NavStyled className="nav anime">
        <NavItemStyled>
          <Link href="/">
            <ImageStyled
              hidden={!isWhiteLogo}
              className="navImage"
              alt="L2 Code"
              src="/images/L2Code-Logo-White.svg"
            />
          </Link>
          <Link href="/">
            <ImageStyled
              hidden={isWhiteLogo}
              className="navImage"
              alt="L2 Code"
              src="/images/L2Code-Logo.svg"
            />
          </Link>
        </NavItemStyled>

        <NavItemStyled>
          <Typography
            tag="p"
            fontWeight="weight2"
            size="xxsmall"
            letterSpacing="space1"
          >
            contato@l2code.com.br
          </Typography>
        </NavItemStyled>

        <NavItemStyled>
          <NavButtonStyled onClick={() => setMenuClick(!menuClick)}>
            <SandwichMenuStyled borderWhite={isWhiteLogo} />
            <DivTextStyled>
              <Typography
                tag="p"
                fontWeight="weight2"
                size="xxsmall"
                letterSpacing="space1"
              >
                ME
              </Typography>
              <Typography
                tag="p"
                fontWeight="weight2"
                size="xxsmall"
                letterSpacing="space1"
              >
                NU
              </Typography>
            </DivTextStyled>
          </NavButtonStyled>
        </NavItemStyled>
      </NavStyled>
    </>
  );
}
