import { NavLink, HashRouter as Router } from 'react-router-dom';
import './index.scss';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__left">
          <a href="home" className="header__logo">
            <img
              src="./src/page/header/logo.svg"
              alt="Nice Gadgets logo"
            />
          </a>

          <Router>
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
            {/* <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/phones" element={<PhonesPage />} />
                <Route path="/tablets" element={<TabletsPage />} />
                <Route path="/accessories" element={<AccessoriesPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes> */}
          </Router>
        </div>

        <div className="header__right">
          <div className="icons">
            <a href="hear₴t" className="icon icon--heart" />

            <a href="cart" className="icon icon--cart" />
          </div>
        </div>

        <div className="burger-menu">
          <img src="./src/page/header/menu.svg" alt="Menu" />
        </div>
      </div>
    </header>
  );
};
