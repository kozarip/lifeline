import React from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header>
      <div className="borderKeeper"></div>
      <div className="wideHomeBox">
        <a className="logo" href="#">
          <img src="#" title="Mesélő képek" />
        </a>
        <ul className="menu">
          <li>
            <Link activeClass="active" to="introduce" spy={true} smooth={true} offset={-150} duration={1500}>
              Bemutatkozás
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="howWork" spy={true} smooth={true} offset={-150} duration={1500}>
              Hogyan működik?
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="functions" spy={true} smooth={true} offset={-150} duration={1500}>
              Lehetőségek
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="reviews" spy={true} smooth={true} offset={-150} duration={1500}>
              Vélemények
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="reviews" spy={true} smooth={true} offset={-150} duration={1500}>
              Kapcsolat
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="prices" spy={true} smooth={true} offset={-150} duration={1500}>
              Áraink
            </Link>
          </li>
          <li><a className="profileMenuPoint" href="profile">Profilom</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
