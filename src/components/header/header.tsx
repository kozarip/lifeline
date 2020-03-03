import React from 'react';
import { slide as HamburgerMenu } from 'react-burger-menu';
import Scroll from 'smooth-scroll'

import Menu from './menu';
import Logo from './logo';

class Header extends React.Component {
  componentDidMount() {
    const scroll = new Scroll('a[href*="#"]');
  }

  render() {
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
  }
};

export default Header;
