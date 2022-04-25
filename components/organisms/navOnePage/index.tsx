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
} from './styles';
// import L2Logo from '../../../assets/images/logoNav.svg';
// import MenuIcon from '../../../assets/images/Menu-Icon.svg';
import React, { useEffect, useState } from 'react';

export default function Nav() {

  const handleWhite = () =>{
    const observer = new MutationObserver(handleMutation);

    const observerTarget = document.querySelector('.nav')
    observer.observe(observerTarget,{attributes: true})
  }

  const handleMutation = (mutation) => {
    if(mutation[0].target.classList.contains('white')){
      document.querySelector(".navImage").setAttribute('src', "./images/L2Code-Logo-White.png")
    }
    else{
      document.querySelector(".navImage").setAttribute('src', "./images/L2Code-Logo.png");
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
                <NavLinkStyled>Serviços</NavLinkStyled>
                <NavLinkStyled>Cases</NavLinkStyled>
                <NavLinkStyled>Clientes</NavLinkStyled>
                <NavLinkStyled>Contato</NavLinkStyled>
            </NavLinkListStyled>
            
          </NavItemStyled>
          <NavItemStyled>contato@l2code.com.br</NavItemStyled>
        </NavContentStyled>
      </NavStyled>
    </>
  );
}
