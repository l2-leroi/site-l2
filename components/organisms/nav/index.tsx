import {
  NavStyled,
  NavContent,
  NavItem,
  NavButton,
  DivText,
  TextMenu,
  ImageStyled,
} from './styles';
import L2Logo from '../../../assets/images/logoNav.svg';
import MenuIcon from '../../../assets/images/Menu-Icon.svg';
import React, { useState } from 'react';
import Menu from '../menu';

export default function Nav() {
  const [MenuClick, setClick] = useState(false);
  return (
    <>
      <Menu openMenu={MenuClick} closeMenu={() => setClick(!MenuClick)} />
      <NavStyled style={{ display: MenuClick ? 'none' : 'block' }}>
        <NavContent>
          <NavItem>
            <ImageStyled src={L2Logo} alt="L2 Code" />
          </NavItem>
          <NavItem>contato@l2code.com.br</NavItem>
          <NavItem>
            <NavButton onClick={() => setClick(true)}>
              <ImageStyled src={MenuIcon} alt="L2 Code" />
              <DivText>
                <TextMenu>ME</TextMenu>
                <TextMenu>NU</TextMenu>
              </DivText>
            </NavButton>
          </NavItem>
        </NavContent>
      </NavStyled>
    </>
  );
}
