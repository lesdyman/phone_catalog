import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

export const Footer: React.FC = () => (
  <footer className="footer">
    <a href="/home" className="footer__logo-link">
      <img src="/img/logo.png" alt="logo" className="footer__logo" />
    </a>
    <div className="footer__links">
      <NavLink
        className="footer__link footer__item"
        to="https://github.com/fe-apr24-team2"
      >
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
      <span className="footer__item back-to-top__text">Back to top</span>
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
