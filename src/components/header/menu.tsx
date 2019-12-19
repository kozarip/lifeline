import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Menu: React.FC = () => {
  return (
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
  )
}

export default Menu;
