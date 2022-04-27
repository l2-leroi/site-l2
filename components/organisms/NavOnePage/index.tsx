import {
  NavStyled,
  NavContentStyled,
  NavItemStyled,
  NavLinkListStyled,
  NavLinkStyled,
  NavButtonStyled,
  DivTextStyled,
  TextMenuStyled,
  ImageStyled
} from "./styled";
// import L2Logo from '../../../assets/images/logoNav.svg';
// import MenuIcon from '../../../assets/images/Menu-Icon.svg';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'

export default function NavOnePage() {

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
    
      <NavStyled className="nav">
        <NavContentStyled className="navList">
          <NavItemStyled>
            <ImageStyled className="navImage" src="./images/L2Code-Logo.png" alt="L2 Code" />
          </NavItemStyled>
          
          <NavItemStyled>
            <NavLinkListStyled>
            <Link href="#services">
              <NavLinkStyled>Serviços</NavLinkStyled>
            </Link>
            <Link href="#cases">
                <NavLinkStyled>Cases</NavLinkStyled>
            </Link>
            <Link href="#customers">
                <NavLinkStyled>Clientes</NavLinkStyled>
            </Link>
            <Link href="#contact">
                <NavLinkStyled>Contato</NavLinkStyled>
            </Link>
          </NavLinkListStyled>
            
          </NavItemStyled>
          <NavItemStyled>contato@l2code.com.br</NavItemStyled>
        </NavContentStyled>
      </NavStyled>
    </>
  );
}
