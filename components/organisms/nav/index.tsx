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
// import L2Logo from './images/L2Code-Logo.png';
// import MenuIcon from '../../../assets/images/Menu-Icon.svg';
import React, { useEffect, useState } from 'react';

export default function Nav() {

  return (
    <>
      <NavStyled className="nav">
        <NavContentStyled className="navList">
          <NavItemStyled>
            <ImageStyled src="./images/L2Code-Logo.png" alt="L2 Code" />
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
