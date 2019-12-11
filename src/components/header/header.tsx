import React from 'react';
import { slide as HamburgerMenu } from 'react-burger-menu';
import Scroll from 'smooth-scroll'

import Menu from './menu';

class Header extends React.Component {
  componentDidMount() {
    const scroll = new Scroll('a[href*="#"]');
  }

  menu = ""

  render() {
    return (
      <header>
        <HamburgerMenu className="hamburgerMenu">
          <a className="logo" href="#">
            <img src="#" title="Mesélő képek" />
          </a>
          <Menu />
        </HamburgerMenu>
        <div className="borderKeeper"></div>
        <div className="wideHomeBox">
          <a className="logo" href="#">
            <img src="#" title="Mesélő képek" />
          </a>
          <Menu />
        </div>
      </header>
    );
  }
};

export default Header;
