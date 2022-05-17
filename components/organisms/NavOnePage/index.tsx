import {
  NavStyled,
  NavContentStyled,
  NavItemStyled,
  NavLinkListStyled,
  NavLinkStyled,
  ImageStyled
} from "./styled";
import React, { useEffect } from 'react';
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function NavOnePage() {
  const t= useTranslations('nav');
  const handleWhite = () =>{
    const observer = new MutationObserver(handleMutation);

    const observerTarget = document.querySelector('.nav')
    observer.observe(observerTarget,{attributes: true})
  }

  const handleMutation = (mutation) => {
    if(mutation[0].target.classList.contains('white')){
      document.querySelector(".navImage").setAttribute('src', "./images/L2Code-Logo-White.svg")
    }
    else{
      document.querySelector(".navImage").setAttribute('src', "./images/L2Code-Logo.svg");
    }
  }

  let lastScrollTop = 0;

  const handleScroll = () => {
    const bannerText = document.querySelector(".bannerText") as HTMLElement;
    const bannerTextTop = bannerText.getBoundingClientRect().top;

    const nav = document.querySelector('.nav')

    if( screen.width <= 880 ) {
      if (bannerTextTop > lastScrollTop){
        nav.classList.add("smallFixed");
      }
      else{
        nav.classList.remove("smallFixed");
      }
      lastScrollTop = bannerTextTop;
    }
    else{
      bannerTextTop < 0? 
      nav.classList.add("smallFixed") :
      nav.classList.remove("smallFixed");
    }
  }


  useEffect(()=> {
    handleWhite();
    addEventListener("scroll", handleScroll);
    document.querySelector('html').style.scrollBehavior = "smooth";
  }, [])

  

  return (
    <>
    
      <NavStyled className="nav anime">
        <NavContentStyled className="navList">
          <NavItemStyled>
            <ImageStyled className="navImage" src="./images/L2Code-Logo.svg" alt="L2 Code" />
          </NavItemStyled>
          
          <NavItemStyled>
            <NavLinkListStyled>
            <Link href="#services">
              <NavLinkStyled>{t('navServices')}</NavLinkStyled>
            </Link>
            <Link href="#cases">
                <NavLinkStyled>{t('navCases')}</NavLinkStyled>
            </Link>
            <Link href="#customers">
                <NavLinkStyled>{t('navCustomers')}</NavLinkStyled>
            </Link>
            <Link href="#contact">
                <NavLinkStyled>{t('navContact')}</NavLinkStyled>
            </Link>
          </NavLinkListStyled>
            
          </NavItemStyled>
          <NavItemStyled>contato@l2code.com.br</NavItemStyled>
        </NavContentStyled>
      </NavStyled>
    </>
  );
}
