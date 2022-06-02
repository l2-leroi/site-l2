import {
  NavStyled,
  NavContentStyled,
  NavItemStyled,
  NavButtonStyled,
  DivTextStyled,
  TextMenuStyled,
  ImageStyled,
  SandwichMenuStyled,
} from "./styled";
import React, { useEffect, useState } from 'react';
import Menu from "../Menu/index";
import Link from "next/link";

export default function Nav() {
  const [MenuClick, setClick] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleWhite = () =>{
    const observer = new MutationObserver(handleMutation);

    const observerTarget = document.querySelector('.nav')
    observer.observe(observerTarget,{attributes: true})
  }

  const handleMutation = (mutation) => {
    if(mutation[0].target.classList.contains('white')){
      document.querySelector(".navImage").setAttribute('src', "./images/L2Code-Logo-White.svg")
      setIsAnimating(true);
    }
    else{
      document.querySelector(".navImage").setAttribute('src', "./images/L2Code-Logo.svg");
      setIsAnimating(false);
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
      <Menu openMenu={MenuClick} closeMenu={() => setClick(!MenuClick)} />
      <NavStyled className="nav anime">
        <NavContentStyled className="navList">
          
          <NavItemStyled>
            <Link href="/">
              <ImageStyled className="navImage" src="./images/L2Code-Logo.svg" alt="L2 Code" />
            </Link>
          </NavItemStyled>

          <NavItemStyled>contato@l2code.com.br</NavItemStyled>

          <NavItemStyled>
            <NavButtonStyled onClick={() => setClick(true)}>
              <SandwichMenuStyled borderWhite={isAnimating}></SandwichMenuStyled>
              <DivTextStyled>
                <TextMenuStyled>ME</TextMenuStyled>
                <TextMenuStyled>NU</TextMenuStyled>
              </DivTextStyled>
            </NavButtonStyled>
          </NavItemStyled>

        </NavContentStyled>
      </NavStyled>
    </>
  );
}