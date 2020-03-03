import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Menu: React.FC = () => {

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    })
  };
  return (
    <ul className="menu">
      <li>
        <Link
          scroll={el => scrollWithOffset(el, 120)}
          to="/#introduceContainer"
        >
        Bemutatkozás
        </Link>
      </li>
      <li>
        <Link
          scroll={el => scrollWithOffset(el, 120)}
          to="/#howWorkContainer"
        >
          Hogyan működik?
        </Link>
      </li>
      <li>
        <Link
          scroll={el => scrollWithOffset(el, 120)}
          to="/#functionsContainer"
        >
          Lehetőségek
        </Link>
      </li>
      <li>
        <Link
          scroll={el => scrollWithOffset(el, 120)}
          to="/#reviewsContainer"
        >
          Vélemények
        </Link>
      </li>
      <li>
        <Link
          scroll={el => scrollWithOffset(el, 120)}
          to="/#inputContainer"
        >
          Kapcsolat
        </Link>
      </li>
      <li>
        <Link
          scroll={el => scrollWithOffset(el, 120)}
          to="/#productsContainer"
        >
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
