import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  NavStyled,
  NavItemStyled,
  NavButtonStyled,
  DivTextStyled,
  ImageStyled,
  SandwichMenuStyled,
} from "./styled";
import Menu from "../Menu/index";
import { Typography } from "../../../styles/typography";

export default function Nav() {
  const [MenuClick, setClick] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleWhite = () => {
    const observer = new MutationObserver(handleMutation);

    const observerTarget = document.querySelector(".nav");
    observer.observe(observerTarget, { attributes: true });
  };

  const handleMutation = (mutation) => {
    if (mutation[0].target.classList.contains("white")) {
      document
        .querySelector(".navImage")
        .setAttribute("src", "/images/L2Code-Logo-White.svg");
      setIsAnimating(true);
    } else {
      document
        .querySelector(".navImage")
        .setAttribute("src", "/images/L2Code-Logo.svg");
      setIsAnimating(false);
    }
  };

  let lastScrollTop = 0;

  const handleScroll = () => {
    const bannerText = document.querySelector(".bannerText") as HTMLElement;
    const bannerTextTop = bannerText.getBoundingClientRect().top;
    const nav = document.querySelector(".nav");

    if (screen.width <= 880) {
      if (bannerTextTop > lastScrollTop) {
        nav.classList.add("smallFixed");
      } else {
        nav.classList.remove("smallFixed");
      }
      lastScrollTop = bannerTextTop;
    } else {
      bannerTextTop < 0
        ? nav.classList.add("smallFixed")
        : nav.classList.remove("smallFixed");
    }
  };

  useEffect(() => {
    handleWhite();
    addEventListener("scroll", handleScroll);
    document.querySelector("html").style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Menu openMenu={MenuClick} closeMenu={() => setClick(!MenuClick)} />
      <NavStyled className="nav anime">
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
          <NavButtonStyled onClick={() => setClick(true)}>
            <SandwichMenuStyled borderWhite={isAnimating} />
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
