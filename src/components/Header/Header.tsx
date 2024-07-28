import { NavLink } from 'react-router-dom';
import './index.scss';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__left">
          <a href="home" className="header__logo">
            <img src="/src/components/Header/img/logo.svg" alt="Nice Gadgets logo" />
          </a>
          <nav>
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/phones"
                  className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                >
                  Phones
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/tablets"
                  className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                >
                  Tablets
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/accessories"
                  className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                >
                  Accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__right">
          <div className="icons">
            <a href="heart" className="icon icon--heart" aria-label="Heart" />
            <a href="cart" className="icon icon--cart" aria-label="Cart" />
          </div>
        </div>

        <div className="burger-menu">
          <img src="./src/components/Header/img/menu.svg" alt="Menu" />
        </div>
      </div>
    </header>
  );
};
