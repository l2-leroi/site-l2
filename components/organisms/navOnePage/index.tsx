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

export default function NavOnePage() {

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

  useEffect(()=> {
    handleWhite();
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
