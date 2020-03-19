import React from 'react';
import { slide as HamburgerMenu } from 'react-burger-menu';

import Menu from './menu';
import Logo from './logo';

const Header: React.FC = () => {
  return (
    <header id="header">
      <HamburgerMenu className="hamburgerMenu">
        <Logo />
        <Menu />
      </HamburgerMenu>
      <div className="borderKeeper"></div>
      <div className="wideHomeBox">
        <Logo />
        <Menu />
      </div>
      <div id="secretPreview"></div>
    </header>
  );
};

export default Header;
