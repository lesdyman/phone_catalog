import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

export const Footer: React.FC = () => (
  <footer className="footer">
    <NavLink to="/" className="footer__logo__link">
      <img src="/img/logo.png" alt="logo" className="footer__logo" />
    </NavLink>
    <div className="footer__container">
      <NavLink className="footer__link footer__item" to="https://github.com/fe-apr24-team2">
        Github
      </NavLink>
      <NavLink className="footer__link footer__item" to="/">
        Contacts
      </NavLink>
      <NavLink className="footer__link footer__item" to="/">
        Rights
      </NavLink>
    </div>
    <div className="back-to-top">
      <p className="footer__item">Back to top</p>
      <a className="back-to-top__link" href="#/">
        <img
          src="/img/slider-button.png"
          alt="slider-button"
          className="back-to-top__logo"
        />
      </a>
    </div>
  </footer>
);
