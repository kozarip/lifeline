import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { slide as Menu } from 'react-burger-menu';
import Scroll from 'smooth-scroll'

class Header extends React.Component {
  componentDidMount() {
    const scroll = new Scroll('a[href*="#"]');
  }

  render() {
    return (
      <header>
        <Menu className="hamburgerMenu">
          <a className="logo" href="#">
            <img src="#" title="Mesélő képek" />
          </a>
          <ul className="menu">
            <li>
              <Link to="/#introduceContainer">
                Bemutatkozás
              </Link>
            </li>
            <li>
              <Link to="./#howWorkContainer">
                Hogyan működik?
              </Link>
            </li>
            <li>
              <Link to="./#functionsContainer">
                Lehetőségek
              </Link>
            </li>
            <li>
              <Link to="./#reviewsContainer">
                Vélemények
              </Link>
            </li>
            <li>
              <Link to="./#contactContainer">
                Kapcsolat
              </Link>
            </li>
            <li>
              <Link to="./#productsContainer">
                Áraink
              </Link>
            </li>
            <li>
              <a className="profileMenuPoint" href="profile">
                Profilom
              </a>
            </li>
          </ul>
        </Menu>
        <div className="borderKeeper"></div>
        <div className="wideHomeBox">
          <a className="logo" href="#">
            <img src="#" title="Mesélő képek" />
          </a>

          <ul className="menu">
            <li>
              <Link to="/#introduceContainer">
                Bemutatkozás
              </Link>
            </li>
            <li>
              <Link to="./#howWorkContainer">
                Hogyan működik?
              </Link>
            </li>
            <li>
              <Link to="./#functionsContainer">
                Lehetőségek
              </Link>
            </li>
            <li>
              <Link to="./#reviewsContainer">
                Vélemények
              </Link>
            </li>
            <li>
              <Link to="./#contactContainer">
                Kapcsolat
              </Link>
            </li>
            <li>
              <Link to="./#productsContainer">
                Áraink
              </Link>
            </li>
            <li>
              <a className="profileMenuPoint" href="profile">
                Profilom
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
};

export default Header;
