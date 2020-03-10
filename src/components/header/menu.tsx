import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useAuth0 } from '../../react-auth0-spa';

const Menu: React.FC = () => {

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    })
  };

  const {
    isAuthenticated,
    loginWithRedirect,
    logout } = useAuth0();
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
        {!isAuthenticated && (
          <a  className="profileMenuPoint" onClick={loginWithRedirect}>Bejelentkezés</a>
        )}
        {isAuthenticated && (
          <a className="profileMenuPoint" >Profil</a>
        )}
        {isAuthenticated && (
          <div id="profilMenuLayer">
            <Link to="/profile">Profilom</Link>
            <a onClick={logout}>Kijelentkezés</a>
          </div>
        )}
      </li>
    </ul>
  )
}

export default Menu;
