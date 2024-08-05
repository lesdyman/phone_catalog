// BurgerMenu.jsx
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './BurgerMenu.scss';
import logo from '../img/logo.svg';
import menu from '../img/menu.svg';
import closeMenu from '../img/Close.svg';
import heartLike from '../img/heartLike.svg';
import cart from '../img/cart.svg';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className={`burger-menu ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="burger-menu__icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={menu} alt="Menu" />
      </button>
      {isOpen && (
        <div className="burger-menu__content">
          <div className="burger-menu__header">
            <img
              src={logo}
              alt="Nice Gadgets logo"
              className="burger-menu__logo"
            />
            <a
              href="#/"
              className="burger-menu__close"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={closeMenu} alt="Close" />
            </a>
          </div>
          <ul className="burger-menu__list">
            <li className="burger-menu__item">
              <NavLink
                to="/"
                className={({ isActive }) => `burger-menu__link ${isActive ? 'is-active' : ''}`}
              >
                Home
              </NavLink>
            </li>
            <li className="burger-menu__item">
              <NavLink
                to="/phones"
                className={({ isActive }) => `burger-menu__link ${isActive ? 'is-active' : ''}`}
              >
                Phones
              </NavLink>
            </li>
            <li className="burger-menu__item">
              <NavLink
                to="/tablets"
                className={({ isActive }) => `burger-menu__link ${isActive ? 'is-active' : ''}`}
              >
                Tablets
              </NavLink>
            </li>
            <li className="burger-menu__item">
              <NavLink
                to="/accessories"
                className={({ isActive }) => `burger-menu__link ${isActive ? 'is-active' : ''}`}
              >
                Accessories
              </NavLink>
            </li>
          </ul>
          <div className="burger-menu__footer">
              to="/favorites"
              className={({ isActive }) => `burger-menu__icon-footer ${isActive ? 'is-active' : ''}`}
              aria-label="Heart"
            >
              <img src={heartLike} alt="Heart" />
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) => `burger-menu__icon-footer ${isActive ? 'is-active' : ''}`}
              aria-label="Cart"
            >
              <img src={cart} alt="Cart" />
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
