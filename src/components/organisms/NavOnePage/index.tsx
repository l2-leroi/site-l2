import React, { useEffect } from 'react';
import Link from 'next/link';
import i18next from 'i18next';
import {
  NavStyled,
  NavContentStyled,
  NavItemStyled,
  NavLinkListStyled,
  ImageStyled,
} from './styled';
import { Typography } from '../../../styles/typography';

export default function NavOnePage() {
  const { t } = i18next;

  const handleWhite = () => {
    const observer = new MutationObserver(handleMutation);

    const observerTarget = document.querySelector('.nav');
    observer.observe(observerTarget, { attributes: true });
  };

  const handleMutation = (mutation) => {
    if (mutation[0].target.classList.contains('white')) {
      document
        .querySelector('.navImage')
        .setAttribute('src', '/images/L2Code-Logo-White.svg');
    } else {
      document
        .querySelector('.navImage')
        .setAttribute('src', '/images/L2Code-Logo.svg');
    }
  };

  let lastScrollTop = 0;

  const handleScroll = () => {
    const bannerText = document.querySelector('.bannerText') as HTMLElement;
    const bannerTextTop = bannerText?.getBoundingClientRect().top;

    const nav = document.querySelector('.nav');

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

  useEffect(() => {
    handleWhite();
    addEventListener('scroll', handleScroll);
    document.querySelector('html').style.scrollBehavior = 'smooth';
  }, []);

  return (
    <NavStyled className="nav anime">
      <NavContentStyled className="navList">
        <NavItemStyled>
          <Link href="/">
            <ImageStyled
              className="navImage"
              src="/images/L2Code-Logo.svg"
              alt="L2 Code"
            />
          </Link>
        </NavItemStyled>

        <NavItemStyled>
          <NavLinkListStyled>
            <Typography
              className="typography"
              tag="li"
              size="xxsmall"
              fontWeight="weight2"
              letterSpacing="space1"
            >
              <Link href="#services">{t('nav.services')}</Link>
            </Typography>

            <Typography
              className="typography"
              tag="li"
              size="xxsmall"
              fontWeight="weight2"
              letterSpacing="space1"
            >
              <Link href="#cases">{t('nav.cases')}</Link>
            </Typography>

            <Typography
              className="typography"
              tag="li"
              size="xxsmall"
              fontWeight="weight2"
              letterSpacing="space1"
            >
              <Link href="#customers">{t('nav.clients')}</Link>
            </Typography>

            <Typography
              className="typography"
              tag="li"
              size="xxsmall"
              fontWeight="weight2"
              letterSpacing="space1"
            >
              <Link href="#contact">{t('nav.contact')}</Link>
            </Typography>
          </NavLinkListStyled>
        </NavItemStyled>

        <NavItemStyled>
          <Typography
            className="typography"
            tag="li"
            size="xxsmall"
            fontWeight="weight2"
            letterSpacing="space1"
          >
            contato@l2code.com.br
          </Typography>
        </NavItemStyled>
      </NavContentStyled>
    </NavStyled>
  );
}
